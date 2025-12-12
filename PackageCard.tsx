import React from 'react';
import { MapPin, Calendar, Clock, ArrowRight, Zap } from 'lucide-react';
import { Package } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 md:h-60 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-tropicam-navy text-xs font-bold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wide flex items-center gap-1">
          <MapPin size={12} className="text-tropicam-orange" />
          {pkg.destination}
        </div>
        
        {pkg.featured && (
            <div className="absolute top-4 left-4 bg-tropicam-orange text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse-slow">
                <Zap size={10} fill="currentColor" />
                TOP VENTE
            </div>
        )}

        <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-1 text-xs font-medium bg-black/30 backdrop-blur-md px-2 py-1 rounded-md inline-flex mb-1">
                <Clock size={12} className="text-tropicam-orange" />
                {pkg.duration}
            </div>
        </div>
      </div>
      
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg md:text-xl font-heading font-bold text-tropicam-navy leading-tight group-hover:text-tropicam-orange transition-colors">
            {pkg.title}
            </h3>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
            {pkg.tags.map((tag, i) => (
                <span key={i} className="text-[10px] bg-gray-50 text-gray-500 border border-gray-100 px-2 py-1 rounded-md font-medium uppercase tracking-wide">
                    {tag}
                </span>
            ))}
        </div>

        <div className="mt-auto pt-4 md:pt-5 border-t border-gray-100 flex items-center justify-between">
            <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">À partir de</p>
                <div className="text-xl md:text-2xl font-extrabold text-tropicam-navy leading-none">
                    {pkg.price.toLocaleString('fr-MA')} <span className="text-xs font-medium text-gray-400">{pkg.currency}</span>
                </div>
            </div>
            <a 
                href={`${WHATSAPP_LINK}?text=Salam Tropicam, je suis intéressé par le package: ${pkg.title}`}
                target="_blank"
                rel="noreferrer"
                className="bg-tropicam-navy group-hover:bg-tropicam-orange text-white px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold text-sm transition-colors flex items-center gap-2 shadow-lg"
            >
                Réserver
                <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;