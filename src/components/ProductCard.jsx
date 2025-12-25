import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <article className="card-modern group">
      <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
        <img
          src={product.image}
          alt={`${product.name} - ${product.description.substring(0, 50)}...`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-industrial-blue/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
            {product.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-industrial-dark mb-3 group-hover:text-industrial-blue transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{product.description}</p>
        <Link
          to={`/products#${product.id}`}
          className="inline-flex items-center text-industrial-blue hover:text-industrial-dark font-semibold text-sm transition-all duration-300 group-hover:gap-2 gap-1"
          aria-label={`Voir les détails de ${product.name}`}
        >
          En savoir plus
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  )
}

export default ProductCard

