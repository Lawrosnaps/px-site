import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-deepPurple/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-8">
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src="/media/87px logo-white teal.png" alt="87px Logo" className="h-16 w-auto" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="font-inter text-sm text-off-white/70 hover:text-electricTeal transition-colors uppercase tracking-wider"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="font-inter text-sm text-off-white/70 hover:text-electricTeal transition-colors uppercase tracking-wider"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="font-inter text-sm text-off-white/70 hover:text-electricTeal transition-colors uppercase tracking-wider"
          >
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;