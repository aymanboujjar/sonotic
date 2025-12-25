import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

const Home = () => {
  // Get first 4 products for preview
  const featuredProducts = productsData.slice(0, 4)

  const stats = [
    { number: '25+', label: "Années d'expérience" },
    { number: '500+', label: 'Projets réalisés' },
    { number: 'ISO 9001', label: 'Certification qualité' },
    { number: '100+', label: 'Clients satisfaits' },
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-industrial-dark mb-6">
              Bienvenue chez SONOTIC
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Depuis plus de 25 ans, SONOTIC est le partenaire de confiance pour
              tous vos besoins en tuyaux industriels au Maroc. Nous fournissons
              des solutions durables et performantes pour l'approvisionnement en
              eau, l'assainissement, l'irrigation et les infrastructures
              industrielles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre expertise couvre une large gamme de matériaux : PVC, HDPE,
              acier et béton, répondant aux normes internationales les plus
              strictes.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos Produits"
            subtitle="Découvrez notre gamme complète de tuyaux industriels"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary">
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Key Numbers Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="SONOTIC en Chiffres"
            subtitle="Des résultats qui parlent d'eux-mêmes"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nos Partenaires"
            subtitle="Nous travaillons avec les meilleurs"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 h-24 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 text-sm">Partenaire {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

