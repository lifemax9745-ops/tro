import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
            <h1 className="font-heading text-4xl font-bold text-tropicam-navy mb-4">Contactez-nous</h1>
            <p className="text-gray-500">Notre équipe est à votre disposition pour réaliser le voyage de vos rêves.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info Cards */}
            <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full text-tropicam-navy">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-tropicam-navy">Téléphone & WhatsApp</h3>
                        <p className="text-gray-500 text-sm mb-2">Disponible 7j/7 de 9h à 20h</p>
                        <p className="font-bold text-tropicam-orange text-xl">{PHONE_NUMBER}</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-orange-50 p-3 rounded-full text-tropicam-orange">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-tropicam-navy">Notre Agence</h3>
                        <p className="text-gray-500 text-sm mb-2">Venez nous rencontrer autour d'un thé</p>
                        <p className="font-medium text-gray-700">123 Boulevard Mohammed V,<br/>20000 Casablanca, Maroc</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-gray-600">
                        <Clock size={24} />
                    </div>
                    <div className="w-full">
                        <h3 className="font-bold text-lg text-tropicam-navy mb-3">Horaires d'ouverture</h3>
                        <div className="grid grid-cols-[auto_auto] gap-x-8 gap-y-2 text-sm text-gray-600 w-full max-w-sm">
                            <span className="font-medium">Lundi - Vendredi :</span>
                            <span className="text-right font-bold text-tropicam-navy">09:00 - 19:00</span>
                            
                            <span className="font-medium">Samedi :</span>
                            <span className="text-right font-bold text-tropicam-navy">09:00 - 13:00</span>
                            
                            <span className="font-medium">Dimanche :</span>
                            <span className="text-right text-tropicam-orange font-bold">Fermé</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] relative shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 font-bold flex flex-col items-center">
                        <MapPin size={48} className="mb-2 text-gray-400" />
                        Carte Google Maps Integration
                    </p>
                </div>
                {/* In real app: <iframe src="..." /> */}
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;