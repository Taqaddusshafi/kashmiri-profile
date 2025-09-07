'use client'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { isKashmiri } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

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
      icon: '🏔️',
      title: isKashmiri ? 'مقام' : 'Location',
      value: 'Srinagar, Jammu & Kashmir, India',
      description: isKashmiri ? 'کشمیرُک خوبصورت وادی' : 'Beautiful Valley of Kashmir',
      bg: 'bg-green-50',
      border: 'border-green-200',
      iconBg: 'bg-green-600'
    },
    {
      icon: '📧',
      title: isKashmiri ? 'ای میل' : 'Email',
      value: 'taqaddusabc@gmail.com',
      description: isKashmiri ? '24/7 دستیاب' : 'Available 24/7',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-600'
    },
    {
      icon: '📱',
      title: isKashmiri ? 'موبائل' : 'Mobile',
      value: '+91-7780845956',
      description: isKashmiri ? 'فوری رابطہ' : 'Direct Contact',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      iconBg: 'bg-purple-600'
    },
    {
      icon: '🌐',
      title: isKashmiri ? 'ویب سائٹ' : 'Website',
      value: 'taqaddus-shafi.com',
      description: isKashmiri ? 'میرا پورٹ فولیو' : 'My Portfolio',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      iconBg: 'bg-teal-600'
    }
  ]

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/taqaddus-shafi', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/taqaddus-shafi', color: 'bg-gray-800 hover:bg-gray-900' },
    { icon: '💬', label: 'Discord', url: '#', color: 'bg-indigo-600 hover:bg-indigo-700' },
    { icon: '📧', label: 'Email', url: 'mailto:taqaddusabc@gmail.com', color: 'bg-red-600 hover:bg-red-700' },
    { icon: '🐦', label: 'Twitter', url: '#', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: '📷', label: 'Instagram', url: '#', color: 'bg-pink-600 hover:bg-pink-700' }
  ]

  return (
    <section 
      id="contact-section"
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
                {isKashmiri ? 'رابطہ' : 'Contact'}
              </span>
            </div>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-800 leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {isKashmiri ? 'رابطہ کریں' : 'Get In Touch'}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-semibold leading-relaxed mb-6">
              {isKashmiri 
                ? 'کیا آپ کے پاس کوئی پروجیکٹ آئیڈیا ہے؟ سائبر سیکیورٹی، فُل سٹیک، یا موبائل ایپ - آئیے بات چیت کریں!'
                : 'Have a project idea? Whether it\'s cybersecurity, full-stack development, or mobile apps - let\'s discuss how I can help!'
              }
            </p>
            <div className={`w-24 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-0'}`} style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            
            {/* ✅ Contact Form - High Contrast */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="bg-white shadow-2xl p-8 sm:p-10 rounded-3xl border-2 border-gray-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
                  {isKashmiri ? '📝 پیغام بھیجیں' : '📝 Send Message'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={isKashmiri ? 'آپ کا نام' : 'Your Name'}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg font-medium text-gray-800 placeholder-gray-500"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder={isKashmiri ? 'آپ کا ای میل' : 'Your Email'}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg font-medium text-gray-800 placeholder-gray-500"
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
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg font-medium text-gray-800 placeholder-gray-500"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      placeholder={isKashmiri ? 'آپ کا پیغام - پروجیکٹ کی تفصیلات بتائیں' : 'Your Message - Tell me about your project details'}
                      rows={6}
                      className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 resize-none text-lg font-medium text-gray-800 placeholder-gray-500"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed border-2 border-green-500"
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
            </div>

            {/* ✅ Contact Info & Social - High Contrast */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
                  {isKashmiri ? '📞 رابطہ کی معلومات' : '📞 Contact Information'}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-6 ${info.bg} p-6 rounded-2xl border-2 ${info.border} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                    >
                      <div className={`${info.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg border-2 border-white`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl mb-1">{info.title}</h4>
                        <p className="text-gray-700 font-semibold text-lg mb-1">{info.value}</p>
                        <p className="text-gray-600 text-sm font-medium">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-3xl shadow-2xl border-2 border-green-500">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  {isKashmiri ? '🌐 سوشل میڈیا' : '🌐 Connect With Me'}
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target={social.url?.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="group relative bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:bg-white/30 border-2 border-white/30"
                    >
                      <span className="group-hover:scale-125 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        {social.label}
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-white/90 text-center font-semibold">
                  {isKashmiri 
                    ? 'میری تازہ کاریں، پروجیکٹس اور ٹیک انسائٹس کے لیے فالو کریں'
                    : 'Follow for updates on my latest projects, tech insights, and more!'
                  }
                </p>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl shadow-xl border-2 border-green-200">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-bold text-lg">
                      {isKashmiri ? 'دستیاب' : 'Available for Work'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    {isKashmiri ? '🚀 نئے پروجیکٹس کے لیے تیار' : '🚀 Ready for New Projects'}
                  </h3>
                  <p className="text-gray-700 mb-4 font-semibold">
                    {isKashmiri 
                      ? 'فُل سٹیک ڈیولپمنٹ، سائبر سیکیورٹی، اور موبائل ایپ پروجیکٹس کے لیے کھلا ہوں'
                      : 'Open for Full Stack Development, Cybersecurity, and Mobile App projects'
                    }
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <span>⏰</span>
                    <span className="font-bold">
                      {isKashmiri ? 'فوری جواب - 24 گھنٹوں میں' : 'Quick Response - Within 24 Hours'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Bottom CTA */}
          <div className={`text-center mt-16 sm:mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-blue-600 p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-green-500">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {isKashmiri ? '🌟 آئیے کچھ شاندار بنائیں!' : '🌟 Let\'s Build Something Amazing!'}
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-8 font-semibold leading-relaxed">
                {isKashmiri 
                  ? 'کیا آپ کو ایک محفوظ ویب ایپلیکیشن، موبائل ایپ، یا سائبر سیکیورٹی حل چاہیے? میں یہاں مدد کے لیے ہوں!'
                  : 'Need a secure web application, mobile app, or cybersecurity solution? I\'m here to help turn your vision into reality!'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
                <a 
                  href="tel:+917780845956"
                  className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white"
                >
                  {isKashmiri ? '💬 فوری چیٹ' : '💬 Quick Chat'}
                </a>
                <a 
                  href="https://calendly.com/taqaddus-shafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 hover:scale-105"
                >
                  {isKashmiri ? '📅 کال شیڈول کریں' : '📅 Schedule Call'}
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Contact Methods Grid */}
          <div className={`mt-16 sm:mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
              {isKashmiri ? '📞 رابطے کے طریقے' : '📞 Ways to Reach Me'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: '📧', 
                  title: 'Email Me', 
                  titleKs: 'ای میل کریں',
                  desc: 'Direct email response',
                  descKs: 'براہ راست ای میل جواب',
                  href: 'mailto:taqaddusabc@gmail.com',
                  color: 'bg-red-600 hover:bg-red-700'
                },
                { 
                  icon: '📞', 
                  title: 'Call Now', 
                  titleKs: 'فون کریں',
                  desc: 'Instant phone call',
                  descKs: 'فوری فون کال',
                  href: 'tel:+917780845956',
                  color: 'bg-green-600 hover:bg-green-700'
                },
                { 
                  icon: '💼', 
                  title: 'LinkedIn', 
                  titleKs: 'لنکڈان',
                  desc: 'Professional connect',
                  descKs: 'پیشہ ورانہ رابطہ',
                  href: 'https://linkedin.com/in/taqaddus-shafi',
                  color: 'bg-blue-600 hover:bg-blue-700'
                },
                { 
                  icon: '💬', 
                  title: 'WhatsApp', 
                  titleKs: 'واٹس ایپ',
                  desc: 'Quick messaging',
                  descKs: 'فوری پیغامات',
                  href: 'https://wa.me/917780845956',
                  color: 'bg-green-500 hover:bg-green-600'
                }
              ].map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`group ${contact.color} text-white p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-white text-center active:scale-95`}
                >
                  <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">
                    {contact.icon}
                  </div>
                  <h5 className="text-lg sm:text-xl font-bold mb-2">
                    {isKashmiri ? contact.titleKs : contact.title}
                  </h5>
                  <p className="text-white/90 font-medium text-sm sm:text-base">
                    {isKashmiri ? contact.descKs : contact.desc}
                  </p>
                </a>
              ))}
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
