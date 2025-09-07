'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'

export default function Skills() {
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

    const section = document.getElementById('skills-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      key: 'fullstack',
      en: 'Full Stack Development',
      ks: 'فُل سٹیک ڈیولپمنٹ',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      icon: '🌐',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-600',
      hoverBg: 'hover:bg-blue-100'
    },
    {
      key: 'mobile',
      en: 'Mobile Development',
      ks: 'موبائل ڈیولپمنٹ',
      skills: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Android Studio', 'Xcode'],
      icon: '📱',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-600',
      hoverBg: 'hover:bg-green-100'
    },
    {
      key: 'cybersecurity',
      en: 'Cybersecurity',
      ks: 'سائبر سیکیورٹی',
      skills: ['Penetration Testing', 'Burp Suite', 'Nmap', 'OWASP ZAP', 'Metasploit', 'Wireshark'],
      icon: '🔐',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-600',
      hoverBg: 'hover:bg-red-100'
    },
    {
      key: 'languages',
      en: 'Programming Languages',
      ks: 'پروگرامنگ زبانیں',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'Rust'],
      icon: '💻',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-600',
      hoverBg: 'hover:bg-purple-100'
    },
    {
      key: 'tools',
      en: 'Tools & Platforms',
      ks: 'ٹولز تہ پلیٹ فارمز',
      skills: ['Git/GitHub', 'Docker', 'AWS', 'Firebase', 'VS Code', 'Linux'],
      icon: '🛠️',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-600',
      hoverBg: 'hover:bg-orange-100'
    },
    {
      key: 'databases',
      en: 'Databases & Analytics',
      ks: 'ڈیٹابیس تہ تجزیات',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Power BI', 'Excel'],
      icon: '📊',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      iconBg: 'bg-indigo-600',
      hoverBg: 'hover:bg-indigo-100'
    }
  ]

  return (
    <section
      id="skills-section"
      className={`py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden ${
        isKashmiri ? 'font-kashmiri' : ''
      }`}
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
                {isKashmiri ? 'میری صلاحیات' : 'My Expertise'}
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-800 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isKashmiri ? 'تکنیکی مہارتیں' : 'Technical Skills'}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-6">
              {isKashmiri
                ? 'مختلف ٹیکنالوجیز تہ پروگرامنگ زبانوں منز میٚ کین مہارت'
                : 'My expertise spans across multiple technologies and programming languages'}
            </p>
            <div className={`w-24 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* ✅ High Contrast Skill Categories - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
            {skillCategories.map((category, index) => (
              <div
                key={category.key}
                className={`group ${category.bgColor} ${category.hoverBg} p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl border-2 ${category.borderColor} hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-center mb-6 sm:mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 ${category.iconBg} rounded-2xl text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white`}
                  >
                    <span className="text-white">{category.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {isKashmiri ? category.ks : category.en}
                  </h3>
                </div>

                {/* ✅ High Contrast Skill Chips */}
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-2 bg-white shadow-md border border-gray-300 text-gray-800 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ High Contrast Achievements Section */}
          <div className={`mb-16 sm:mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isKashmiri ? 'خاص کامیابیاں' : 'Key Achievements'}
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 font-semibold">
                {isKashmiri ? 'میری اہم کامیابیاں اور مہارتیں' : 'Milestones that showcase my technical proficiency'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  icon: '⭐', 
                  title: '3-Star CodeChef', 
                  titleKs: '3-ستارہ کوڈشیف',
                  desc: 'Top 10% Globally', 
                  descKs: 'عالمی طور پر ٹاپ 10%',
                  bg: 'bg-yellow-600',
                  bgLight: 'bg-yellow-50',
                  border: 'border-yellow-200'
                },
                { 
                  icon: '🏆', 
                  title: '500+ Problems', 
                  titleKs: '500+ مسائل',
                  desc: 'LeetCode & GFG', 
                  descKs: 'لیٹ کوڈ اور جی ایف جی',
                  bg: 'bg-green-600',
                  bgLight: 'bg-green-50',
                  border: 'border-green-200'
                },
                { 
                  icon: '🎯', 
                  title: '90-Day Streak', 
                  titleKs: '90 دن کی لگاتار',
                  desc: 'Consistent Coding', 
                  descKs: 'مسلسل کوڈنگ',
                  bg: 'bg-blue-600',
                  bgLight: 'bg-blue-50',
                  border: 'border-blue-200'
                }
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`group ${achievement.bgLight} border-2 ${achievement.border} p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center`}
                >
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className={`w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-2xl ${achievement.bg} text-3xl sm:text-4xl text-white shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                    {isKashmiri ? achievement.titleKs : achievement.title}
                  </h4>
                  <p className="text-gray-600 font-semibold text-sm sm:text-base">
                    {isKashmiri ? achievement.descKs : achievement.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Professional Development Section */}
          <div className={`bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border-2 border-gray-300 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.2s' }}>
            <div className="text-center mb-12">
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {isKashmiri ? '🎓 پیشہ ورانہ ترقی' : '🎓 Professional Development'}
              </h4>
              <p className="text-lg sm:text-xl text-gray-600 font-semibold">
                {isKashmiri ? 'مسلسل سیکھنے اور بہتری کا عمل' : 'Continuous learning and skill enhancement'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏢',
                  title: isKashmiri ? 'انٹرنشپس' : 'Internships',
                  items: ['TCS Cybersecurity', 'Deloitte Security', 'Tech Startup'],
                  bgColor: 'bg-blue-50',
                  iconBg: 'bg-blue-600',
                  borderColor: 'border-blue-200'
                },
                {
                  icon: '📚',
                  title: isKashmiri ? 'سرٹیفیکیٹس' : 'Certifications',
                  items: ['AWS Cloud Practitioner', 'Google Analytics', 'Meta Frontend'],
                  bgColor: 'bg-green-50',
                  iconBg: 'bg-green-600',
                  borderColor: 'border-green-200'
                },
                {
                  icon: '🎯',
                  title: isKashmiri ? 'مقابلے' : 'Competitions',
                  items: ['Smart India Hackathon', 'CodeChef Contests', 'Local Coding Events'],
                  bgColor: 'bg-purple-50',
                  iconBg: 'bg-purple-600',
                  borderColor: 'border-purple-200'
                }
              ].map((category, index) => (
                <div 
                  key={index}
                  className={`${category.bgColor} border-2 ${category.borderColor} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center text-2xl text-white mb-4 shadow-lg border-2 border-white`}>
                    {category.icon}
                  </div>
                  <h5 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h5>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Call-to-Action Section */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 sm:p-12 rounded-3xl border-2 border-gray-200 shadow-xl">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {isKashmiri ? '🚀 آئیے مل کر کام کریں' : '🚀 Let\'s Build Something Amazing'}
              </h5>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 font-semibold max-w-3xl mx-auto">
                {isKashmiri 
                  ? 'میں ہمیشہ نئے چیلنجز اور دلچسپ پروجیکٹس کے لیے تیار ہوں'
                  : 'Ready to tackle complex challenges and create innovative solutions together'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
                <a 
                  href="#projects" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500"
                >
                  <span className="mr-2">🚀</span>
                  {isKashmiri ? 'پروجیکٹس دیکھیں' : 'View My Projects'}
                </a>
                <a 
                  href="#contact" 
                  className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-300 hover:border-blue-400"
                >
                  <span className="mr-2">💬</span>
                  {isKashmiri ? 'رابطہ کریں' : 'Get In Touch'}
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
      `}</style>
    </section>
  )
}
