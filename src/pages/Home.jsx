import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import TestimonialCard from '../components/TestimonialCard'
import ScrollReveal from '../components/ScrollReveal'
import productsData from '../data/products.json'

const Home = () => {
  // Get first 4 products for preview
  const featuredProducts = productsData.slice(0, 4)

  const testimonials = [
    {
      text: "SONOTIC a fourni des tuyaux de qualité exceptionnelle pour notre projet d'infrastructure. Leur expertise et leur service client sont remarquables.",
      name: 'Ahmed Benali',
      role: 'Directeur de Projet',
      initials: 'AB',
    },
    {
      text: "Nous travaillons avec SONOTIC depuis 10 ans. Leur fiabilité et la qualité de leurs produits en font notre partenaire de confiance.",
      name: 'Fatima Alami',
      role: 'Ingénieur en Chef',
      initials: 'FA',
    },
    {
      text: "Excellent service et produits conformes aux normes. SONOTIC comprend nos besoins et propose toujours les meilleures solutions.",
      name: 'Mohammed Tazi',
      role: 'Responsable Infrastructure',
      initials: 'MT',
    },
  ]

  const features = [
    {
      icon: '✓',
      title: 'Qualité Certifiée',
      description: 'Produits conformes aux normes internationales ISO 9001',
    },
    {
      icon: '🚚',
      title: 'Livraison Rapide',
      description: 'Service de livraison efficace dans tout le Maroc',
    },
    {
      icon: '🛠️',
      title: 'Support Technique',
      description: 'Équipe d\'experts à votre disposition pour vous conseiller',
    },
    {
      icon: '💼',
      title: 'Solutions Sur Mesure',
      description: 'Adaptation à vos besoins spécifiques et projets personnalisés',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Solutions Industrielles de Confiance"
        subtitle="Spécialiste marocain des tuyaux industriels pour l'infrastructure moderne"
        backgroundImage="/assets/Untitled-design-2024-06-05T033554.873.png"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-industrial-blue to-industrial-dark text-white px-6 py-2 rounded-full text-sm font-semibold">
                Leader au Maroc depuis 25 ans
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-industrial-dark mb-8">
              Bienvenue chez <span className="bg-gradient-to-r from-industrial-blue to-industrial-dark bg-clip-text text-transparent">SONOTIC</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Depuis plus de 25 ans, SONOTIC est le partenaire de confiance pour
                tous vos besoins en tuyaux industriels au Maroc. Nous fournissons
                des solutions durables et performantes pour l'approvisionnement en
                eau, l'assainissement, l'irrigation et les infrastructures
                industrielles.
              </p>
              <p>
                Notre expertise couvre une large gamme de matériaux : <strong className="text-industrial-blue">PVC</strong>, <strong className="text-industrial-blue">HDPE</strong>,
                <strong className="text-industrial-blue"> acier</strong> et <strong className="text-industrial-blue">béton</strong>, répondant aux normes internationales les plus
                strictes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos Produits"
            subtitle="Découvrez notre gamme complète de tuyaux industriels de qualité supérieure"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Voir tous les produits
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Pourquoi Choisir SONOTIC"
            subtitle="Des avantages qui font la différence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-industrial-dark mb-3 flex-shrink-0">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Témoignages Clients"
            subtitle="Ce que nos clients disent de nous"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <TestimonialCard testimonial={testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

