/**
 * Innovation Section — Highlights FABY's cutting-edge technological
 * differentiators, including AI, real-time data, and preventive care.
 */

const innovations = [
  {
    number: '01',
    icon: 'psychology',
    title: 'AI-Powered Personalization',
    description:
      'Machine learning models trained on pediatric datasets adapt every recommendation to your specific child\'s growth trajectory, feeding patterns, and developmental markers.',
    tags: ['Machine Learning', 'Predictive Analytics', 'Personalization'],
  },
  {
    number: '02',
    icon: 'health_and_safety',
    title: 'Preventive Healthcare Model',
    description:
      'FABY shifts from reactive to proactive healthcare. Our risk-scoring engine identifies developmental concerns weeks before they become critical, enabling timely intervention.',
    tags: ['Early Detection', 'Risk Scoring', 'Proactive Care'],
  },
  {
    number: '03',
    icon: 'sync',
    title: 'Real-Time Data Synchronization',
    description:
      'Seamlessly sync health data across multiple caregivers, devices, and healthcare providers. Parents, grandparents, and pediatricians share the same live dashboard.',
    tags: ['Cloud Sync', 'Multi-Device', 'Provider Integration'],
  },
  {
    number: '04',
    icon: 'analytics',
    title: 'Population Health Analytics',
    description:
      'Anonymized aggregate data helps healthcare systems identify regional health trends, vaccine coverage gaps, and nutritional deficiencies at scale.',
    tags: ['Public Health', 'Aggregate Insights', 'Policy Impact'],
  },
  {
    number: '05',
    icon: 'security',
    title: 'Privacy-First Architecture',
    description:
      'End-to-end encryption, on-device processing for sensitive data, granular consent controls, and HIPAA-compliant infrastructure protect every family\'s information.',
    tags: ['HIPAA Compliant', 'E2E Encryption', 'Data Sovereignty'],
  },
];

const techStack = [
  { label: 'React Native', icon: 'phone_android' },
  { label: 'TensorFlow', icon: 'model_training' },
  { label: 'FHIR API', icon: 'api' },
  { label: 'AWS HealthLake', icon: 'cloud' },
  { label: 'OpenAI GPT', icon: 'smart_toy' },
];

export default function Innovation() {
  return (
    <section
      id="innovation"
      className="section-padding"
      style={{ background: 'var(--color-surface-container-low)' }}
      aria-labelledby="innovation-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>lightbulb</span>
            Innovation
          </span>
          <h2 id="innovation-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Technology That Thinks Ahead
          </h2>
          <p className="text-body-lg text-muted">
            FABY combines cutting-edge AI, health informatics standards, and
            intuitive design to deliver a truly next-generation health platform.
          </p>
        </div>

        {/* Innovation Items */}
        <div className="innovations-container reveal-left" style={{ marginBottom: 56 }}>
          {innovations.map((item, i) => (
            <div
              key={item.number}
              className="innovation-item"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="innovation-number">{item.number}</div>

              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, var(--color-secondary-container), var(--color-tertiary-fixed))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--color-secondary)' }}>
                  {item.icon}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <h3 className="text-headline-sm text-primary" style={{ marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p className="text-body-sm text-muted" style={{ marginBottom: 14, lineHeight: 1.7 }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        background: 'rgba(0,105,113,0.08)',
                        color: 'var(--color-secondary)',
                        borderRadius: 100,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Banner */}
        <div
          className="tech-stack-banner reveal"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-primary) 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          <div>
            <h3 className="text-headline-md" style={{ color: 'white', marginBottom: 8 }}>
              Built with Industry-Leading Technology
            </h3>
            <p style={{ fontSize: 14, color: 'var(--color-on-primary-container)', maxWidth: 380 }}>
              FABY leverages best-in-class tools to ensure reliability, security, and performance.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {techStack.map((tech) => (
              <div
                key={tech.label}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 16px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: 100,
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--color-secondary-fixed-dim)' }}>
                  {tech.icon}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .innovations-container {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 600px) {
          .innovation-item {
            flex-direction: column;
            gap: 12px !important;
            padding: 20px 0 !important;
          }
          .innovation-number {
            width: auto !important;
          }
          .tech-stack-banner {
            flex-direction: column;
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
