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
    { key: 'problems', en: 'DSA Problems Solved', ks: 'حل شدہ مسائل', value: '500+', color: 'bg-green-600', icon: '🧮' },
    { key: 'projects', en: 'Projects Completed', ks: 'مکمل پروجیکٹ', value: '15+', color: 'bg-blue-600', icon: '🚀' },
    { key: 'codechef', en: 'CodeChef Rating', ks: 'کوڈ شیف ریٹنگ', value: '3⭐', color: 'bg-yellow-600', icon: '🏆' },
    { key: 'cgpa', en: 'Academic CGPA', ks: 'تعلیمی CGPA', value: '8.26', color: 'bg-purple-600', icon: '📊' },
  ]

  const highlights = isKashmiri ? [
    { title: '🏔️ کشمیرُک خوبصورت وادی', desc: 'سرینگر منز جنم تہ پرورش' },
    { title: '💻 فُل سٹیک ڈیولپر', desc: 'موبائل تہ ویب ایپلیکیشنز منز مہارت' },
    { title: '🎓 کمپیوٹر سائنس', desc: 'B.Tech CSE (8.26 CGPA) مکمل' },
    { title: '🌟 CodeChef 3-Star', desc: 'ٹاپ 10% عالمی سطح پر' },
    { title: '🚀 500+ مسائل حل', desc: 'LeetCode تہ GeeksforGeeks پیٹھ' },
    { title: '🔐 سائبر سیکیورٹی', desc: 'TCS تہ Deloitte انٹرنشپ' },
    { title: '📱 موبائل ڈیولپمنٹ', desc: 'Android, iOS تہ کراس پلیٹ فارم' }
  ] : [
    { title: '🏔️ Kashmir Native', desc: 'Born and raised in beautiful Srinagar valley' },
    { title: '💻 Full Stack Developer', desc: 'Expert in web and mobile applications' },
    { title: '🎓 Computer Science', desc: 'B.Tech CSE with 8.26 CGPA' },
    { title: '🌟 CodeChef 3-Star', desc: 'Top 10% coder globally' },
    { title: '🚀 500+ Problems Solved', desc: 'Across LeetCode and GeeksforGeeks' },
    { title: '🔐 Cybersecurity Expert', desc: 'Internships with TCS and Deloitte' },
    { title: '📱 Mobile Development', desc: 'Android, iOS, and cross-platform' }
  ]

  return (
    <section 
      id="about-section"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden ${isKashmiri ? 'font-kashmiri' : ''}`}
    >
      {/* ✅ Kashmir-themed Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-gentle-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-gentle-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-gentle-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          
          {/* ✅ High Contrast Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className={`inline-block mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <span className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl text-sm font-bold uppercase tracking-wider shadow-lg">
                {isKashmiri ? 'میری کہانی' : 'My Story'}
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-800 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isKashmiri ? 'مےٚ متعلق' : 'About Me'}
            </h2>
            <div className={`w-24 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* ✅ Main Content - Responsive Layout */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            
            {/* ✅ Left Column - Story & Highlights */}
            <div className="flex-1 lg:flex-[2] space-y-8 sm:space-y-10">
              
              {/* High Contrast Introduction */}
              <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-6 bg-white/80 py-4 px-6 rounded-2xl shadow-lg border-2 border-gray-200">
                  {isKashmiri 
                    ? 'بہٕ چھُس تقادوس شفیع، سری نگر، کشمیرُک اکھ ورسٹائل ڈویلپر۔'
                    : 'I am Taqaddus Shafi, a versatile developer from the scenic valley of Kashmir.'
                  }
                </h3>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/90 py-6 px-8 rounded-2xl shadow-md border border-gray-300">
                  {isKashmiri 
                    ? 'فُل سٹیک ڈیولپمنٹ، موبائل ایپلیکیشنز، تہٕ سائبر سیکیورٹی منٛز مہارت تھاوان، تکنیکی بہتریٖن تخلیقی مسلہٕ حل کرنَس سۭتۍ جوڑان۔'
                    : 'Specializing in Full Stack Development, Mobile Applications, and Cybersecurity, I combine technical excellence with creative problem-solving to build impactful digital solutions.'
                  }
                </p>
              </div>
              
              {/* ✅ High Contrast Highlights Grid */}
              <div className="grid gap-4 sm:gap-5 md:gap-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className={`group bg-white shadow-xl border-2 border-gray-300 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-green-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {highlight.title.split(' ')[0]}
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                          {highlight.title.substring(highlight.title.indexOf(' ') + 1)}
                        </h4>
                        <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed">
                          {highlight.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* ✅ High Contrast Current Status */}
              <div className={`bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border-2 border-green-200 shadow-xl ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="text-2xl md:text-3xl font-bold text-green-800">
                    {isKashmiri ? '🎯 موجودہ حالت' : '🎯 Current Status'}
                  </h4>
                </div>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-semibold">
                  {isKashmiri 
                    ? 'فی الوقت Central University of Kashmir میں M.Tech Computer Science کر رہا ہوں اور فری لانس پروجیکٹس کے لیے دستیاب ہوں۔'
                    : 'Currently pursuing M.Tech in Computer Science at Central University of Kashmir while available for freelance projects and full-time opportunities.'
                  }
                </p>
              </div>
            </div>
            
            {/* ✅ Right Column - Personal Info Card */}
            <div className="flex-1 lg:flex-[1]">
              <div className={`bg-white shadow-2xl rounded-3xl p-8 border-2 border-gray-300 lg:sticky lg:top-24 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                
                {/* Card Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-xl border-2 border-white">
                    👨‍💻
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {isKashmiri ? 'ذاتی معلومات' : 'Personal Info'}
                  </h4>
                </div>
                
                {/* Personal Information */}
                <div className="space-y-4 mb-8">
                  {personalInfo.map((info, index) => (
                    <div 
                      key={info.key} 
                      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 gap-2 sm:gap-3 border border-transparent hover:border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform">{info.icon}</span>
                        <span className="text-gray-700 font-bold text-base">{isKashmiri ? info.ks : info.en}</span>
                      </div>
                      <span 
                        className="font-bold text-gray-800 text-sm sm:text-base break-all sm:break-normal sm:text-right sm:max-w-[60%] pl-6 sm:pl-0" 
                        title={info.value}
                      >
                        {info.key === 'email' || info.key === 'phone' ? (
                          <span className="text-sm">{info.value}</span>
                        ) : (
                          info.value
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* ✅ Enhanced Quick Connect */}
                <div className="pt-6 border-t-2 border-gray-200">
                  <h5 className="text-lg font-bold text-gray-800 mb-5 text-center">
                    {isKashmiri ? 'فوری رابطہ' : 'Quick Connect'}
                  </h5>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { href: 'mailto:taqaddusabc@gmail.com', icon: '📧', color: 'bg-red-600', label: 'Email' },
                      { href: 'tel:+917780845956', icon: '📞', color: 'bg-green-600', label: 'Call' },
                      { href: 'https://linkedin.com/in/taqaddus-shafi', icon: '💼', color: 'bg-blue-600', label: 'LinkedIn' },
                      { href: 'https://github.com/taqaddus-shafi', icon: '🐙', color: 'bg-gray-800', label: 'GitHub' }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`w-full h-14 ${social.color} text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm border-2 border-white`}
                        title={social.label}
                      >
                        <span className="text-lg mr-2">{social.icon}</span>
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ High Contrast Statistics Grid */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <h3 className={`text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
              {isKashmiri ? '📊 اہم اعداد و شمار' : '📊 Key Achievements'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.key} 
                  className={`group text-center ${stat.color} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-white ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${1.8 + index * 0.1}s` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white font-bold text-sm lg:text-base leading-tight">
                    {isKashmiri ? stat.ks : stat.en}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ High Contrast Technical Expertise */}
          <div className={`bg-white shadow-2xl rounded-3xl p-8 md:p-12 border-2 border-gray-300 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.2s' }}>
            <div className="text-center mb-12">
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {isKashmiri ? '🛠️ تکنیکی مہارتیں' : '🛠️ Technical Expertise'}
              </h4>
              <p className="text-gray-600 text-lg font-semibold">
                {isKashmiri ? 'تین بنیادی شعبوں میں مہارت' : 'Mastery across three core domains'}
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: '🌐',
                  title: isKashmiri ? 'فُل سٹیک ڈیولپمنٹ' : 'Full Stack Development',
                  desc: 'React, Node.js, Express, MongoDB, PostgreSQL',
                  bgColor: 'bg-blue-50',
                  borderColor: 'border-blue-200',
                  textColor: 'text-blue-800'
                },
                {
                  icon: '📱',
                  title: isKashmiri ? 'موبائل ڈیولپمنٹ' : 'Mobile Development',
                  desc: 'React Native, Flutter, Kotlin, Swift',
                  bgColor: 'bg-green-50',
                  borderColor: 'border-green-200',
                  textColor: 'text-green-800'
                },
                {
                  icon: '🔐',
                  title: isKashmiri ? 'سائبر سیکیورٹی' : 'Cybersecurity',
                  desc: 'Penetration Testing, Burp Suite, OWASP',
                  bgColor: 'bg-red-50',
                  borderColor: 'border-red-200',
                  textColor: 'text-red-800'
                }
              ].map((expertise, index) => (
                <div 
                  key={index}
                  className={`group text-center p-8 ${expertise.bgColor} rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 border-2 ${expertise.borderColor}`}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {expertise.icon}
                  </div>
                  <h5 className={`text-2xl font-bold ${expertise.textColor} mb-4`}>
                    {expertise.title}
                  </h5>
                  <p className="text-gray-700 font-semibold leading-relaxed">
                    {expertise.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Communication Buttons Section */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
            <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              {isKashmiri ? '📞 رابطے کے طریقے' : '📞 Get In Touch'}
            </h4>
            <p className="text-xl text-gray-600 mb-10 font-semibold">
              {isKashmiri 
                ? 'میں ہمیشہ نئے مواقع اور دلچسپ پروجیکٹس کے لیے دستیاب ہوں'
                : 'Always open to new opportunities and exciting projects'
              }
            </p>
            
            {/* ✅ Communication Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { 
                  href: 'mailto:taqaddusabc@gmail.com', 
                  icon: '📧', 
                  title: 'Email Me', 
                  titleKs: 'ای میل کریں',
                  desc: 'Send a direct email',
                  descKs: 'براہ راست ای میل بھیجیں',
                  color: 'bg-red-600 hover:bg-red-700',
                  shadow: 'shadow-red-200'
                },
                { 
                  href: 'tel:+917780845956', 
                  icon: '📞', 
                  title: 'Call Now', 
                  titleKs: 'فون کریں',
                  desc: 'Direct phone call',
                  descKs: 'براہ راست فون کال',
                  color: 'bg-green-600 hover:bg-green-700',
                  shadow: 'shadow-green-200'
                },
                { 
                  href: 'https://linkedin.com/in/taqaddus-shafi', 
                  icon: '💼', 
                  title: 'LinkedIn', 
                  titleKs: 'لنکڈان',
                  desc: 'Professional network',
                  descKs: 'پیشہ ورانہ نیٹ ورک',
                  color: 'bg-blue-600 hover:bg-blue-700',
                  shadow: 'shadow-blue-200'
                },
                { 
                  href: 'https://wa.me/917780845956', 
                  icon: '💬', 
                  title: 'WhatsApp', 
                  titleKs: 'واٹس ایپ',
                  desc: 'Quick message',
                  descKs: 'فوری پیغام',
                  color: 'bg-green-500 hover:bg-green-600',
                  shadow: 'shadow-green-200'
                }
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`group ${contact.color} text-white p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${contact.shadow} border-2 border-white active:scale-95`}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">
                    {contact.icon}
                  </div>
                  <h5 className="text-xl font-bold mb-2">
                    {isKashmiri ? contact.titleKs : contact.title}
                  </h5>
                  <p className="text-white/90 font-medium">
                    {isKashmiri ? contact.descKs : contact.desc}
                  </p>
                  <div className="mt-4 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </a>
              ))}
            </div>
            
            {/* ✅ Additional Call-to-Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl border-2 border-gray-200 shadow-xl">
              <h5 className="text-2xl font-bold text-gray-800 mb-4">
                {isKashmiri ? '🚀 آئیے مل کر کام کریں' : '🚀 Let\'s Work Together'}
              </h5>
              <p className="text-lg text-gray-700 mb-6 font-semibold">
                {isKashmiri 
                  ? 'آپ کے خوابوں کو حقیقت میں تبدیل کرنے کے لیے تیار ہوں'
                  : 'Ready to bring your ideas to life with cutting-edge technology'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/resume/Taqaddus_Shafi_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white"
                >
                  <span className="mr-2">📄</span>
                  {isKashmiri ? 'ریزیومے دیکھیں' : 'View Resume'}
                </a>
                <a 
                  href="#projects" 
                  className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-300 hover:border-blue-400"
                >
                  <span className="mr-2">🚀</span>
                  {isKashmiri ? 'پروجیکٹس دیکھیں' : 'View Projects'}
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
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
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
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-slide-in-up { animation: slide-in-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
      `}</style>
    </section>
  )
}
