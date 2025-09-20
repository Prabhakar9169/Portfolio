// components/Skills.tsx
"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./UI/ScrollReveal";

export default function Skills() {


  // Technical skills with backend skills added
  const technicalSkills = [
    { category: "Frontend", skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Redux"], icon: "🎨" },
    { category: "Backend", skills: ["Node.js", "Express.js", "REST APIs"], icon: "⚙️" },
    { category: "Styling", skills: ["Tailwind CSS", "CSS3", "Bootstrap", "Material UI"], icon: "💅" },
    { category: "Cloud & Tools", skills: ["AWS", "Git", "Docker", "npm/yarn"], icon: "☁️" },
    { category: "Database", skills: ["MongoDB"], icon: "🗄️" },
  ];

  // Soft skills from About component
  const softSkills = [
    "Problem Solving", "Team Collaboration", "Code Review", 
    "Agile Development", "UI/UX Design", "Performance Optimization"
  ];

  // Core values from About component
  const coreValues = [
    {
      title: "Innovation",
      description: "Always exploring cutting-edge technologies and best practices to deliver modern solutions.",
      icon: "💡"
    },
    {
      title: "User-Centric",
      description: "Designing with empathy, ensuring every interface is intuitive and accessible to all users.",
      icon: "🎨"
    },
    {
      title: "Performance",
      description: "Optimizing every line of code for speed, scalability, and exceptional user experience.",
      icon: "🚀"
    }
  ];

  return (
    <ScrollReveal 
    direction="down"
    showBackground={true}
    backgroundColor="from-slate-900 via-purple-900 to-slate-900"
  >
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section id="skills" className="relative overflow-hidden py-20 px-6">
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
              SKILLS & EXPERTISE
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and methodologies, 
              refined through years of hands-on experience and continuous learning.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-10">
              Technical Expertise
            </h3>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {technicalSkills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="group relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-64 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    index % 5 === 0 ? 'hover:border-emerald-500/50' :
                    index % 5 === 1 ? 'hover:border-pink-500/50' :
                    index % 5 === 2 ? 'hover:border-blue-500/50' :
                    index % 5 === 3 ? 'hover:border-yellow-500/50' :
                    'hover:border-indigo-500/50'
                  }`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        index % 5 === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                        index % 5 === 1 ? 'bg-gradient-to-r from-pink-500 to-violet-500' :
                        index % 5 === 2 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                        index % 5 === 3 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-indigo-500 to-purple-500'
                      }`}>
                        <span className="text-2xl">{skillGroup.icon}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white">{skillGroup.category}</h4>
                    </div>
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill) => (
                        <div key={skill} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-3"></div>
                          <span className="text-white/70 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Professional Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Professional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-transparent text-white text-center mb-10">
              Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={value.title} 
                  className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center ${
                    index === 0 ? 'hover:border-emerald-500/50' :
                    index === 1 ? 'hover:border-pink-500/50' :
                    'hover:border-blue-500/50'
                  }`}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </ScrollReveal>
  );
}