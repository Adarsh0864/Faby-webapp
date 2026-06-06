/**
 * Features Section — FABY's core feature set with tabbed/visual layout.
 * Matches the two-column layout with icon list + app mockup image.
 */
import { useState } from 'react';

const features = [
  {
    id: 'growth',
    icon: 'trending_up',
    title: 'Growth & Milestone Tracking',
    description:
      'Monitor height, weight, and head circumference against standard WHO growth charts. Get visual percentile indicators and alerts for developmental milestones.',
    details: [
      'Interactive WHO-aligned growth charts',
      'Visual percentile tracking',
      'Developmental milestone checklists',
      'Pediatrician export-ready reports',
    ],
    color: 'var(--color-secondary-container)',
    iconColor: 'var(--color-secondary)',
  },
  {
    id: 'vaccination',
    icon: 'vaccines',
    title: 'Smart Vaccination Reminders',
    description:
      'Never miss a critical vaccine. Automated, clinically-aligned schedules with local clinic integration, multi-child support, and catch-up scheduling.',
    details: [
      'Automated clinically-aligned schedules',
      'Multi-child support',
      'Local clinic integration',
      'Catch-up schedule planning',
    ],
    color: 'var(--color-error-container)',
    iconColor: 'var(--color-error)',
  },
  {
    id: 'nutrition',
    icon: 'restaurant',
    title: 'Personalized Nutrition Planning',
    description:
      'Tailored feeding guides from newborn stages through introducing solid foods. Allergy tracking, breastfeeding support, and AI meal suggestions.',
    details: [
      'Stage-appropriate feeding guides',
      'Allergy & intolerance tracking',
      'Breastfeeding support & pumping logs',
      'AI-powered meal introductions',
    ],
    color: 'var(--color-tertiary-fixed)',
    iconColor: 'var(--color-on-tertiary-fixed)',
  },
  {
    id: 'community',
    icon: 'forum',
    title: 'Parenting Community',
    description:
      'Connect with other parents and pediatric experts in a moderated, supportive environment. Share experiences, ask questions, and find local parent groups.',
    details: [
      'Expert-moderated discussion boards',
      'Local parent group discovery',
      'Pediatrician Q&A sessions',
      'Anonymous peer support threads',
    ],
    color: 'var(--color-primary-fixed)',
    iconColor: 'var(--color-primary-container)',
  },
  {
    id: 'insights',
    icon: 'insights',
    title: 'AI Health Insights',
    description:
      'Receive personalized, proactive health nudges powered by machine learning — flagging potential concerns before they become problems.',
    details: [
      'Predictive health alerts',
      'Pattern detection in growth data',
      'Symptom checker & triage guide',
      'Weekly personalized health digest',
    ],
    color: 'rgba(0,105,113,0.1)',
    iconColor: 'var(--color-secondary)',
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section
      id="features"
      className="section-padding"
      style={{ background: 'var(--color-surface-container-low)' }}
      aria-labelledby="features-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
              star
            </span>
            Core Features
          </span>
          <h2 id="features-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Comprehensive Care Tools
          </h2>
          <p className="text-body-lg text-muted">
            Everything you need to track, understand, and support your child's
            growth — all in one beautifully designed platform.
          </p>
        </div>

        {/* Main Features Layout */}
        <div className="features-layout">
          
          {/* Left — Feature List */}
          <div className="features-list reveal-left">
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className={`feature-item ${activeFeature.id === feature.id ? 'active-feature' : ''}`}
                onClick={() => setActiveFeature(feature)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveFeature(feature)}
                role="button"
                tabIndex={0}
                aria-label={`Learn about ${feature.title}`}
                aria-pressed={activeFeature.id === feature.id}
                style={{ cursor: 'pointer' }}
              >
                {/* Icon */}
                <div
                  className="feature-icon icon-container icon-container-md icon-container-circle"
                  style={{
                    background: activeFeature.id === feature.id
                      ? feature.color
                      : 'var(--color-surface-container)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 22,
                      color: activeFeature.id === feature.id
                        ? feature.iconColor
                        : 'var(--color-on-surface-variant)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {feature.icon}
                  </span>
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h3
                    className="text-headline-sm"
                    style={{
                      color: activeFeature.id === feature.id
                        ? 'var(--color-secondary)'
                        : 'var(--color-primary)',
                      marginBottom: 4,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-body-sm text-muted"
                    style={{ lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </p>

                  {/* Expanded details */}
                  {activeFeature.id === feature.id && (
                    <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {feature.details.map((detail) => (
                        <li
                          key={detail}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            fontSize: 13, color: 'var(--color-on-surface-variant)',
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 16, color: 'var(--color-secondary)', flexShrink: 0 }}
                          >
                            check_circle
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Arrow indicator */}
                {activeFeature.id === feature.id && (
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 20, color: 'var(--color-secondary)', flexShrink: 0 }}
                  >
                    chevron_right
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right — App Mockup */}
          <div className="features-visual reveal-right">
            <div
              style={{
                borderRadius: 'var(--radius-2xl)',
                overflow: 'hidden',
                height: '100%',
                minHeight: 520,
                position: 'relative',
                background: 'linear-gradient(135deg, var(--color-secondary-container) 0%, var(--color-tertiary-fixed) 100%)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <img
                src="/app-mockup.png"
                alt="FABY mobile app interface showing growth tracking charts and health metrics"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', opacity: 0.95,
                  display: 'block',
                }}
                loading="lazy"
              />

              {/* Feature highlight overlay */}
              <div style={{
                position: 'absolute',
                bottom: 24, left: 24, right: 24,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'var(--radius-xl)',
                padding: '16px 20px',
                boxShadow: 'var(--shadow-lg)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: activeFeature.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: activeFeature.iconColor }}>
                      {activeFeature.icon}
                    </span>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-primary)' }}>
                      {activeFeature.title}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--color-on-surface-variant)', marginTop: 2 }}>
                      Tap a feature to explore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .features-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .feature-item {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: var(--radius-xl);
          transition: all 0.25s ease;
          border: 1px solid transparent;
          cursor: pointer;
          outline: none;
        }

        .feature-item:hover {
          background: var(--color-surface-container);
        }

        .active-feature {
          background: var(--color-surface-container-lowest) !important;
          border-color: var(--color-surface-variant);
          box-shadow: var(--shadow-sm);
        }

        .features-visual {
          position: sticky;
          top: 96px;
        }

        @media (max-width: 900px) {
          .features-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .features-visual {
            position: static;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
