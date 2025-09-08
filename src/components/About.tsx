import LogoLoop from './LogoLoop';
import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiGit, SiFigma } from 'react-icons/si';

const About = () => {
  const team = [
    {
      name: 'Anthony Corradi',
      role: 'Fondateur de ZA',
      image: '/team-anthony.jpg'
    },
    {
      name: 'Jordan Corradi',
      role: 'Développeur Full-Stack',
      image: '/team-jordan.jpg'
    }
  ];

  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 bg-transparent relative">
      {/* Overlay subtil pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-blue-900/20 to-slate-900/40" />
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center margin-responsive relative z-10 animate-fadeInUp mb-12 md:mb-16 lg:mb-20">
          <h2 className="heading-responsive font-bold font-futuristic text-white margin-responsive tracking-wide">
              À propos
          </h2>
          <div className="text-responsive-base text-gray-300 max-w-4xl mx-auto font-modern space-y-3 sm:space-y-4 leading-relaxed">
            <p>
              <strong>Zarcania</strong> est une agence web professionnelle créée en 2025 par <strong>Anthony Corradi</strong>, spécialisée dans la création rapide de sites internet à Paris.
            </p>
            <p>
              Notre expertise couvre la <strong>création de sites vitrines professionnels</strong>, le <strong>développement e-commerce</strong> et les <strong>applications web sur mesure</strong>. Nous combinons savoir-faire humain et technologies modernes pour livrer des sites web performants en 7 jours maximum.
            </p>
            <p>
              Chaque projet bénéficie d'un <strong>design responsive</strong>, d'une <strong>optimisation SEO</strong> et d'un <strong>support technique inclus</strong>. Notre approche garantit des sites web modernes, rapides et optimisés pour les moteurs de recherche.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="margin-responsive relative z-10 animate-fadeInUp animate-delay-300 mb-12 md:mb-16">
          <h3 className="heading-responsive-sm font-bold text-white text-center margin-responsive">
              Notre Équipe
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative mb-6 sm:mb-8 md:mb-10">
                  <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 mx-auto rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-cyan-400/50 group-hover:border-cyan-400 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 animate-pulse-glow bg-slate-800/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-futuristic tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-cyan-300 text-base sm:text-lg md:text-xl font-modern group-hover:text-cyan-200 transition-colors duration-300">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Technologies Section */}
      <div className="margin-responsive relative z-10 animate-fadeInUp animate-delay-400">
        <div className="text-center mb-8">
          <h3 className="heading-responsive-sm font-bold text-white text-center margin-responsive font-futuristic tracking-wide">
            Technologies que nous maîtrisons
          </h3>
          <p className="text-gray-300 font-modern text-sm max-w-2xl mx-auto">
            Nous utilisons les dernières technologies pour créer des sites web modernes et performants
          </p>
        </div>
        
        <div className="bg-slate-800/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 overflow-hidden">
          <LogoLoop
            logos={[
              { node: <SiReact />, title: "React", href: "https://react.dev" },
              { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
              { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
              { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
              { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
              { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
              { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
              { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
            ]}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="rgba(15, 23, 42, 1)"
            ariaLabel="Technologies utilisées par Zarcania"
            className="tech-logos"
          />
        </div>
      </div>
    </section>
  );
};

export default About;