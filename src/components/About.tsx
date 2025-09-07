'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'

export default function About() {
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

    const section = document.getElementById('about-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const personalInfo = [
    { key: 'age', en: 'Age', ks: 'عمر', value: '22', icon: '🎂' },
    { key: 'location', en: 'Location', ks: 'مقام', value: 'Srinagar, Kashmir, India', icon: '🏔️' },
    { key: 'email', en: 'Email', ks: 'ای میل', value: 'taqaddusabc@gmail.com', icon: '📧' },
    { key: 'phone', en: 'Phone', ks: 'فون', value: '+91-7780845956', icon: '📱' },
    { key: 'education', en: 'Education', ks: 'تعلیم', value: 'B.Tech CSE (8.26 CGPA)', icon: '🎓' },
    { key: 'languages', en: 'Languages', ks: 'زبانیں', value: 'Kashmiri, English, Hindi, Urdu', icon: '🌐' },
  ]

  const stats = [
    { key: 'problems', en: 'DSA Problems Solved', ks: 'حل شدہ مسائل', value: '500+', color: 'from-emerald-500 to-teal-500', icon: '🧮' },
    { key: 'projects', en: 'Projects Completed', ks: 'مکمل پروجیکٹ', value: '15+', color: 'from-blue-500 to-indigo-500', icon: '🚀' },
    { key: 'codechef', en: 'CodeChef Rating', ks: 'کوڈ شیف ریٹنگ', value: '3⭐', color: 'from-yellow-500 to-orange-500', icon: '🏆' },
    { key: 'cgpa', en: 'Academic CGPA', ks: 'تعلیمی CGPA', value: '8.26', color: 'from-purple-500 to-pink-500', icon: '📊' },
  ]

  const highlights = isKashmiri ? [
    '🏔️ کشمیرُک خوبصورت وادی سرینگر منز جنم تہ پرورش',
    '💻 فُل سٹیک، موبائل تہ سائبر سیکیورٹی ڈیولپمنٹس منز مہارت',
    '🎓 کمپیوٹر سائنس انجینئرنگ منز B.Tech (8.26 CGPA)',
    '🌟 CodeChef پیٹھ 3-Star کوڈر (ٹاپ 10% عالمی سطح)',
    '🚀 500+ DSA مسائل حل کیتن LeetCode تہ GeeksforGeeks پیٹھ',
    '🔐 سائبر سیکیورٹی منز TCS تہ Deloitte انٹرنشپ مکمل کیتہ',
    '📱 Android, iOS تہ کراس پلیٹ فارم ایپس بناونہ منز تجربہ'
  ] : [
    '🏔️ Born and raised in Srinagar, the beautiful valley of Kashmir',
    '💻 Multi-skilled in Full Stack Development, Mobile Apps & Cybersecurity',
    '🎓 B.Tech in Computer Science Engineering with 8.26 CGPA',
    '🌟 3-Star Coder at CodeChef (Top 10% globally)',
    '🚀 Solved 500+ DSA problems across LeetCode and GeeksforGeeks',
    '🔐 Completed cybersecurity internships with TCS and Deloitte',
    '📱 Experienced in Android, iOS, and cross-platform development'
  ]

  return (
    <section 
      id="about-section"
      className={`py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden ${isKashmiri ? 'font-kashmiri' : ''}`}
    >
      {/* ✅ Mobile-Optimized Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-96 h-56 sm:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          
          {/* ✅ Mobile-First Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className={`inline-block mb-3 sm:mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {isKashmiri ? 'میری کہانی' : 'My Story'}
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isKashmiri ? 'مےٚ متعلق' : 'About Me'}
            </h2>
            <div className={`w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* ✅ Responsive Main Content - Stack on Mobile, Side-by-Side on Desktop */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-28">
            
            {/* ✅ Left Column - Story & Highlights */}
            <div className="flex-1 lg:flex-[2] space-y-6 sm:space-y-8">
              
              {/* Introduction */}
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-4 sm:mb-6">
                  {isKashmiri 
                    ? 'بہٕ چھُس تقادوس شفیع، سری نگر، کشمیرُک اکھ ورسٹائل ڈویلپر۔'
                    : 'I am Taqaddus Shafi, a versatile developer from the scenic valley of Kashmir.'
                  }
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  {isKashmiri 
                    ? 'فُل سٹیک ڈیولپمنٹ، موبائل ایپلیکیشنز، تہٕ سائبر سیکیورٹی منٛز مہارت تھاوان، تکنیکی بہتریٖن تخلیقی مسلہٕ حل کرنَس سۭتۍ جوڑان۔'
                    : 'Specializing in Full Stack Development, Mobile Applications, and Cybersecurity, I combine technical excellence with creative problem-solving to build impactful digital solutions.'
                  }
                </p>
              </div>
              
              {/* Mobile-Optimized Highlights */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 hover:-translate-y-1 border border-white/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {highlight.split(' ')[0]}
                      </div>
                      <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed group-hover:text-gray-800 transition-colors">
                        {highlight.substring(highlight.indexOf(' ') + 1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile-Friendly Current Status */}
              <div className={`bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-emerald-200/50 shadow-xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-800">
                    {isKashmiri ? '🎯 موجودہ حالت' : '🎯 Current Status'}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  {isKashmiri 
                    ? 'فی الوقت Central University of Kashmir میں M.Tech Computer Science کر رہا ہوں اور فری لانس پروجیکٹس کے لیے دستیاب ہوں۔'
                    : 'Currently pursuing M.Tech in Computer Science at Central University of Kashmir while available for freelance projects and full-time opportunities.'
                  }
                </p>
              </div>
            </div>
            
            {/* ✅ Right Column - Personal Info Card (Mobile-First) */}
            <div className="flex-1 lg:flex-[1]">
              <div className={`bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-white/20 lg:sticky lg:top-24 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                
                {/* Mobile-Optimized Card Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 mx-auto shadow-lg">
                    👨‍💻
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {isKashmiri ? 'ذاتی معلومات' : 'Personal Info'}
                  </h4>
                </div>
                
                {/* Mobile-Responsive Personal Information */}
                <div className="space-y-3 sm:space-y-4 md:space-y-5">
                  {personalInfo.map((info, index) => (
                    <div 
                      key={info.key} 
                      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 gap-2 sm:gap-3"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform">{info.icon}</span>
                        <span className="text-gray-600 font-semibold text-sm sm:text-base">{isKashmiri ? info.ks : info.en}</span>
                      </div>
                      <span 
                        className="font-bold text-gray-800 text-sm sm:text-base break-all sm:break-normal sm:text-right sm:max-w-[60%] pl-6 sm:pl-0" 
                        title={info.value}
                      >
                        {info.key === 'email' || info.key === 'phone' ? (
                          <span className="text-xs sm:text-sm">{info.value}</span>
                        ) : (
                          info.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Mobile-Optimized Quick Connect */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <h5 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-5 text-center">
                    {isKashmiri ? 'فوری رابطہ' : 'Quick Connect'}
                  </h5>
                  <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-3">
                    {[
                      { href: 'mailto:taqaddusabc@gmail.com', icon: '📧', color: 'bg-red-500', label: 'Email' },
                      { href: 'tel:+917780845956', icon: '📞', color: 'bg-green-500', label: 'Call' },
                      { href: 'https://linkedin.com/in/taqaddus-shafi', icon: '💼', color: 'bg-blue-600', label: 'LinkedIn' },
                      { href: 'https://github.com/taqaddus-shafi', icon: '🐙', color: 'bg-gray-800', label: 'GitHub' }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`w-full sm:w-12 h-12 ${social.color} text-white rounded-xl flex items-center justify-center hover:scale-105 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95`}
                        title={social.label}
                      >
                        <span className="text-lg">{social.icon}</span>
                        <span className="ml-2 sm:hidden text-sm font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Mobile-First Statistics Grid */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-28">
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
              {isKashmiri ? '📊 اہم اعداد و شمار' : '📊 Key Achievements'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.key} 
                  className={`group text-center bg-gradient-to-br ${stat.color} p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/90 font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                    {isKashmiri ? stat.ks : stat.en}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Mobile-Responsive Technical Expertise */}
          <div className={`bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-white/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.2s' }}>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                {isKashmiri ? '🛠️ تکنیکی مہارتیں' : '🛠️ Technical Expertise'}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                {isKashmiri ? 'تین بنیادی شعبوں میں مہارت' : 'Mastery across three core domains'}
              </p>
            </div>
            
            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
              {[
                {
                  icon: '🌐',
                  title: isKashmiri ? 'فُل سٹیک ڈیولپمنٹ' : 'Full Stack Development',
                  desc: 'React, Node.js, Express, MongoDB, PostgreSQL',
                  gradient: 'from-blue-500 to-indigo-600',
                  bgGradient: 'from-blue-50 to-indigo-100'
                },
                {
                  icon: '📱',
                  title: isKashmiri ? 'موبائل ڈیولپمنٹ' : 'Mobile Development',
                  desc: 'React Native, Flutter, Kotlin, Swift',
                  gradient: 'from-green-500 to-emerald-600',
                  bgGradient: 'from-green-50 to-emerald-100'
                },
                {
                  icon: '🔐',
                  title: isKashmiri ? 'سائبر سیکیورٹی' : 'Cybersecurity',
                  desc: 'Penetration Testing, Burp Suite, OWASP',
                  gradient: 'from-red-500 to-rose-600',
                  bgGradient: 'from-red-50 to-rose-100'
                }
              ].map((expertise, index) => (
                <div 
                  key={index}
                  className={`group text-center p-6 sm:p-8 bg-gradient-to-br ${expertise.bgGradient} rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/50`}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {expertise.icon}
                  </div>
                  <h5 className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${expertise.gradient} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                    {expertise.title}
                  </h5>
                  <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">
                    {expertise.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
      `}</style>
    </section>
  )
}
