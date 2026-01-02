import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-cyan-400 font-verdana text-3xl font-bold">MUZ.</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-verdana text-slate-300">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="hover:text-cyan-400 hover:underline hover:underline-offset-8 decoration-2 decoration-cyan-400 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-slate-300 hover:text-cyan-400 font-verdana block hover:underline hover:underline-offset-8 decoration-cyan-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;