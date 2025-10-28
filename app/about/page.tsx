'use client';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export default function AboutPage() {

  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3 / Tailwind", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "React / Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white transition-all duration-700 relative overflow-hidden pt-20">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 dark:bg-red-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 dark:from-yellow-400 dark:to-pink-400">Me</span>
          </h1>
          <p className="text-xl text-white/90 dark:text-gray-200 max-w-2xl mx-auto">
            A passionate web developer dedicated to crafting beautiful, functional, and user-friendly digital experiences.
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in delay-200">
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white/95 dark:text-gray-100 mb-6">
              My Story
            </h2>
            <p className="text-white/80 dark:text-gray-300 leading-relaxed mb-4">
              I'm a web developer with a passion for creating elegant solutions to complex problems. 
              My journey into web development started several years ago, and I've been continuously 
              learning and growing ever since.
            </p>
            <p className="text-white/80 dark:text-gray-300 leading-relaxed">
              I specialize in building modern, responsive websites using cutting-edge technologies 
              like React, Next.js, and Tailwind CSS. I believe in writing clean, maintainable code 
              and creating user experiences that delight and engage.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in delay-300">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white/95 dark:text-gray-100">
            Skills & Expertise
          </h2>
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/90 dark:text-gray-200 font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-yellow-200 dark:text-yellow-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 dark:from-yellow-400 dark:to-orange-400 h-full rounded-full transition-all duration-1000 group-hover:animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto mb-16 animate-fade-in delay-400">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/95 dark:text-gray-100">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <FaCode className="text-6xl text-yellow-200 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white/95 dark:text-gray-100 mb-3">
                Web Development
              </h3>
              <p className="text-white/75 dark:text-gray-300 leading-relaxed">
                Building fast, scalable, and maintainable web applications using modern frameworks and best practices.
              </p>
            </div>

            <div className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <FaLaptopCode className="text-6xl text-yellow-200 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white/95 dark:text-gray-100 mb-3">
                Responsive Design
              </h3>
              <p className="text-white/75 dark:text-gray-300 leading-relaxed">
                Creating beautiful, responsive designs that work seamlessly across all devices and screen sizes.
              </p>
            </div>

            <div className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-8 hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <FaMobileAlt className="text-6xl text-yellow-200 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white/95 dark:text-gray-100 mb-3">
                UI/UX Focus
              </h3>
              <p className="text-white/75 dark:text-gray-300 leading-relaxed">
                Prioritizing user experience with intuitive interfaces and smooth, delightful interactions.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in delay-500">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white/95 dark:text-gray-100">
            Experience Highlights
          </h2>
          <div className="space-y-6">
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center font-bold text-gray-900 flex-shrink-0">
                  3+
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white/95 dark:text-gray-100 mb-2">
                    Years of Experience
                  </h3>
                  <p className="text-white/75 dark:text-gray-300">
                    Building web applications and helping clients bring their ideas to life
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center font-bold text-gray-900 flex-shrink-0">
                  20+
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white/95 dark:text-gray-100 mb-2">
                    Projects Completed
                  </h3>
                  <p className="text-white/75 dark:text-gray-300">
                    From small business websites to complex web applications
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center font-bold text-gray-900 flex-shrink-0">
                  ∞
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white/95 dark:text-gray-100 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-white/75 dark:text-gray-300">
                    Always exploring new technologies and best practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center animate-fade-in delay-600">
          <h2 className="text-2xl md:text-3xl font-bold text-white/95 dark:text-gray-100 mb-8">
            Let's Connect
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="#" 
              className="group p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-4xl group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="group p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-4xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a 
              href="#" 
              className="group p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-4xl group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors" />
            </a>
          </div>
          
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white dark:bg-yellow-400 text-purple-600 dark:text-gray-900 font-bold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all transform duration-300"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </div>
  );
}