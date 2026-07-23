import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { skillCategories } from '../constants';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = activeCategory === 'All'
    ? skillCategories.flatMap(c => c.skills)
    : skillCategories.find(c => c.title === activeCategory)?.skills || [];

  const categories = ['All', ...skillCategories.map(c => c.title)];

  return (
    <section 
      id="skills" 
      className="section-padding" 
      style={{ 
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background blobs */}
      <div style={{
        position: 'absolute',
        top: -100,
        left: '10%',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        right: '10%',
        width: 350,
        height: 350,
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1}}>
        <ScrollReveal>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            // what I work with
          </p>
          <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: 48 }}>
            Tech Stack
          </h2>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 48,
            flexWrap: 'wrap',
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '1px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--glass-border)',
                  borderRadius: 'var(--radius-sm)',
                  background: activeCategory === cat ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                  color: activeCategory === cat ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <motion.div
          layout
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20
          }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.6, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.06,
                  ease: 'easeOut'
                }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="glass-card"
                style={{
                  width: 150,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon
                    size={36}
                    style={{
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = skill.color;
                      e.target.style.filter = 'drop-shadow(0 0 10px ' + skill.color + ')';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.filter = 'none';
                    }}
                  />
                </motion.div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s ease',
                }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
