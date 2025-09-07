import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import GlitchText from './GlitchText';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-20 bg-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Rendez-vous confirmé !</h2>
            <p className="text-xl text-gray-300 mb-8">
              Merci pour votre demande. Vous serez recontacté sous 24h pour confirmer votre créneau.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
            >
              Prendre un autre rendez-vous
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-12 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 relative z-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold font-futuristic text-white mb-6 tracking-wide">
              Prendre rendez-vous
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-modern">
            Réservez votre créneau pour découvrir comment nous pouvons créer votre site web en 7 jours.
          </p>
        </div>

        {/* Process */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 relative z-10 animate-fadeInUp animate-delay-200">
          {[
            { step: '1', title: 'Rendez-vous', description: 'Présentation et devis personnalisé (1h)' },
            { step: '2', title: 'Prévisualisation', description: 'Aperçu de votre site avec notre IA' },
            { step: '3', title: 'Développement', description: 'Finalisation par notre équipe' },
            { step: '4', title: 'Livraison', description: 'Votre site en ligne en 7 jours' }
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              {/* Ligne de connexion animée */}
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-slate-700/30 rounded-full overflow-hidden z-0">
                  <div className={`h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full step-line-${index + 1}`} style={{ width: '0%' }} />
                </div>
              )}
              
              {/* Cercle avec animation */}
              <div className={`relative w-20 h-20 rounded-full flex items-center justify-center text-white font-bold font-futuristic text-xl mx-auto mb-6 z-10 step-circle-${index + 1} transition-all duration-300`}>
                {/* Numéro */}
                <span className="relative z-10">{item.step}</span>
              </div>
              
              {/* Texte avec animation de révélation */}
              <h3 className={`text-xl font-bold font-futuristic text-white mb-3 tracking-wide step-text-${index + 1}`}>
                {item.title}
              </h3>
              <p className={`text-gray-300 text-sm font-modern leading-relaxed step-text-${index + 1}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Appointment Form */}
        <div className="max-w-4xl mx-auto relative z-10 animate-scaleIn animate-delay-300">
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-xl shadow-slate-900/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date Selection */}
              <div>
                <label className="flex items-center text-white font-semibold mb-4">
                  <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                  Choisissez une date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 bg-slate-700/80 backdrop-blur-sm border border-cyan-500/40 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors shadow-lg"
                  required
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="flex items-center text-white font-semibold mb-4">
                  <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                  Choisissez un horaire
                </label>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        selectedTime === time
                          ? 'bg-cyan-500 border-cyan-400 text-white'
                          : 'bg-slate-700 border-cyan-500/30 text-gray-300 hover:border-cyan-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-white font-semibold font-modern mb-3">
                    <User className="w-5 h-5 mr-2 text-cyan-400" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="flex items-center text-white font-semibold font-modern mb-3">
                    <Mail className="w-5 h-5 mr-2 text-cyan-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-white font-semibold mb-3">
                  <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="flex items-center text-white font-semibold mb-3">
                  <MessageSquare className="w-5 h-5 mr-2 text-cyan-400" />
                  Description de votre projet
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez brièvement votre projet..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Réserver mon créneau
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;