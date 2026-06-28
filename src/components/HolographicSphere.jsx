import React, { useMemo, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import './HolographicSphere.css';

/* ── Animated glowing core ── */
function GlowCore() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const s = 1 + 0.08 * Math.sin(clock.elapsedTime * 1.8);
      meshRef.current.scale.setScalar(s);
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.35, 16, 16]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.9} />
    </mesh>
  );
}

/* ── Animated outer glow ring ── */
function GlowRing({ radius, color, rotX = 0, rotZ = 0 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.12;
    }
  });
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    return g;
  }, [points]);

  return (
    <lineLoop ref={ref} geometry={geo} rotation={[rotX, 0, rotZ]}>
      <lineBasicMaterial color={color} transparent opacity={0.25} linewidth={1} />
    </lineLoop>
  );
}

/* ── Small decorative dots scattered on sphere surface ── */
function SphereDots({ count = 60, radius = 7 }) {
  const positions = useMemo(() => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return pts;
  }, [count, radius]);

  return (
    <>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.045, 6, 6]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? '#06B6D4' : i % 3 === 1 ? '#3b82f6' : '#8B5CF6'}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </>
  );
}

/* ── Main outer sphere wireframe (rotating slowly) ── */
function RotatingSphere() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.06;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[7, 24, 24]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.07} />
      </mesh>
      {/* Inner subtle sphere */}
      <mesh>
        <sphereGeometry args={[5.5, 16, 16]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

export default function HolographicSphere({ certificates }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const items = useMemo(() => {
    const R = 7;
    const N = certificates.length;
    return certificates.map((cert, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        data: cert,
        pos: [
          R * Math.cos(theta) * Math.sin(phi),
          R * Math.sin(theta) * Math.sin(phi),
          R * Math.cos(phi),
        ],
      };
    });
  }, [certificates]);

  return (
    <div className="holo-container">
      {/* Corner Blobs */}
      <div className="holo-blob holo-blob-top-left" />
      <div className="holo-blob holo-blob-bottom-left" />
      <div className="holo-blob holo-blob-top-right" />
      <div className="holo-blob holo-blob-bottom-right" />



      {selectedCert ? (
        /* ─── Detail View ─── */
        <div className="holo-detail-view">
          <button className="holo-back-btn" onClick={() => setSelectedCert(null)}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            BACK TO SPHERE
          </button>

          <div className="holo-detail-grid">
            <div className="holo-detail-title-col">
              <div className="holo-detail-issuer-badge">{selectedCert.issuer}</div>
              <h3 className="holo-detail-title">{selectedCert.title}</h3>
              {selectedCert.date && (
                <p className="holo-detail-date">Issued {selectedCert.date}</p>
              )}
            </div>

            <div className="holo-detail-center-col">
              <div className="holo-detail-circle">
                <img src={selectedCert.image} alt={selectedCert.title} draggable={false} />
              </div>
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holo-detail-arrow-btn"
                  title="Verify Certificate"
                >
                  <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              )}
            </div>

            <div className="holo-detail-info-col">
              <p className="holo-detail-meta-text">
                <span className="holo-detail-meta-highlight">{selectedCert.issuer.toUpperCase()}</span>
                {' • '}
                {selectedCert.subtitle || 'Verified Credential'}
                {selectedCert.date ? ` · Received ${selectedCert.date}` : ''}
              </p>
              <div className="holo-detail-verified-badge">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Credential Verified
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ─── 3D Sphere Canvas ─── */
        <Canvas camera={{ position: [0, 0, 16], fov: 55 }} dpr={[1, 2]}>
          <ambientLight intensity={1.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#06B6D4" />

          <group>
            <RotatingSphere />
            <GlowCore />
            <SphereDots count={80} radius={7} />

            {/* Orbit rings at different angles */}
            <GlowRing radius={7.2} color="#3b82f6" rotX={Math.PI / 2} />
            <GlowRing radius={7.2} color="#06B6D4" rotX={Math.PI / 6} rotZ={Math.PI / 4} />
            <GlowRing radius={7.2} color="#8B5CF6" rotX={-Math.PI / 4} rotZ={Math.PI / 6} />

            {/* Certificate nodes */}
            {items.map((node, idx) => (
              <group key={idx} position={node.pos}>
                <Html distanceFactor={11} center sprite>
                  <div
                    className={`holo-node-wrap ${hoveredIdx === idx ? 'holo-node-hovered' : ''}`}
                    onClick={() => setSelectedCert(node.data)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className="holo-node-ring" />
                    <div className="holo-node-circle">
                      <img src={node.data.image} alt={node.data.title} draggable={false} />
                    </div>
                    <div className="holo-node-label">{node.data.issuer || node.data.title}</div>
                  </div>
                </Html>
              </group>
            ))}
          </group>

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={8}
            maxDistance={22}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      )}
    </div>
  );
}
