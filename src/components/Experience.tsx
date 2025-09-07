'use client'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { isKashmiri } = useLanguage()

  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      titleKs: 'فری لانس فُل سٹیک ڈیولپر',
      company: 'Self-Employed',
      companyKs: 'خود ملازمت',
      period: 'Jun 2023 - Present',
      periodKs: 'جون 2023 - حال تک',
      description: 'Developed and deployed 2+ web applications using React and Node.js, improving client user engagement by 30%. Integrated REST APIs with MongoDB and PostgreSQL.',
      descriptionKs: 'ریکٹ تہ نوڈ جے ایس استعمال کرتھ 2+ ویب ایپلیکیشنز بناتن، کلائنٹ کی مشغولیت 30٪ بہتر کیتہ۔'
    },
    {
      title: 'Cybersecurity Intern - IAM',
      titleKs: 'سائبر سیکیورٹی انٹرن',
      company: 'Tata Consultancy Services (Forage)',
      companyKs: 'ٹاٹا کنسلٹنسی سروسز',
      period: 'Jul 2024',
      periodKs: 'جولائی 2024',
      description: 'Designed IAM workflows aligning with NIST compliance standards. Developed RBAC policies, reducing unauthorized access risks by 30%.',
      descriptionKs: 'NIST کمپلائنس کے مطابق IAM ورک فلوز ڈیزائن کیتہ۔ RBAC پالیسیاں بناتن۔'
    },
    {
      title: 'Software Development Intern',
      titleKs: 'سافٹ ویئر ڈیولپمنٹ انٹرن',
      company: 'Tech Startup (via Upwork)',
      companyKs: 'ٹیک سٹارٹ اپ',
      period: 'Jan 2023 - May 2023',
      periodKs: 'جنوری 2023 - مئی 2023',
      description: 'Built real-time chat feature using Node.js and Socket.IO, increasing user interaction by 40%. Collaborated in Agile team environment.',
      descriptionKs: 'نوڈ جے ایس تہ Socket.IO استعمال کرتھ ریئل ٹائم چیٹ فیچر بناتہ۔'
    },
    {
      title: 'Android Developer Intern',
      titleKs: 'اینڈروئد ڈیولپر انٹرن',
      company: 'Omninos Technologies',
      companyKs: 'اومنینوس ٹیکنالوجیز',
      period: 'July 2024',
      periodKs: 'جولائی 2024',
      description: 'Designed and optimized Android applications using Kotlin, Java, and XML. Implemented REST APIs and debugged performance issues.',
      descriptionKs: 'کوٹلن، جاوا تہ XML استعمال کرتھ اینڈروئد ایپس بناتن تہ بہتر کیتن۔'
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
      descriptionKs: 'فی الوقت کمپیوٹر سائنس منز ایڈوانس مطالعہ، تحقیق تہ ترقی پیٹھ فوکس۔'
    },
    {
      degree: 'B.Tech Computer Science & Engineering',
      degreeKs: 'بی ٹیک کمپیوٹر سائنس انجینئرنگ',
      school: 'Lovely Professional University',
      schoolKs: 'لولی پروفیشنل یونیورسٹی',
      period: '2020 - 2024 (CGPA: 8.26)',
      periodKs: '2020 - 2024 (سی جی پی اے: 8.26)',
      description: 'Graduated with excellent academic performance. Relevant coursework: DSA, DBMS, ML, Web Development, Cybersecurity.',
      descriptionKs: 'بہترین تعلیمی کارکردگی سان فارغ التحصیل۔ متعلقہ کورسز: DSA، DBMS، ML۔'
    }
  ]

  const certifications = [
    '🏆 3-Star Coder at CodeChef (Top 10% globally)',
    '💻 500+ Problems solved (LeetCode + GeeksforGeeks)',
    '🔒 Google Cybersecurity Certificate (Coursera)',
    '☁️ TCS Cybersecurity Virtual Internship',
    '🛡️ Deloitte Cybersecurity Virtual Internship',
    '📱 Android Development Certification',
    '🌐 Full Stack Web Development',
    '🔍 Penetration Testing & Ethical Hacking'
  ]

  return (
    <section className={`py-24 bg-gradient-to-br from-white to-blue-50 relative ${isKashmiri ? 'font-kashmiri' : ''}`}>
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              {isKashmiri ? 'کٲرؠ تجربہ تہ تعلیم' : 'Experience & Education'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isKashmiri 
                ? 'میٚ کین پیشہ ورانہ سفر تہ تعلیمی پس منظر'
                : 'My professional journey and educational background in technology'
              }
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Work Experience */}
            <div>
              <h3 className="text-3xl font-bold text-purple-800 mb-10 flex items-center gap-3">
                💼 {isKashmiri ? 'کٲرؠ تجربہ' : 'Professional Experience'}
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-4 border-purple-300 hover:border-purple-500 transition-colors duration-300">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full shadow-lg"></div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover">
                      <h4 className="font-bold text-purple-800 text-xl mb-2">
                        {isKashmiri ? exp.titleKs : exp.title}
                      </h4>
                      <p className="text-purple-600 font-semibold text-lg mb-2">
                        {isKashmiri ? exp.companyKs : exp.company}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        📅 {isKashmiri ? exp.periodKs : exp.period}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {isKashmiri ? exp.descriptionKs : exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-10 flex items-center gap-3">
                🎓 {isKashmiri ? 'تعلیم' : 'Education'}
              </h3>
              <div className="space-y-8 mb-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-4 border-green-300 hover:border-green-500 transition-colors duration-300">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full shadow-lg"></div>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover">
                      <h4 className="font-bold text-green-800 text-xl mb-2">
                        {isKashmiri ? edu.degreeKs : edu.degree}
                      </h4>
                      <p className="text-green-600 font-semibold text-lg mb-2">
                        {isKashmiri ? edu.schoolKs : edu.school}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
                        📅 {isKashmiri ? edu.periodKs : edu.period}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {isKashmiri ? edu.descriptionKs : edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl">
                <h4 className="font-bold text-orange-800 text-2xl mb-6 flex items-center gap-3">
                  🏆 {isKashmiri ? 'سرٹیفیکیٹس تہ اعزازات' : 'Certifications & Achievements'}
                </h4>
                <div className="grid gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                      <span className="text-lg">{cert.split(' ')[0]}</span>
                      <span className="text-gray-700 font-medium">{cert.substring(cert.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
