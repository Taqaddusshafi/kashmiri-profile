'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const { isKashmiri, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  // ✅ Fixed scroll handler with proper TypeScript types
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / documentHeight) * 100

    const isScrolled = scrollTop > 50
    if (scrolled !== isScrolled) {
      setScrolled(isScrolled)
    }
    
    setScrollProgress(scrollPercent)

    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    
    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection)
    }
  }, [scrolled, activeSection])

  useEffect(() => {
    let ticking = false
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    handleScroll()
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [handleScroll])

  const navigationItems = [
    { key: 'home', en: 'Home', ks: 'گھر', href: '#home', icon: '🏠' },
    { key: 'about', en: 'About', ks: 'تعارف', href: '#about', icon: '👨‍💻' },
    { key: 'skills', en: 'Skills', ks: 'مہارتیں', href: '#skills', icon: '⚡' },
    { key: 'experience', en: 'Experience', ks: 'تجربہ', href: '#experience', icon: '💼' },
    { key: 'projects', en: 'Projects', ks: 'پروجیکٹس', href: '#projects', icon: '🚀' },
    { key: 'contact', en: 'Contact', ks: 'رابطہ', href: '#contact', icon: '📞' },
  ]

  // ✅ FIXED: Added explicit string type to href parameter
  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Enhanced Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 transition-all duration-300 shadow-lg"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <header
        className={`fixed top-1 left-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/10 backdrop-blur-2xl shadow-2xl border-b border-white/20' 
            : 'bg-black/10 backdrop-blur-md'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            
            {/* Enhanced Logo */}
            <div 
              className={`relative z-50 group cursor-pointer ${isKashmiri ? 'font-kashmiri' : ''}`}
              onClick={() => handleNavClick('#home')}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    TS
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-black text-white drop-shadow-lg group-hover:text-cyan-300 transition-all duration-300 block">
                    {isKashmiri ? 'تقدس شفیع' : 'Taqaddus Shafi'}
                  </span>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {isKashmiri ? 'ڈیولپر 🏔️' : 'Developer 🏔️'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-4 py-3 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    activeSection === item.key
                      ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white shadow-lg backdrop-blur-sm border border-white/20'
                      : 'hover:bg-white/10 hover:backdrop-blur-sm text-white/90 hover:text-white'
                  } ${isKashmiri ? 'font-kashmiri' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex items-center gap-2 text-sm font-semibold relative z-10">
                    <span className="text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {item.icon}
                    </span>
                    {isKashmiri ? item.ks : item.en}
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 rounded-2xl transition-all duration-300" />
                  
                  {activeSection === item.key && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* Enhanced Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`group relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden ${isKashmiri ? 'font-kashmiri' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
                
                <span className="relative flex items-center gap-2 text-sm sm:text-base z-10">
                  <span className="group-hover:rotate-180 transition-transform duration-500">🌐</span>
                  {isKashmiri ? 'English' : 'کٲشُر'}
                </span>
                
                <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 rounded-2xl transition-transform duration-200" />
              </button>

              {/* Enhanced Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden group p-3 text-white hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-110"
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-cyan-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`} />
                  <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-cyan-300 top-3 ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`} />
                  <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 group-hover:bg-cyan-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 space-y-3 border border-white/20 shadow-2xl">
              {navigationItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-3 text-white hover:text-cyan-300 transition-all duration-300 py-4 px-5 rounded-2xl hover:bg-white/10 hover:scale-105 group ${
                    activeSection === item.key ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/20 shadow-lg' : ''
                  } ${isKashmiri ? 'font-kashmiri text-right flex-row-reverse' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="font-semibold">
                    {isKashmiri ? item.ks : item.en}
                  </span>
                  
                  {activeSection === item.key && (
                    <div className="ml-auto w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
      </header>
    </>
  )
}
