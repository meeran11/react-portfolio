import { motion } from 'framer-motion';
import { projects } from '../constants';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <ScrollReveal>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            // what I've built
          </p>
          <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: 60 }}>
            Featured Projects
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 24,
        }}>
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="gradient-border"
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Inner content */}
      <div style={{ padding: 32, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
          <FiFolder
            size={40}
            style={{ color: 'var(--accent-cyan)', strokeWidth: 1 }}
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              transition: 'all 0.3s',
              padding: 8,
              borderRadius: 'var(--radius-sm)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-cyan)';
              e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <FiExternalLink size={20} />
          </a>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.3rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: 12,
          transition: 'color 0.3s',
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          lineHeight: 1.7,
          marginBottom: 24,
        }}>
          {project.description}
        </p>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                padding: '4px 12px',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.5px',
                color: 'var(--accent-cyan)',
                border: '1px solid rgba(0, 240, 255, 0.15)',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(0, 240, 255, 0.04)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: 20,
            right: 56,
            padding: '2px 10px',
            fontSize: '0.65rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--accent-purple)',
            background: 'rgba(180, 74, 255, 0.1)',
            border: '1px solid rgba(180, 74, 255, 0.2)',
            borderRadius: 'var(--radius-sm)',
          }}>
            Featured
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        background: 'linear-gradient(0deg, rgba(0, 240, 255, 0.03) 0%, transparent 100%)',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.4s',
      }}
        className="card-glow"
      />

      <style>{`
        .gradient-border:hover .card-glow {
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
};

export default Projects;
