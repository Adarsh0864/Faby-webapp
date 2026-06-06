/**
 * Testimonials Section — Showcases real parent and healthcare
 * professional quotes with star ratings.
 */

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Mother of two, Singapore',
    avatar: '👩',
    rating: 5,
    quote:
      'FABY completely changed how I approach my daughter\'s health. The vaccination reminders alone saved us from a scary gap in coverage. Now I feel genuinely confident at every pediatrician visit.',
    tag: 'Vaccination Tracking',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'Pediatrician, Mumbai',
    avatar: '👩‍⚕️',
    rating: 5,
    quote:
      'As a pediatrician, I now actively recommend FABY to parents. The growth tracking data my patients bring to appointments is consistent, clear, and clinically useful. It bridges a real gap.',
    tag: 'Clinical Integration',
  },
  {
    id: 3,
    name: 'Marcus & Aisha Johnson',
    role: 'First-time parents, Atlanta',
    avatar: '👨‍👩‍👦',
    rating: 5,
    quote:
      'We were terrified about introducing solids. FABY\'s AI-guided nutrition plan made it feel manageable — it even flagged a potential dairy sensitivity early. We can\'t imagine parenting without it.',
    tag: 'Nutrition Planning',
  },
  {
    id: 4,
    name: 'Emma Larsson',
    role: 'Nurse & New Mom, Stockholm',
    avatar: '👩‍⚕️',
    rating: 5,
    quote:
      'Even with my nursing background, FABY taught me things I didn\'t know. The milestone tracking is nuanced and the parent community is incredibly supportive. A true game-changer.',
    tag: 'Milestone Tracking',
  },
  {
    id: 5,
    name: 'Rajesh Patel',
    role: 'Father of three, London',
    avatar: '👨',
    rating: 5,
    quote:
      'Managing health records for three kids used to be chaotic. FABY centralizes everything beautifully. The whole family — grandparents included — can see the kids\' health at a glance.',
    tag: 'Family Sync',
  },
  {
    id: 6,
    name: 'Dr. James Okoro',
    role: 'Child Health Researcher, Nairobi',
    avatar: '👨‍🔬',
    rating: 5,
    quote:
      'The population health analytics potential of FABY is extraordinary. In pilot studies, we found statistically significant improvements in vaccination rates in communities using the platform.',
    tag: 'Research Impact',
  },
];

function StarRating({ rating }) {
  return (
    <div className="rating-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{
            fontSize: 16,
            color: i < rating ? '#f59e0b' : 'var(--color-surface-variant)',
            fontVariationSettings: i < rating ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : 'normal',
          }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: 'var(--color-surface-container-low)' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chat</span>
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            Trusted by Families & Clinicians
          </h2>
          <p className="text-body-lg text-muted">
            Hear from the parents, pediatricians, and researchers who have
            integrated FABY into their lives and practices.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Tag */}
              <span className="badge badge-primary" style={{ marginBottom: 16, fontSize: 10 }}>
                {t.tag}
              </span>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Quote */}
              <p
                style={{
                  fontSize: 15, lineHeight: 1.75,
                  color: 'var(--color-on-surface)',
                  margin: '16px 0 20px',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-secondary-container), var(--color-tertiary-fixed))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-primary)' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-on-surface-variant)', marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats row */}
        <div className="testimonial-summary reveal" style={{ marginTop: 56 }}>
          {[
            { value: '4.9/5', label: 'App Store Rating', icon: 'star' },
            { value: '10K+', label: 'Active Families', icon: 'group' },
            { value: '98%', label: 'Would Recommend', icon: 'thumb_up' },
            { value: '50+', label: 'Countries', icon: 'public' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: 'var(--color-secondary)' }}>
                  {s.icon}
                </span>
              </div>
              <div style={{
                fontSize: 32, fontWeight: 800,
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-family-display)',
                letterSpacing: '-0.02em', lineHeight: 1,
              }}>
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: 'var(--color-on-surface-variant)', marginTop: 6, fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .testimonial-summary {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 48px;
          background: var(--color-surface-container-lowest);
          border: 1px solid var(--color-surface-variant);
          border-radius: var(--radius-2xl);
        }

        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonial-summary { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-summary { grid-template-columns: repeat(2, 1fr); padding: 24px; }
        }
      `}</style>
    </section>
  );
}
