import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { TransText } from './TransText'
import { translations } from '../data/translations'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const location = useLocation()
  const { selectedLanguage, changeLanguage } = useLanguage()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', key: 'home' },
    { path: '/products', key: 'products' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ]

  const languages = [
    { code: 'fr', name: 'FR', },
    { code: 'ar', name: 'AR',  },
    { code: 'en', name: 'EN', },
  ]

  return (
    <nav className="bg-white shadow-xl border-b-2 border-industrial-blue/20 sticky top-0 z-50" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="SONOTIC - Retour à l'accueil">
            <div className="relative">
              <img 
                src="/assets/logo.jpeg" 
                alt="SONOTIC Logo" 
                className="h-11 w-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-industrial-blue/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-industrial-blue to-industrial-dark bg-clip-text text-transparent leading-tight">
                SONOTIC
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  SARLAU
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <div className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm border border-gray-200" title="Maroc">
                    <svg viewBox="0 0 120 80" className="w-full h-full">
                      <rect width="120" height="80" fill="#C1272D"/>
                      <path d="M60,15 L66,33 L85,33 L70,45 L76,63 L60,51 L44,63 L50,45 L35,33 L54,33 Z" fill="#006233"/>
                    </svg>
                  </div>
                  <div className="w-5 h-3.5 rounded-sm overflow-hidden shadow-sm border border-gray-200" title="Italie">
                    <svg viewBox="0 0 3 2" className="w-full h-full">
                      <rect width="1" height="2" fill="#009246"/>
                      <rect x="1" width="1" height="2" fill="#FFFFFF"/>
                      <rect x="2" width="1" height="2" fill="#CE2B37"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.filter(link => link.path !== '/contact').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 relative group rounded-lg ${
                  isActive(link.path)
                    ? 'text-industrial-blue bg-gradient-to-r from-industrial-blue/10 to-industrial-dark/10'
                    : 'text-gray-700 hover:text-industrial-blue hover:bg-gray-50'
                }`}
              >
                <TransText
                  fr={translations.nav[link.key].fr}
                  ar={translations.nav[link.key].ar}
                  en={translations.nav[link.key].en}
                />
                {/* Active underline */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-industrial-blue to-industrial-dark rounded-full"></span>
                )}
                {/* Hover underline animation */}
                {!isActive(link.path) && (
                  <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-industrial-blue rounded-full group-hover:w-8 transition-all duration-300"></span>
                )}
              </Link>
            ))}
            {/* Contact CTA Button */}
            <Link
              to="/contact"
              className={`ml-2 px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 shadow-lg ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-industrial-blue to-industrial-dark text-white shadow-xl shadow-industrial-blue/40 scale-105'
                  : 'bg-gradient-to-r from-industrial-blue to-industrial-dark text-white hover:shadow-2xl hover:shadow-industrial-blue/50 hover:scale-110 hover:-translate-y-0.5'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <TransText
                fr={translations.nav.contact.fr}
                ar={translations.nav.contact.ar}
                en={translations.nav.contact.en}
              />
            </Link>
            {/* Language Selector */}
            <div className="relative ml-2">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border-2 ${
                  langMenuOpen
                    ? 'bg-industrial-blue text-white border-industrial-blue shadow-lg'
                    : 'bg-white text-industrial-blue border-industrial-blue/30 hover:bg-industrial-blue/5 hover:border-industrial-blue/50'
                }`}
                aria-label="Select language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="font-semibold">
                  {languages.find(l => l.code === selectedLanguage)?.name}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangMenuOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-2xl border-2 border-industrial-blue/20 py-2 z-50 overflow-hidden animate-slide-down">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          changeLanguage(lang.code)
                          setLangMenuOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-3 ${
                          selectedLanguage === lang.code
                            ? 'bg-gradient-to-r from-industrial-blue/10 to-industrial-dark/10 text-industrial-blue border-l-4 border-industrial-blue'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-industrial-blue'
                        }`}
                      >
                        <span className="font-bold tracking-wide">{lang.name}</span>
                        {selectedLanguage === lang.code && (
                          <svg className="w-5 h-5 text-industrial-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-industrial-blue hover:bg-gray-100 focus:outline-none transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-4 pt-4 pb-4 space-y-2 bg-gradient-to-b from-white to-gray-50 border-t-2 border-industrial-blue/20 shadow-lg">
            {navLinks.filter(link => link.path !== '/contact').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-industrial-blue bg-gradient-to-r from-industrial-blue/15 to-industrial-dark/15 border-l-4 border-industrial-blue shadow-md'
                    : 'text-gray-700 hover:text-industrial-blue hover:bg-gray-100 hover:translate-x-2'
                }`}
              >
                <TransText
                  fr={translations.nav[link.key].fr}
                  ar={translations.nav[link.key].ar}
                  en={translations.nav[link.key].en}
                />
              </Link>
            ))}
            {/* Language Selector Mobile */}
            <div className="px-5 py-3.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <svg className="w-5 h-5 text-industrial-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <TransText fr="Langue" ar="اللغة" en="Language" />
                </span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border-2 ${
                        selectedLanguage === lang.code
                          ? 'bg-industrial-blue text-white border-industrial-blue shadow-md scale-105'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-industrial-blue/50'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-3.5 rounded-xl text-base font-bold text-white transition-all duration-300 shadow-lg ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-industrial-blue to-industrial-dark shadow-xl'
                  : 'bg-gradient-to-r from-industrial-blue to-industrial-dark hover:shadow-2xl hover:scale-105'
              }`}
            >
              <span className="flex items-center gap-2 justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <TransText
                  fr={translations.nav.contact.fr}
                  ar={translations.nav.contact.ar}
                  en={translations.nav.contact.en}
                />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

