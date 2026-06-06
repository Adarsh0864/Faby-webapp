/**
 * About Section — Introduces FABY's mission, values,
 * and a stats counter row.
 */

const stats = [
  { value: '10K+', label: 'Families Served', icon: 'family_restroom' },
  { value: '98%', label: 'Parent Satisfaction', icon: 'thumb_up' },
  { value: '150+', label: 'Research Studies', icon: 'science' },
  { value: '24/7', label: 'Health Support', icon: 'support_agent' },
];

const values = [
  {
    icon: 'verified',
    title: 'Evidence-Based',
    description:
      'Every recommendation is grounded in peer-reviewed pediatric research and WHO guidelines.',
    color: 'var(--color-secondary-container)',
    iconColor: 'var(--color-secondary)',
  },
  {
    icon: 'favorite',
    title: 'Family-First Design',
    description:
      'Built by parents and pediatricians together — intuitive, compassionate, and reliable.',
    color: 'var(--color-error-container)',
    iconColor: 'var(--color-error)',
  },
  {
    icon: 'lock',
    title: 'Privacy & Security',
    description:
      'Your family health data is encrypted and never sold. HIPAA-aligned data practices.',
    color: 'var(--color-tertiary-fixed)',
    iconColor: 'var(--color-tertiary)',
  },
  {
    icon: 'auto_awesome',
    title: 'AI-Powered Insights',
    description:
      'Machine learning personalizes recommendations as your child grows and develops.',
    color: 'var(--color-primary-fixed)',
    iconColor: 'var(--color-primary-container)',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: 'var(--color-surface-container-low)' }}
      aria-labelledby="about-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>info</span>
            About FABY
          </span>
          <h2 id="about-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            The Platform Built for Modern Parents
          </h2>
          <p className="text-body-lg text-muted">
            FABY (Family & Baby Integrated Platform) was born from a simple belief:
            every child deserves evidence-based healthcare guidance, and every parent
            deserves the confidence to provide it.
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-grid reveal" style={{ marginBottom: 72 }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'linear-gradient(135deg, var(--color-secondary-container), var(--color-tertiary-fixed))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--color-secondary)' }}>
                  {stat.icon}
                </span>
              </div>
              <div className="stat-number">{stat.value}</div>
              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-on-surface-variant)', marginTop: 8 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="values-grid">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="card reveal"
              style={{ '--delay': `${i * 0.1}s`, transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="icon-container icon-container-lg"
                style={{ background: value.color, marginBottom: 20 }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 26, color: value.iconColor }}
                >
                  {value.icon}
                </span>
              </div>
              <h3 className="text-headline-sm text-primary" style={{ marginBottom: 10 }}>
                {value.title}
              </h3>
              <p className="text-body-sm text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
