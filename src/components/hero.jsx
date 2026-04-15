import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../constants';
import { FiArrowDown, FiExternalLink } from 'react-icons/fi';
import GlitchText from './GlitchText';
import MagneticButton from './MagneticButton';

const Hero = () => {
  // Typing effect
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const textArray = personalDetails.taglines || [personalDetails.role];

  useEffect(() => {
    const ticker = setTimeout(() => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(60px, 10vh, 100px) 16px clamp(40px, 8vh, 80px)',
        position: 'relative',
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 'clamp(250px, 40vw, 400px)',
        height: 'clamp(250px, 40vw, 400px)',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'glow-pulse 8s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: 'clamp(200px, 35vw, 350px)',
        height: 'clamp(200px, 35vw, 350px)',
        background: 'radial-gradient(circle, rgba(180, 74, 255, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'glow-pulse 10s ease-in-out infinite 2s',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(20px, 4vh, 60px)',
        flexWrap: 'wrap',
      }}>

        {/* LEFT — Text Content */}
        <div className="hero-content">
          {/* Terminal greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--accent-cyan)',
              marginBottom: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{
              display: 'inline-block',
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'var(--accent-cyan)',
              boxShadow: '0 0 10px var(--accent-cyan)',
            }} />
            Hi there, my name is
          </motion.div>

          {/* Name with glitch */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 8,
              color: 'var(--text-primary)',
            }}
          >
            <GlitchText text={personalDetails.name} />
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: 24,
              minHeight: '2.4em',
            }}
          >
            {'> '}
            <span className="gradient-text">{text}</span>
            <span style={{
              borderRight: '3px solid var(--accent-cyan)',
              marginLeft: 2,
              animation: 'typing-cursor 1s step-end infinite',
            }}>&nbsp;</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              maxWidth: 540,
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: 'clamp(20px, 4vh, 40px)',
            }}
          >
            {personalDetails.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="cta-container"
          >
            <MagneticButton href="#projects" className="cta-button-filled">
              <span>View My Work</span>
              <FiExternalLink size={16} />
            </MagneticButton>
            <MagneticButton href="#contact">
              <span>Get In Touch</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* RIGHT — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Orbital ring */}
            <div style={{
              position: 'absolute',
              inset: -30,
              border: '1px solid rgba(0, 240, 255, 0.1)',
              borderRadius: '50%',
              animation: 'rotate-slow 20s linear infinite',
            }}>
              <div style={{
                position: 'absolute',
                top: -4,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--accent-cyan)',
                boxShadow: '0 0 15px var(--accent-cyan)',
              }} />
            </div>

            {/* Second ring */}
            <div style={{
              position: 'absolute',
              inset: -50,
              border: '1px dashed rgba(180, 74, 255, 0.08)',
              borderRadius: '50%',
              animation: 'rotate-slow 30s linear infinite reverse',
            }}>
              <div style={{
                position: 'absolute',
                bottom: -4,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent-purple)',
                boxShadow: '0 0 15px var(--accent-purple)',
              }} />
            </div>

            {/* Glow behind image */}
            <div style={{
              position: 'absolute',
              inset: -10,
              background: 'var(--gradient-main)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              opacity: 0.15,
            }} />

            <img
              src={personalDetails.profileImage}
              alt={personalDetails.name}
              style={{
                position: 'relative',
                width: 'clamp(140px, 40vw, 300px)',
                height: 'clamp(140px, 40vw, 300px)',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(0, 240, 255, 0.15)',
                boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
          animation: 'bounce-down 2s ease-in-out infinite',
          textDecoration: 'none',
        }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  );
};

export default Hero;