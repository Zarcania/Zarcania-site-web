// jsx runtime enabled; no React import needed
import { Building, Mail, Phone, Scale, Shield, Eye, Lock, Globe, FileText } from 'lucide-react';

const MentionsLegalesPage = () => {
  // Back button removed per request

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
  <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold font-futuristic text-white mb-8 tracking-wide">
            Mentions Légales
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed">
            Informations légales concernant le site web Zarcania et ses services
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* 1. Éditeur du site */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <Building className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                1. Éditeur du site
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300 font-modern">
              <div>
                <strong className="text-white">Dénomination sociale :</strong> Zarcania
              </div>
              <div>
                <strong className="text-white">Forme juridique :</strong> Auto-entreprise (micro-entreprise)
              </div>
              <div>
                <strong className="text-white">Siège social :</strong> 4 rue du colonel Félix Brunet, 91540 Mennecy – France
              </div>
              <div>
                <strong className="text-white">Immatriculée au RCS :</strong> RCS d'Évry
              </div>
              <div>
                <strong className="text-white">Numéro SIREN :</strong> 888 422 615
              </div>
              <div>
                <strong className="text-white">Responsable de la publication :</strong> Anthony Corradi
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                <div>
                  <strong className="text-white">Téléphone :</strong> +33 6 26 44 57 85
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                <div>
                  <strong className="text-white">Email :</strong> contact@zarcania.com
                </div>
              </div>
            </div>
          </div>

          {/* 2. Hébergeur */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                2. Hébergeur du site
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-300 font-modern">
              <p>Le site zarcania.fr est hébergé par :</p>
              <div>
                <strong className="text-white">OVH SAS</strong>
              </div>
              <div>
                <strong className="text-white">Siège social :</strong> 2 rue Kellermann, 59100 Roubaix – France
              </div>
              <div>
                <strong className="text-white">RCS :</strong> Lille Métropole : 424 761 419 00045
              </div>
              <div>
                <strong className="text-white">Code APE :</strong> 2620Z
              </div>
              <div>
                <strong className="text-white">N° TVA intracommunautaire :</strong> FR 22 424 761 419
              </div>
              <div>
                <strong className="text-white">Site web :</strong> 
                <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-2">
                  www.ovh.com
                </a>
              </div>
            </div>
          </div>

          {/* 3. Propriété intellectuelle */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <Scale className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                3. Propriété intellectuelle
              </h2>
            </div>
            
            <div className="text-gray-300 font-modern space-y-4 leading-relaxed">
              <p>
                L'ensemble du contenu présent sur le site zarcania.fr (textes, images, graphismes, logos, vidéos, icônes, etc.) est la propriété exclusive de Zarcania, sauf mention contraire.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, est strictement interdite sans l'accord écrit préalable de Zarcania.
              </p>
            </div>
          </div>

          {/* 4. Données personnelles (RGPD) */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                4. Données personnelles (RGPD)
              </h2>
            </div>
            
            <div className="text-gray-300 font-modern space-y-4 leading-relaxed">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la loi Informatique et Libertés, les informations recueillies via les formulaires du site sont destinées exclusivement à Zarcania et ne seront en aucun cas transmises à des tiers sans consentement.
              </p>
              <div className="bg-slate-700/40 rounded-xl p-4 border border-cyan-500/20">
                <div className="space-y-2">
                  <div><strong className="text-white">Finalités :</strong> gestion des demandes clients, prospection commerciale, amélioration des services.</div>
                  <div><strong className="text-white">Durée de conservation :</strong> 3 ans après le dernier contact.</div>
                  <div><strong className="text-white">Droits :</strong> accès, rectification, suppression et opposition.</div>
                </div>
              </div>
              <p>
                Pour exercer vos droits, contactez-nous à l'adresse suivante : <strong className="text-cyan-400">contact@zarcania.com</strong>
              </p>
              <p>
                En cas de litige, vous pouvez introduire une réclamation auprès de la CNIL (
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                  www.cnil.fr
                </a>
                ).
              </p>
            </div>
          </div>

          {/* 5. Cookies */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                5. Cookies
              </h2>
            </div>
            
            <div className="text-gray-300 font-modern space-y-4 leading-relaxed">
              <p>
                Le site zarcania.fr utilise des cookies afin de :
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Mesurer l'audience (ex. Google Analytics)</li>
                <li>Améliorer l'expérience utilisateur</li>
                <li>Diffuser des contenus adaptés (publicité, réseaux sociaux)</li>
              </ul>
              <p>
                Vous pouvez configurer vos préférences dans votre navigateur ou via le bandeau cookies affiché lors de votre première visite.
              </p>
            </div>
          </div>

          {/* 6. Responsabilité */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                6. Responsabilité
              </h2>
            </div>
            
            <div className="text-gray-300 font-modern space-y-4 leading-relaxed">
              <p>
                Zarcania s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site. Toutefois, nous ne saurions être tenus responsables d'éventuelles erreurs, omissions ou interruptions.
              </p>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites dont nous ne maîtrisons pas le contenu. Zarcania décline toute responsabilité quant aux informations diffusées sur ces sites tiers.
              </p>
            </div>
          </div>

          {/* 7. Droit applicable */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-xl shadow-slate-900/50">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold font-futuristic text-white tracking-wide">
                7. Droit applicable
              </h2>
            </div>
            
            <div className="text-gray-300 font-modern space-y-4 leading-relaxed">
              <p>
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p>
                En cas de litige et à défaut de solution amiable, compétence est attribuée aux tribunaux français compétents.
              </p>
              <p>
                <strong className="text-white">Date de dernière mise à jour :</strong> Janvier 2025
              </p>
            </div>
          </div>
        </div>
      </div>

  {/* Footer rendu par App */}
    </div>
  );
};

export default MentionsLegalesPage;