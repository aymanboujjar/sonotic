import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { TransText } from '../components/TransText'
import { translations } from '../data/translations'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { selectedLanguage } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = translations.contact.errors.nameRequired[selectedLanguage]
    }
    
    if (!formData.email.trim()) {
      newErrors.email = translations.contact.errors.emailRequired[selectedLanguage]
    } else if (!validateEmail(formData.email)) {
      newErrors.email = translations.contact.errors.emailInvalid[selectedLanguage]
    }
    
    if (!formData.message.trim()) {
      newErrors.message = translations.contact.errors.messageRequired[selectedLanguage]
    } else if (formData.message.trim().length < 10) {
      newErrors.message = translations.contact.errors.messageMin[selectedLanguage]
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    
    // For now, we'll use mailto as a fallback
    const subject = encodeURIComponent(`Contact depuis le site SONOTIC - ${formData.name}`)
    const body = encodeURIComponent(formData.message)
    window.location.href = `mailto:sonotic@hotmail.com?subject=${subject}&body=${body}`
    
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <TransText
              fr={translations.contact.title.fr}
              ar={translations.contact.title.ar}
              en={translations.contact.title.en}
            />
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            <TransText
              fr={translations.contact.subtitle.fr}
              ar={translations.contact.subtitle.ar}
              en={translations.contact.subtitle.en}
            />
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-industrial-dark mb-8">
                <TransText
                  fr={translations.contact.formTitle.fr}
                  ar={translations.contact.formTitle.ar}
                  en={translations.contact.formTitle.en}
                />
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 rounded-xl">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">
                      <TransText
                        fr={translations.contact.success.fr}
                        ar={translations.contact.success.ar}
                        en={translations.contact.success.en}
                      />
                    </span>
                  </div>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <TransText
                      fr={translations.contact.name.fr}
                      ar={translations.contact.name.ar}
                      en={translations.contact.name.en}
                    /> *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-industrial-blue transition-all duration-300 ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-industrial-blue'
                    }`}
                    placeholder={translations.contact.name[selectedLanguage]}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <TransText
                      fr={translations.contact.email.fr}
                      ar={translations.contact.email.ar}
                      en={translations.contact.email.en}
                    /> *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-industrial-blue transition-all duration-300 ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-industrial-blue'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <TransText
                      fr={translations.contact.message.fr}
                      ar={translations.contact.message.ar}
                      en={translations.contact.message.en}
                    /> *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-5 py-3 border-2 rounded-xl focus:ring-2 focus:ring-industrial-blue transition-all duration-300 resize-none ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-gray-200 focus:border-industrial-blue'
                    }`}
                    placeholder={translations.contact.message[selectedLanguage]}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.message.length} <TransText
                      fr={translations.contact.characters.fr}
                      ar={translations.contact.characters.ar}
                      en={translations.contact.characters.en}
                    />
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <TransText
                        fr={translations.contact.sending.fr}
                        ar={translations.contact.sending.ar}
                        en={translations.contact.sending.en}
                      />
                    </>
                  ) : (
                    <TransText
                      fr={translations.contact.send.fr}
                      ar={translations.contact.send.ar}
                      en={translations.contact.send.en}
                    />
                  )}
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-industrial-dark mb-8">
                  <TransText
                    fr={translations.contact.contactInfo.fr}
                    ar={translations.contact.contactInfo.ar}
                    en={translations.contact.contactInfo.en}
                  />
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-2xl mr-4 flex-shrink-0">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <TransText
                          fr={translations.contact.address.fr}
                          ar={translations.contact.address.ar}
                          en={translations.contact.address.en}
                        />
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        56, Rue des Gaves (Roches Noires)<br />
                        Casablanca 20290 - Maroc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-2xl mr-4 flex-shrink-0">📞</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <TransText
                          fr={translations.contact.phone.fr}
                          ar={translations.contact.phone.ar}
                          en={translations.contact.phone.en}
                        />
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">
                          <a href="tel:+212522244993" className="hover:text-industrial-blue transition-colors font-medium">05 22 24 49 93</a>
                        </p>
                        <p className="text-gray-600">
                          <a href="tel:+212522246623" className="hover:text-industrial-blue transition-colors font-medium">05 22 24 66 23</a>
                        </p>
                        <p className="text-gray-600">
                          <a href="tel:+212522246620" className="hover:text-industrial-blue transition-colors font-medium">05 22 24 66 20</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-2xl mr-4 flex-shrink-0">📠</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <TransText
                          fr={translations.contact.fax.fr}
                          ar={translations.contact.fax.ar}
                          en={translations.contact.fax.en}
                        />
                      </h3>
                      <p className="text-gray-600">05 22 24 49 94</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-2xl mr-4 flex-shrink-0">💬</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <TransText
                          fr={translations.contact.whatsapp.fr}
                          ar={translations.contact.whatsapp.ar}
                          en={translations.contact.whatsapp.en}
                        />
                      </h3>
                      <p className="text-gray-600">
                        <a 
                          href="https://wa.me/212661748378" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-industrial-blue transition-colors font-medium inline-flex items-center gap-2"
                        >
                          06 61 74 83 78
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-2xl mr-4 flex-shrink-0">✉️</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        <TransText
                          fr={translations.contact.emailLabel.fr}
                          ar={translations.contact.emailLabel.ar}
                          en={translations.contact.emailLabel.en}
                        />
                      </h3>
                      <p className="text-gray-600">
                        <a href="mailto:sonotic@hotmail.com" className="hover:text-industrial-blue transition-colors font-medium">sonotic@hotmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-industrial-blue text-xl mr-4">🕒</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <TransText
                          fr={translations.contact.hours.fr}
                          ar={translations.contact.hours.ar}
                          en={translations.contact.hours.en}
                        />
                      </h3>
                      <p className="text-gray-600">
                        Lun–Ven : 8h30–12h / 14h–18h30
                        <br />
                        Sam : 8h30–12h
                      </p>
                    </div>
                  </div>
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

