import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = menuItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="glass"
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 100,
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="gradient-text"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              cursor: 'pointer',
            }}
          >
            MUZ.
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          gap: 32,
          alignItems: 'center',
        }}
          className="desktop-nav"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
                color: activeSection === item.href.slice(1) ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                textDecoration: 'none',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
              onMouseLeave={(e) => {
                if (activeSection !== item.href.slice(1)) {
                  e.target.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <span style={{ color: 'var(--accent-cyan)', marginRight: 4 }}>
                {String(menuItems.indexOf(item) + 1).padStart(2, '0')}.
              </span>
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--gradient-main)',
                    borderRadius: 1,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-secondary)',
            padding: 8,
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.color = 'var(--accent-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.color = 'var(--text-secondary)';
          }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
              borderTop: '1px solid var(--glass-border)',
            }}
          >
            <div style={{
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              background: 'rgba(10, 10, 15, 0.95)',
              backdropFilter: 'blur(20px)',
            }}>
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    padding: '8px 0',
                    borderBottom: '1px solid var(--glass-border)',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  <span style={{ color: 'var(--accent-cyan)', marginRight: 12 }}>
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;