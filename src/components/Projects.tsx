// components/Projects.tsx
import ScrollReveal from "./UI/ScrollReveal";

export default function Projects() {


  const projects = [
    {
      title: "NEET AI Platform",
      description: "Full-stack educational platform with AI-powered features, built with React, Node.js, MongoDB, and AWS integration for scalable learning experiences.",
      technologies: ["React.js", "Node.js", "MongoDB", "AWS", "AI/ML"],
      category: "Education Platform",
      icon: "🎓"
    },
    {
      title: "E-commerce Website",
      description: "Complete MERN stack e-commerce solution with Stripe payment integration, Firebase authentication, and real-time inventory management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Firebase"],
      category: "E-commerce",
      icon: "🛒"
    },
    {
      title: "Internal Dashboard",
      description: "Enterprise-grade dashboard built with Next.js, TypeScript, and Material UI. Features advanced data visualization and user management systems.",
      technologies: ["Next.js", "TypeScript", "Material UI", "Chart.js"],
      category: "Dashboard",
      icon: "📊"
    }
  ];

  return (
    <ScrollReveal 
      direction="zoom"
      showBackground={true}
      backgroundColor="from-slate-900 via-purple-900 to-slate-900"
    >
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section id="projects" className="relative overflow-hidden py-20 px-6">
        {/* Background Decorations - Portfolio style */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header - Updated to match Skills component */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              FEATURED PROJECTS
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in modern web technologies 
              and commitment to delivering high-quality, scalable solutions.
            </p>
          </div>

          {/* Projects Grid - Updated with Skills component styling */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  index % 3 === 0 ? 'hover:border-emerald-500/50' :
                  index % 3 === 1 ? 'hover:border-pink-500/50' :
                  'hover:border-blue-500/50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    index % 3 === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                    index % 3 === 1 ? 'bg-gradient-to-r from-pink-500 to-violet-500' :
                    'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    index % 3 === 0 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                    index % 3 === 1 ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' :
                    'bg-blue-500/20 text-blue-300 border-blue-500/30'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-lg text-xs border border-white/20 hover:bg-white/15 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action - Updated styling */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-xl mx-auto hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50 hover:scale-105">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Check out my GitHub for more projects and contributions to the open-source community.
              </p>
              <a
                href="https://github.com/Prabhakar9169"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                <span>View GitHub</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </ScrollReveal>
  );
}