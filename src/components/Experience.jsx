import ScrollReveal from './ScrollReveal';
import { experience } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <ScrollReveal>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            // where I've been
          </p>
          <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: 60 }}>
            Experience
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 8,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-purple), transparent)',
              borderRadius: 2,
            }}
          />

          {experience.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="left">
              <div style={{ marginBottom: 48, position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: -36,
                  top: 6,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'var(--gradient-main)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
                }} />

                {/* Card */}
                <div className="glass-card card-padding-lg">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 8,
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}>
                        {item.role}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--accent-cyan)',
                      }}>
                        {item.type}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.period}
                    </span>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {item.highlights.map((tag, i) => (
                      <span key={i} style={{
                        padding: '4px 12px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--accent-cyan)',
                        border: '1px solid rgba(0, 240, 255, 0.2)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(0, 240, 255, 0.05)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
