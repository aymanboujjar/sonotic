import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-industrial-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-200">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-industrial-dark mb-6">
                Envoyez-nous un message
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Merci pour votre message ! Nous vous répondrons dans les plus
                  brefs délais.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent"
                    placeholder="votre.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-industrial-blue focus:border-transparent"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-industrial-dark mb-6">
                  Informations de Contact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-xl mr-4">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Adresse</h3>
                      <p className="text-gray-600">
                        Casablanca, Maroc
                        <br />
                        (Adresse complète à compléter)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-xl mr-4">📞</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Téléphone</h3>
                      <p className="text-gray-600">+212 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-xl mr-4">✉️</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@sonotic.ma</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-xl mr-4">🕒</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Heures d'ouverture
                      </h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h00 - 18h00
                        <br />
                        Samedi: 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-industrial-dark mb-4">
                  Notre Localisation
                </h2>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Carte Google Maps à intégrer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

