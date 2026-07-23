import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { experience } from '../constants';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-15%',
        width: 450,
        height: 450,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
          {/* Animated vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 8,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--accent-violet), var(--accent-magenta), var(--accent-cyan), transparent)',
              borderRadius: 2,
              boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
            }}
          />

          {experience.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="left">
              <motion.div 
                style={{ marginBottom: 48, position: 'relative' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot with aurora glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 20px rgba(139, 92, 246, 0.4)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 20px rgba(34, 211, 238, 0.4)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    left: -36,
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: 'var(--gradient-aurora)',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                  }} 
                />

                {/* Card */}
                <motion.div 
                  className="glass-card card-padding-lg"
                  whileHover={{ 
                    y: -4,
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.2), 0 20px 60px rgba(0, 0, 0, 0.4)',
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                  }}
                  style={{
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
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
                        fontWeight: 700,
                        background: 'var(--gradient-warm)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'var(--text-primary)',
                      }}>
                        {item.role}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--accent-cyan)',
                        marginTop: 4,
                      }}>
                        {item.type}
                      </p>
                    </div>
                    <motion.span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        whiteSpace: 'nowrap',
                        padding: '4px 12px',
                        border: '1px solid rgba(34, 211, 238, 0.2)',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(34, 211, 238, 0.05)',
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.period}
                    </motion.span>
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
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.08, y: -2 }}
                        style={{
                          padding: '6px 14px',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                          border: '1px solid rgba(34, 211, 238, 0.25)',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(34, 211, 238, 0.08)',
                          cursor: 'default',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
