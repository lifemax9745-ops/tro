import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS, EMAIL, LOGO_SVG_DATA, FACEBOOK_LINK, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-tropicam-navy text-white pt-12 md:pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
                <div className="w-12 h-12 bg-tropicam-orange rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-bold text-xl overflow-hidden p-0.5">
                    <img src={LOGO_SVG_DATA} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                    <span className="font-heading font-extrabold text-xl leading-none tracking-tight">TROPICAM</span>
                    <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-gray-400">VOYAGE</span>
                </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              L'agence de voyage #1 au Maroc. Nous transformons vos rêves d'évasion en réalités inoubliables. Agrément Ministère du Tourisme N° 1234.
            </p>
            <div className="flex gap-4">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropicam-orange transition-colors hover:-translate-y-1 transform duration-300"><Facebook size={18} /></a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropicam-orange transition-colors hover:-translate-y-1 transform duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropicam-orange transition-colors hover:-translate-y-1 transform duration-300"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-tropicam-orange transition-colors hover:-translate-y-1 transform duration-300"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-tropicam-orange after:rounded-full">Agence</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Nos Services</Link></li>
              <li><Link to="/blog" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Blog Voyage</Link></li>
              <li><Link to="/contact" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-tropicam-orange after:rounded-full">Top Destinations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/packages?cat=Turquie" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Voyage Turquie</Link></li>
              <li><Link to="/packages?cat=Dubai" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Voyage Dubaï</Link></li>
              <li><Link to="/packages?cat=Omra" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Omra Ramadan</Link></li>
              <li><Link to="/packages?cat=Europe" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Séjours Europe</Link></li>
              <li><Link to="/packages?cat=Asie" className="hover:text-tropicam-orange transition-colors flex items-center gap-2">Découverte Asie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-tropicam-orange after:rounded-full">Contactez-nous</h4>
            <ul className="space-y-5 text-sm text-gray-400">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 bg-white/5 p-2 rounded-lg group-hover:bg-tropicam-orange transition-colors">
                    <MapPin size={16} className="text-white" />
                </div>
                <span className="leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="bg-white/5 p-2 rounded-lg group-hover:bg-tropicam-orange transition-colors">
                    <Phone size={16} className="text-white" />
                 </div>
                <span className="font-bold text-white">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-4 group">
                 <div className="bg-white/5 p-2 rounded-lg group-hover:bg-tropicam-orange transition-colors">
                    <Mail size={16} className="text-white" />
                 </div>
                <span>{EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2025 Tropicam Voyage. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">CGV</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Plan du site</a>
          </div>
          <p className="flex items-center gap-1">Fait avec <span className="text-red-500">♥</span> au Maroc 🇲🇦</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;