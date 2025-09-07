'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import AIChatBot from '../components/AIChatBot'

// ✅ Dynamically import floating icons with no SSR
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

  // ✅ FIXED: Main initialization useEffect with proper structure
  useEffect(() => {
    setIsClient(true)
    
    const timer = setTimeout(() => setIsVisible(true), 300)
    
    // Time-based greeting
    const hour = new Date().getHours()
    if (hour < 12) setTimeOfDay(isKashmiri ? '🌅 صُبح بخیر' : '🌅 Good Morning')
    else if (hour < 18) setTimeOfDay(isKashmiri ? '☀️ دوپہر بخیر' : '☀️ Good Afternoon')
    else setTimeOfDay(isKashmiri ? '🌙 شام بخیر' : '🌙 Good Evening')

    // Generate particles
    const generateParticles = () => {
      const newParticles = Array.from({ length: 25 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${6 + Math.random() * 8}s`,
        size: i % 3 === 0 ? 6 : i % 5 === 0 ? 8 : 4
      }))
      setParticles(newParticles)
    }
    
    generateParticles()

    // Visitor count
    const count = parseInt(localStorage.getItem('visitCount') || '0') + 1
    localStorage.setItem('visitCount', count.toString())
    setVisitCount(count)

    // Matrix effect trigger on special occasions
    if (count % 100 === 0) {
      setShowMatrix(true)
      setTimeout(() => setShowMatrix(false), 3000)
    }
    
    return () => clearTimeout(timer)
  }, [isKashmiri])

  // ✅ FIXED: Separate scroll handler with throttling to prevent infinite loops
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

    // Initial call
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // ✅ Empty dependency array prevents infinite loops

  // ✅ FIXED: Separate mouse events handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Magic cursor trail effect
      if (Math.random() > 0.95) {
        setShowMagicCursor(true)
        setTimeout(() => setShowMagicCursor(false), 500)
      }
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      }
      setRipples(prev => [...prev, newRipple])
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, []) // ✅ Empty dependency array prevents infinite loops

  const roles = isKashmiri 
    ? ['🚀 فُل سٹیک ڈیولپر', '🛡️ سائبر سیکیورٹی ایکسپرٹ', '📱 موبائل ایپ ڈیولپر', '📊 ریسرچ اینالسٹ', '🎨 UI/UX ڈیزائنر', '☁️ کلاؤڈ آرکیٹیکٹ'] 
    : ['🚀 Full Stack Developer', '🛡️ Cybersecurity Expert', '📱 Mobile App Developer', '📊 Research Analyst', '🎨 UI/UX Designer', '☁️ Cloud Architect']

  const inspirationalQuotes = isKashmiri
    ? [
        '💡 "تکنالوجی دنیا بدلنے کا طاقت چھ"',
        '🌟 "کوڈنگ ایک فن چھ، حل ایک کلا"',
        '🔥 "نئے خیالات، نئے حل"',
        '⚡ "انوویشن کشمیر سے عالم تک"'
      ]
    : [
        '💡 "Code is poetry, debugging is art"',
        '🌟 "Innovation distinguishes leaders"',
        '🔥 "Dream it, code it, deploy it"',
        '⚡ "From Kashmir to Global Solutions"'
      ]

  // Typewriter effect for roles
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
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentRole, roles])

  // Quote rotation
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 5000)
    return () => clearInterval(quoteInterval)
  }, [inspirationalQuotes.length])

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black transition-colors duration-500">
      
      {/* ✅ Enhanced Visitor Counter */}
     

      {/* Enhanced Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-purple-900/30"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute w-full h-full bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 animate-aurora"
            style={{ transform: isClient ? `translateY(${scrollY * 0.5}px)` : 'translateY(0px)' }}
          ></div>
        </div>
      </div>
      
      {/* Enhanced Particles */}
      {particles.length > 0 && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className={`absolute animate-particle-float bg-white ${i % 4 === 0 ? 'animate-pulse' : ''}`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                borderRadius: '50%',
                opacity: i % 3 === 0 ? '0.8' : '0.4',
                boxShadow: i % 5 === 0 ? '0 0 20px rgba(147, 197, 253, 0.8)' : 'none'
              }}
            ></div>
          ))}
        </div>
      )}

      {/* Matrix Rain Effect */}
      {showMatrix && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-40 bg-black/80">
          <div className="matrix-rain">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="matrix-column text-green-400 font-mono text-sm opacity-80"
                style={{ left: `${i * 2}%`, animationDelay: `${Math.random() * 2}s` }}
              >
                {Array.from({ length: 20 }, (_, j) => (
                  <div key={j} className="matrix-char">
                    {Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : Math.floor(Math.random() * 10)}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-green-400 animate-pulse text-center" suppressHydrationWarning>
              🎉 MILESTONE #{visitCount}
            </div>
          </div>
        </div>
      )}

      {/* Click Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-30 border-2 border-cyan-400 rounded-full animate-ripple"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: '50px',
            height: '50px',
          }}
        ></div>
      ))}

      {/* Enhanced 3D Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float-3d shadow-2xl"
          style={{ transform: isClient ? `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)` : 'translateY(0px) rotate(0deg)' }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float-3d shadow-2xl"
          style={{ 
            animationDelay: '2s', 
            transform: isClient ? `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)` : 'translateY(0px) rotate(0deg)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float-3d shadow-2xl"
          style={{ 
            animationDelay: '4s', 
            transform: isClient 
              ? `translate(-50%, -50%) translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0005})` 
              : 'translate(-50%, -50%) translateY(0px) scale(1)'
          }}
        ></div>
        
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-cyan-400 rotate-45 animate-spin-slow opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-purple-400 animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 left-20 w-3 h-12 bg-gradient-to-b from-pink-400 to-transparent animate-float opacity-40"></div>
      </div>

      {/* Magic Cursor Follower */}
      <div 
        className={`fixed pointer-events-none z-50 transition-all duration-300 ${showMagicCursor ? 'animate-magic-burst' : ''}`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 rounded-full mix-blend-difference opacity-70 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-30"></div>
        </div>
        {showMagicCursor && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/50 px-2 py-1 rounded animate-bounce">
            ✨ Magic!
          </div>
        )}
      </div>

      <Header />
      
      {/* Hero Section */}
      <main 
        id="home" 
        ref={heroRef}
        className={`min-h-screen flex items-center justify-center relative z-10 pt-20 ${isKashmiri ? 'font-kashmiri' : ''}`}
        style={{ transform: isClient ? `translateY(${scrollY * 0.1}px)` : 'translateY(0px)' }}
      >
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Time-based Greeting */}
            <div className={`mb-8 ${isVisible ? 'animate-slide-in-down' : 'opacity-0'}`}>
              <h1 className="text-2xl md:text-3xl text-purple-300 mb-2 font-light" suppressHydrationWarning>
                {timeOfDay}
              </h1>
              <div className="text-lg text-cyan-200 animate-pulse">
                {inspirationalQuotes[currentQuote]}
              </div>
            </div>
            
            {/* Enhanced Profile Image */}
            <div className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="relative w-64 h-64 mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 via-pink-500 to-purple-500 rounded-full animate-rotate-gradient p-1 group-hover:p-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full animate-reverse-rotate opacity-50"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-indigo-600 via-purple-800 to-pink-800 rounded-full flex items-center justify-center text-white text-6xl font-black shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <span className="relative z-10 group-hover:animate-bounce">TS</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse-glow flex items-center justify-center text-3xl group-hover:scale-125 transition-transform duration-300">
                  <span className="animate-bounce">🚀</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-spin-slow flex items-center justify-center text-2xl">
                  <span className="animate-pulse">⚡</span>
                </div>
                <div className="absolute top-4 -left-8 w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-bounce-slow flex items-center justify-center text-lg">
                  <span className="animate-pulse">💎</span>
                </div>
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-float flex items-center justify-center text-sm">
                  <span>🌟</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Greeting */}
            <h1 className={`text-4xl md:text-5xl text-transparent bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 bg-clip-text mb-6 font-light ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {isKashmiri ? '🌟 آداب، بہٕ چُھس' : '🌟 Hello, I am'}
            </h1>
            
            {/* Enhanced Name */}
            <h2 className={`text-6xl md:text-8xl font-black mb-8 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
                style={{ 
                  animationDelay: '0.3s',
                  textShadow: '0 0 50px rgba(147, 197, 253, 0.5), 0 0 100px rgba(147, 197, 253, 0.3)',
                  filter: 'drop-shadow(0 0 20px rgba(147, 197, 253, 0.8))'
                }}>
              {isKashmiri ? 'تقدس شفیع' : 'Taqaddus Shafi'}
            </h2>
            
            {/* Typewriter Role Display */}
            <div className={`text-4xl md:text-6xl mb-8 h-24 flex items-center justify-center ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <span className="hero-subtitle font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
                  {displayedText}
                </span>
                {isTyping && (
                  <span className="animate-blink text-cyan-400 ml-2 text-6xl">|</span>
                )}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl -z-10"></div>
              </div>
            </div>
            
            {/* Enhanced Location */}
            <div className={`text-xl md:text-2xl text-cyan-200 mb-8 font-medium ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="animate-float">🏔️</span>
                <span>{isKashmiri ? 'سرینگر، کشمیر، انڈیا' : 'Srinagar, Kashmir, India'}</span>
                <span className="animate-bounce-slow">❄️</span>
              </div>
              <div className="text-lg text-purple-300 animate-pulse">
                {isKashmiri ? '🌍 مقامی سے عالمی - دنیا کو جوڑنا' : '🌍 Local to Global - Connecting Worlds'}
              </div>
            </div>
            
            {/* Professional Summary */}
            <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-5xl mx-auto leading-relaxed">
                {isKashmiri 
                  ? '🎓 B.Tech CSE گریجویٹ | 🌟 500+ DSA مسائل حل | ⭐ CodeChef 3-Star | 🔐 TCS/Deloitte سائبر سیکیورٹی انٹرن'
                  : '🎓 B.Tech CSE Graduate | 🌟 500+ DSA Problems Solved | ⭐ CodeChef 3-Star | 🔐 TCS/Deloitte Cybersecurity Intern'
                }
              </p>
              
              {/* Achievement Badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {[
                  { icon: '🏆', text: isKashmiri ? 'ٹاپ پرفارمر' : 'Top Performer', gradient: 'from-yellow-400 to-orange-500' },
                  { icon: '🚀', text: isKashmiri ? 'انوویٹر' : 'Innovator', gradient: 'from-blue-400 to-cyan-500' },
                  { icon: '💡', text: isKashmiri ? 'پرابلم سالور' : 'Problem Solver', gradient: 'from-green-400 to-emerald-500' },
                  { icon: '🎯', text: isKashmiri ? 'فوکسڈ' : 'Focused', gradient: 'from-purple-400 to-pink-500' }
                ].map((badge, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-r ${badge.gradient} text-white px-4 py-2 rounded-full font-semibold text-sm hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce-in`}
                    style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                  >
                    <span className="mr-2">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Expertise Areas */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
              {[
                { icon: '🌐', text: isKashmiri ? 'فُل سٹیک' : 'Full Stack', color: 'from-blue-600 to-purple-600' },
                { icon: '🔐', text: isKashmiri ? 'سائبر سیکیورٹی' : 'Cybersecurity', color: 'from-red-600 to-pink-600' },
                { icon: '📱', text: isKashmiri ? 'موبائل ایپس' : 'Mobile Apps', color: 'from-green-600 to-emerald-600' },
                { icon: '📊', text: isKashmiri ? 'ڈیٹا انالیسس' : 'Data Analysis', color: 'from-yellow-600 to-orange-600' },
                { icon: '☁️', text: isKashmiri ? 'کلاؤڈ' : 'Cloud', color: 'from-cyan-600 to-blue-600' },
                { icon: '🤖', text: isKashmiri ? 'AI/ML' : 'AI/ML', color: 'from-purple-600 to-indigo-600' }
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className={`group relative bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl text-white font-semibold hover:bg-gradient-to-r hover:${skill.color} transition-all duration-500 hover:scale-110 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-2xl overflow-hidden`}
                >
                  <div className="relative z-10 flex items-center">
                    <span className="mr-3 text-2xl group-hover:animate-bounce">{skill.icon}</span>
                    <span className="group-hover:text-white transition-colors duration-300">{skill.text}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-sm"></div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.6s' }}>
              <a 
                href="/resume/Taqaddus_Shafi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:rotate-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl group-hover:animate-bounce">📄</span>
                  <span>{isKashmiri ? 'ریزیومے ڈاون لوڈ' : 'Download Resume'}</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </a>
              
              <a 
                href="mailto:taqaddusabc@gmail.com"
                className="group relative border-3 border-white/30 bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-500 hover:scale-110 hover:shadow-2xl transform hover:-rotate-1"
              >
                <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-3">
                  <span className="text-2xl group-hover:animate-pulse">💬</span>
                  <span className="group-hover:text-purple-900 transition-colors duration-300">{isKashmiri ? 'رٲبطہٕ کٔرِو' : 'Get In Touch'}</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </a>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.8s' }}>
              {[
                { number: '500+', label: isKashmiri ? 'مسائل حل' : 'Problems Solved', icon: '🧩', color: 'from-green-500 to-emerald-600' },
                { number: '20+', label: isKashmiri ? 'پروجیکٹس' : 'Projects', icon: '🚀', color: 'from-blue-500 to-cyan-600' },
                { number: '3⭐', label: isKashmiri ? 'CodeChef' : 'CodeChef', icon: '🏆', color: 'from-yellow-500 to-orange-600' },
                { number: '8.26', label: isKashmiri ? 'CGPA' : 'CGPA', icon: '📚', color: 'from-purple-500 to-pink-600' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`group text-center bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:${stat.color} hover:shadow-2xl`}
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-4xl font-black text-white mb-3 group-hover:text-6xl transition-all duration-500">{stat.number}</div>
                  <div className="text-purple-200 text-sm font-medium group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`flex justify-center space-x-8 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
              {[
                { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/taqaddus-shafi', gradient: 'from-blue-600 to-blue-800', hoverGradient: 'from-blue-500 to-blue-700' },
                { icon: '🐙', label: 'GitHub', href: 'https://github.com/taqaddus-shafi', gradient: 'from-gray-700 to-gray-900', hoverGradient: 'from-gray-600 to-gray-800' },
                { icon: '📧', label: 'Email', href: 'mailto:taqaddusabc@gmail.com', gradient: 'from-red-500 to-red-700', hoverGradient: 'from-red-400 to-red-600' },
                { icon: '🌐', label: 'Portfolio', href: 'https://taqaddus-shafi.com', gradient: 'from-purple-500 to-pink-500', hoverGradient: 'from-purple-400 to-pink-400' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`group relative w-20 h-20 bg-gradient-to-r ${social.gradient} hover:bg-gradient-to-r hover:${social.hoverGradient} rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:rotate-12 transform`}
                  style={{ animationDelay: `${2.2 + index * 0.1}s` }}
                >
                  <span className="group-hover:scale-125 transition-transform duration-500 relative z-10">
                    {social.icon}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-sm"></div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                    {social.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-bounce' : 'opacity-0'}`} style={{ animationDelay: '2.5s' }}>
              <div className="flex flex-col items-center text-white group cursor-pointer">
                <span className="text-sm mb-4 font-medium group-hover:text-cyan-300 transition-colors duration-300">
                  {isKashmiri ? 'مزیٖد زاننہٕ خٲطرٕ سکرول کٔرِتھ۔' : 'Scroll to Explore More'}
                </span>
                <div className="relative">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-400 via-cyan-400 to-transparent rounded-full animate-pulse"></div>
                  <div className="absolute top-0 w-2 h-6 bg-gradient-to-b from-white to-cyan-400 rounded-full animate-slide-down"></div>
                </div>
                <div className="mt-3 text-2xl animate-bounce-slow">⬇️</div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ FIXED: Floating Tech Icons with No SSR */}
        <FloatingIcons scrollY={scrollY} isKashmiri={isKashmiri} />
      </main>

      {/* All Sections */}
      <div id="about" className="transform transition-all duration-1000"><About /></div>
      <div id="skills" className="transform transition-all duration-1000"><Skills /></div>
      <div id="experience" className="transform transition-all duration-1000"><Experience /></div>
      <div id="projects" className="transform transition-all duration-1000"><Projects /></div>
      <div id="contact" className="transform transition-all duration-1000"><Contact /></div>

      <AIChatBot />

      {/* Enhanced Footer */}
      <footer className={`relative bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white py-24 overflow-hidden ${isKashmiri ? 'font-kashmiri' : ''}`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/30"
            style={{ transform: isClient ? `translateY(${scrollY * 0.3}px)` : 'translateY(0px)' }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            <div className="text-center mb-16">
              <h3 className="text-5xl font-bold mb-8 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text">
                {isKashmiri ? '🌐 تقدس شفیع' : '🌐 Taqaddus Shafi'}
              </h3>
              <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
                {isKashmiri 
                  ? 'فُل سٹیک ڈیولپر | سائبر سیکیورٹی ایکسپرٹ | موبائل ایپ ڈیولپر'
                  : 'Full Stack Developer | Cybersecurity Expert | Mobile App Developer'
                }
              </p>
              <p className="text-xl text-purple-300 mb-8">
                {isKashmiri 
                  ? 'سرینگر، کشمیر سے - عالمی معیار کے حل فراہم کرنا'
                  : 'From Srinagar, Kashmir - Delivering World-Class Solutions'
                }
              </p>
              
              {/* Footer Social Links */}
              <div className="flex justify-center space-x-10 mb-12">
                {[
                  { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/taqaddus-shafi', gradient: 'from-blue-500 to-blue-700' },
                  { icon: '🐙', label: 'GitHub', href: 'https://github.com/taqaddus-shafi', gradient: 'from-gray-600 to-gray-800' },
                  { icon: '📧', label: 'Email', href: 'mailto:taqaddusabc@gmail.com', gradient: 'from-red-500 to-red-700' },
                  { icon: '🌐', label: 'Portfolio', href: 'https://taqaddus-shafi.com', gradient: 'from-purple-500 to-pink-500' }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`group relative w-20 h-20 bg-gradient-to-r ${link.gradient} rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:rotate-6`}
                  >
                    <span className="group-hover:scale-125 transition-transform duration-500">
                      {link.icon}
                    </span>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-xl text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                      {link.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Copyright Section */}
            <div className="border-t border-white/20 pt-12 text-center">
              <p className="text-xl mb-4 font-medium">
                {isKashmiri 
                  ? '© 2025 تقدس شفیع۔ تمام حقوق محفوظ ہین۔'
                  : '© 2025 Taqaddus Shafi. All rights reserved.'
                }
              </p>
              <p className="text-purple-300 flex items-center justify-center gap-3 text-xl mb-4">
                {isKashmiri 
                  ? '🏔️ کشمیر کی وادی سے ❤️ کے ساتھ بنایا گیا'
                  : '🏔️ Crafted with ❤️ from the Valley of Kashmir'
                }
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
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

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        
        @keyframes float-3d {
          0%, 100% { transform: translateY(0px) translateX(0px) rotateZ(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotateZ(120deg); }
          66% { transform: translateY(20px) translateX(-20px) rotateZ(240deg); }
        }
        
        @keyframes float-complex {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
          25% { transform: translateY(-40px) translateX(20px) rotate(90deg) scale(1.1); }
          50% { transform: translateY(-20px) translateX(-30px) rotate(180deg) scale(0.9); }
          75% { transform: translateY(-60px) translateX(10px) rotate(270deg) scale(1.05); }
        }
        
        @keyframes magic-burst {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(2); filter: brightness(2) hue-rotate(180deg); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes slide-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(40px); }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(180deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(0deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .animate-aurora { animation: aurora 8s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float 6s ease-in-out infinite; }
        .animate-float-3d { animation: float-3d 8s ease-in-out infinite; }
        .animate-float-complex { animation: float-complex 12s ease-in-out infinite; }
        .animate-magic-burst { animation: magic-burst 0.5s ease-out; }
        .animate-ripple { animation: ripple 1s ease-out; }
        .animate-blink { animation: blink 1s infinite; }
        .animate-slide-down { animation: slide-down 2s ease-in-out infinite; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; }
        .animate-bounce-slow { animation: bounce 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        
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
          animation: matrix-fall 3s linear infinite;
        }
        
        .matrix-char {
          display: block;
          line-height: 1.2em;
        }
        
        @keyframes matrix-fall {
          0% { top: -100%; }
          100% { top: 100%; }
        }
      `}</style>
    </div>
  )
}
