/**
 * Hero Section — The primary landing section with headline,
 * description, CTAs, floating badge stats, and the hero family photo.
 */
export default function Hero() {
  const handleLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreResearch = () => {
    document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="hero-section"
      aria-label="FABY — Hero introduction"
    >
      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid">
          
          {/* Left — Text Content */}
          <div className="hero-content reveal-left">
            {/* Eyebrow Badge */}
            <div style={{ marginBottom: 24 }}>
              <span className="badge badge-primary">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  pediatrics
                </span>
                AI-Powered Child Healthcare Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display-xl" style={{ color: 'var(--color-primary)', marginBottom: 24, maxWidth: 560 }}>
              Empowering Parents,{' '}
              <span className="text-gradient">Nurturing Healthy</span> Futures
            </h1>

            {/* Description */}
            <p
              className="text-body-lg text-muted"
              style={{ marginBottom: 36, maxWidth: 480, lineHeight: 1.75 }}
            >
              FABY provides reliable medical guidance, developmental tracking,
              and a supportive community for new parents — bringing clinical
              research to your family's daily routine.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleLearnMore}
                id="hero-cta-primary"
                aria-label="Learn more about FABY"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  arrow_forward
                </span>
                Learn More
              </button>
              <button
                className="btn btn-outline btn-lg"
                onClick={handleExploreResearch}
                id="hero-cta-secondary"
                aria-label="Explore FABY research"
              >
                Explore Research
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="hero-trust-row">
              {[
                { icon: 'verified', label: 'WHO Aligned' },
                { icon: 'science', label: 'Research-Backed' },
                { icon: 'health_and_safety', label: 'Clinically Reviewed' },
              ].map((item) => (
                <div key={item.label} className="trust-item">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18, color: 'var(--color-secondary)' }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontSize: 13, fontWeight: 600,
                      color: 'var(--color-on-surface-variant)',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Image */}
          <div className="hero-image-area reveal-right">
            <div className="hero-image-wrapper" style={{ height: '100%', minHeight: 460 }}>
              <img
                src="/hero-family.png"
                alt="Happy young family with baby in a bright nursery — representing FABY's mission of nurturing healthy futures"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  display: 'block',
                }}
                loading="eager"
              />

              {/* Floating Badge — Families Helped */}
              <div
                className="hero-floating-badge"
                style={{ top: 24, left: -16 }}
                aria-hidden="true"
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'linear-gradient(135deg, var(--color-secondary-container), var(--color-tertiary-fixed))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-secondary)' }}>
                    family_restroom
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, fontFamily: 'var(--font-family-display)' }}>
                    10K+
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-on-surface-variant)', fontWeight: 500, marginTop: 2 }}>
                    Families Helped
                  </div>
                </div>
              </div>

              {/* Floating Badge — WHO Compliant */}
              <div
                className="hero-floating-badge"
                style={{ bottom: 32, right: -16, animationDelay: '2s' }}
                aria-hidden="true"
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'linear-gradient(135deg, var(--color-error-container), #ffe8e6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-error)' }}>
                    vaccines
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1, fontFamily: 'var(--font-family-display)' }}>
                    WHO
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-on-surface-variant)', fontWeight: 500, marginTop: 2 }}>
                    Vaccine Aligned
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 80px 0;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-image-area {
          position: relative;
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 40px;
        }

        .hero-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid var(--color-surface-variant);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 60px 0;
          }
          .hero-image-area {
            order: -1;
          }
          .hero-image-wrapper {
            min-height: 340px !important;
          }
          .hero-floating-badge:first-of-type {
            left: 8px !important;
            top: 12px !important;
          }
          .hero-floating-badge:last-of-type {
            right: 8px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column;
          }
          .hero-trust-row {
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
