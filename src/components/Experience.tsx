'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect } from 'react'

export default function Experience() {
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

    const section = document.getElementById('experience-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      titleKs: 'فری لانس فُل سٹیک ڈیولپر',
      company: 'Self-Employed',
      companyKs: 'خود ملازمت',
      period: 'Jun 2023 - Present',
      periodKs: 'جون 2023 - حال تک',
      description: 'Developed and deployed 2+ web applications using React and Node.js, improving client user engagement by 30%. Integrated REST APIs with MongoDB and PostgreSQL.',
      descriptionKs: 'ریکٹ تہ نوڈ جے ایس استعمال کرتھ 2+ ویب ایپلیکیشنز بناتن، کلائنٹ کی مشغولیت 30٪ بہتر کیتہ۔',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      dot: 'bg-blue-600'
    },
    {
      title: 'Cybersecurity Intern - IAM',
      titleKs: 'سائبر سیکیورٹی انٹرن',
      company: 'Tata Consultancy Services (Forage)',
      companyKs: 'ٹاٹا کنسلٹنسی سروسز',
      period: 'Jul 2024',
      periodKs: 'جولائی 2024',
      description: 'Designed IAM workflows aligning with NIST compliance standards. Developed RBAC policies, reducing unauthorized access risks by 30%.',
      descriptionKs: 'NIST کمپلائنس کے مطابق IAM ورک فلوز ڈیزائن کیتہ۔ RBAC پالیسیاں بناتن۔',
      bg: 'bg-red-50',
      border: 'border-red-200',
      dot: 'bg-red-600'
    },
    {
      title: 'Software Development Intern',
      titleKs: 'سافٹ ویئر ڈیولپمنٹ انٹرن',
      company: 'Tech Startup (via Upwork)',
      companyKs: 'ٹیک سٹارٹ اپ',
      period: 'Jan 2023 - May 2023',
      periodKs: 'جنوری 2023 - مئی 2023',
      description: 'Built real-time chat feature using Node.js and Socket.IO, increasing user interaction by 40%. Collaborated in Agile team environment.',
      descriptionKs: 'نوڈ جے ایس تہ Socket.IO استعمال کرتھ ریئل ٹائم چیٹ فیچر بناتہ۔',
      bg: 'bg-green-50',
      border: 'border-green-200',
      dot: 'bg-green-600'
    },
    {
      title: 'Android Developer Intern',
      titleKs: 'اینڈروئد ڈیولپر انٹرن',
      company: 'Omninos Technologies',
      companyKs: 'اومنینوس ٹیکنالوجیز',
      period: 'July 2024',
      periodKs: 'جولائی 2024',
      description: 'Designed and optimized Android applications using Kotlin, Java, and XML. Implemented REST APIs and debugged performance issues.',
      descriptionKs: 'کوٹلن، جاوا تہ XML استعمال کرتھ اینڈروئد ایپس بناتن تہ بہتر کیتن۔',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      dot: 'bg-purple-600'
    }
  ]

  const education = [
    {
      degree: 'M.Tech in Computer Science',
      degreeKs: 'ایم ٹیک کمپیوٹر سائنس',
      school: 'Central University of Kashmir',
      schoolKs: 'سینٹرل یونیورسٹی آف کشمیر',
      period: '2024 - 2026 (Pursuing)',
      periodKs: '2024 - 2026 (جاری)',
      description: 'Currently pursuing advanced studies in Computer Science with focus on research and development.',
      descriptionKs: 'فی الوقت کمپیوٹر سائنس منز ایڈوانس مطالعہ، تحقیق تہ ترقی پیٹھ فوکس۔',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      dot: 'bg-teal-600'
    },
    {
      degree: 'B.Tech Computer Science & Engineering',
      degreeKs: 'بی ٹیک کمپیوٹر سائنس انجینئرنگ',
      school: 'Lovely Professional University',
      schoolKs: 'لولی پروفیشنل یونیورسٹی',
      period: '2020 - 2024 (CGPA: 8.26)',
      periodKs: '2020 - 2024 (سی جی پی اے: 8.26)',
      description: 'Graduated with excellent academic performance. Relevant coursework: DSA, DBMS, ML, Web Development, Cybersecurity.',
      descriptionKs: 'بہترین تعلیمی کارکردگی سان فارغ التحصیل۔ متعلقہ کورسز: DSA، DBMS، ML۔',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      dot: 'bg-emerald-600'
    }
  ]

  const certifications = [
    { text: '3-Star Coder at CodeChef (Top 10% globally)', icon: '🏆', bg: 'bg-yellow-100', border: 'border-yellow-200' },
    { text: '500+ Problems solved (LeetCode + GeeksforGeeks)', icon: '💻', bg: 'bg-blue-100', border: 'border-blue-200' },
    { text: 'Google Cybersecurity Certificate (Coursera)', icon: '🔒', bg: 'bg-red-100', border: 'border-red-200' },
    { text: 'TCS Cybersecurity Virtual Internship', icon: '☁️', bg: 'bg-cyan-100', border: 'border-cyan-200' },
    { text: 'Deloitte Cybersecurity Virtual Internship', icon: '🛡️', bg: 'bg-green-100', border: 'border-green-200' },
    { text: 'Android Development Certification', icon: '📱', bg: 'bg-emerald-100', border: 'border-emerald-200' },
    { text: 'Full Stack Web Development', icon: '🌐', bg: 'bg-purple-100', border: 'border-purple-200' },
    { text: 'Penetration Testing & Ethical Hacking', icon: '🔍', bg: 'bg-orange-100', border: 'border-orange-200' }
  ]

  return (
    <section 
      id="experience-section"
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
                {isKashmiri ? 'میرا سفر' : 'My Journey'}
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-800 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isKashmiri ? 'کٲرؠ تجربہ تہ تعلیم' : 'Experience & Education'}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-6">
              {isKashmiri 
                ? 'میٚ کین پیشہ ورانہ سفر تہ تعلیمی پس منظر'
                : 'My professional journey and educational background in technology'
              }
            </p>
            <div className={`w-24 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            
            {/* ✅ Work Experience - High Contrast Timeline */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-3">
                💼 {isKashmiri ? 'کٲرؠ تجربہ' : 'Professional Experience'}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 sm:pl-10"
                  >
                    {/* Timeline line */}
                    {index !== experiences.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-20 bg-gray-300"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-2 top-6 w-4 h-4 ${exp.dot} rounded-full border-2 border-white shadow-lg`}></div>
                    
                    <div className={`${exp.bg} p-6 sm:p-8 rounded-2xl border-2 ${exp.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                      <h4 className="font-bold text-gray-800 text-xl sm:text-2xl mb-2">
                        {isKashmiri ? exp.titleKs : exp.title}
                      </h4>
                      <p className="text-gray-700 font-semibold text-lg mb-2">
                        {isKashmiri ? exp.companyKs : exp.company}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 flex items-center gap-2 font-medium">
                        📅 {isKashmiri ? exp.periodKs : exp.period}
                      </p>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {isKashmiri ? exp.descriptionKs : exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Education & Certifications - High Contrast */}
            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              
              {/* Education Section */}
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 flex items-center gap-3">
                🎓 {isKashmiri ? 'تعلیم' : 'Education'}
              </h3>
              <div className="space-y-8 mb-12 sm:mb-16">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 sm:pl-10"
                  >
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-20 bg-gray-300"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-2 top-6 w-4 h-4 ${edu.dot} rounded-full border-2 border-white shadow-lg`}></div>
                    
                    <div className={`${edu.bg} p-6 sm:p-8 rounded-2xl border-2 ${edu.border} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                      <h4 className="font-bold text-gray-800 text-xl sm:text-2xl mb-2">
                        {isKashmiri ? edu.degreeKs : edu.degree}
                      </h4>
                      <p className="text-gray-700 font-semibold text-lg mb-2">
                        {isKashmiri ? edu.schoolKs : edu.school}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 flex items-center gap-2 font-medium">
                        📅 {isKashmiri ? edu.periodKs : edu.period}
                      </p>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {isKashmiri ? edu.descriptionKs : edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Certifications - High Contrast Grid */}
              <div className="bg-white shadow-2xl p-8 rounded-3xl border-2 border-gray-300">
                <h4 className="font-bold text-gray-800 text-2xl sm:text-3xl mb-8 flex items-center gap-3">
                  🏆 {isKashmiri ? 'سرٹیفیکیٹس تہ اعزازات' : 'Certifications & Achievements'}
                </h4>
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-4 p-4 ${cert.bg} rounded-xl border-2 ${cert.border} shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{cert.icon}</div>
                      <span className="text-gray-800 font-semibold text-sm sm:text-base">{cert.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Skills Summary Section */}
          <div className={`mt-16 sm:mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 sm:p-12 rounded-3xl border-2 border-gray-200 shadow-xl">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                {isKashmiri ? '🛠️ حاصل شدہ مہارتیں' : '🛠️ Skills Acquired'}
              </h4>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 font-semibold text-center leading-relaxed">
                {isKashmiri 
                  ? 'تجربے اور تعلیم کے ذریعے حاصل کردہ تکنیکی مہارتیں'
                  : 'Technical skills gained through experience and education'
                }
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'React.js', icon: '⚛️', bg: 'bg-blue-100', border: 'border-blue-200' },
                  { name: 'Node.js', icon: '🟢', bg: 'bg-green-100', border: 'border-green-200' },
                  { name: 'Python', icon: '🐍', bg: 'bg-yellow-100', border: 'border-yellow-200' },
                  { name: 'MongoDB', icon: '🍃', bg: 'bg-emerald-100', border: 'border-emerald-200' },
                  { name: 'Android', icon: '📱', bg: 'bg-green-100', border: 'border-green-200' },
                  { name: 'Security', icon: '🔐', bg: 'bg-red-100', border: 'border-red-200' }
                ].map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`${skill.bg} border-2 ${skill.border} p-4 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md`}
                  >
                    <div className="text-2xl sm:text-3xl mb-2">{skill.icon}</div>
                    <div className="text-gray-800 font-bold text-xs sm:text-sm">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Call-to-Action */}
          <div className={`text-center mt-16 sm:mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-green-500 max-w-4xl mx-auto">
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                {isKashmiri ? '🚀 آئیے مل کر کام کریں' : '🚀 Let\'s Work Together'}
              </h5>
              <p className="text-lg sm:text-xl text-white/90 mb-8 font-semibold leading-relaxed">
                {isKashmiri 
                  ? 'میرا تجربہ اور مہارتیں آپ کے پروجیکٹ کو کامیاب بنانے میں مدد کر سکتی ہیں'
                  : 'My experience and skills can help bring your project to life successfully'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
                <a 
                  href="#projects" 
                  className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white"
                >
                  <span className="mr-2">🚀</span>
                  {isKashmiri ? 'پروجیکٹس دیکھیں' : 'View My Work'}
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105"
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
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gentle-float { animation: gentle-float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.6s ease-out forwards; }
      `}</style>
    </section>
  )
}
