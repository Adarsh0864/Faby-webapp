/**
 * Contact Section — A two-column layout with contact form
 * and contact information cards.
 */
import { useState } from 'react';

const contactInfo = [
  {
    icon: 'mail',
    label: 'Email Us',
    value: 'hello@faby.health',
    href: 'mailto:hello@faby.health',
  },
  {
    icon: 'location_on',
    label: 'Headquarters',
    value: 'San Francisco, CA & Mumbai, India',
    href: '#',
  },
  {
    icon: 'schedule',
    label: 'Support Hours',
    value: '24/7 for critical health queries',
    href: '#',
  },
  {
    icon: 'article',
    label: 'Research Inquiries',
    value: 'research@faby.health',
    href: 'mailto:research@faby.health',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--color-surface-container-low)' }}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>connect_without_contact</span>
            Get in Touch
          </span>
          <h2 id="contact-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Let's Start a Conversation
          </h2>
          <p className="text-body-lg text-muted">
            Whether you're a parent, pediatrician, researcher, or potential partner —
            we'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          
          {/* Left — Contact Info */}
          <div className="contact-info-panel reveal-left">
            <h3 className="text-headline-sm text-primary" style={{ marginBottom: 24 }}>
              Ways to Connect
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 20px',
                    background: 'var(--color-surface-container-lowest)',
                    border: '1px solid var(--color-surface-variant)',
                    borderRadius: 'var(--radius-xl)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,105,113,0.3)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-surface-variant)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'linear-gradient(135deg, var(--color-secondary-container), var(--color-tertiary-fixed))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-secondary)' }}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 3 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--color-on-surface-variant)', marginLeft: 'auto' }}>
                    arrow_forward
                  </span>
                </a>
              ))}
            </div>

            {/* Partnership CTA */}
            <div style={{
              background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-primary) 100%)',
              borderRadius: 'var(--radius-2xl)',
              padding: '32px 28px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -20, right: -20,
                width: 120, height: 120,
                borderRadius: '50%',
                background: 'rgba(0,105,113,0.3)',
                pointerEvents: 'none',
              }} />
              <h4 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 8, position: 'relative', zIndex: 1 }}>
                Partner with FABY
              </h4>
              <p style={{ fontSize: 13, color: 'var(--color-on-primary-container)', marginBottom: 20, lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                We partner with hospitals, clinics, governments, and NGOs to bring FABY to underserved communities.
              </p>
              <a
                href="mailto:partnerships@faby.health"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: 'var(--color-secondary)',
                  color: 'white', borderRadius: 100,
                  padding: '10px 20px', fontSize: 13, fontWeight: 700,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  textDecoration: 'none', position: 'relative', zIndex: 1,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>handshake</span>
                Explore Partnership
              </a>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="contact-form-panel reveal-right">
            {submitted ? (
              <div style={{
                height: '100%', minHeight: 480,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: 'var(--color-surface-container-lowest)',
                border: '1px solid var(--color-surface-variant)',
                borderRadius: 'var(--radius-2xl)',
                padding: 48, textAlign: 'center',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-secondary-container), var(--color-tertiary-fixed))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 36, color: 'var(--color-secondary)' }}>
                    check_circle
                  </span>
                </div>
                <h3 className="text-headline-md text-primary" style={{ marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p className="text-body-md text-muted">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: 24 }}
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', role: '', message: '' }); }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--color-surface-container-lowest)',
                  border: '1px solid var(--color-surface-variant)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: '40px 36px',
                  boxShadow: 'var(--shadow-sm)',
                }}
                aria-label="Contact form"
                noValidate
              >
                <h3 className="text-headline-sm text-primary" style={{ marginBottom: 28 }}>
                  Send Us a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label htmlFor="role" className="form-label">I am a...</label>
                  <select
                    id="role"
                    name="role"
                    className="form-input"
                    value={formData.role}
                    onChange={handleChange}
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="">Select your role</option>
                    <option value="parent">Parent / Caregiver</option>
                    <option value="pediatrician">Pediatrician / Doctor</option>
                    <option value="researcher">Researcher</option>
                    <option value="healthcare_org">Healthcare Organization</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 28 }}>
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell us how we can help you, or share your thoughts on FABY..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ resize: 'vertical', minHeight: 140 }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', position: 'relative' }}
                  disabled={loading}
                  id="contact-submit-btn"
                >
                  {loading ? (
                    <>
                      <span className="material-symbols-outlined" style={{ fontSize: 18, animation: 'spin 1s linear infinite' }}>
                        progress_activity
                      </span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                      Send Message
                    </>
                  )}
                </button>

                <p style={{ fontSize: 12, color: 'var(--color-on-surface-variant)', marginTop: 16, textAlign: 'center' }}>
                  By submitting, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 480px) {
          .contact-form-panel form {
            padding: 28px 20px !important;
          }
          .contact-form-panel form > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
