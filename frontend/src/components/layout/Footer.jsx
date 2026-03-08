import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Mail, Clock, Award } from 'lucide-react';
import { companyInfo, navLinks, contactInfo } from '../../data/mock';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#d4af37]/30 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08] via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_20%_100%,rgba(212,175,55,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_80%_100%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_80%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
      </div>
      
      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                className="h-16 w-16 object-contain rounded-full border-2 border-[#d4af37]/50"
              />
              <div>
                <h3 className="text-[#d4af37] font-serif text-xl font-bold">
                  {companyInfo.shortName}
                </h3>
                <p className="text-[#faf8f5]/60 text-sm">Since {companyInfo.established}</p>
              </div>
            </div>
            <p className="text-[#faf8f5]/70 text-sm leading-relaxed">
              {companyInfo.signatureLine}
            </p>
            <div className="flex items-center gap-2 text-[#d4af37]">
              <Award size={18} />
              <span className="text-sm font-medium">18+ Years of Trust</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-[#faf8f5]/70 hover:text-[#d4af37] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-6 text-lg">Accounting & Tax Services</h4>
            <ul className="space-y-3">
              <li className="text-[#faf8f5]/70 text-sm">GST Registration & Filing</li>
              <li className="text-[#faf8f5]/70 text-sm">Income Tax Returns</li>
              <li className="text-[#faf8f5]/70 text-sm">PAN Card Services</li>
              <li className="text-[#faf8f5]/70 text-sm">Passport Services</li>
              <li className="text-[#faf8f5]/70 text-sm">University Admissions</li>
              <li className="text-[#faf8f5]/70 text-sm">Distance Education</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#d4af37] font-semibold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <p className="text-[#faf8f5]/70 text-sm">
                  {contactInfo.address.line1}<br />
                  {contactInfo.address.line2}<br />
                  {contactInfo.address.line3}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4af37] flex-shrink-0" />
                <div className="text-sm">
                  {contactInfo.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block text-[#faf8f5]/70 hover:text-[#d4af37] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-[#faf8f5]/70 hover:text-[#d4af37] transition-colors"
              >
                <MessageCircle size={18} className="text-[#d4af37]" />
                <span className="text-sm">Chat on WhatsApp</span>
              </button>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#d4af37] flex-shrink-0" />
                <p className="text-[#faf8f5]/70 text-sm">Mon - Sat: 10AM - 7PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#faf8f5]/50 text-sm text-center md:text-left">
              © 2005–{new Date().getFullYear()} {companyInfo.name}. All Rights Reserved. 
| Founded by Sarfaraz M. Tai | Developed by Safwan Tai
            </p>
            <p className="text-[#d4af37] text-sm font-medium">
              {companyInfo.gujaratiPunchLine}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
