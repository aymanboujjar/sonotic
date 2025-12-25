import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

const Products = () => {
  const [selectedType, setSelectedType] = useState('Tous')

  // Get unique product types
  const productTypes = ['Tous', ...new Set(productsData.map((p) => p.type))]

  // Filter products
  const filteredProducts =
    selectedType === 'Tous'
      ? productsData
      : productsData.filter((p) => p.type === selectedType)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-industrial-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Produits</h1>
          <p className="text-xl text-gray-200">
            Solutions complètes pour tous vos besoins en tuyaux industriels
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-industrial-blue text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600 text-center">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} id={product.id}>
                <ProductCard product={product} />
                {/* Technical Specs */}
                <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-industrial-dark mb-2">
                    Spécifications Techniques
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key}>
                        <span className="font-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>{' '}
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

