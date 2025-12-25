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
      <section className="bg-industrial-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de SONOTIC</h1>
          <p className="text-xl text-gray-200">
            Votre partenaire de confiance pour l'infrastructure industrielle au Maroc
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Notre Histoire"
            subtitle="Un parcours de croissance et d'excellence"
          />
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed mb-6">
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
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                Notre Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fournir des solutions de tuyaux industriels de la plus haute
                qualité, en répondant aux besoins spécifiques de nos clients
                marocains. Nous nous engageons à offrir des produits durables,
                performants et conformes aux normes internationales, tout en
                maintenant un service client exceptionnel.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">
                Notre Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
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
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl text-industrial-blue mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-industrial-dark mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morocco Focus */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Expertise Locale, Standards Internationaux
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
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

