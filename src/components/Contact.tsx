import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import GlitchText from './GlitchText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-blue-900/20 to-slate-900/40" />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 relative z-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold font-futuristic text-white mb-6 tracking-wide">
              Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-modern">
            Une question ? Un projet ? Contactez-nous directement via nos coordonnées ci-dessous.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Contact Information - Centré */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-futuristic text-white mb-6 tracking-wide">Nos coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-modern mb-1">Email</h4>
                    <p className="text-gray-300 font-modern">contact@spaceweb.fr</p>
                    <p className="text-gray-300 font-modern">contact@zarcania.fr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-modern mb-1">Téléphone</h4>
                    <p className="text-gray-300 font-modern">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-modern mb-1">Adresse</h4>
                    <p className="text-gray-300">
                    </p>
                    <p className="text-gray-300 font-modern">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-futuristic text-white mb-4 tracking-wide">Mentions légales</h3>
              <div className="text-gray-300 text-sm space-y-2 font-modern">
                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                <p><strong>TVA :</strong> FR12345678901</p>
                <p><strong>Responsable :</strong> Alex Dubois</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;