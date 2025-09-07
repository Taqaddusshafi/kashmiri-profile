'use client'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { isKashmiri } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert(isKashmiri ? 'پیغام بھیج دیا گیا!' : 'Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: isKashmiri ? 'مقام' : 'Location',
      value: 'Srinagar, Jammu & Kashmir, India',
      description: isKashmiri ? 'کشمیرُک خوبصورت وادی' : 'Beautiful Valley of Kashmir'
    },
    {
      icon: '📧',
      title: isKashmiri ? 'ای میل' : 'Email',
      value: 'taqaddusabc@gmail.com',
      description: isKashmiri ? '24/7 دستیاب' : 'Available 24/7'
    },
    {
      icon: '📱',
      title: isKashmiri ? 'موبائل' : 'Mobile',
      value: '+91-7780845956',
      description: isKashmiri ? 'فوری رابطہ' : 'Direct Contact'
    },
    {
      icon: '🌐',
      title: isKashmiri ? 'ویب سائٹ' : 'Website',
      value: 'taqaddus-shafi.com',
      description: isKashmiri ? 'میرا پورٹ فولیو' : 'My Portfolio'
    }
  ]

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: '#', color: 'from-blue-600 to-blue-800' },
    { icon: '🐙', label: 'GitHub', url: '#', color: 'from-gray-700 to-gray-900' },
    { icon: '💬', label: 'Discord', url: '#', color: 'from-indigo-500 to-purple-600' },
    { icon: '📧', label: 'Email', url: 'mailto:taqaddusabc@gmail.com', color: 'from-red-500 to-red-700' },
    { icon: '🐦', label: 'Twitter', url: '#', color: 'from-blue-400 to-blue-600' },
    { icon: '📷', label: 'Instagram', url: '#', color: 'from-pink-500 to-purple-600' }
  ]

  return (
    <section className={`py-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative ${isKashmiri ? 'font-kashmiri' : ''}`}>
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-7xl mx-auto ${isKashmiri ? 'text-right' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              {isKashmiri ? 'رابطہ کریں' : 'Get In Touch'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isKashmiri 
                ? 'کیا آپ کے پاس کوئی پروجیکٹ آئیڈیا ہے؟ سائبر سیکیورٹی، فُل سٹیک، یا موبائل ایپ - آئیے بات چیت کریں!'
                : 'Have a project idea? Whether it\'s cybersecurity, full-stack development, or mobile apps - let\'s discuss how I can help!'
              }
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass p-10 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">
                {isKashmiri ? '📝 پیغام بھیجیں' : '📝 Send Message'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={isKashmiri ? 'آپ کا نام' : 'Your Name'}
                      className="w-full px-6 py-4 bg-white/80 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 text-lg"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder={isKashmiri ? 'آپ کا ای میل' : 'Your Email'}
                      className="w-full px-6 py-4 bg-white/80 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 text-lg"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={isKashmiri ? 'موضوع (جیسے: ویب ڈیولپمنٹ، سائبر سیکیورٹی، موبائل ایپ)' : 'Subject (e.g., Web Development, Cybersecurity, Mobile App)'}
                    className="w-full px-6 py-4 bg-white/80 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 text-lg"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder={isKashmiri ? 'آپ کا پیغام - پروجیکٹ کی تفصیلات بتائیں' : 'Your Message - Tell me about your project details'}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/80 border-2 border-purple-200 rounded-2xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 resize-none text-lg"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      {isKashmiri ? 'بھیجا جا رہا ہے...' : 'Sending...'}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      🚀 {isKashmiri ? 'پیغام بھیجیں' : 'Send Message'}
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-3xl font-bold text-purple-800 mb-8">
                  {isKashmiri ? '📞 رابطہ کی معلومات' : '📞 Contact Information'}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover">
                      <div className="text-4xl bg-gradient-to-r from-purple-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 text-xl mb-1">{info.title}</h4>
                        <p className="text-gray-700 font-semibold text-lg mb-1">{info.value}</p>
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {isKashmiri ? '🌐 سوشل میڈیا' : '🌐 Connect With Me'}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="group relative bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 hover:scale-110 hover:bg-white/30"
                    >
                      <span className="group-hover:scale-125 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-white/80 text-center mt-6">
                  {isKashmiri 
                    ? 'میری تازہ کاریں، پروجیکٹس اور ٹیک انسائٹس کے لیے فالو کریں'
                    : 'Follow for updates on my latest projects, tech insights, and more!'
                  }
                </p>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-3xl shadow-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-bold text-lg">
                      {isKashmiri ? 'دستیاب' : 'Available for Work'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    {isKashmiri ? '🚀 نئے پروجیکٹس کے لیے تیار' : '🚀 Ready for New Projects'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isKashmiri 
                      ? 'فُل سٹیک ڈیولپمنٹ، سائبر سیکیورٹی، اور موبائل ایپ پروجیکٹس کے لیے کھلا ہوں'
                      : 'Open for Full Stack Development, Cybersecurity, and Mobile App projects'
                    }
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <span>⏰</span>
                    <span className="font-semibold">
                      {isKashmiri ? 'فوری جواب - 24 گھنٹوں میں' : 'Quick Response - Within 24 Hours'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-cyan-600 p-12 rounded-3xl shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                {isKashmiri ? '🌟 آئیے کچھ شاندار بنائیں!' : '🌟 Let\'s Build Something Amazing!'}
              </h3>
              <p className="text-xl text-white/90 mb-8">
                {isKashmiri 
                  ? 'کیا آپ کو ایک محفوظ ویب ایپلیکیشن، موبائل ایپ، یا سائبر سیکیورٹی حل چاہیے? میں یہاں مدد کے لیے ہوں!'
                  : 'Need a secure web application, mobile app, or cybersecurity solution? I\'m here to help turn your vision into reality!'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                  {isKashmiri ? '💬 فوری چیٹ' : '💬 Quick Chat'}
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
                  {isKashmiri ? '📅 کال شیڈول کریں' : '📅 Schedule Call'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
