import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { socialLinks } from '../constants';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

const Footer = () => {
  return (
    <footer style={{
      padding: '60px 24px 32px',
      position: 'relative',
    }}>
      {/* Gradient separator */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        maxWidth: 600,
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-purple), transparent)',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        {/* Social Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          marginBottom: 32,
        }}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.icon !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.name}
                style={{
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-cyan)';
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {Icon && <Icon size={20} />}
              </a>
            );
          })}
        </div>

        {/* Credits */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
        }}>
          Designed & Built with <FiHeart size={14} style={{ color: 'var(--accent-pink)' }} /> by Meeran Uz Zaman
        </p>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          opacity: 0.5,
          marginTop: 8,
        }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
