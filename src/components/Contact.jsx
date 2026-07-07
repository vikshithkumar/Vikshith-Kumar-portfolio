import React, { useState } from 'react';

const WEB3FORMS_KEY = 'a7b19e8f-f266-40a0-ba0e-2b718ab80e97';

const contactInfo = [
  {
    id: 'email',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'vikshitkumar40781@gmail.com',
    href: 'mailto:vikshitkumar40781@gmail.com',
  },
  {
    id: 'location',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
  {
    id: 'github',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: 'GitHub',
    value: 'vikshithkumar',
    href: 'https://github.com/vikshithkumar',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    id: 'linkedin',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Vikshith Kumar S',
    href: 'https://www.linkedin.com/in/vikshithkumar',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact Form - ${formData.name}`,
          from_name: 'Vikshith Kumar Portfolio',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSenderName(formData.name); // capture name before reset
        setSenderEmail(formData.email); // capture email before reset
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 relative" style={{ background: 'var(--surface)' }}>
      {/* Glow */}
      <div
        className="absolute top-1/4 right-[-5%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'var(--accent)', opacity: 'calc(var(--glow-intensity) * 0.4)', filter: 'blur(120px)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Let's build something{' '}
            <span className="text-gradient">together</span>
          </h2>
          <p className="max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
            Got a project, an internship, or just want to chat about code or design?
            My inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
          {/* Left: contact info */}
          <div className="space-y-6">
            {contactInfo.map(info => {
              const CardTag = info.href ? 'a' : 'div';
              const isHovered = hoveredCard === info.id;
              const cardProps = info.href
                ? {
                  href: info.href,
                  target: info.target,
                  rel: info.rel,
                }
                : {};

              return (
                <CardTag
                  key={info.id}
                  {...cardProps}
                  className="glass-card p-6 flex items-start gap-5 group transition-all duration-200 hover:-translate-y-0.5"
                  style={{ borderRadius: 'var(--radius)' }}
                  onMouseEnter={() => setHoveredCard(info.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'var(--accent-muted)', color: 'var(--accent)' }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-1" style={{ color: 'var(--text-muted)' }}>{info.label}</p>
                    <p
                      className="text-sm font-medium transition-colors duration-200"
                      style={{ color: isHovered && info.href ? 'var(--accent)' : 'var(--text-primary)' }}
                    >
                      {info.value}
                    </p>
                  </div>
                </CardTag>
              );
            })}
          </div>

          {/* Right: form OR success card */}
          {status === 'success' ? (
            /* ── Success Card ── */
            <div
              className="glass-card p-8 flex flex-col items-center justify-center text-center gap-5"
              style={{ borderRadius: 'var(--radius)', minHeight: '420px' }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(34,197,94,0.12)', border: '2px solid rgba(34,197,94,0.35)', boxShadow: '0 0 30px rgba(34,197,94,0.15)' }}
              >
                <svg className="w-10 h-10" fill="none" stroke="#4ade80" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message Sent! 🎉
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {senderName ? `Thanks, ${senderName}! ` : 'Thanks! '}
                  I'll reply to you at{' '}
                  <span style={{ color: 'var(--accent)' }}>{senderEmail}</span>{' '}
                  as soon as possible.
                </p>
              </div>
              <button
                onClick={() => { setStatus('idle'); setSenderName(''); setSenderEmail(''); }}
                className="btn-ghost text-sm px-5 py-2.5"
                style={{ borderRadius: 'calc(var(--radius) * 0.6)' }}
              >
                ← Send another message
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" style={{ borderRadius: 'var(--radius)' }}>
              <div>
                <label htmlFor="name" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                  className="form-input" placeholder="Rahul Sharma" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                  className="form-input" placeholder="rahul@example.com" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                  rows={5} className="form-input resize-none" placeholder="What are you working on?" required />
              </div>

              {status === 'error' && (
                <div className="px-4 py-3 rounded-xl text-sm"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171' }}>
                  {errorMsg}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center"
                style={{ opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}>
                {status === 'sending' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
