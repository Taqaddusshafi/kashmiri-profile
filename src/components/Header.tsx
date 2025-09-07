'use client'
import { useLanguage } from '../context/LanguageContext'
import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const { isKashmiri, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

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
    { key: 'home', en: 'Home', ks: 'گھر', href: '#home', icon: '🏔️' },
    { key: 'about', en: 'About', ks: 'تعارف', href: '#about', icon: '👤' },
    { key: 'skills', en: 'Skills', ks: 'مہارتیں', href: '#skills', icon: '⚡' },
    { key: 'experience', en: 'Experience', ks: 'تجربہ', href: '#experience', icon: '💼' },
    { key: 'projects', en: 'Projects', ks: 'پروجیکٹس', href: '#projects', icon: '🚀' },
    { key: 'contact', en: 'Contact', ks: 'رابطہ', href: '#contact', icon: '📞' },
  ]

  const handleNavClick = (href: string): void => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* ✅ High Contrast Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-800/90 z-50 shadow-md">
        <div 
          className="h-full bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 shadow-lg transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <header
        className={`fixed top-2 left-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-300' 
            : 'bg-white/85 backdrop-blur-lg shadow-lg border-b border-gray-200'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex justify-between items-center">
            
            {/* ✅ High Contrast Logo */}
            <div 
              className={`relative z-50 group cursor-pointer ${isKashmiri ? 'font-kashmiri' : ''}`}
              onClick={() => handleNavClick('#home')}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-700 to-blue-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 border-2 border-green-600/20">
                    TS
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 rounded-full shadow-lg border-2 border-white animate-pulse" />
                </div>
                <div className="hidden sm:block">
                  <span className={`text-2xl font-black group-hover:text-blue-700 transition-all duration-300 block text-gray-800`}>
                    {isKashmiri ? 'تقدس شفیع' : 'Taqaddus Shafi'}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {isKashmiri ? 'ڈیولپر 🏔️' : 'Developer 🏔️'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* ✅ High Contrast Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-semibold ${
                    activeSection === item.key
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg border border-green-500'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 border border-transparent hover:border-gray-200'
                  } ${isKashmiri ? 'font-kashmiri' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex items-center gap-2 text-sm font-bold relative z-10">
                    <span className="text-lg group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </span>
                    {isKashmiri ? item.ks : item.en}
                  </span>
                  
                  {activeSection === item.key && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-yellow-500 rounded-full shadow-sm" />
                  )}
                </button>
              ))}
            </div>

            {/* ✅ High Contrast Controls */}
            <div className="flex items-center gap-3 sm:gap-4">
              
              {/* High Contrast Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`group relative px-5 sm:px-7 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 border border-green-500 ${isKashmiri ? 'font-kashmiri' : ''}`}
              >
                <span className="relative flex items-center gap-2 text-sm sm:text-base z-10">
                  <span className="group-hover:rotate-12 transition-transform duration-300 text-lg">🌐</span>
                  {isKashmiri ? 'English' : 'کٲشُر'}
                </span>
                
                <div className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 rounded-xl transition-transform duration-150" />
              </button>

              {/* High Contrast Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden group p-4 text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200"
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute w-full h-1 bg-gray-800 transition-all duration-300 rounded-full ${
                    isMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
                  }`} />
                  <span className={`absolute w-full h-1 bg-gray-800 transition-all duration-300 top-2.5 rounded-full ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`} />
                  <span className={`absolute w-full h-1 bg-gray-800 transition-all duration-300 rounded-full ${
                    isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
                  }`} />
                </div>
              </button>
            </div>
          </div>

          {/* ✅ High Contrast Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-500 overflow-hidden ${
              isMenuOpen ? 'max-h-[600px] opacity-100 mt-8' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 space-y-2 border-2 border-gray-200 shadow-xl">
              {navigationItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-4 transition-all duration-300 py-4 px-6 rounded-xl hover:scale-[1.02] group font-semibold ${
                    activeSection === item.key 
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md border border-green-500' 
                      : 'text-gray-800 hover:bg-gray-100 border border-transparent hover:border-gray-200'
                  } ${isKashmiri ? 'font-kashmiri text-right flex-row-reverse' : ''}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-xl group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </span>
                  <span className="font-bold">
                    {isKashmiri ? item.ks : item.en}
                  </span>
                  
                  {activeSection === item.key && (
                    <div className="ml-auto w-3 h-3 bg-yellow-400 rounded-full shadow-sm" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
