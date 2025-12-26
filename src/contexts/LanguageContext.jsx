import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Get from localStorage or default to 'fr'
    return localStorage.getItem('selectedLanguage') || 'fr'
  })

  useEffect(() => {
    // Save to localStorage when language changes
    localStorage.setItem('selectedLanguage', selectedLanguage)
    // Update HTML lang attribute
    document.documentElement.lang = selectedLanguage
    // Update direction for Arabic
    if (selectedLanguage === 'ar') {
      document.documentElement.dir = 'rtl'
    } else {
      document.documentElement.dir = 'ltr'
    }
  }, [selectedLanguage])

  const changeLanguage = (lang) => {
    if (['fr', 'ar', 'en'].includes(lang)) {
      setSelectedLanguage(lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

