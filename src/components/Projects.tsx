'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'

export default function Projects() {
  const { isKashmiri } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('projects-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'AI Cyber Summarizer',
      titleKs: 'AI سائبر سمرائزر',
      category: 'Cybersecurity',
      categoryKs: 'سائبر سیکیورٹی',
      description: 'AI-powered tool to summarize cybersecurity content using NLP techniques. Integrates APIs for data collection and analysis, improving efficiency in information distillation.',
      descriptionKs: 'AI پاورڈ ٹول سائبر سیکیورٹی کنٹینٹ کا خلاصہ کرنے کے لیے NLP تکنیک استعمال کرتے ہوئے۔',
      tech: ['Python', 'NLTK', 'APIs', 'Machine Learning'],
      image: '🤖',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      categoryBg: 'bg-blue-600'
    },
    {
      title: 'CVE Severity Predictor',
      titleKs: 'CVE شدت پیش گوئی',
      category: 'Cybersecurity',
      categoryKs: 'سائبر سیکیورٹی',
      description: 'Streamlit app that fetches CVE data from NVD API and predicts severity using Random Forest. Features secure API key management and real-time CVE analysis.',
      descriptionKs: 'Streamlit ایپ جو NVD API سے CVE ڈیٹا لیتا ہے اور Random Forest استعمال کرکے شدت کی پیش گوئی کرتا ہے۔',
      tech: ['Python', 'Streamlit', 'Random Forest', 'NVD API'],
      image: '🔍',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      categoryBg: 'bg-red-600'
    },
    {
      title: 'ZTTM - Threat Mapper',
      titleKs: 'ZTTM - خطرہ میپر',
      category: 'Cybersecurity',
      categoryKs: 'سائبر سیکیورٹی',
      description: 'Rust-based tool to scan Windows for IOCs, mapping to MITRE ATT&CK TTPs. CLI for process, file, and startup scanning, detecting 95% of known threats.',
      descriptionKs: 'Rust پر بنایا گیا ٹول Windows کو IOCs کے لیے اسکین کرنے کے لیے، MITRE ATT&CK TTPs پر میپنگ۔',
      tech: ['Rust', 'CLI', 'MITRE ATT&CK', 'Windows Security'],
      image: '🛡️',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      categoryBg: 'bg-green-600'
    },
    {
      title: 'Real-Time Chat Application',
      titleKs: 'ریئل ٹائم چیٹ ایپلیکیشن',
      category: 'Full Stack',
      categoryKs: 'فُل سٹیک',
      description: 'Scalable chat app with Node.js and Socket.IO, supporting 100+ concurrent users. Features user authentication and message persistence using MongoDB.',
      descriptionKs: 'Node.js اور Socket.IO کے ساتھ scalable چیٹ ایپ، 100+ concurrent users کو سپورٹ کرتا ہے۔',
      tech: ['Node.js', 'Socket.IO', 'MongoDB', 'React'],
      image: '💬',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      categoryBg: 'bg-purple-600'
    },
    {
      title: 'Duty Leave Management App',
      titleKs: 'ڈیوٹی لیو منیجمنٹ ایپ',
      category: 'Mobile App',
      categoryKs: 'موبائل ایپ',
      description: 'Modern duty leave request management app using Kotlin, XML, and Firebase. Optimized for speed and user experience with responsive design.',
      descriptionKs: 'Kotlin، XML، اور Firebase استعمال کرکے جدید ڈیوٹی لیو درخواست منیجمنٹ ایپ۔',
      tech: ['Kotlin', 'XML', 'Firebase', 'Android'],
      image: '📋',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      categoryBg: 'bg-orange-600'
    },
    {
      title: 'React Native Expensify',
      titleKs: 'ریکٹ نیٹو ایکسپینسیفائی',
      category: 'Mobile App',
      categoryKs: 'موبائل ایپ',
      description: 'Cross-platform expense tracking app using React Native. Features adding, editing, deleting expenses with local storage for offline functionality.',
      descriptionKs: 'React Native استعمال کرکے کراس پلیٹ فارم expense tracking ایپ۔',
      tech: ['React Native', 'JavaScript', 'Local Storage'],
      image: '💰',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      categoryBg: 'bg-emerald-600'
    },
    {
      title: 'iOS Daily Quote App',
      titleKs: 'iOS ڈیلی کوٹ ایپ',
      category: 'Mobile App',
      categoryKs: 'موبائل ایپ',
      description: 'iOS app using Swift that displays daily inspirational quotes. Integrates REST API for dynamic content with minimalist user interface.',
      descriptionKs: 'Swift استعمال کرکے iOS ایپ جو روزانہ متاثر کن اقوال دکھاتا ہے۔',
      tech: ['Swift', 'REST API', 'Xcode', 'iOS'],
      image: '💭',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      categoryBg: 'bg-indigo-600'
    },
    {
      title: 'Order Management Dashboard',
      titleKs: 'آرڈر منیجمنٹ ڈیش بورڈ',
      category: 'Full Stack',
      categoryKs: 'فُل سٹیک',
      description: 'React-based dashboard with search and currency conversion features. Handles multiple order datasets with improved UX through GitHub Actions deployment.',
      descriptionKs: 'React پر مبنی ڈیش بورڈ سرچ اور currency conversion کے ساتھ۔',
      tech: ['React', 'JavaScript', 'GitHub Actions'],
      image: '📊',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      categoryBg: 'bg-teal-600'
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section 
      id="projects-section"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden ${isKashmiri ? 'font-kashmiri' : ''}`}
    >
      {/* ✅ Kashmir-themed Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-green-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-gentle-float"></div>
        <div className="absolute bottom-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-gentle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-teal-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-gentle-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          
          {/* ✅ High Contrast Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className={`inline-block mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl text-sm font-bold uppercase tracking-wider shadow-lg">
                {isKashmiri ? 'میرے کام' : 'My Work'}
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-800 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isKashmiri ? 'منتخب پروجیکٹس' : 'Featured Projects'}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-6">
              {isKashmiri 
                ? 'میٚ کین بہترین کام مختلف ڈومینز منز - سائبر سیکیورٹی، فُل سٹیک، تہ موبائل ایپس'
                : 'Showcasing my best work across Cybersecurity, Full Stack Development, and Mobile Applications'
              }
            </p>
            <div className={`w-24 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* ✅ Featured Projects - High Contrast */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <h3 className={`text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              {isKashmiri ? '⭐ اہم پروجیکٹس' : '⭐ Featured Work'}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group ${project.bgColor} border-2 ${project.borderColor} p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <span className={`inline-flex items-center gap-2 ${project.categoryBg} text-white px-4 py-2 rounded-2xl text-sm font-bold mb-4 shadow-lg border-2 border-white`}>
                      {isKashmiri ? project.categoryKs : project.category}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {isKashmiri ? project.titleKs : project.title}
                    </h3>
                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-medium">
                      {isKashmiri ? project.descriptionKs : project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {project.tech.map(tech => (
                        <span key={tech} className="bg-white shadow-md border border-gray-300 text-gray-800 px-3 py-1 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <a 
                        href={project.liveUrl}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-2xl text-sm sm:text-base font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 border-2 border-green-500"
                      >
                        🔗 {isKashmiri ? 'ویکھیو' : 'Live Demo'}
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center justify-center gap-2 border-2 border-gray-400 bg-white text-gray-800 px-6 py-3 rounded-2xl text-sm sm:text-base font-bold hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        💻 {isKashmiri ? 'کوڈ' : 'Source Code'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Other Projects - High Contrast */}
          <div className="mb-16 sm:mb-20">
            <h3 className={`text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
              {isKashmiri ? '💼 دیگر پروجیکٹس' : '💼 Other Projects'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {otherProjects.map((project, index) => (
                <div 
                  key={index} 
                  className={`group ${project.bgColor} border-2 ${project.borderColor} p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl sm:text-4xl mb-3">{project.image}</div>
                    <span className={`text-xs ${project.categoryBg} text-white px-3 py-1 rounded-full font-bold shadow-sm`}>
                      {isKashmiri ? project.categoryKs : project.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {isKashmiri ? project.titleKs : project.title}
                  </h3>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
                    {isKashmiri ? project.descriptionKs : project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-white border border-gray-300 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-2 rounded-lg text-xs font-bold hover:scale-105 transition-all duration-300 shadow-md"
                    >
                      🔗 {isKashmiri ? 'ویکھیو' : 'Live'}
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 text-center border-2 border-gray-400 bg-white text-gray-800 py-2 rounded-lg text-xs font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300"
                    >
                      💻 {isKashmiri ? 'کوڈ' : 'Code'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Skills Showcase */}
          <div className={`bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border-2 border-gray-300 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.2s' }}>
            <div className="text-center mb-12">
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isKashmiri ? '🛠️ استعمال شدہ ٹیکنالوجیز' : '🛠️ Technologies Used'}
              </h4>
              <p className="text-lg sm:text-xl text-gray-600 font-semibold">
                {isKashmiri ? 'مختلف پروجیکٹس میں استعمال کی گئی ٹیکنالوجیز' : 'Technologies and tools used across different projects'}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {[
                { name: 'Python', icon: '🐍', bg: 'bg-yellow-100', border: 'border-yellow-200' },
                { name: 'React', icon: '⚛️', bg: 'bg-blue-100', border: 'border-blue-200' },
                { name: 'Node.js', icon: '🟢', bg: 'bg-green-100', border: 'border-green-200' },
                { name: 'MongoDB', icon: '🍃', bg: 'bg-emerald-100', border: 'border-emerald-200' },
                { name: 'Firebase', icon: '🔥', bg: 'bg-orange-100', border: 'border-orange-200' },
                { name: 'Swift', icon: '🦉', bg: 'bg-purple-100', border: 'border-purple-200' },
                { name: 'Kotlin', icon: '📱', bg: 'bg-indigo-100', border: 'border-indigo-200' },
                { name: 'Rust', icon: '🦀', bg: 'bg-red-100', border: 'border-red-200' }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`${tech.bg} border-2 ${tech.border} p-4 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md`}
                >
                  <div className="text-2xl sm:text-3xl mb-2">{tech.icon}</div>
                  <div className="text-gray-800 font-bold text-sm sm:text-base">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Call to Action */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 sm:p-12 rounded-3xl border-2 border-gray-200 shadow-xl max-w-4xl mx-auto">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                {isKashmiri ? '🚀 تعاون کے لیے تیار؟' : '🚀 Ready to Collaborate?'}
              </h5>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 font-semibold leading-relaxed max-w-3xl mx-auto">
                {isKashmiri 
                  ? 'آئیے مل کر کچھ شاندار بنائیں۔ سائبر سیکیورٹی، فُل سٹیک، یا موبائل ایپ ڈیولپمنٹ - میں ہر چیز میں مدد کر سکتا ہوں!'
                  : 'Let\'s build something amazing together! Whether it\'s cybersecurity, full-stack development, or mobile apps - I\'m ready to help!'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
                <a 
                  href="#contact"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500"
                >
                  <span className="mr-2">📞</span>
                  {isKashmiri ? 'رابطہ کریں' : 'Get In Touch'}
                </a>
                <a 
                  href="/resume/Taqaddus_Shafi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-300 hover:border-blue-400"
                >
                  <span className="mr-2">📄</span>
                  {isKashmiri ? 'ریزیومے دیکھیں' : 'View Resume'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Kashmir-themed Animations */}
      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gentle-float { animation: gentle-float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
        
        .line-clamp-3 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
        }
      `}</style>
    </section>
  )
}
