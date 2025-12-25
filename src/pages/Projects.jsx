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
      <section className="bg-industrial-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
          <p className="text-xl text-gray-200">
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-industrial-dark mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
                className="relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Projet ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-industrial-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-industrial-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl text-gray-200">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-xl text-gray-200">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-xl text-gray-200">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

