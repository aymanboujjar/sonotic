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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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

          {/* Map Location */}
          <div>
            <h4 className="text-xl font-bold mb-6">Notre Localisation</h4>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.202849478001!2d-7.5838764!3d33.6000409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd7c4d7ba277%3A0xaa7941c611135361!2sSONOTIC!5e0!3m2!1sfr!2sma!4v1766693263517!5m2!1sfr!2sma"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SONOTIC"
                className="w-full"
              ></iframe>
            </div>
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

