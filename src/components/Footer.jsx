import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/assets/logo.jpeg" 
                alt="SONOTIC Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-3xl font-bold">SONOTIC</h3>
                <p className="text-sm text-gray-400">SARLAU</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Spécialiste marocain des tuyaux industriels. Solutions fiables pour
              l'infrastructure moderne.
            </p>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-xl mt-1">📍</span>
                <span className="leading-relaxed">56, Rue des Gaves (Roches Noires)<br />Casablanca 20290 - Maroc</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📞</span>
                <span>
                  <a href="tel:+212522244993" className="hover:text-white transition-colors">05 22 24 49 93</a> - 
                  <a href="tel:+212522246623" className="hover:text-white transition-colors"> 05 22 24 66 23</a> - 
                  <a href="tel:+212522246620" className="hover:text-white transition-colors"> 05 22 24 66 20</a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">📠</span>
                <span>05 22 24 49 94</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">💬</span>
                <a href="https://wa.me/212661748378" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: 06 61 74 83 78
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-xl">✉️</span>
                <a href="mailto:sonotic@hotmail.com" className="hover:text-white transition-colors">sonotic@hotmail.com</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-default">Tuyaux PVC</li>
              <li className="hover:text-white transition-colors cursor-default">Tuyaux HDPE</li>
              <li className="hover:text-white transition-colors cursor-default">Tuyaux Acier</li>
              <li className="hover:text-white transition-colors cursor-default">Tuyaux Béton</li>
              <li className="hover:text-white transition-colors cursor-default">Consultation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} SONOTIC. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

