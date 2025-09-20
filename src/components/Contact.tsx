// components/Contact.tsx
import ScrollReveal from "./UI/ScrollReveal";
import { useComponentStyles } from "../theme/components";

export default function Contact() {
  const styles = useComponentStyles();

  const contactMethods = [
    {
      label: "Email",
      value: "prabhakar9169@gmail.com",
      href: "mailto:prabhakar9169@gmail.com",
      icon: "📧"
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/prabhakar-singh-aa5b561a4",
      icon: "💼"
    },
    {
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/Prabhakar9169",
      icon: "💻"
    }
  ];

  return (
    <ScrollReveal 
      direction="up"
      showBackground={true}
      backgroundColor="from-slate-900 via-purple-900 to-slate-900"
    >
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section id="contact" className="relative overflow-hidden py-20 px-6">
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
              GET IN TOUCH
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              I'm always excited to collaborate on innovative projects and bring creative ideas to life.
              Whether you need a modern web application or want to discuss the latest in frontend development,
              I'd love to connect!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div 
                key={method.label} 
                className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center ${
                  index % 3 === 0 ? 'hover:border-emerald-500/50' :
                  index % 3 === 1 ? 'hover:border-pink-500/50' :
                  'hover:border-blue-500/50'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  index % 3 === 0 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                  index % 3 === 1 ? 'bg-gradient-to-r from-pink-500 to-violet-500' :
                  'bg-gradient-to-r from-blue-500 to-purple-500'
                }`}>
                  <span className="text-2xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.label}</h3>
                <a
                  href={method.href}
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-white/70 hover:text-emerald-400 transition-colors duration-300 inline-block"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-xl mx-auto hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50 hover:scale-105">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
                Let's Build Something Amazing Together
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:prabhakar9169@gmail.com"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <span>Send Message</span>
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/15 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View My Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </ScrollReveal>
  );
}