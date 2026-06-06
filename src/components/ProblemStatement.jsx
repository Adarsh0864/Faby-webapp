/**
 * Problem Statement Section — Addresses modern parenting challenges
 * using a bento-style card grid matching the original design.
 */

const challenges = [
  {
    icon: 'vaccines',
    title: 'Missed Vaccinations',
    description:
      'Stay on track with automated, clinically-aligned schedules for all essential childhood immunizations. Avoid dangerous immunity gaps.',
    bg: 'var(--color-error-container)',
    iconColor: 'var(--color-on-error-container)',
    stat: '45%',
    statLabel: 'of parents miss at least one vaccine',
  },
  {
    icon: 'map',
    title: 'Lack of Guidance',
    description:
      'Access verified medical resources and expert advice tailored to your child\'s specific developmental stage — not generic web searches.',
    bg: 'var(--color-secondary-container)',
    iconColor: 'var(--color-on-secondary-container)',
    stat: '72%',
    statLabel: 'of parents rely on unverified sources',
  },
  {
    icon: 'monitoring',
    title: 'Developmental Milestones',
    description:
      'Easily track physical and cognitive growth with intuitive charts and milestone checklists aligned to WHO pediatric standards.',
    bg: 'var(--color-tertiary-fixed)',
    iconColor: 'var(--color-on-tertiary-fixed)',
    stat: '60%',
    statLabel: 'of delays go undetected early on',
  },
  {
    icon: 'restaurant',
    title: 'Nutrition Confusion',
    description:
      'Conflicting advice around feeding schedules and introducing solid foods causes unnecessary anxiety and potential nutritional deficiencies.',
    bg: 'var(--color-primary-fixed)',
    iconColor: 'var(--color-on-primary-fixed)',
    stat: '55%',
    statLabel: 'of parents struggle with feeding decisions',
  },
  {
    icon: 'psychology',
    title: 'Mental Health of Parents',
    description:
      'New parent anxiety and postpartum stress are often overlooked. FABY connects families to mental health resources and peer support.',
    bg: 'rgba(0,105,113,0.1)',
    iconColor: 'var(--color-secondary)',
    stat: '1 in 5',
    statLabel: 'new mothers experience postpartum depression',
  },
  {
    icon: 'emergency',
    title: 'Emergency Preparedness',
    description:
      'Parents are often unprepared for common childhood emergencies. FABY provides first-aid guides, symptom checkers, and emergency contacts.',
    bg: 'rgba(186, 26, 26, 0.08)',
    iconColor: 'var(--color-error)',
    stat: '80%',
    statLabel: 'of ER visits for children are preventable',
  },
];

export default function ProblemStatement() {
  return (
    <section
      id="problem"
      className="section-padding"
      style={{ background: 'var(--color-background)' }}
      aria-labelledby="problem-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>warning</span>
            The Problem
          </span>
          <h2 id="problem-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Addressing Modern Parenting Challenges
          </h2>
          <p className="text-body-lg text-muted">
            Navigating early childhood health can be overwhelming. We provide structured
            solutions to the most common concerns faced by new parents worldwide.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="challenges-grid">
          {challenges.map((challenge, i) => (
            <div
              key={challenge.title}
              className="challenge-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div
                className="icon-container icon-container-md icon-container-circle"
                style={{
                  background: challenge.bg,
                  marginBottom: 20,
                  width: 52, height: 52,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 24, color: challenge.iconColor }}
                >
                  {challenge.icon}
                </span>
              </div>

              {/* Stat Pill */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: challenge.bg,
                borderRadius: 100,
                padding: '4px 10px',
                marginBottom: 12,
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: challenge.iconColor,
                  letterSpacing: '0.03em',
                }}>
                  {challenge.stat} · {challenge.statLabel}
                </span>
              </div>

              <h3 className="text-headline-sm text-primary" style={{ marginBottom: 10 }}>
                {challenge.title}
              </h3>
              <p className="text-body-sm text-muted" style={{ lineHeight: 1.65 }}>
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .challenges-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .challenges-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
