const ProductCard = ({ product }) => {
  return (
    <article className="card-modern group h-full flex flex-col">
      <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {product.type && (
          <div className="absolute top-4 right-4">
            <span className="bg-industrial-blue/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              {product.type}
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-industrial-dark mb-3 group-hover:text-industrial-blue transition-colors">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-gray-600 line-clamp-3 leading-relaxed flex-grow">{product.description}</p>
        )}
      </div>
    </article>
  )
}

export default ProductCard

