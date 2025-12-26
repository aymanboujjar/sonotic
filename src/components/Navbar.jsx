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
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" aria-label="SONOTIC - Retour à l'accueil">
            <img 
              src="/assets/logo.jpeg" 
              alt="SONOTIC Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <div className="text-2xl font-extrabold text-industrial-blue leading-tight tracking-tight">
                SONOTIC
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                SARLAU
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 text-base font-medium tracking-wide transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-industrial-blue font-semibold'
                    : 'text-gray-700 hover:text-industrial-blue'
                }`}
              >
                {link.label}
                {/* Active underline */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-industrial-blue to-industrial-dark rounded-full"></span>
                )}
                {/* Hover underline animation */}
                {!isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-industrial-blue rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                )}
              </Link>
            ))}
            {/* Contact CTA Button */}
            <Link
              to="/contact"
              className={`ml-4 px-6 py-2.5 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-industrial-blue to-industrial-dark text-white shadow-lg shadow-industrial-blue/30'
                  : 'bg-gradient-to-r from-industrial-blue to-industrial-dark text-white hover:shadow-lg hover:shadow-industrial-blue/30 hover:scale-105'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-industrial-blue focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-industrial-blue bg-gradient-to-r from-industrial-blue/10 to-industrial-dark/10 font-semibold border-l-4 border-industrial-blue'
                    : 'text-gray-700 hover:text-industrial-blue hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold text-white transition-all duration-200 ${
                isActive('/contact')
                  ? 'bg-gradient-to-r from-industrial-blue to-industrial-dark shadow-lg'
                  : 'bg-gradient-to-r from-industrial-blue to-industrial-dark hover:shadow-lg'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

