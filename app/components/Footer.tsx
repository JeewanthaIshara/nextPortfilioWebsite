'use client';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaRocket } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: "#", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: <FaLinkedin size={20} />, href: "#", label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
    { icon: <FaTwitter size={20} />, href: "#", label: "Twitter", color: "hover:text-sky-500 dark:hover:text-sky-400" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: "ishara@example.com", href: "mailto:ishara@example.com" },
    { icon: <FaPhone />, text: "+94 123 456 789", href: "tel:+94123456789" },
    { icon: <FaMapMarkerAlt />, text: "Negombo, Sri Lanka", href: null },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white transition-colors duration-700 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center font-bold text-2xl text-purple-600 dark:text-yellow-400 shadow-2xl">
                I
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ishara</h3>
                <p className="text-sm text-white/70 dark:text-gray-400">Web Developer</p>
              </div>
            </div>
            <p className="text-white/80 dark:text-gray-300 leading-relaxed mb-6">
              Passionate about creating beautiful and functional digital experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70 dark:text-gray-400">
              <FaCode className="text-yellow-200 dark:text-yellow-400" />
              <span>Built with Next.js & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaRocket className="text-yellow-200 dark:text-yellow-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/80 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-yellow-400 transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-6 h-0.5 bg-yellow-200 dark:bg-yellow-400 transition-all duration-300 rounded"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="p-2 bg-white/10 dark:bg-gray-800/50 rounded-lg group-hover:bg-white/20 dark:group-hover:bg-gray-800/70 transition-all duration-300">
                    <div className="text-yellow-200 dark:text-yellow-400">
                      {info.icon}
                    </div>
                  </div>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-white/80 dark:text-gray-300 hover:text-yellow-200 dark:hover:text-yellow-400 transition-colors duration-300 text-sm break-all"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-white/80 dark:text-gray-300 text-sm">
                      {info.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl
                           hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-110 
                           transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <div className={`${social.color} transition-colors duration-300`}>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Stats/Info Cards */}
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70 dark:text-gray-400">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-400">Available</span>
                </div>
              </div>
              <p className="text-xs text-white/60 dark:text-gray-500">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 dark:border-gray-700 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white/80 dark:text-gray-300 text-sm">
            <span>© {currentYear} Ishara. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2 text-white/80 dark:text-gray-300 text-sm">
            <span>Made with</span>
            <FaHeart className="text-red-400 animate-pulse" />
            <span>in Sri Lanka</span>
          </div>
          
          <div className="flex gap-4 text-xs text-white/60 dark:text-gray-400">
            <a href="#" className="hover:text-yellow-200 dark:hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-200 dark:hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-yellow-400 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-40"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}