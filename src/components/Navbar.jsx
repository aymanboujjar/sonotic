import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/products', label: 'Produits' },
    { path: '/about', label: 'À Propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/contact', label: 'Contact' },
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
            <div className="hidden sm:block">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-industrial-blue to-industrial-dark bg-clip-text text-transparent leading-tight">
                SONOTIC
              </div>
              <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                SARLAU
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 relative group rounded-lg ${
                  isActive(link.path)
                    ? 'text-industrial-blue bg-gradient-to-r from-industrial-blue/10 to-industrial-dark/10'
                    : 'text-gray-700 hover:text-industrial-blue hover:bg-gray-50'
                }`}
              >
                {link.label}
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
              Contact
            </Link>
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
            {navLinks.slice(0, -1).map((link) => (
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
                {link.label}
              </Link>
            ))}
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
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

