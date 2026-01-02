import { useRef, useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Replace these with your actual EmailJS keys
    // Service ID, Template ID, Public Key
    emailjs.sendForm('service_7ufh8js', 'template_7btb66l', form.current, 'ADzU_7t0d5j-IuZz-')
      .then((result) => {
          setIsSubmitting(false);
          setStatus('success');
          form.current.reset(); // Clear the form
      }, (error) => {
          setIsSubmitting(false);
          setStatus('error');
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400/80 mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Contact Info Side */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl text-slate-100 font-semibold mb-2">Contact Info</h3>
            <div className="flex items-center gap-3 text-slate-400 mb-4">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:meeran.official1255@gmail.com" className="hover:text-cyan-400">meeran.official1255@gmail.com</a>
            </div>
            <p className="text-sm text-slate-500">
              I am currently available for freelance work and open to full-time opportunities.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-mono text-slate-400 mb-2">Name</label>
            <input 
              type="text" 
              name="user_name" 
              required
              className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-mono text-slate-400 mb-2">Email</label>
            <input 
              type="email" 
              name="user_email" 
              required
              className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-mono text-slate-400 mb-2">Message</label>
            <textarea 
              name="message" 
              required
              rows="4"
              className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-slate-100 focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Hello, I'd like to talk about..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-cyan-400/10 text-cyan-400 border border-cyan-400 py-3 rounded font-mono hover:bg-cyan-400 hover:text-slate-900 transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <> <Loader2 className="animate-spin" size={18} /> Sending... </>
            ) : (
              <> <Send size={18} /> Send Message </>
            )}
          </button>

          {/* Success/Error Message */}
          {status === 'success' && (
            <p className="text-green-400 text-sm font-mono mt-2">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm font-mono mt-2">Something went wrong. Please try again.</p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;