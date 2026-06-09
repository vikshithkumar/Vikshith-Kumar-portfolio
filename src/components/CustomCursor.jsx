import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    // Ring follows with smooth lag
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    // Scale ring on hover over clickable elements
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '48px';
        ringRef.current.style.height = '48px';
        ringRef.current.style.opacity = '0.6';
        ringRef.current.style.borderColor = 'var(--accent)';
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = '0';
      }
    };

    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '28px';
        ringRef.current.style.height = '28px';
        ringRef.current.style.opacity = '0.4';
        ringRef.current.style.borderColor = 'var(--accent)';
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', onMove);

    // Attach hover listeners to all interactive elements
    const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          background: 'var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          marginLeft: '-3px',
          marginTop: '-3px',
          transition: 'opacity 0.2s ease',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '28px',
          height: '28px',
          border: '1.5px solid var(--accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          marginLeft: '-14px',
          marginTop: '-14px',
          opacity: 0.4,
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.25s ease, border-color 0.25s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
