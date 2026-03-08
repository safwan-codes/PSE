import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { companyInfo, navLinks, contactInfo } from '../../data/mock';
import { Button } from '../ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=Hello%20I%20would%20like%20to%20enquire%20about%20your%20services`,
      '_blank'
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/98 backdrop-blur-md shadow-lg shadow-[#d4af37]/5 border-b border-[#d4af37]/10'
          : 'bg-gradient-to-b from-[#0a0a0a]/90 to-transparent'
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#1a1a1a] border-b border-[#d4af37]/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <p className="text-[#d4af37] text-sm font-medium tracking-wide">
            {companyInfo.gujaratiPunchLine}
          </p>

          <div className="flex items-center gap-6">

            {/* Phone */}
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="flex items-center gap-2 text-[#faf8f5] text-sm hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              <Phone size={14} />
              {contactInfo.phones[0]}
            </a>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 text-[#faf8f5] text-sm hover:text-[#d4af37] transition-colors cursor-pointer"
            >
              <MessageCircle size={14} />
              WhatsApp
            </button>

          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-14 w-14 object-contain rounded-full border-2 border-[#d4af37]/50 group-hover:border-[#d4af37] transition-all duration-300"
            />
            <div className="hidden sm:block">
              <h1 className="text-[#d4af37] font-serif text-lg font-bold tracking-wide">
                {companyInfo.shortName}
              </h1>
              <p className="text-[#faf8f5]/70 text-xs">
                Since {companyInfo.established}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#d4af37]'
                    : 'text-[#faf8f5]/80 hover:text-[#d4af37]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 cursor-pointer font-semibold"
            >
              Contact Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#d4af37] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#d4af37]/20 pt-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.path
                      ? 'text-[#d4af37]'
                      : 'text-[#faf8f5]/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button
                onClick={handleWhatsApp}
                className="w-full mt-2 bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030]"
              >
                Contact Now
              </Button>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;