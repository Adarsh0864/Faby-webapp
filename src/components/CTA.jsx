/**
 * CTA Section — A full-width call-to-action banner
 * encouraging users to learn more about FABY.
 */

export default function CTA() {
  const handleExplore = () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cta"
      className="cta-section section-padding"
      aria-labelledby="cta-heading"
    >
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          {/* Icon */}
          <div style={{
            width: 72, height: 72, borderRadius: 20,
            background: 'rgba(0,105,113,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
            border: '1px solid rgba(0,105,113,0.4)',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 36, color: 'var(--color-secondary-fixed-dim)' }}>
              favorite
            </span>
          </div>

          <h2 id="cta-heading" className="text-headline-xl" style={{ color: 'white', marginBottom: 16 }}>
            Ready to Start Your Child's Health Journey?
          </h2>
          <p style={{
            fontSize: 18, color: 'var(--color-on-primary-container)',
            maxWidth: 560, margin: '0 auto 40px',
            lineHeight: 1.7,
          }}>
            Explore our innovative tools and peer-reviewed research designed
            to give your child the best start in life. Join 10,000+ families
            already on FABY.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-lg"
              style={{ background: 'var(--color-secondary)', color: 'white', boxShadow: '0 4px 24px rgba(0,105,113,0.4)' }}
              onClick={handleExplore}
              id="cta-explore-btn"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>science</span>
              Explore Research & Innovation
            </button>
            <button
              className="btn btn-outline-white btn-lg"
              onClick={handleContact}
              id="cta-contact-btn"
            >
              Get in Touch
            </button>
          </div>

          {/* Trust row */}
          <div style={{
            display: 'flex', gap: 32, justifyContent: 'center',
            flexWrap: 'wrap', marginTop: 48,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {[
              { icon: 'verified', label: 'WHO Guidelines' },
              { icon: 'shield', label: 'HIPAA Compliant' },
              { icon: 'lock', label: 'End-to-End Encrypted' },
              { icon: 'groups', label: '10K+ Families' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--color-secondary-fixed-dim)' }}>
                  {item.icon}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-on-primary-container)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
