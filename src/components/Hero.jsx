import React, { useEffect, useRef } from 'react';
import { siteStats } from '../siteData';
import Particles from './Particles';

const ROLES = ['Data Engineer', 'Azure Data Engineer', 'PySpark Developer', 'Cloud Data Engineer'];

const Hero = () => {
  const roleRef = useRef(null);

  useEffect(() => {
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout;

    const type = () => {
      const el = roleRef.current;
      if (!el) return;

      const current = ROLES[idx];

      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(type, deleting ? 55 : 90);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Particles
          particleColors={["#ffffff", "hsl(var(--accent-h), var(--accent-s), var(--accent-l))"]}
          particleCount={250}
          particleSpread={6}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles
          disableRotation={false}
        />
      </div>

      {/* Ambient glows */}
      <div
        className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full pointer-events-none"
        style={{ background: 'var(--accent)', opacity: 'var(--glow-intensity)', filter: 'blur(130px)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full pointer-events-none"
        style={{ background: 'hsl(263, 85%, 65%)', opacity: 'calc(var(--glow-intensity) * 0.7)', filter: 'blur(110px)' }}
      />

      <div className="container mx-auto px-6 text-center z-10">

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.08] tracking-tight animate-fade-up"
          style={{ animationDelay: '80ms', color: 'var(--text-primary)' }}
        >
          Vikshith Kumar S
        </h1>

        <div
          className="text-xl md:text-3xl font-semibold mb-8 animate-fade-up flex items-center justify-center gap-2"
          style={{ animationDelay: '160ms', color: 'var(--text-secondary)' }}
        >
          <span ref={roleRef} className="mono" style={{ color: 'var(--text-primary)' }} />
          <span
            className="inline-block w-0.5 h-7 animate-pulse"
            style={{ background: 'var(--accent)' }}
          />
        </div>

        {/* Bio */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '240ms', color: 'var(--text-secondary)' }}
        >
          I build scalable, cloud-native data platforms that transform raw data into trusted insights. My focus is on designing reusable ETL pipelines, modern data warehouses, and reliable analytics systems using Azure Data Factory, Databricks, PySpark, and SQL.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '320ms' }}
        >
          <a href="#projects" className="btn-primary">
            See My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            Get In Touch
          </a>
        </div>

        {/* Quick stats — auto-computed from siteData.js */}
        <div
          className="mt-20 flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          {siteStats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--accent)' }}>
                {stat.value}
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
