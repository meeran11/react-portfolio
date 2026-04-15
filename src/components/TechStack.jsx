import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { skillCategories } from '../constants';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = activeCategory === 'All'
    ? skillCategories.flatMap(c => c.skills)
    : skillCategories.find(c => c.title === activeCategory)?.skills || [];

  const categories = ['All', ...skillCategories.map(c => c.title)];

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 20,
          }}
        >
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card"
              style={{
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                cursor: 'default',
              }}
            >
              <skill.icon
                size={36}
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = skill.color}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                letterSpacing: '0.5px',
              }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
