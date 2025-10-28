'use client';
import { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket, FaPalette } from "react-icons/fa";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500 dark:text-orange-400" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-400 dark:text-blue-300" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400 dark:text-yellow-300" },
    { icon: <FaReact />, name: "React", color: "text-cyan-400 dark:text-cyan-300" },
  ];

  const features = [
    { icon: <FaCode />, title: "Clean Code", description: "Writing maintainable and efficient code" },
    { icon: <FaRocket />, title: "Performance", description: "Building fast and optimized applications" },
    { icon: <FaPalette />, title: "Design", description: "Creating beautiful user interfaces" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                    text-white transition-all duration-700 overflow-hidden relative">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 dark:bg-red-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>



      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-20">
        
        {/* Hero Section */}

        <div className="text-center max-w-4xl mx-auto mb-12">

          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-full text-sm font-semibold mb-4">
              👋 Welcome to my portfolio
            </span>

            
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-[4px] shadow-2xl">
  <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-50% h-50% mt-5  object-cover object-center"
    />
  </div>
</div>

        </div>

          
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl animate-fade-in leading-tight">
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 dark:from-yellow-400 dark:to-pink-400">Ishara</span>
          </h1>

          
          
          <p className="text-xl md:text-2xl text-white/90 dark:text-gray-200 mb-4 max-w-2xl mx-auto animate-fade-in delay-200 leading-relaxed">
            A passionate <span className="font-semibold text-yellow-200 dark:text-yellow-300">Web Developer</span> crafting beautiful and functional digital experiences
          </p>
          
          <p className="text-base md:text-lg text-white/75 dark:text-gray-300 mb-10 max-w-xl mx-auto animate-fade-in delay-300">
            Specializing in modern web technologies to bring your ideas to life
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-400">
            <a
              href="/about"
              className="group px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-xl 
                       hover:scale-105 hover:shadow-2xl transition-all transform duration-300 
                       dark:bg-gray-800 dark:text-yellow-400 flex items-center justify-center gap-2"
            >
              <span>About Me</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/contact"
              className="group px-8 py-4 bg-purple-600/80 dark:bg-yellow-400/90 text-white dark:text-gray-900 
                       font-bold rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl 
                       transition-all transform duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-5xl mx-auto mb-12 animate-fade-in delay-500">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white/90 dark:text-gray-100">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 
                         hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300
                         hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className={`text-5xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <p className="text-white/90 dark:text-gray-200 font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full max-w-5xl mx-auto animate-fade-in delay-600">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white/90 dark:text-gray-100">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6
                         hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300
                         hover:scale-105 hover:shadow-2xl group"
              >
                <div className="text-4xl mb-4 text-yellow-200 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white/95 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-white/75 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 animate-fade-in delay-700">
          <p className="text-white/75 dark:text-gray-300 mb-4 text-center">Connect with me</p>
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-full
                       hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 
                       transition-all duration-300 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-full
                       hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 
                       transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-full
                       hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 
                       transition-all duration-300 shadow-lg"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 dark:border-gray-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/75 dark:bg-gray-400/75 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}