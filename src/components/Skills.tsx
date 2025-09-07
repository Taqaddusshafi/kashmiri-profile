'use client'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { isKashmiri } = useLanguage()

  const skillCategories = [
    {
      key: 'fullstack',
      en: 'Full Stack Development',
      ks: 'فُل سٹیک ڈیولپمنٹ',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      icon: '🌐',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'mobile',
      en: 'Mobile Development',
      ks: 'موبائل ڈیولپمنٹ',
      skills: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Android Studio', 'Xcode'],
      icon: '📱',
      color: 'from-green-500 to-emerald-500'
    },
    {
      key: 'cybersecurity',
      en: 'Cybersecurity',
      ks: 'سائبر سیکیورٹی',
      skills: ['Penetration Testing', 'Burp Suite', 'Nmap', 'OWASP ZAP', 'Metasploit', 'Wireshark'],
      icon: '🔐',
      color: 'from-red-500 to-pink-500'
    },
    {
      key: 'languages',
      en: 'Programming Languages',
      ks: 'پروگرامنگ زبانیں',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'Rust'],
      icon: '💻',
      color: 'from-purple-500 to-violet-500'
    },
    {
      key: 'tools',
      en: 'Tools & Platforms',
      ks: 'ٹولز تہ پلیٹ فارمز',
      skills: ['Git/GitHub', 'Docker', 'AWS', 'Firebase', 'VS Code', 'Linux'],
      icon: '🛠️',
      color: 'from-orange-500 to-red-500'
    },
    {
      key: 'databases',
      en: 'Databases & Analytics',
      ks: 'ڈیٹابیس تہ تجزیات',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Power BI', 'Excel'],
      icon: '📊',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section
      className={`py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative ${
        isKashmiri ? 'font-kashmiri' : ''
      }`}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
              {isKashmiri ? 'تکنیکی مہارتیں' : 'Technical Skills'}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {isKashmiri
                ? 'مختلف ٹیکنالوجیز تہ پروگرامنگ زبانوں منز میٚ کین مہارت'
                : 'My expertise spans across multiple technologies and programming languages'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.key}
                className="glass p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-full text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {isKashmiri ? category.ks : category.en}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-24 text-center">
            <h3 className="text-3xl font-bold text-white mb-10">
              {isKashmiri ? 'خاص کامیابیاں' : 'Key Achievements'}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: '⭐', title: '3-Star CodeChef', desc: 'Top 10% Globally' },
                { icon: '🏆', title: '500+ Problems', desc: 'LeetCode & GFG' },
                { icon: '🎯', title: '90-Day Streak', desc: 'Consistent Coding' }
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-white/20 px-8 py-8 rounded-2xl hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 text-3xl">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
