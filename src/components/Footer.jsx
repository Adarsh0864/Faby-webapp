/**
 * Footer Component — Multi-column footer with navigation links,
 * social media, and legal information.
 */

const footerLinks = {
  Platform: [
    { label: 'Features', href: '#features' },
    { label: 'Growth Tracking', href: '#features' },
    { label: 'Vaccination Reminders', href: '#features' },
    { label: 'Nutrition Planning', href: '#features' },
    { label: 'Community', href: '#features' },
  ],
  Research: [
    { label: 'Research Overview', href: '#research' },
    { label: 'Clinical Studies', href: '#research' },
    { label: 'Publications', href: '#research' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Impact', href: '#impact' },
  ],
  Company: [
    { label: 'About FABY', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Advisory Board', href: '#team' },
    { label: 'Careers', href: '#' },
    { label: 'Partner With Us', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Research Ethics', href: '#' },
    { label: 'Accessibility', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { icon: 'alternate_email', label: 'Twitter / X', href: '#' },
  { icon: 'linked_camera', label: 'LinkedIn', href: '#' },
  { icon: 'photo_camera', label: 'Instagram', href: '#' },
  { icon: 'play_circle', label: 'YouTube', href: '#' },
];

export default function Footer() {
  const handleNavClick = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" aria-label="Site footer">
      
      {/* Main Footer Content */}
      <div className="container" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--color-secondary) 0%, #004f55 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 800, fontSize: 14,
                fontFamily: 'var(--font-family-display)',
              }}>
                F
              </div>
              <span style={{
                fontFamily: 'var(--font-family-display)',
                fontWeight: 800, fontSize: 22, color: 'white',
                letterSpacing: '-0.02em',
              }}>
                FABY
              </span>
            </div>

            <p style={{ fontSize: 14, color: 'var(--color-on-primary-container)', lineHeight: 1.7, marginBottom: 24, maxWidth: 260 }}>
              Family & Baby Integrated Mobile Health Platform — empowering parents with evidence-based care tools.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-on-primary-container)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-secondary)';
                    e.currentTarget.style.borderColor = 'var(--color-secondary)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.color = 'var(--color-on-primary-container)';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { icon: 'verified', label: 'WHO Aligned Guidelines' },
                { icon: 'security', label: 'HIPAA Compliant' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--color-secondary-fixed-dim)' }}>
                    {item.icon}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--color-on-primary-container)', fontWeight: 500 }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: 12, fontWeight: 700,
                color: 'white',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="container"
          style={{
            paddingTop: 24, paddingBottom: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontSize: 13, color: 'var(--color-on-primary-container)' }}>
            © {new Date().getFullYear()} FABY Healthcare Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Sitemap', 'Accessibility', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 13,
                  color: 'var(--color-on-primary-container)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-on-primary-container)'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 48px;
        }

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
