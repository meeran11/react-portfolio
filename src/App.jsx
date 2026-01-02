import Navbar from './components/NavBar';
import Hero from './components/hero';
import Projects from './components/projectgrid';
import Contact from './components/Contact';
import { skills } from './constants';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-cyan-300 selection:text-slate-900">
      
      <Navbar />

      <main>
        <Hero />
        
        {/* Skills Section - Responsive wrapper */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-5xl mx-auto px-6 md:px-20">
             <h2 className="text-2xl justify-center md:text-3xl font-bold text-blue-400/80 mb-10 flex items-center">
                Tech Stack
             </h2>
             <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 w-20 md:w-auto group">
                    <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-slate-400 text-xs md:text-sm font-mono">{skill.name}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <Projects />
        
        <Contact />

        <footer className="py-6 text-center text-slate-500 font-mono text-xs md:text-sm mb-4">
          <p>Designed & Built by Meeran Uz Zaman</p>
        </footer>
      </main>
    </div>
  )
}

export default App