import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../constants';
import { Link } from 'lucide-react';

// 1. IMPORT YOUR IMAGE HERE
// If you have a file, uncomment the line below and comment out the placeholder
// import profileImg from '../assets/profile.jpg'; 

// For now, using a placeholder so it works immediately:
const profileImg = "https://placehold.co/400x400/1e293b/22d3ee?text=Me"; 

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [personalDetails.name]; 
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % textArray.length;
    const fullText = textArray[i];

    setText(isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), period); 
      setTypingSpeed(period); 
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* LEFT SIDE: TEXT */}
        <div className="flex-1 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-mono mb-4 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>
          
          <h1 className="text-4xl md:text-7xl font-bold text-slate-100 mb-4 leading-tight h-[60px] md:h-[90px]">
            {text}
            <span className="border-r-4 border-cyan-400 ml-1 animate-pulse"></span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 leading-tight"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-xl text-slate-400 text-base md:text-lg mb-10 leading-relaxed mx-auto md:mx-0"
          >
            {personalDetails.bio}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a 
              href="#projects"
              className="inline-block border border-cyan-400 text-cyan-400 px-8 py-4 rounded hover:bg-cyan-400/10 transition-colors font-mono"
            >
              Check out my work
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: IMAGE */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Glow Effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            <img 
              src='https://res.cloudinary.com/drrhzkpxn/image/upload/v1767373207/ChatGPT_Image_Jan_2_2026_09_59_32_PM_bytjxn.png' 
              alt="Profile" 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;