import SectionTitle from '../components/SectionTitle'

const Projects = () => {
  const useCases = [
    {
      title: 'Approvisionnement en Eau',
      description:
        'Réseaux d\'eau potable pour villes et communautés. Solutions durables pour garantir un accès fiable à l\'eau.',
      image: '/assets/tuyau-flexible-hydraulique.jpg',
    },
    {
      title: 'Assainissement',
      description:
        'Systèmes d\'évacuation et de traitement des eaux usées. Infrastructure moderne pour un environnement sain.',
      image: '/assets/p193781.png',
    },
    {
      title: 'Infrastructure Industrielle',
      description:
        'Tuyaux pour applications industrielles exigeantes. Résistance aux produits chimiques et aux hautes pressions.',
      image: '/assets/castolin-tuyaux-jumeles-oxygeneacetylene-image-532655.webp',
    },
    {
      title: 'Irrigation Agricole',
      description:
        'Systèmes d\'irrigation efficaces pour l\'agriculture moderne. Optimisation de l\'utilisation de l\'eau.',
      image: '/assets/vidaxl-tuyau-plat-20-m-3-pvc-7994386.jpg',
    },
  ]

  const galleryImages = [
    '/assets/Untitled-design-2024-06-05T033554.873.png',
    '/assets/tuyau-flexible-hydraulique.jpg',
    '/assets/p193781.png',
    '/assets/vidaxl-tuyau-plat-20-m-3-pvc-7994386.jpg',
    '/assets/RC8_03_167_W_RC_15.webp',
    '/assets/raccord.webp',
    '/assets/collier.jpg',
    '/assets/spirale.jpg',
    '/assets/cristalle.jpg',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Nos Projets</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Applications et réalisations dans différents secteurs
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Domaines d'Application"
            subtitle="Des solutions adaptées à chaque besoin"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="card-modern group"
              >
                <div className="h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-industrial-dark mb-4 group-hover:text-industrial-blue transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Galerie de Projets"
            subtitle="Découvrez nos réalisations"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-transparent hover:border-industrial-blue/50"
              >
                <img
                  src={image}
                  alt={`Projet ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">Projet {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl font-extrabold mb-3 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">500+</div>
              <div className="text-xl text-gray-200 font-medium">Projets Réalisés</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl font-extrabold mb-3 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">100+</div>
              <div className="text-xl text-gray-200 font-medium">Clients Satisfaits</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl font-extrabold mb-3 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">25+</div>
              <div className="text-xl text-gray-200 font-medium">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

