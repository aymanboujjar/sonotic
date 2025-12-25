import SectionTitle from '../components/SectionTitle'

const About = () => {
  const values = [
    {
      icon: '✓',
      title: 'Qualité',
      description: 'Produits certifiés selon les normes internationales',
    },
    {
      icon: '✓',
      title: 'Fiabilité',
      description: '25 ans d\'expérience au service de nos clients',
    },
    {
      icon: '✓',
      title: 'Innovation',
      description: 'Solutions modernes pour infrastructures durables',
    },
    {
      icon: '✓',
      title: 'Service',
      description: 'Accompagnement personnalisé de A à Z',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">À Propos de SONOTIC</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Votre partenaire de confiance pour l'infrastructure industrielle au Maroc
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre Histoire"
            subtitle="Un parcours de croissance et d'excellence"
          />
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Fondée il y a plus de 25 ans, SONOTIC s'est imposée comme un
                leader dans le secteur des tuyaux industriels au Maroc. Notre
                entreprise a été créée avec une vision claire : fournir des
                solutions durables et performantes pour répondre aux besoins
                croissants en infrastructure du pays.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Au fil des années, nous avons élargi notre gamme de produits et
                renforcé notre expertise technique. Aujourd'hui, SONOTIC
                accompagne les projets les plus ambitieux, de l'approvisionnement
                en eau potable aux infrastructures industrielles complexes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Notre engagement envers la qualité et l'innovation nous a permis
                d'obtenir la certification ISO 9001 et de devenir le partenaire
                privilégié de nombreuses entreprises et institutions au Maroc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Fournir des solutions de tuyaux industriels de la plus haute
                qualité, en répondant aux besoins spécifiques de nos clients
                marocains. Nous nous engageons à offrir des produits durables,
                performants et conformes aux normes internationales, tout en
                maintenant un service client exceptionnel.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl text-white">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Être le leader incontesté du marché marocain des tuyaux
                industriels, reconnu pour notre excellence, notre innovation et
                notre contribution au développement des infrastructures du pays.
                Nous aspirons à étendre notre présence et à continuer à servir
                de référence dans le secteur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SONOTIC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Pourquoi Choisir SONOTIC"
            subtitle="Des avantages qui font la différence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-industrial-blue to-industrial-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-industrial-dark mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morocco Focus */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Expertise Locale, Standards Internationaux
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              En tant qu'entreprise marocaine, nous comprenons parfaitement les
              défis et les besoins spécifiques du marché local. Notre connaissance
              approfondie du terrain, combinée à notre respect des normes
              internationales, nous permet d'offrir des solutions adaptées et
              performantes pour tous vos projets d'infrastructure au Maroc.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

