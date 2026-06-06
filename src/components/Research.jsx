/**
 * Research & Motivation Section — Presents the scientific foundation
 * behind FABY with research statistics and citation cards.
 */

const researchPoints = [
  {
    icon: 'science',
    title: 'Evidence-Based Foundation',
    description:
      'Built on 150+ peer-reviewed studies from leading pediatric institutions including WHO, AAP, and UNICEF. Every recommendation is backed by clinical evidence.',
    stat: '150+',
    statLabel: 'Research Studies',
    color: 'var(--color-secondary-container)',
    iconColor: 'var(--color-secondary)',
  },
  {
    icon: 'child_care',
    title: 'Early Intervention Impact',
    description:
      'Research shows that early identification of developmental delays can improve outcomes by up to 80%. FABY\'s milestone tracking is designed around this critical window.',
    stat: '80%',
    statLabel: 'Better Outcomes',
    color: 'var(--color-tertiary-fixed)',
    iconColor: 'var(--color-on-tertiary-fixed)',
  },
  {
    icon: 'vaccines',
    title: 'Vaccination Coverage',
    description:
      'Studies demonstrate that digital reminder systems improve vaccination completion rates by 34%. FABY\'s smart scheduling system is directly informed by this research.',
    stat: '34%',
    statLabel: 'Improved Coverage',
    color: 'var(--color-error-container)',
    iconColor: 'var(--color-error)',
  },
  {
    icon: 'psychology',
    title: 'Parental Confidence',
    description:
      'Clinical trials show that access to verified pediatric information reduces parental anxiety by 62% and improves decision-making confidence significantly.',
    stat: '62%',
    statLabel: 'Reduced Anxiety',
    color: 'var(--color-primary-fixed)',
    iconColor: 'var(--color-primary-container)',
  },
];

const publications = [
  {
    journal: 'Pediatrics Journal',
    title: 'Digital Health Interventions in Early Childhood Development',
    year: '2023',
    doi: '#',
  },
  {
    journal: 'WHO Bulletin',
    title: 'Mobile Health Tools for Immunization Program Strengthening',
    year: '2022',
    doi: '#',
  },
  {
    journal: 'The Lancet',
    title: 'Parent-Facing Technology & Infant Nutrition Outcomes',
    year: '2023',
    doi: '#',
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="section-padding"
      style={{ background: 'var(--color-background)' }}
      aria-labelledby="research-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>biotech</span>
            Research & Motivation
          </span>
          <h2 id="research-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Science at the Heart of FABY
          </h2>
          <p className="text-body-lg text-muted">
            FABY is not just an app — it is a research-driven platform built on
            decades of pediatric science, clinical studies, and real-world validation.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="research-cards-grid" style={{ marginBottom: 64 }}>
          {researchPoints.map((point, i) => (
            <div
              key={point.title}
              className="research-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top: Icon + Stat */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                <div
                  className="icon-container icon-container-md"
                  style={{ background: point.color, borderRadius: 12 }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: point.iconColor }}>
                    {point.icon}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: 28, fontWeight: 800,
                    color: point.iconColor,
                    fontFamily: 'var(--font-family-display)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}>
                    {point.stat}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--color-on-surface-variant)', fontWeight: 500 }}>
                    {point.statLabel}
                  </div>
                </div>
              </div>

              <h3 className="text-headline-sm text-primary" style={{ marginBottom: 10 }}>
                {point.title}
              </h3>
              <p className="text-body-sm text-muted" style={{ lineHeight: 1.65 }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Research Image + Publications */}
        <div className="research-bottom reveal">
          <div className="research-image-panel">
            <img
              src="/research-lab.png"
              alt="Medical researchers working with health data in a modern laboratory — representing FABY's research foundation"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(3,22,49,0.7) 0%, transparent 60%)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 40,
            }}>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                Research-Driven
              </div>
              <div style={{ color: 'white', fontSize: 28, fontWeight: 800, fontFamily: 'var(--font-family-display)', lineHeight: 1.2, maxWidth: 280 }}>
                Clinical science meets digital health
              </div>
            </div>
          </div>

          <div className="research-publications">
            <h3 className="text-headline-md text-primary" style={{ marginBottom: 24 }}>
              Key Publications & References
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {publications.map((pub, i) => (
                <a
                  key={i}
                  href={pub.doi}
                  style={{
                    display: 'block',
                    padding: '20px 24px',
                    border: '1px solid var(--color-surface-variant)',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--color-surface-container-lowest)',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,105,113,0.3)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-surface-variant)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label={`Read publication: ${pub.title}`}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
                      color: 'var(--color-secondary)', textTransform: 'uppercase',
                    }}>
                      {pub.journal}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--color-on-surface-variant)', fontWeight: 500 }}>
                      {pub.year}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.4 }}>
                    {pub.title}
                  </p>
                </a>
              ))}
            </div>

            <div style={{
              marginTop: 24,
              padding: '20px 24px',
              background: 'linear-gradient(135deg, rgba(0,105,113,0.08), rgba(185, 236, 238, 0.15))',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(0,105,113,0.15)',
            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--color-secondary)', flexShrink: 0, marginTop: 2 }}>
                  info
                </span>
                <p style={{ fontSize: 13, color: 'var(--color-on-surface-variant)', lineHeight: 1.6 }}>
                  All content in FABY is reviewed by a panel of board-certified pediatricians
                  and is updated quarterly based on the latest clinical evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .research-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .research-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        .research-image-panel {
          border-radius: var(--radius-2xl);
          overflow: hidden;
          height: 380px;
          position: relative;
          box-shadow: var(--shadow-xl);
        }

        .research-publications {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 900px) {
          .research-cards-grid { grid-template-columns: 1fr; }
          .research-bottom { grid-template-columns: 1fr; }
          .research-image-panel { height: 280px; }
        }

        @media (max-width: 600px) {
          .research-cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
