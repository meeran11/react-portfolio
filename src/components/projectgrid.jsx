import { motion } from 'framer-motion';
import { projects } from '../constants';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section 
      id="projects" 
      className="section-padding" 
      style={{ 
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-10%',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-5%',
        width: 450,
        height: 450,
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            // what I've built
          </p>
          <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: 60 }}>
            Featured Projects
          </h2>
        </ScrollReveal>

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: 32,
            }}>
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={`featured-${index}`} delay={index * 0.15}>
                  <ProjectCard project={project} featured={true} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: 32,
              marginTop: 40,
              textAlign: 'center',
            }}>
              Other Projects
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 24,
            }}>
              {otherProjects.map((project, index) => (
                <ScrollReveal key={`other-${index}`} delay={index * 0.15}>
                  <ProjectCard project={project} featured={false} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        background: featured ? 'rgba(26, 26, 46, 0.8)' : 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '100%',
        position: 'relative',
        border: featured ? '1.5px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className="glass-card"
    >
      {/* Featured glow background */}
      {featured && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Inner content */}
      <div style={{ padding: featured ? 40 : 32, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <FiFolder
              size={featured ? 48 : 40}
              style={{ 
                color: featured ? 'var(--accent-magenta)' : 'var(--accent-cyan)', 
                strokeWidth: 1 
              }}
            />
          </motion.div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            style={{
              color: 'var(--text-muted)',
              padding: 8,
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = featured ? 'var(--accent-magenta)' : 'var(--accent-cyan)';
              e.currentTarget.style.background = featured ? 'rgba(236, 72, 153, 0.1)' : 'rgba(34, 211, 238, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <FiExternalLink size={20} />
          </motion.a>
        </div>

        {/* Title */}
        <motion.h3 
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: featured ? '1.5rem' : '1.3rem',
            fontWeight: featured ? 700 : 600,
            background: featured ? 'var(--gradient-main)' : 'none',
            backgroundClip: featured ? 'text' : 'unset',
            WebkitBackgroundClip: featured ? 'text' : 'unset',
            WebkitTextFillColor: featured ? 'transparent' : 'var(--text-primary)',
            color: featured ? 'transparent' : 'var(--text-primary)',
            marginBottom: 12,
            transition: 'all 0.3s ease',
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: featured ? '1rem' : '0.95rem',
          lineHeight: 1.7,
          marginBottom: 24,
        }}>
          {project.description}
        </p>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.08 }}
              style={{
                padding: '6px 14px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.5px',
                color: featured ? 'var(--accent-magenta)' : 'var(--accent-cyan)',
                border: `1px solid ${featured ? 'rgba(236, 72, 153, 0.25)' : 'rgba(34, 211, 238, 0.15)'}`,
                borderRadius: 'var(--radius-sm)',
                background: featured ? 'rgba(236, 72, 153, 0.08)' : 'rgba(34, 211, 238, 0.04)',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        {/* Featured badge */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'absolute',
              top: 20,
              right: 40,
              padding: '4px 12px',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--accent-magenta)',
              background: 'rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
            }}
          >
            ✨ Featured
          </motion.div>
        )}
      </div>

      {/* Hover glow effect */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: featured ? 300 : 200,
        background: featured 
          ? 'linear-gradient(0deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%)' 
          : 'linear-gradient(0deg, rgba(34, 211, 238, 0.03) 0%, transparent 100%)',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
        className="card-glow"
      />

      <style>{`
        .glass-card:hover .card-glow {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;
