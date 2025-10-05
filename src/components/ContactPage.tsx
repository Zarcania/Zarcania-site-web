import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
// import GlitchText from './GlitchText';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    societe: '',
    message: '',
    honeypot: '', // Champ anti-spam caché
    consent: false // Case de consentement RGPD
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Protection anti-spam : vérifier le honeypot
    if (formData.honeypot !== '') {
      console.warn('Tentative de spam détectée');
      return;
    }
    
    // Vérifier le consentement RGPD
    if (!formData.consent) {
      alert('Veuillez accepter notre politique de confidentialité pour continuer.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplacer par API)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ 
          nom: '', 
          prenom: '', 
          email: '', 
          societe: '', 
          message: '', 
          honeypot: '',
          consent: false 
        });
      }, 3000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold font-futuristic text-white mb-8 tracking-wide">
              Contact
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed">
            Une question ? Un projet ? Contactez-nous directement via nos coordonnées ou utilisez notre formulaire.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-xl shadow-slate-900/50 h-fit">
              <h3 className="text-xl font-bold font-futuristic text-white mb-6 tracking-wide">Nos coordonnées</h3>
              
              {/* Logo Zarcania */}
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/logo.png?v=4" 
                  alt="Zarcania Logo" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-modern mb-1 text-base">Email</h4>
                    <p className="text-gray-300 font-modern text-sm">contact@zarcania.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-modern mb-1 text-base">Téléphone</h4>
                    <p className="text-gray-300 font-modern text-sm">06.51.79.27.90</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-xl shadow-slate-900/50">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-futuristic text-white mb-4 tracking-wide">Message envoyé !</h3>
                  <p className="text-gray-300 font-modern">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold font-futuristic text-white mb-8 tracking-wide">
                      Nous contacter
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white font-semibold font-modern mb-3">Nom</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-slate-700/80 backdrop-blur-sm border border-cyan-500/40 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold font-modern mb-3">Prénom</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-slate-700/80 backdrop-blur-sm border border-cyan-500/40 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold font-modern mb-3">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold font-modern mb-3">Nom de la société</label>
                      <input
                        type="text"
                        name="societe"
                        value={formData.societe}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold font-modern mb-3">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full p-4 bg-slate-700 border border-cyan-500/30 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                        placeholder="Décrivez votre projet ou posez votre question..."
                        required
                      />
                    </div>

                    {/* Champ honeypot caché (anti-spam) */}
                    <div className="hidden">
                      <label htmlFor="website">Ne pas remplir ce champ</label>
                      <input
                        type="text"
                        name="honeypot"
                        id="website"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Case de consentement RGPD */}
                    <div className="flex items-start space-x-3 p-4 bg-slate-700/50 border border-cyan-500/20 rounded-xl">
                      <input
                        type="checkbox"
                        name="consent"
                        id="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-cyan-500 bg-slate-600 border-cyan-500/40 rounded focus:ring-cyan-400 focus:ring-2"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-300 font-modern leading-relaxed">
                        J'accepte que mes données personnelles soient traitées par Zarcania dans le cadre de ma demande de contact. 
                        Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression en nous contactant. 
                        <a 
                          href="/mentions-legales" 
                          className="text-cyan-400 hover:text-cyan-300 underline ml-1"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Voir notre politique de confidentialité
                        </a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.consent}
                      className={`w-full py-4 text-white font-semibold font-modern rounded-xl transition-all duration-300 flex items-center justify-center ${
                        isSubmitting || !formData.consent
                          ? 'bg-gray-600 cursor-not-allowed opacity-50'
                          : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                      }`}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

  {/* Footer rendu par App */}
    </div>
  );
};

export default ContactPage;