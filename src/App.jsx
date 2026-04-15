import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/NavBar';
import Hero from './components/hero';
import TechStack from './components/TechStack';
import Projects from './components/projectgrid';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
    }}>
      {/* Particle canvas behind everything */}
      <ParticleBackground />

      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />

        <main>
          <Hero />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;