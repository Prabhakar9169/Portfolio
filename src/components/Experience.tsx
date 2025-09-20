// components/Experience.tsx
import ScrollReveal from "./UI/ScrollReveal";

export default function Experience() {


  const experiences = [
    {
      role: "Full Stack Web Developer",
      company: "Zynka Technologies",
      period: "Jan 2025 – Present",
      description: "Built a scalable internal dashboard using Next.js, TypeScript, and Material UI. Integrated APIs and collaborated with the backend team (NestJS) for smooth data flow and implementation.",
      technologies: ["Next.js", "TypeScript", "Material UI", "NestJS"]
    },
    {
      role: "Frontend Developer",
      company: "Growhut Technologies Pvt. Ltd.",
      period: "Sep 2024 – Dec 2024",
      description: "Developed responsive UI components with React.js and Tailwind CSS. Integrated REST APIs for interactive, data-driven features and enhanced performance through lazy loading and code splitting techniques.",
      technologies: ["React.js", "Tailwind CSS", "REST APIs", "Performance Optimization"]
    },
    {
      role: "Full Stack Web Developer",
      company: "Simple AI",
      period: "Jan 2023 – Feb 2024",
      description: "Created NEET examination platform using React.js, Node.js, and MongoDB. Implemented secure JWT-based authentication and deployed backend to AWS EC2 with focus on user-centric design.",
      technologies: ["React.js", "Node.js", "MongoDB", "JWT", "AWS EC2"]
    }
  ];


  return (
    <ScrollReveal 
      direction="zoom"
      showBackground={true}
      backgroundColor="from-slate-900 via-purple-900 to-slate-900"
    >
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section id="experience" className="relative overflow-hidden py-20 px-6">
        {/* Background Decorations - Portfolio style */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Over <span className="text-emerald-400 font-semibold">3+ years</span> of hands-on experience 
              in building modern web applications and delivering exceptional user experiences.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  index % 3 === 0 ? 'hover:border-emerald-500/50' : 
                  index % 3 === 1 ? 'hover:border-pink-500/50' : 
                  'hover:border-blue-500/50'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                      index % 3 === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 
                      index % 3 === 1 ? 'bg-gradient-to-r from-pink-500 to-violet-500' :
                      'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      <span className="text-2xl">💼</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                      <p className="text-white/70 text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium border mt-4 md:mt-0 ${
                    index % 3 === 0 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 
                    index % 3 === 1 ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' :
                    'bg-blue-500/20 text-blue-300 border-blue-500/30'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-lg text-sm border border-white/20 hover:bg-white/15 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </ScrollReveal>
  );
}