/**
 * Impact Section — Showcases FABY's measurable health outcomes
 * with animated progress bars and impact stats.
 */

const impacts = [
  {
    metric: 'Vaccination Completion',
    value: 94,
    unit: '%',
    description: 'of FABY users complete full immunization schedules vs 68% national average',
    icon: 'vaccines',
    color: 'var(--color-error)',
  },
  {
    metric: 'Milestone Detection Rate',
    value: 87,
    unit: '%',
    description: 'of developmental delays identified within recommended intervention windows',
    icon: 'child_care',
    color: 'var(--color-secondary)',
  },
  {
    metric: 'Parent Confidence Score',
    value: 92,
    unit: '%',
    description: 'of parents reported increased confidence in healthcare decisions after 30 days',
    icon: 'sentiment_very_satisfied',
    color: '#f59e0b',
  },
  {
    metric: 'Doctor Visit Optimization',
    value: 78,
    unit: '%',
    description: 'of unnecessary emergency visits avoided through FABY\'s proactive triage system',
    icon: 'local_hospital',
    color: 'var(--color-tertiary)',
  },
];

const futureGoals = [
  {
    icon: 'globe_asia',
    title: 'Global Expansion',
    description: 'Scaling to 50+ countries with localized vaccine schedules, languages, and cultural feeding practices.',
  },
  {
    icon: 'wearable_devices',
    title: 'Wearable Integration',
    description: 'Smart baby monitors and wearables feeding real-time biometric data directly into FABY.',
  },
  {
    icon: 'medical_information',
    title: 'EHR Integration',
    description: 'Direct sync with electronic health records, enabling seamless care coordination with pediatricians.',
  },
  {
    icon: 'translate',
    title: 'Multilingual AI',
    description: 'NLP-powered health guidance in 30+ languages, making expert knowledge universally accessible.',
  },
];

import { useEffect, useRef, useState } from 'react';

function ProgressBar({ value, color }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="progress-bar" style={{ height: 8, borderRadius: 100, background: 'var(--color-surface-variant)', overflow: 'hidden' }}>
      <div
        style={{
          height: '100%',
          borderRadius: 100,
          background: color || 'var(--color-secondary)',
          width: animated ? `${value}%` : '0%',
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}

export default function Impact() {
  return (
    <section
      id="impact"
      className="section-padding"
      style={{ background: 'var(--color-background)' }}
      aria-labelledby="impact-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>bar_chart</span>
            Impact & Outcomes
          </span>
          <h2 id="impact-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Real Results for Real Families
          </h2>
          <p className="text-body-lg text-muted">
            Measured outcomes from pilot programs, clinical trials, and
            real-world usage across partnered healthcare networks.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="impact-metrics reveal" style={{ marginBottom: 72 }}>
          {impacts.map((impact, i) => (
            <div
              key={impact.metric}
              style={{
                padding: '32px 28px',
                background: 'var(--color-surface-container-lowest)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-surface-variant)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${impact.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 22, color: impact.color }}>
                    {impact.icon}
                  </span>
                </div>
                <div style={{
                  fontSize: 36, fontWeight: 800,
                  color: impact.color,
                  fontFamily: 'var(--font-family-display)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {impact.value}{impact.unit}
                </div>
              </div>

              <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 8 }}>
                {impact.metric}
              </h3>
              <p className="text-body-sm text-muted" style={{ marginBottom: 16, lineHeight: 1.6 }}>
                {impact.description}
              </p>

              <ProgressBar value={impact.value} color={impact.color} />
            </div>
          ))}
        </div>

        {/* Future Scope */}
        <div style={{
          background: 'linear-gradient(135deg, var(--color-primary-container) 0%, var(--color-primary) 100%)',
          borderRadius: 'var(--radius-2xl)',
          padding: '56px 48px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{
            position: 'absolute', top: -80, right: -80,
            width: 300, height: 300,
            borderRadius: '50%',
            background: 'rgba(0,105,113,0.2)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: -60, left: -60,
            width: 200, height: 200,
            borderRadius: '50%',
            background: 'rgba(214,227,255,0.05)',
            pointerEvents: 'none',
          }} />

          <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
            <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', marginBottom: 20 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>rocket_launch</span>
              Future Scope
            </span>
            <h3 className="text-headline-xl" style={{ color: 'white', marginBottom: 12 }}>
              What's Coming Next
            </h3>
            <p style={{ fontSize: 16, color: 'var(--color-on-primary-container)', marginBottom: 40, maxWidth: 520 }}>
              Our roadmap is as ambitious as our mission. Here's what we're building to make FABY the global standard for pediatric digital health.
            </p>

            <div className="future-grid">
              {futureGoals.map((goal) => (
                <div
                  key={goal.title}
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '24px 20px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(0,105,113,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 14,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: 'var(--color-secondary-fixed)' }}>
                      {goal.icon}
                    </span>
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 8 }}>
                    {goal.title}
                  </h4>
                  <p style={{ fontSize: 13, color: 'var(--color-on-primary-container)', lineHeight: 1.6 }}>
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .impact-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .future-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        @media (max-width: 768px) {
          .impact-metrics { grid-template-columns: 1fr; }
          .future-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .impact-metrics { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
