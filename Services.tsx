import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST } from '../constants';
import { Plane, Building, FileCheck, Moon, Car, Map, ArrowRight } from 'lucide-react';

const iconMap: any = {
  Plane: Plane,
  Building: Building,
  FileCheck: FileCheck,
  Moon: Moon,
  Car: Car,
  Map: Map
};

const Services: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <span className="text-tropicam-orange font-bold uppercase tracking-widest text-xs mb-2 block">Nos Expertises</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-tropicam-navy mb-4 md:mb-6">Tout ce dont vous avez besoin pour voyager</h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Plus qu'une simple agence de voyage, Tropicam est votre partenaire complet. 
                De la réservation de votre vol à l'obtention de votre visa, nous gérons tout.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES_LIST.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                    <div key={service.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-tropicam-navy rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-tropicam-navy group-hover:text-white transition-colors duration-300">
                            <Icon size={32} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-tropicam-navy mb-3 group-hover:text-tropicam-orange transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base">
                            {service.description}
                        </p>
                        
                        {service.link.includes('http') ? (
                             <a href={service.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-tropicam-navy hover:text-tropicam-orange transition-colors">
                                En savoir plus <ArrowRight size={16} />
                            </a>
                        ) : (
                            <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-bold text-tropicam-navy hover:text-tropicam-orange transition-colors">
                                En savoir plus <ArrowRight size={16} />
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 md:mt-20 bg-gradient-to-r from-tropicam-navy to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Besoin d'un service spécifique ?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                    Notre équipe est capable de répondre aux demandes les plus complexes. Voyages d'entreprise, groupes, VIP...
                </p>
                <Link to="/contact" className="bg-white text-tropicam-navy px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-block w-full md:w-auto">
                    Contactez-nous directement
                </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tropicam-orange/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
        </div>

      </div>
    </div>
  );
};

export default Services;