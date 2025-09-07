'use client'
import { useLanguage } from '../context/LanguageContext'

export default function Projects() {
  const { isKashmiri } = useLanguage()

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
      featured: true
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
      featured: true
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
      featured: true
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
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
      featured: false
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className={`py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative ${isKashmiri ? 'font-kashmiri' : ''}`}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white text-shadow-glow">
              {isKashmiri ? 'منتخب پروجیکٹس' : 'Featured Projects'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isKashmiri 
                ? 'میٚ کین بہترین کام مختلف ڈومینز منز - سائبر سیکیورٹی، فُل سٹیک، تہ موبائل ایپس'
                : 'Showcasing my best work across Cybersecurity, Full Stack Development, and Mobile Applications'
              }
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              {isKashmiri ? '⭐ اہم پروجیکٹس' : '⭐ Featured Work'}
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="glass p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 card-hover group">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {isKashmiri ? project.categoryKs : project.category}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {isKashmiri ? project.titleKs : project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {isKashmiri ? project.descriptionKs : project.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="bg-white/10 backdrop-blur-sm text-cyan-300 px-2 py-1 rounded-full text-xs font-medium border border-cyan-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-3">
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300"
                      >
                        🔗 {isKashmiri ? 'ویکھیو' : 'Live'}
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300"
                      >
                        💻 {isKashmiri ? 'کوڈ' : 'Code'}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              {isKashmiri ? '💼 دیگر پروجیکٹس' : '💼 Other Projects'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div key={index} className="glass p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover group">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{project.image}</div>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                      {isKashmiri ? project.categoryKs : project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {isKashmiri ? project.titleKs : project.title}
                  </h3>
                  <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                    {isKashmiri ? project.descriptionKs : project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-white/10 text-cyan-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 text-center bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 rounded-lg text-xs font-semibold hover:scale-105 transition-all duration-300"
                    >
                      🔗 {isKashmiri ? 'ویکھیو' : 'Live'}
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 text-center border border-white/30 text-white py-2 rounded-lg text-xs font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      💻 {isKashmiri ? 'کوڈ' : 'Code'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="glass p-10 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                {isKashmiri ? '🚀 تعاون کے لیے تیار؟' : '🚀 Ready to Collaborate?'}
              </h3>
              <p className="text-gray-300 mb-8">
                {isKashmiri 
                  ? 'آئیے مل کر کچھ شاندار بنائیں۔ سائبر سیکیورٹی، فُل سٹیک، یا موبائل ایپ ڈیولپمنٹ - میں ہر چیز میں مدد کر سکتا ہوں!'
                  : 'Let\'s build something amazing together! Whether it\'s cybersecurity, full-stack development, or mobile apps - I\'m ready to help!'
                }
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all duration-300 hover:shadow-2xl">
                {isKashmiri ? '📞 رابطہ کریں' : '📞 Get In Touch'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
