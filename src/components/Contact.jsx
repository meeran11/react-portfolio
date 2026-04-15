import { useRef, useState } from 'react';
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
    <section id="contact" className="section-padding">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
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
                <div
                  key={i}
                  className="glass-card card-padding"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 240, 255, 0.06)',
                    border: '1px solid rgba(0, 240, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon size={20} style={{ color: 'var(--accent-cyan)' }} />
                  </div>
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
                </div>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button cta-button-filled"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader size={18} style={{ animation: 'rotate-slow 1s linear infinite' }} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

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