'use client';

import React from 'react';
import ScrollReveal from './UI/ScrollReveal';

export default function About() {
  // Journey timeline data
  const journey = [
    {
      year: "2022",
      title: "Started Full Stack Journey", 
      description: "Enrolled in comprehensive Full Stack Development course at Digikull Institute, learning modern web technologies",
      icon: "🎓"
    },
    {
      year: "2023",
      title: "First Professional Role",
      description: "Landed my first job as a developer, applying React, TypeScript, and modern frontend practices in real-world projects",
      icon: "💼"
    },
    {
      year: "2024", 
      title: "Advanced Development",
      description: "Enhanced skills in complex form handling, API integrations, and performance optimization while working on production applications",
      icon: "🚀"
    },
    {
      year: "2025",
      title: "AI-Driven Development",
      description: "Integrating AI tools and modern practices to streamline development workflow and build intelligent user experiences",
      icon: "🤖"
    },
  ];

  return (
    <ScrollReveal 
    direction="up"
    showBackground={true}
    backgroundColor="from-slate-900 via-purple-900 to-slate-900"
  >
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
             I&apos;m a dedicatedm a dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">Full Stack Developer</span> with{" "}
            <span className="text-emerald-400 font-semibold">2+ years of professional experience</span> specializing in 
            React, TypeScript, and modern web technologies. I focus on building efficient, scalable applications 
            with clean code and optimal user experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Story */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:border-pink-500/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
              <span className="text-3xl mr-4">👨‍💻</span>
              <span className="text-white">
                My Journey
              </span>
            </h3>
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                My development journey began in 2022 when I enrolled in a comprehensive Full Stack 
                Development course at Digikull Institute. This structured learning gave me a solid 
                foundation in both frontend and backend technologies.
              </p>
              <p className="text-white/80 leading-relaxed">
                In 2023, I secured my first professional role where I applied React, TypeScript, 
                and Node.js in real-world projects. I&apos;m a dedicatedve worked extensively on form handling, 
                API integrations, and component architecture while maintaining clean, maintainable code.
              </p>
              <p className="text-white/80 leading-relaxed">
                Today, I leverage AI tools to enhance my development workflow, from code optimization 
                to problem-solving. I believe in continuous learning and staying updated with the 
                latest technologies to deliver modern, efficient solutions.
              </p>
            </div>
          </div>

          {/* Quick Facts - Increased gap between cards */}
          <div className="space-y-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">📍</span>
                <span className="text-emerald-300">Based In</span>
              </h4>
              <p className="text-white/80 text-lg">India</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-violet-500/50">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">💼</span>
                <span className="text-violet-300">Experience</span>
              </h4>
              <p className="text-white/80">2+ years professional development</p>
              <p className="text-white/60 text-sm mt-1">Digikull Institute Graduate</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-pink-500/50">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                <span className="text-pink-300">Specialization</span>
              </h4>
              <div className="space-y-3">
                {["React & TypeScript", "Form Architecture", "API Integration", "AI-Assisted Development"].map((focus) => (
                  <div key={focus} className="flex items-center">
                    <span className="text-white/80">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline - All cards in single line */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-white">
              Professional Timeline
            </span>
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-emerald-500 rounded-full transform -translate-y-1/2"></div>
            
            {/* Desktop Timeline - All cards in single line with more gap */}
            <div className="hidden md:grid grid-cols-4 gap-12 items-center relative">
              {journey.map((item) => (
                <div key={item.year} className="relative group">
                  {/* Content Card */}
                  <div className="group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50">
                      <div className="text-center mb-4">
                        <span className="text-3xl mb-2 block">{item.icon}</span>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3 text-center">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm text-center leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile Timeline - Vertical layout with more gap */}
            <div className="md:hidden space-y-16">
              {journey.map((item) => (
                <div key={item.year} className="flex justify-center">
                  <div className="w-full max-w-sm">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50">
                      <div className="flex items-center mb-4 justify-center">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-3 text-center">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
