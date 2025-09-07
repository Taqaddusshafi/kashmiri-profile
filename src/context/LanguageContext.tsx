'use client'
import { createContext, useContext, useState } from 'react'

interface LanguageContextType {
  isKashmiri: boolean
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isKashmiri, setIsKashmiri] = useState(false)
  
  const toggleLanguage = () => {
    setIsKashmiri(!isKashmiri)
  }

  return (
    <LanguageContext.Provider value={{ isKashmiri, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
