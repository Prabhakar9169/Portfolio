"use client";

import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">Prabhakar Singh</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
              >
                SERVICES
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
              >
               ABOUT
              </a>
              <a
                href="#projects"
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                FULL STACK
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                DEVELOPER
              </span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-8 max-w-md leading-relaxed">
              I am Prabhakar Singh – Full Stack Developer with expertise in both
              frontend and backend technologies, creating complete web solutions
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
              VIEW WORK
            </button>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-80 h-96 rounded-2xl border border-white/10 overflow-hidden">
                <Image
                  src="/Prabhakar_Image.png"
                  alt="Prabhakar Singh"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
              MY SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development Service Card */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-emerald-500/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Frontend Development
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Creating responsive, interactive user interfaces using React,
                  Next.js, TypeScript, and modern CSS frameworks.
                </p>
              </div>
            </div>

            {/* Backend Development Service Card */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-pink-500/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend Development
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Building robust server-side applications with Node.js,
                  Express, databases, and RESTful APIs for scalable solutions.
                </p>
              </div>
            </div>

            {/* Full Stack Solutions Service Card */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Full Stack Solutions
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Complete web applications from database design to user
                  interface, handling both frontend and backend development.
                </p>
              </div>
            </div>

            {/* Database Design Service Card */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-yellow-500/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Database Design
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Designing and optimizing databases with MySQL, MongoDB, and
                  PostgreSQL for efficient data management and retrieval.
                </p>
              </div>
            </div>

            {/* API Development Service Card */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-indigo-500/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    API Development
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Creating secure and scalable RESTful APIs and GraphQL
                  endpoints for seamless data communication between systems.
                </p>
              </div>
            </div>

            {/* DevOps & Deployment Service Card */}
            <div className="group relative">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-green-500/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    DevOps & Deployment
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Setting up CI/CD pipelines, cloud deployment on AWS/Azure, and
                  managing containerized applications with Docker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Portfolio;
