import React from 'react';

const THEME_COLORS = {
  blue:    'hsl(217, 91%, 60%)',
  emerald: 'hsl(160, 84%, 39%)',
  violet:  'hsl(263, 85%, 65%)',
  amber:   'hsl(38, 95%, 55%)',
};

const THEME_LABELS = {
  blue:    'Ocean Blue',
  emerald: 'Emerald',
  violet:  'Violet',
  amber:   'Amber',
};

const RADIUS_OPTIONS = [
  { label: 'Sharp', value: 4 },
  { label: 'Rounded', value: 16 },
  { label: 'Fluid', value: 28 },
];

const DesignLab = ({
  open,
  onClose,
  activeTheme,
  setActiveTheme,
  themes,
  radius,
  setRadius,
  gridOpacity,
  setGridOpacity,
  glowIntensity,
  setGlowIntensity,
}) => {
  if (!open) return null;

  const activeRadiusLabel =
    RADIUS_OPTIONS.find(r => r.value === radius)?.label ?? 'Rounded';

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-label="Close Design Lab"
      />

      {/* Panel */}
      <aside
        className="lab-panel fixed right-4 top-20 z-50 w-72 rounded-2xl p-5 space-y-6"
        aria-label="Design Lab controls"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="section-label mb-0.5">Design Lab</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Live-tweak this portfolio's UI
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <hr style={{ borderColor: 'var(--surface-border)' }} />

        {/* Accent Color */}
        <div className="space-y-3">
          <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            Accent Color
          </p>
          <div className="flex gap-3 flex-wrap">
            {Object.keys(themes).map(key => (
              <button
                key={key}
                onClick={() => setActiveTheme(key)}
                className={`lab-swatch ${activeTheme === key ? 'active' : ''}`}
                style={{ background: THEME_COLORS[key] }}
                title={THEME_LABELS[key]}
                aria-label={`Set theme to ${THEME_LABELS[key]}`}
              />
            ))}
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {THEME_LABELS[activeTheme]}
          </p>
        </div>

        {/* Corner Radius */}
        <div className="space-y-3">
          <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            Corner Radius — <span style={{ color: 'var(--accent)' }}>{activeRadiusLabel}</span>
          </p>
          <div className="flex gap-2">
            {RADIUS_OPTIONS.map(opt => (
              <button
                key={opt.label}
                onClick={() => setRadius(opt.value)}
                className="flex-1 py-1.5 text-xs font-medium transition-all"
                style={{
                  background: radius === opt.value ? 'var(--accent-muted)' : 'rgba(255,255,255,0.04)',
                  color: radius === opt.value ? 'var(--accent)' : 'var(--text-muted)',
                  border: `1px solid ${radius === opt.value ? 'var(--accent)' : 'var(--surface-border)'}`,
                  borderRadius: '8px',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Opacity */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span style={{ color: 'var(--text-secondary)' }}>Grid Opacity</span>
            <span className="mono text-xs" style={{ color: 'var(--accent)' }}>
              {Math.round(gridOpacity * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={0.12}
            step={0.01}
            value={gridOpacity}
            onChange={e => setGridOpacity(parseFloat(e.target.value))}
            className="lab-slider"
          />
        </div>

        {/* Glow Intensity */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span style={{ color: 'var(--text-secondary)' }}>Glow Intensity</span>
            <span className="mono text-xs" style={{ color: 'var(--accent)' }}>
              {Math.round(glowIntensity * 100)}%
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={0.4}
            step={0.01}
            value={glowIntensity}
            onChange={e => setGlowIntensity(parseFloat(e.target.value))}
            className="lab-slider"
          />
        </div>

        <hr style={{ borderColor: 'var(--surface-border)' }} />

        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          This panel demonstrates my approach to design systems — centralized tokens, live CSS variables, and zero-dependency theming.
        </p>
      </aside>
    </>
  );
};

export default DesignLab;
