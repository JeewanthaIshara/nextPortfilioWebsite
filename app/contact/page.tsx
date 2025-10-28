'use client';
import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaCheckCircle, FaMoon, FaSun } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "ishara@example.com",
      link: "mailto:ishara@example.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+94 123 456 789",
      link: "tel:+94123456789"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Negombo, Sri Lanka",
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-700
                    text-white transition-all duration-700 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-400 dark:bg-red-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
              Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 dark:from-yellow-400 dark:to-pink-400">Connect</span>
            </h1>
            <p className="text-xl text-white/90 dark:text-gray-200 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-md 
                          rounded-2xl p-8 shadow-2xl animate-fade-in delay-200">
              <h2 className="text-3xl font-bold mb-6 text-white/95 dark:text-gray-100">
                Send a Message
              </h2>

              {submitted && (
                <div className="mb-6 bg-green-500/20 border border-green-400 dark:border-green-500 rounded-lg p-4 flex items-center gap-3 animate-fade-in">
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <p className="text-green-100 dark:text-green-300">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white/90">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-white/20 dark:border-gray-600 
                               text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-gray-700/90 
                               focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500
                               transition-all placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/90">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg border border-white/20 dark:border-gray-600 
                               text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-gray-700/90 
                               focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500
                               transition-all placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-white/90">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg border border-white/20 dark:border-gray-600 
                             text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-gray-700/90 
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500
                             transition-all placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white/90">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 rounded-lg border border-white/20 dark:border-gray-600 
                             text-gray-900 dark:text-gray-100 bg-white/90 dark:bg-gray-700/90 
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500
                             transition-all resize-none placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-white dark:bg-yellow-400 
                           text-purple-600 dark:text-gray-900 font-bold rounded-xl 
                           shadow-xl hover:scale-105 hover:shadow-2xl 
                           transition-all transform duration-300 
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-purple-600 dark:border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6 animate-fade-in delay-300">
              
              {/* Contact Information Cards */}
              <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white/95 dark:text-gray-100">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 bg-white/20 dark:bg-gray-700/50 rounded-lg group-hover:scale-110 transition-transform">
                        <div className="text-xl text-yellow-200 dark:text-yellow-400">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-white/70 dark:text-gray-400 font-semibold">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a href={info.link} className="text-white/90 dark:text-gray-200 hover:text-yellow-200 dark:hover:text-yellow-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/90 dark:text-gray-200">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-white/95 dark:text-gray-100">
                  Follow Me
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 bg-white/20 dark:bg-gray-700/50 rounded-lg
                             hover:bg-white/30 dark:hover:bg-gray-700/70 hover:scale-110 
                             transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/20 dark:bg-gray-700/50 rounded-lg
                             hover:bg-white/30 dark:hover:bg-gray-700/70 hover:scale-110 
                             transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/20 dark:bg-gray-700/50 rounded-lg
                             hover:bg-white/30 dark:hover:bg-gray-700/70 hover:scale-110 
                             transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-white/95 dark:text-gray-100">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a href="/" className="block text-white/80 hover:text-yellow-200 dark:hover:text-yellow-400 transition-colors">
                    → Home
                  </a>
                  <a href="/about" className="block text-white/80 hover:text-yellow-200 dark:hover:text-yellow-400 transition-colors">
                    → About Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// (no-op: removed local useEffect implementation)

