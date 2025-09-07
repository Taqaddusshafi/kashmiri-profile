'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect, useRef, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AIChatBot from '../components/AIChatBot'

const FloatingIcons = dynamic(() => import('../components/FloatingIcons'), {
  ssr: false
})

export default function Home() {
  const { isKashmiri } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string, size: number}>>([])
  const [visitCount, setVisitCount] = useState(0)
  const [currentRole, setCurrentRole] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayedText, setDisplayedText] = useState('')
  const [showMagicCursor, setShowMagicCursor] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [timeOfDay, setTimeOfDay] = useState('')
  const [currentQuote, setCurrentQuote] = useState(0)
  const [showMatrix, setShowMatrix] = useState(false)
  const [ripples, setRipples] = useState<Array<{x: number, y: number, id: number}>>([])
  const [isClient, setIsClient] = useState(false)
  
  const heroRef = useRef<HTMLDivElement>(null)

  const roles = useMemo(() => 
    isKashmiri 
      ? ['🏔️ فُل سٹیک ڈیولپر', '🛡️ سائبر سیکیورٹی ایکسپرٹ', '📱 موبائل ایپ ڈیولپر', '📊 ریسرچ اینالسٹ', '🎨 UI/UX ڈیزائنر', '☁️ کلاؤڈ آرکیٹیکٹ'] 
      : ['🏔️ Full Stack Developer', '🛡️ Cybersecurity Expert', '📱 Mobile App Developer', '📊 Research Analyst', '🎨 UI/UX Designer', '☁️ Cloud Architect'],
    [isKashmiri]
  )

  const inspirationalQuotes = useMemo(() => 
    isKashmiri
      ? [
          '🏔️ "کشمیر کی طرح خوبصورت کوڈ لکھو"',
          '💎 "صاف اور سادہ حل بہترین ہے"',
          '🌿 "فطرت سے سیکھو، سادگی میں طاقت ہے"',
          '⭐ "کشمیر سے عالم تک - سادہ اور مؤثر"'
        ]
      : [
          '🏔️ "Code as beautiful as Kashmir"',
          '💎 "Simple and elegant solutions"',
          '🌿 "Learn from nature - power in simplicity"',
          '⭐ "From Kashmir valleys to global solutions"'
        ],
    [isKashmiri]
  )

  // Main initialization useEffect
  useEffect(() => {
    setIsClient(true)
    
    const timer = setTimeout(() => setIsVisible(true), 300)
    
    const hour = new Date().getHours()
    if (hour < 12) setTimeOfDay(isKashmiri ? '🌅 صُبح بخیر' : '🌅 Good Morning')
    else if (hour < 18) setTimeOfDay(isKashmiri ? '☀️ دوپہر بخیر' : '☀️ Good Afternoon')
    else setTimeOfDay(isKashmiri ? '🌙 شام بخیر' : '🌙 Good Evening')

    const generateParticles = () => {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 6}s`,
        size: i % 3 === 0 ? 5 : i % 5 === 0 ? 7 : 4
      }))
      setParticles(newParticles)
    }
    
    generateParticles()

    const count = parseInt(localStorage.getItem('visitCount') || '0') + 1
    localStorage.setItem('visitCount', count.toString())
    setVisitCount(count)

    if (count % 100 === 0) {
      setShowMatrix(true)
      setTimeout(() => setShowMatrix(false), 3000)
    }
    
    return () => clearTimeout(timer)
  }, [isKashmiri])

  // Scroll handler
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse events handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (Math.random() > 0.98) {
        setShowMagicCursor(true)
        setTimeout(() => setShowMagicCursor(false), 800)
      }
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() }
      setRipples(prev => [...prev, newRipple])
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 1500)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  // Typewriter effect
  useEffect(() => {
    const role = roles[currentRole]
    let index = 0
    setDisplayedText('')
    setIsTyping(true)

    const typeInterval = setInterval(() => {
      if (index <= role.length) {
        setDisplayedText(role.substring(0, index))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2500)
      }
    }, 120)

    return () => clearInterval(typeInterval)
  }, [currentRole, roles])

  // Quote rotation
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 6000)
    return () => clearInterval(quoteInterval)
  }, [inspirationalQuotes])

  // ✅ Fixed scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-white via-gray-50 to-slate-100">
      
      {/* ✅ FIXED: Repositioned Visitor Counter */}
      <div className="fixed bottom-4 left-4 sm:top-6 sm:left-6 sm:bottom-auto z-50 group">
        <div className="bg-white shadow-xl border-2 border-gray-300 text-gray-800 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm hover:scale-105 transition-all duration-300">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="text-lg sm:text-xl">🏔️</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border border-white"></div>
            </div>
            <div>
              <div className="text-xs text-gray-600 font-medium">Visitor</div>
              <div className="font-black text-sm sm:text-base text-gray-800" suppressHydrationWarning>
                #{visitCount.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ High Contrast Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-slate-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 via-transparent to-blue-50/30"></div>
      </div>
      
      {/* ✅ Subtle Particles */}
      {particles.length > 0 && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute animate-gentle-float bg-gray-400/20 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: 0.3,
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Matrix Effect */}
      {showMatrix && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-40 bg-black/80">
          <div className="matrix-rain">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className="matrix-column text-green-400 font-mono text-sm opacity-80"
                style={{ left: `${i * 3.33}%`, animationDelay: `${Math.random() * 2}s` }}
              >
                {Array.from({ length: 15 }, (_, j) => (
                  <div key={j} className="matrix-char">
                    {Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : Math.floor(Math.random() * 10)}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl sm:text-6xl font-bold text-green-400 animate-pulse text-center" suppressHydrationWarning>
              🎉 MILESTONE #{visitCount}
            </div>
          </div>
        </div>
      )}

      {/* Click Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-30 border-2 border-blue-500 rounded-full animate-gentle-ripple"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: '50px',
            height: '50px',
          }}
        ></div>
      ))}

      {/* Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-green-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float shadow-xl"
          style={{ transform: isClient ? `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` : 'translateY(0px) rotate(0deg)' }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float shadow-xl"
          style={{ 
            animationDelay: '3s', 
            transform: isClient ? `translateY(${scrollY * -0.08}px) rotate(${scrollY * -0.05}deg)` : 'translateY(0px) rotate(0deg)'
          }}
        ></div>
      </div>

      {/* Cursor Effect */}
      <div 
        className={`fixed pointer-events-none z-50 transition-all duration-500 ${showMagicCursor ? 'animate-gentle-glow' : ''}`}
        style={{
          left: mousePosition.x - 15,
          top: mousePosition.y - 15,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      >
        <div className="w-8 h-8 bg-blue-400/30 rounded-full mix-blend-multiply opacity-60">
          <div className="absolute inset-0 bg-green-400/20 rounded-full animate-gentle-pulse"></div>
        </div>
      </div>

      <Header />
      
      {/* ✅ Hero Section - Fully Responsive */}
      <main 
        id="home" 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center relative z-10 pt-20 sm:pt-24 px-4 sm:px-6 ${isKashmiri ? 'font-kashmiri' : ''}`}
        style={{ transform: isClient ? `translateY(${scrollY * 0.05}px)` : 'translateY(0px)' }}
      >
        <div className="container mx-auto py-12 sm:py-20">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* ✅ High Contrast Greeting - Responsive */}
            <div className={`mb-6 sm:mb-8 ${isVisible ? 'animate-gentle-slide-up' : 'opacity-0'}`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 sm:mb-4 font-bold" suppressHydrationWarning>
                {timeOfDay}
              </h1>
              <div className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold bg-white/90 py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto">
                {inspirationalQuotes[currentQuote]}
              </div>
            </div>
            
            {/* ✅ High Contrast Profile - Responsive */}
            <div className={`mb-8 sm:mb-12 ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`}>
              <div className="relative w-32 h-32 sm:w-48 md:w-56 sm:h-48 md:h-56 mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 rounded-full p-1 sm:p-2 shadow-2xl">
                  <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center text-gray-800 text-3xl sm:text-5xl md:text-6xl font-black shadow-xl border-2 sm:border-4 border-gray-200">
                    <span className="relative z-10">TS</span>
                  </div>
                </div>
                
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm md:text-lg shadow-lg border-2 border-white">
                  <span>🏔️</span>
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 bg-yellow-500 rounded-full animate-pulse shadow-lg border-2 border-white"></div>
              </div>
            </div>
            
            {/* ✅ High Contrast Text - Responsive */}
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-4 sm:mb-6 font-bold ${isVisible ? 'animate-gentle-slide-up' : 'opacity-0'}`}>
              {isKashmiri ? '🏔️ آداب، بہٕ چُھس' : '🏔️ Hello, I am'}
            </h1>
            
            <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 text-transparent bg-gradient-to-r from-green-700 via-blue-700 to-teal-700 bg-clip-text ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} 
                style={{ animationDelay: '0.3s' }}>
              {isKashmiri ? 'تقدس شفیع' : 'Taqaddus Shafi'}
            </h2>
            
            {/* ✅ High Contrast Role Display - Responsive */}
            <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 h-16 sm:h-20 flex items-center justify-center ${isVisible ? 'animate-gentle-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="relative bg-white/90 py-3 sm:py-4 px-4 sm:px-6 md:px-8 rounded-2xl shadow-lg border-2 border-gray-200 max-w-4xl">
                <span className="font-bold text-gray-800">
                  {displayedText}
                </span>
                {isTyping && (
                  <span className="animate-blink text-blue-600 ml-1 sm:ml-2 text-2xl sm:text-3xl md:text-4xl font-black">|</span>
                )}
              </div>
            </div>
            
            {/* ✅ High Contrast Location - Responsive */}
            <div className={`text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 font-semibold ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2">
                <span className="text-2xl sm:text-3xl">🏔️</span>
                <span className="text-center sm:text-left">{isKashmiri ? 'سرینگر، کشمیر، انڈیا' : 'Srinagar, Kashmir, India'}</span>
                <span className="text-xl sm:text-2xl">🌿</span>
              </div>
              <div className="text-base sm:text-lg text-gray-600 bg-white/80 py-2 sm:py-3 px-4 sm:px-6 rounded-xl shadow-sm border border-gray-200 inline-block max-w-lg">
                {isKashmiri ? 'وادیٔ کشمیر سے - عالمی حل' : 'From Kashmir Valley - Global Solutions'}
              </div>
            </div>
            
            {/* ✅ High Contrast Summary - Responsive */}
            <div className={`mb-6 sm:mb-8 ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed font-semibold bg-white/90 py-4 sm:py-6 px-4 sm:px-6 md:px-8 rounded-2xl shadow-lg border border-gray-200">
                {isKashmiri 
                  ? '🎓 B.Tech CSE | 🌟 500+ مسائل حل | ⭐ CodeChef 3-Star | 🔐 Cybersecurity Intern'
                  : '🎓 B.Tech CSE | 🌟 500+ Problems Solved | ⭐ CodeChef 3-Star | 🔐 Cybersecurity Intern'
                }
              </p>
              
              {/* ✅ High Contrast Badges - Responsive */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
                {[
                  { text: isKashmiri ? 'ڈیولپر' : 'Developer', bg: 'bg-green-600' },
                  { text: isKashmiri ? 'انجینئر' : 'Engineer', bg: 'bg-blue-600' },
                  { text: isKashmiri ? 'مسئلہ حل کنندہ' : 'Problem Solver', bg: 'bg-teal-600' }
                ].map((badge, index) => (
                  <div 
                    key={index} 
                    className={`${badge.bg} text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-2xl font-bold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg border-2 border-white`}
                    style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* ✅ High Contrast Skills - Responsive */}
            <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
              {[
                { icon: '🌐', text: isKashmiri ? 'فُل سٹیک' : 'Full Stack' },
                { icon: '🔐', text: isKashmiri ? 'سیکیورٹی' : 'Security' },
                { icon: '📱', text: isKashmiri ? 'موبائل' : 'Mobile' },
                { icon: '📊', text: isKashmiri ? 'تجزیات' : 'Analytics' },
                { icon: '☁️', text: isKashmiri ? 'کلاؤڈ' : 'Cloud' }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-lg border-2 border-gray-300 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl text-gray-800 font-bold hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  <span className="mr-2 text-lg sm:text-xl">{skill.icon}</span>
                  {skill.text}
                </div>
              ))}
            </div>
            
            {/* ✅ High Contrast CTA Buttons - Responsive */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
              <a 
                href="/resume/Taqaddus_Shafi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-500"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">📄</span>
                  <span>{isKashmiri ? 'ریزیومے دیکھیں' : 'View Resume'}</span>
                </div>
              </a>
              
              <a 
                href="mailto:taqaddusabc@gmail.com"
                className="w-full sm:w-auto border-4 border-blue-600 bg-white text-blue-700 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">💬</span>
                  <span>{isKashmiri ? 'رابطہ کریں' : 'Get In Touch'}</span>
                </div>
              </a>
            </div>

            {/* ✅ High Contrast Stats - Responsive */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }}>
              {[
                { number: '500+', label: isKashmiri ? 'مسائل' : 'Problems', icon: '🧩', bg: 'bg-green-600' },
                { number: '20+', label: isKashmiri ? 'پروجیکٹس' : 'Projects', icon: '🚀', bg: 'bg-blue-600' },
                { number: '3⭐', label: 'CodeChef', icon: '🏆', bg: 'bg-yellow-600' },
                { number: '8.26', label: 'CGPA', icon: '📚', bg: 'bg-purple-600' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center bg-white shadow-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-gray-300 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`${stat.bg} text-white w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ✅ High Contrast Social Links - Responsive */}
            <div className={`flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 ${isVisible ? 'animate-gentle-fade-in' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
              {[
                { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/taqaddus-shafi', color: 'bg-blue-600' },
                { icon: '🐙', label: 'GitHub', href: 'https://github.com/taqaddus-shafi', color: 'bg-gray-800' },
                { icon: '📧', label: 'Email', href: 'mailto:taqaddusabc@gmail.com', color: 'bg-red-600' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`group relative w-14 sm:w-16 h-14 sm:h-16 ${social.color} text-white rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border-2 border-white`}
                  title={social.label}
                >
                  {social.icon}
                  {/* ✅ FIXED: Non-blocking tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
            <div></div>

           {/* ✅ FIXED: Clickable Scroll Indicator - Below Content */}
<div className={`mt-10 flex justify-center z-10 ${isVisible ? 'animate-bounce' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
  <button
    onClick={() => scrollToSection('about-section')}
    className="group relative flex flex-col items-center text-gray-800 bg-white/95 py-4 sm:py-5 px-5 sm:px-7 rounded-2xl shadow-xl border-2 border-gray-300 hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-95"
    aria-label={isKashmiri ? 'مزید دیکھیں' : 'Scroll to explore more content'}
    type="button"
  >
    {/* Text */}
    <span className="text-sm sm:text-base mb-3 sm:mb-4 font-bold group-hover:text-blue-600 transition-colors duration-300 select-none pointer-events-none">
      {isKashmiri ? 'مزید دیکھیں' : 'Explore More'}
    </span>
    
    {/* Animated scroll indicator */}
    <div className="relative mb-2 sm:mb-3 select-none pointer-events-none">
      <div className="w-2 h-10 sm:h-12 bg-gradient-to-b from-green-600 to-blue-600 rounded-full"></div>
      <div className="absolute top-0 w-2 h-3 sm:h-4 bg-yellow-500 rounded-full animate-bounce shadow-sm"></div>
    </div>
    
    {/* Arrow */}
    <div className="text-xl sm:text-2xl group-hover:animate-bounce select-none pointer-events-none">⬇️</div>
    
    {/* Hover effect overlay */}
    <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </button>
</div>

          </div>
        </div>

        <FloatingIcons scrollY={scrollY} isKashmiri={isKashmiri} />
      </main>

      {/* All Sections */}
      <div id="about-section" className="transform transition-all duration-1000"><About /></div>
      <div id="skills" className="transform transition-all duration-1000"><Skills /></div>
      <div id="experience" className="transform transition-all duration-1000"><Experience /></div>
      <div id="projects" className="transform transition-all duration-1000"><Projects /></div>
      <div id="contact" className="transform transition-all duration-1000"><Contact /></div>

      <AIChatBot />

      {/* ✅ High Contrast Footer - Responsive */}
      <footer className={`relative bg-gray-900 text-white py-16 sm:py-20 ${isKashmiri ? 'font-kashmiri' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              {isKashmiri ? '🏔️ تقدس شفیع' : '🏔️ Taqaddus Shafi'}
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              {isKashmiri 
                ? 'کشمیر کی وادی سے - سادہ اور مؤثر حل'
                : 'From Kashmir Valley - Simple & Effective Solutions'
              }
            </p>
            
            {/* Footer Social Links - Responsive */}
            <div className="flex justify-center space-x-6 sm:space-x-8 mb-8 sm:mb-12">
              {[
                { icon: '💼', href: 'https://linkedin.com/in/taqaddus-shafi', color: 'bg-blue-600' },
                { icon: '🐙', href: 'https://github.com/taqaddus-shafi', color: 'bg-gray-700' },
                { icon: '📧', href: 'mailto:taqaddusabc@gmail.com', color: 'bg-red-600' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-12 sm:w-16 h-12 sm:h-16 ${link.color} rounded-2xl flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 hover:scale-110 shadow-lg border-2 border-white`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-sm sm:text-base">
                {isKashmiri 
                  ? '© 2025 تقدس شفیع - کشمیر کی محبت سے بنایا گیا ❤️'
                  : '© 2025 Taqaddus Shafi - Made with ❤️ from Kashmir'
                }
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                <span className="flex items-center gap-2" suppressHydrationWarning>
                  👥 {visitCount.toLocaleString()} Visitors
                </span>
                <span className="flex items-center gap-2">
                  🤖 AI-Powered Experience
                </span>
                <span className="flex items-center gap-2">
                  ⚡ Built with Next.js
                </span>
                <span className="flex items-center gap-2">
                  🌟 Version 2.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ Kashmir-themed Animations */}
      <style jsx>{`
        @keyframes gentle-slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gentle-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gentle-ripple {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes gentle-glow {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        
        .animate-gentle-slide-up { animation: gentle-slide-up 0.8s ease-out forwards; }
        .animate-gentle-fade-in { animation: gentle-fade-in 1s ease-out forwards; }
        .animate-blink { animation: blink 1.2s infinite; }
        .animate-gentle-float { animation: gentle-float 4s ease-in-out infinite; }
        .animate-gentle-ripple { animation: gentle-ripple 1.5s ease-out; }
        .animate-gentle-pulse { animation: gentle-pulse 2s ease-in-out infinite; }
        .animate-gentle-glow { animation: gentle-glow 0.8s ease-out; }
        
        .matrix-rain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .matrix-column {
          position: absolute;
          top: -100%;
          animation: matrix-fall 4s linear infinite;
        }
        
        .matrix-char {
          display: block;
          line-height: 1.2em;
        }
        
        @keyframes matrix-fall {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* ✅ FIXED: Tooltip and positioning fixes */
        .tooltip-fix {
          pointer-events: none !important;
        }

        .visitor-counter-mobile {
          position: fixed !important;
          bottom: 1rem !important;
          left: 1rem !important;
          z-index: 60 !important;
        }

        @media (min-width: 640px) {
          .visitor-counter-mobile {
            top: 1.5rem !important;
            left: 1.5rem !important;
            bottom: auto !important;
          }
        }
      `}</style>
    </div>
  )
}
