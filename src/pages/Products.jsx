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
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Nos Produits</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Solutions complètes pour tous vos besoins en tuyaux industriels
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 bg-white shadow-lg border-b border-gray-100 sticky top-24 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {productTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-gradient-to-r from-industrial-blue to-industrial-dark text-white shadow-lg shadow-industrial-blue/30 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-gray-600 text-center text-lg font-medium">
              <span className="text-industrial-blue font-bold">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} id={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

