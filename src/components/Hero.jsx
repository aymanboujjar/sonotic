import { Link } from 'react-router-dom'

const Hero = ({ title, subtitle, backgroundImage, showButtons = true }) => {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 31, 46, 0.7), rgba(15, 31, 46, 0.7)), url(${backgroundImage})`,
      }}
      aria-label="Section hero principale"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            {subtitle}
          </p>
        )}
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary">
              Nos Produits
            </Link>
            <Link to="/contact" className="btn-outline bg-white text-industrial-blue hover:bg-gray-100">
              Contactez-nous
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero

