/**
 * Navbar Component — Sticky navigation with smooth section tracking,
 * mobile menu, and active link highlighting.
 */
import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#research', label: 'Research' },
  { href: '#innovation', label: 'Innovation' },
  { href: '#impact', label: 'Impact' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="FABY — Go to top"
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 800, fontSize: 14, letterSpacing: '0.02em',
              fontFamily: 'var(--font-family-display)',
              boxShadow: '0 2px 8px rgba(0,105,113,0.3)',
              flexShrink: 0,
            }}>
              F
            </div>
            <span style={{
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800, fontSize: 22,
              color: 'var(--color-primary)',
              letterSpacing: '-0.02em',
            }}>
              FABY
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 32 }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button
              className="btn btn-primary btn-sm desktop-cta"
              onClick={() => handleNavClick('#contact')}
              aria-label="Get started with FABY"
            >
              Get Started
            </button>

            {/* Hamburger */}
            <button
              className="mobile-menu-toggle"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: 44, height: 44, borderRadius: 10,
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'var(--color-surface-container)',
                border: '1px solid var(--color-surface-variant)',
                cursor: 'pointer', color: 'var(--color-primary)',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                display: 'block', padding: '16px 0',
                fontFamily: 'var(--font-family-display)',
                fontSize: 26, fontWeight: 700,
                color: activeSection === link.href.slice(1)
                  ? 'var(--color-secondary)'
                  : 'var(--color-primary)',
                borderBottom: '1px solid var(--color-surface-variant)',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="btn btn-primary w-full"
          onClick={() => handleNavClick('#contact')}
          style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}
        >
          Get Started
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-toggle { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
