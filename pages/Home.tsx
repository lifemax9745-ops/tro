import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Headset, Plane, Star, Check, Globe, Users, Map, Hotel, FileCheck, Car } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { PACKAGES, TESTIMONIALS, PARTNERS } from '../constants';

const Home: React.FC = () => {
  const featuredPackages = PACKAGES.filter(p => p.featured).slice(0, 3);

  const popularDestinations = [
    { name: 'Turquie', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1000&auto=format&fit=crop', count: '15+ Offres' },
    { name: 'Dubaï', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop', count: '8+ Offres' },
    { name: 'Espagne', img: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop', count: '12+ Offres' },
    { name: 'Thailande', img: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?auto=format&fit=crop&w=1000&q=80', count: '5+ Offres' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Overlay & Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-tropicam-navy/70 via-tropicam-navy/40 to-tropicam-navy/80 z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
            alt="Travel background" 
            className="absolute inset-0 w-full h-full object-cover animate-pulse-slow scale-105"
        />
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto mt-16 md:mt-0">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold mb-4 md:mb-6 tracking-widest uppercase animate-fade-in-up">
                <Star size={12} className="text-tropicam-orange fill-current" />
                Agence N°1 au Maroc
                <Star size={12} className="text-tropicam-orange fill-current" />
            </div>
            
            <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">
                Explorez le Monde <br/> avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropicam-orange to-orange-400">Excellence</span>
            </h1>
            
            <p className="text-gray-100 text-sm md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-4">
                Voyages organisés, Omra, Vols & Hôtels. <br className="hidden md:block"/>
                Vivez une expérience de voyage inoubliable avec Tropicam Voyage.
            </p>
            
            {/* Professional Search Box */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-2 animate-fade-in-up delay-100">
                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-100 focus-within:ring-2 focus-within:ring-tropicam-orange/20 transition-all w-full">
                    <Map className="text-tropicam-orange shrink-0" size={24} />
                    <div className="text-left w-full">
                        <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Destination</label>
                        <input type="text" placeholder="Où aller ?" className="w-full bg-transparent focus:outline-none text-gray-800 font-bold placeholder-gray-400 text-sm md:text-base" />
                    </div>
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-gray-100 focus-within:ring-2 focus-within:ring-tropicam-orange/20 transition-all w-full">
                    <Plane className="text-tropicam-orange shrink-0" size={24} />
                     <div className="text-left w-full">
                        <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Type de Voyage</label>
                        <select className="w-full bg-transparent focus:outline-none text-gray-800 font-bold appearance-none cursor-pointer text-sm md:text-base">
                            <option>Voyage Organisé</option>
                            <option>Omra</option>
                            <option>Vol Sec</option>
                            <option>Hôtel</option>
                        </select>
                    </div>
                </div>

                <Link to="/packages" className="bg-tropicam-navy hover:bg-tropicam-orange text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg md:w-auto w-full group shrink-0">
                    <Search size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="md:hidden lg:inline">Rechercher</span>
                </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-white/80 text-sm font-medium">
                <span className="flex items-center gap-2"><Check size={14} className="text-tropicam-orange" /> Meilleur Prix Garanti</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-tropicam-orange" /> Agence Certifiée</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-tropicam-orange" /> Support 24/7</span>
            </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="bg-white py-10 md:py-12 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 md:mb-10">Nos Partenaires de Confiance</p>
            
            {/* Grid Layout for perfect responsive alignment */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
                {PARTNERS.map((partner, index) => (
                    <div 
                        key={index} 
                        className="w-full h-16 md:h-20 flex items-center justify-center cursor-pointer group"
                    >
                        <img 
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-[35px] md:max-h-[50px] max-w-[120px] md:max-w-[140px] w-auto h-auto object-contain transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              // Fallback to text if image fails
                              e.currentTarget.style.display = 'none';
                              const span = document.createElement('span');
                              span.innerText = partner.name;
                              span.className = "text-sm font-heading font-bold text-gray-400 group-hover:text-tropicam-navy transition-colors text-center";
                              e.currentTarget.parentElement?.appendChild(span);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Popular Destinations Grid */}
      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Destinations Populaires</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">Les pays préférés des voyageurs marocains cette année.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {popularDestinations.map((dest, idx) => (
                <Link to={`/packages?cat=${dest.name}`} key={idx} className="relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer h-48 md:h-[300px]">
                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                        <h3 className="text-lg md:text-xl font-bold font-heading mb-1">{dest.name}</h3>
                        <p className="text-[10px] md:text-xs text-white/80 font-medium bg-white/20 inline-block px-2 py-1 rounded backdrop-blur-sm group-hover:bg-tropicam-orange transition-colors">
                            {dest.count}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-12 md:py-16 bg-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <Link to="/services" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-blue-50 text-tropicam-navy rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-tropicam-navy group-hover:text-white transition-colors">
                        <Plane size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Billets d'Avion</h3>
                    <p className="text-[10px] md:text-xs text-gray-500">Tarifs négociés</p>
                </Link>
                <Link to="/services" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-orange-50 text-tropicam-orange rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-tropicam-orange group-hover:text-white transition-colors">
                        <Hotel size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Hôtels</h3>
                    <p className="text-[10px] md:text-xs text-gray-500">Hébergement</p>
                </Link>
                <Link to="/services" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <FileCheck size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Visas</h3>
                    <p className="text-[10px] md:text-xs text-gray-500">Assistance</p>
                </Link>
                <Link to="/contact" className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
                    <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Users size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-bold text-tropicam-navy mb-1 text-sm md:text-base">Sur Mesure</h3>
                    <p className="text-[10px] md:text-xs text-gray-500">Voyage à la carte</p>
                </Link>
            </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
            <div>
                <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Offres Limitées</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy leading-tight">Nos Meilleurs Packages ✈️</h2>
            </div>
            <Link to="/packages" className="group flex items-center gap-2 text-tropicam-navy font-bold hover:text-tropicam-orange transition-colors text-sm md:text-base">
                Voir toutes les offres 
                <span className="bg-gray-100 p-2 rounded-full group-hover:bg-tropicam-orange group-hover:text-white transition-colors"><ArrowIcon /></span>
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredPackages.map(pkg => (
                <PackageCard key={pkg.id} pkg={pkg} />
            ))}
        </div>
      </section>

      {/* Omra Highlight Section */}
      <section className="py-16 md:py-24 bg-tropicam-navy relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-tropicam-orange rounded-full blur-[128px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                    <div className="inline-block border border-orange-500/30 bg-orange-500/10 backdrop-blur text-tropicam-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                        Spécial Spiritualité
                    </div>
                    <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">
                        Omra & Hajj <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-tropicam-orange">Sérénité Absolue</span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                        Confiez votre voyage spirituel à des experts. Hôtels 5* face au Haram, encadrement religieux par des savants reconnus, et prise en charge totale de A à Z.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left">
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                            <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                            <span className="font-medium text-sm">Visa Omra Inclus</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                             <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                            <span className="font-medium text-sm">Transferts VIP</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                             <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                            <span className="font-medium text-sm">Proximité Haram</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/90 bg-white/5 p-3 rounded-xl border border-white/10">
                             <div className="bg-tropicam-orange p-1.5 rounded-full"><Check size={14} className="text-white" /></div>
                            <span className="font-medium text-sm">Guides Francophones</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Link to="/packages?cat=Omra" className="bg-gradient-to-r from-tropicam-orange to-orange-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold shadow-xl shadow-orange-900/30 hover:scale-105 transition-transform inline-flex items-center gap-2">
                            Voir les offres Omra
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>

                <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-full order-first md:order-last">
                     <div className="relative z-20 rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop" alt="Mecque" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-lg">Makkah Al Mukarramah</p>
                            <p className="text-xs opacity-80">Départs chaque semaine</p>
                        </div>
                     </div>
                     {/* Decorative Elements */}
                     <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-tropicam-orange/30 rounded-3xl -z-10 hidden md:block"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                  <div className="text-center px-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-blue-50 text-tropicam-navy rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3 hover:rotate-0 transition-all duration-300">
                          <ShieldCheck size={32} className="md:w-10 md:h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-tropicam-navy mb-3">Agence Certifiée & Agréée</h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">Licence officielle du Ministère du Tourisme Marocain. Voyagez l'esprit tranquille avec toutes les garanties légales.</p>
                  </div>
                  <div className="text-center px-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-orange-50 text-tropicam-orange rounded-2xl flex items-center justify-center mb-6 shadow-sm -rotate-3 hover:rotate-0 transition-all duration-300">
                          <Globe size={32} className="md:w-10 md:h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-tropicam-navy mb-3">Expertise Locale & Mondiale</h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">Une équipe marocaine passionnée qui connaît vos besoins, connectée à un réseau international de partenaires.</p>
                  </div>
                  <div className="text-center px-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm rotate-3 hover:rotate-0 transition-all duration-300">
                          <Headset size={32} className="md:w-10 md:h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-tropicam-navy mb-3">Support Client 7j/7</h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">Une question ? Un souci ? Notre équipe est disponible sur WhatsApp et par téléphone à tout moment pour vous assister.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-gray-50 container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-tropicam-navy mb-4">Avis Clients</h2>
            <div className="w-24 h-1 bg-tropicam-orange mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map(testi => (
                <div key={testi.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow relative border border-gray-100">
                    <div className="absolute -top-4 left-8 text-6xl text-tropicam-orange/20 font-serif">"</div>
                    <div className="flex gap-1 mb-4 md:mb-6 text-yellow-400">
                        {[...Array(testi.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10 text-sm md:text-base">{testi.text}</p>
                    <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                        <div className="w-10 h-10 bg-tropicam-navy text-white rounded-full flex items-center justify-center font-bold">
                            {testi.name[0]}
                        </div>
                        <div>
                            <h4 className="font-bold text-tropicam-navy text-sm">{testi.name}</h4>
                            <span className="text-xs text-gray-500 flex items-center gap-1"><Map size={10} /> {testi.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 md:py-20 bg-tropicam-navy">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Prêt à partir ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">Rejoignez plus de 10 000 voyageurs marocains satisfaits. Recevez nos offres exclusives directement.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Votre email" className="px-6 py-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-tropicam-orange text-gray-800" />
                <button className="bg-tropicam-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap">
                    M'inscrire
                </button>
            </div>
        </div>
      </section>

    </div>
  );
};

const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default Home;