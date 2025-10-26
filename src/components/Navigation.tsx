import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'À Propos' },
    { href: '#collections', label: 'Collections' },
    { href: '#services', label: 'Services' },
    { href: '#palace', label: 'Palace' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Name - shown when scrolled */}
            {isScrolled && (
              <div className="animate-fade-in">
                <span className="text-xl font-light tracking-wider text-white">
                  SAMRAE
                </span>
              </div>
            )}
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 ml-auto">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light tracking-wide text-white hover:text-neutral-300 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <div className="relative w-5">
                  <span
                    className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen
                        ? 'rotate-45 translate-y-0'
                        : '-translate-y-1.5'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen
                        ? '-rotate-45 translate-y-0'
                        : 'translate-y-1.5'
                    }`}
                  ></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden fixed inset-x-0 top-0 bg-black/98 backdrop-blur-lg transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100 visible'
              : '-translate-y-full opacity-0 invisible'
          }`}
          style={{ height: '100vh', marginTop: '73px' }}
        >
          <div className="px-8 py-12 h-full overflow-y-auto">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-xl font-light tracking-wide text-white hover:text-neutral-300 transition-all duration-300 py-4 border-b border-neutral-800 last:border-b-0 transform hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
