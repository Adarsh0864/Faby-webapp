/**
 * Team Section — Showcases the multidisciplinary FABY team
 * with photo cards, roles, and social links.
 */

const team = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Lead Pediatric Researcher',
    department: 'Medical Research',
    bio: 'Board-certified pediatrician with 12+ years in child development research at AIIMS. Pioneer of FABY\'s clinical validation framework.',
    image: '/team-lead.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'James Nakamura',
    role: 'AI & Machine Learning Lead',
    department: 'Technology',
    bio: 'ML researcher specializing in health informatics and predictive analytics. Former Google Brain researcher, PhD from Stanford.',
    image: '/team-researcher.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Amara Osei',
    role: 'Full Stack Engineer',
    department: 'Engineering',
    bio: 'Senior engineer with expertise in healthcare APIs, HIPAA-compliant architectures, and React Native. Open-source contributor.',
    image: '/team-developer.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  {
    name: 'Carlos Rivera',
    role: 'UX & Product Design',
    department: 'Design',
    bio: 'Product designer focused on inclusive healthcare UX. Led design at two healthtech startups. Specialized in parent-facing mobile apps.',
    image: '/team-designer.png',
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
];

const advisors = [
  { name: 'Prof. Sarah Williams', role: 'WHO Child Health Advisor', initials: 'SW' },
  { name: 'Dr. Arjun Mehta', role: 'Pediatric Neurology Expert', initials: 'AM' },
  { name: 'Dr. Lisa Park', role: 'Nutrition Science Lead', initials: 'LP' },
  { name: 'Dr. Samuel Okonkwo', role: 'Global Health Policy', initials: 'SO' },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-padding"
      style={{ background: 'var(--color-background)' }}
      aria-labelledby="team-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="badge badge-primary" style={{ marginBottom: 16 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>groups</span>
            Our Team
          </span>
          <h2 id="team-heading" className="text-display-lg text-primary" style={{ marginBottom: 16 }}>
            The Minds Behind FABY
          </h2>
          <p className="text-body-lg text-muted">
            A multidisciplinary team of pediatricians, researchers, engineers,
            and designers united by a shared mission: healthier childhoods.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="team-grid" style={{ marginBottom: 64 }}>
          {team.map((member, i) => (
            <div
              key={member.name}
              className="team-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="team-card-image-wrapper">
                <img
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="team-card-overlay">
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[
                      { href: member.linkedin, icon: 'account_circle', label: 'LinkedIn' },
                      { href: member.github, icon: 'code', label: 'GitHub' },
                      { href: member.twitter, icon: 'alternate_email', label: 'Twitter' },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={`${member.name} on ${link.label}`}
                        style={{
                          width: 36, height: 36, borderRadius: '50%',
                          background: 'rgba(255,255,255,0.15)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'white',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-secondary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                          {link.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="team-card-info">
                <span style={{
                  display: 'inline-block',
                  padding: '3px 10px',
                  background: 'var(--color-secondary-container)',
                  color: 'var(--color-secondary)',
                  borderRadius: 100,
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  {member.department}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 2 }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: 13, color: 'var(--color-secondary)', fontWeight: 600, marginBottom: 10 }}>
                  {member.role}
                </div>
                <p className="text-body-sm text-muted" style={{ lineHeight: 1.65 }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Board */}
        <div
          style={{
            background: 'var(--color-surface-container-low)',
            border: '1px solid var(--color-surface-variant)',
            borderRadius: 'var(--radius-2xl)',
            padding: '40px 48px',
          }}
          className="reveal"
        >
          <h3 className="text-headline-md text-primary" style={{ marginBottom: 8 }}>
            Advisory Board
          </h3>
          <p className="text-body-sm text-muted" style={{ marginBottom: 32 }}>
            World-class experts guiding FABY's clinical and policy direction.
          </p>

          <div className="advisors-grid">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px',
                  background: 'var(--color-surface-container-lowest)',
                  border: '1px solid var(--color-surface-variant)',
                  borderRadius: 'var(--radius-xl)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,105,113,0.25)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-surface-variant)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: 14, fontWeight: 700,
                  flexShrink: 0, letterSpacing: '0.02em',
                }}>
                  {advisor.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-primary)' }}>
                    {advisor.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-on-surface-variant)', marginTop: 2 }}>
                    {advisor.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .advisors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        @media (max-width: 1200px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr; }
          .advisors-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
