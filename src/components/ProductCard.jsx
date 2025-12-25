import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={`${product.name} - ${product.description.substring(0, 50)}...`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-industrial-dark mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500" aria-label={`Type de produit: ${product.type}`}>
            Type: {product.type}
          </span>
          <Link
            to={`/products#${product.id}`}
            className="text-industrial-blue hover:text-industrial-dark font-semibold text-sm transition-colors"
            aria-label={`Voir les détails de ${product.name}`}
          >
            Voir détails →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard

