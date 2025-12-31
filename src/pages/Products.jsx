import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'
import { TransText } from '../components/TransText'
import { translations } from '../data/translations'
import { useLanguage } from '../contexts/LanguageContext'
import productsData from '../data/products.json'

const Products = () => {
  const { selectedLanguage } = useLanguage()
  const [selectedType, setSelectedType] = useState(translations.products.all[selectedLanguage])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Get unique product types (only if products have type field)
  const productTypes = [
    translations.products.all[selectedLanguage],
    ...new Set(productsData.map((p) => p.type).filter(Boolean))
  ]

  // Filter products
  const filteredProducts =
    selectedType === translations.products.all[selectedLanguage]
      ? productsData
      : productsData.filter((p) => p.type === selectedType)

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedType])

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
          <div className="inline-block mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 flex items-center gap-2">
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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <TransText
              fr={translations.products.title.fr}
              ar={translations.products.title.ar}
              en={translations.products.title.en}
            />
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            <TransText
              fr={translations.products.subtitle.fr}
              ar={translations.products.subtitle.ar}
              en={translations.products.subtitle.en}
            />
          </p>
        </div>
      </section>

      {/* Filter Section - Only show if there are product types */}
      {productTypes.length > 1 && (
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
      )}

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-gray-600 text-center text-lg font-medium">
              <span className="text-industrial-blue font-bold">{filteredProducts.length}</span>{' '}
              {filteredProducts.length === 1 ? (
                <TransText
                  fr={translations.products.found.fr}
                  ar={translations.products.found.ar}
                  en={translations.products.found.en}
                />
              ) : (
                <TransText
                  fr={translations.products.foundPlural.fr}
                  ar={translations.products.foundPlural.ar}
                  en={translations.products.foundPlural.en}
                />
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} id={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-industrial-blue text-white font-medium transition-all duration-300 hover:bg-industrial-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-industrial-blue"
                  aria-label="Previous page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-industrial-blue text-white shadow-lg scale-110'
                          : 'bg-white text-industrial-dark hover:bg-gray-100 border border-gray-200'
                      }`}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? 'page' : undefined}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-industrial-blue text-white font-medium transition-all duration-300 hover:bg-industrial-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-industrial-blue"
                  aria-label="Next page"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 text-sm">
                <TransText
                  fr={`Page ${currentPage} sur ${totalPages}`}
                  ar={`الصفحة ${currentPage} من ${totalPages}`}
                  en={`Page ${currentPage} of ${totalPages}`}
                />
              </p>
            </div>
          )}
        </div>
      </section>

      {/* More Products Contact Section */}
      <section className="py-20 bg-gradient-to-br from-industrial-blue to-industrial-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <TransText
                fr={translations.products.moreProductsTitle.fr}
                ar={translations.products.moreProductsTitle.ar}
                en={translations.products.moreProductsTitle.en}
              />
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              <TransText
                fr={translations.products.moreProductsSubtitle.fr}
                ar={translations.products.moreProductsSubtitle.ar}
                en={translations.products.moreProductsSubtitle.en}
              />
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-industrial-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <TransText
                fr={translations.products.contactUs.fr}
                ar={translations.products.contactUs.ar}
                en={translations.products.contactUs.en}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

