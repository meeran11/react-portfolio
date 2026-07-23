import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiLoader, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs.sendForm('service_7ufh8js', 'template_7btb66l', form.current, 'ADzU_7t0d5j-IuZz-')
      .then(() => {
        setIsSubmitting(false);
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setIsSubmitting(false);
        setStatus('error');
        console.log(error.text);
      });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "meeran.official1255@gmail.com",
      href: "mailto:meeran.official1255@gmail.com",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Pakistan",
    },
    {
      icon: FiClock,
      label: "Availability",
      value: "Open to opportunities",
    },
  ];

  return (
    <section 
      id="contact" 
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background effects */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            // let's connect
          </p>
          <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: 16 }}>
            Get In Touch
          </h2>
          <p style={{
            textAlign: 'center',
            color: 'var(--text-secondary)',
            maxWidth: 480,
            margin: '0 auto 60px',
            fontSize: '1rem',
          }}>
            Whether you have a question or just want to say hi, my inbox is always open.
            I'll try my best to get back to you!
          </p>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 40,
        }}>
          {/* Info Side */}
          <ScrollReveal direction="left" delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  className="glass-card card-padding"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={20} style={{ color: 'var(--accent-violet)' }} />
                  </motion.div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} style={{
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s',
                      }}
                        onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Status indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#00ff88',
                  boxShadow: '0 0 10px #00ff88',
                  animation: 'glow-pulse 2s ease-in-out infinite',
                }} />
                Currently available for work
              </div>
            </div>
          </ScrollReveal>

          {/* Form Side */}
          <ScrollReveal direction="right" delay={0.2}>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="glass-card card-padding-lg"
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <div>
                <label style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                  display: 'block',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                  display: 'block',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                  display: 'block',
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="form-input"
                  placeholder="Hello, I'd like to talk about..."
                  style={{ resize: 'vertical', minHeight: 120 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cta-button cta-button-filled"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  background: isSubmitting 
                    ? 'rgba(139, 92, 246, 0.6)' 
                    : 'var(--gradient-main)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'flex' }}
                    >
                      <FiLoader size={18} />
                    </motion.div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex' }}
                    >
                      <FiSend size={18} />
                    </motion.div>
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 255, 136, 0.08)',
                  border: '1px solid rgba(0, 255, 136, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#00ff88',
                  textAlign: 'center',
                }}>
                  ✓ Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 45, 149, 0.08)',
                  border: '1px solid rgba(255, 45, 149, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-pink)',
                  textAlign: 'center',
                }}>
                  ✗ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
