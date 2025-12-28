import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import ScrollReveal from '../components/ScrollReveal'
import { TransText } from '../components/TransText'
import { translations } from '../data/translations'
import productsData from '../data/products.json'

const Home = () => {
  // Get first 8 products for preview
  const featuredProducts = productsData.slice(0, 8)

  const features = [
    {
      icon: '✓',
      key: 'quality',
    },
    {
      icon: '🚚',
      key: 'delivery',
    },
    {
      icon: '🛠️',
      key: 'support',
    },
    {
      icon: '💼',
      key: 'custom',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title={<TransText fr={translations.home.heroTitle.fr} ar={translations.home.heroTitle.ar} en={translations.home.heroTitle.en} />}
        subtitle={<TransText fr={translations.home.heroSubtitle.fr} ar={translations.home.heroSubtitle.ar} en={translations.home.heroSubtitle.en} />}
        backgroundImage="/assets/Untitled-design-2024-06-05T033554.873.png"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-industrial-blue to-industrial-dark text-white px-6 py-2 rounded-full text-sm font-semibold">
                <TransText
                  fr={translations.home.welcomeBadge.fr}
                  ar={translations.home.welcomeBadge.ar}
                  en={translations.home.welcomeBadge.en}
                />
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-industrial-dark mb-8">
              <TransText
                fr={translations.home.welcomeTitle.fr}
                ar={translations.home.welcomeTitle.ar}
                en={translations.home.welcomeTitle.en}
              />{' '}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <TransText
                  fr={translations.home.intro1.fr}
                  ar={translations.home.intro1.ar}
                  en={translations.home.intro1.en}
                />
              </p>
              <p>
                <TransText
                  fr={translations.home.intro2.fr}
                  ar={translations.home.intro2.ar}
                  en={translations.home.intro2.en}
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-industrial-blue/10 to-industrial-dark/10 text-industrial-blue px-4 py-2 rounded-full text-sm font-semibold border border-industrial-blue/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <TransText
                fr={translations.products.importedFromItaly.fr}
                ar={translations.products.importedFromItaly.ar}
                en={translations.products.importedFromItaly.en}
              />
            </span>
          </div>
          <SectionTitle
            title={<TransText fr={translations.home.productsTitle.fr} ar={translations.home.productsTitle.ar} en={translations.home.productsTitle.en} />}
            subtitle={<TransText fr={translations.home.productsSubtitle.fr} ar={translations.home.productsSubtitle.ar} en={translations.home.productsSubtitle.en} />}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              <TransText
                fr={translations.home.seeAllProducts.fr}
                ar={translations.home.seeAllProducts.ar}
                en={translations.home.seeAllProducts.en}
              />
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
            title={<TransText fr={translations.home.whyChooseTitle.fr} ar={translations.home.whyChooseTitle.ar} en={translations.home.whyChooseTitle.en} />}
            subtitle={<TransText fr={translations.home.whyChooseSubtitle.fr} ar={translations.home.whyChooseSubtitle.ar} en={translations.home.whyChooseSubtitle.en} />}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-industrial-dark mb-3 flex-shrink-0">
                    <TransText
                      fr={translations.home.features[feature.key].title.fr}
                      ar={translations.home.features[feature.key].title.ar}
                      en={translations.home.features[feature.key].title.en}
                    />
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    <TransText
                      fr={translations.home.features[feature.key].desc.fr}
                      ar={translations.home.features[feature.key].desc.ar}
                      en={translations.home.features[feature.key].desc.en}
                    />
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home

