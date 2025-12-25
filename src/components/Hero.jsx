import { Link } from 'react-router-dom'

const Hero = ({ title, subtitle, backgroundImage, showButtons = true }) => {
  return (
    <section
      className="relative h-[700px] flex items-center justify-center bg-cover bg-center bg-gray-900 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 95, 0.85) 0%, rgba(15, 31, 46, 0.9) 100%), url(${backgroundImage})`,
      }}
      aria-label="Section hero principale"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-industrial-blue/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-industrial-dark/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {showButtons && (
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in">
            <Link to="/products" className="btn-primary shadow-xl">
              Nos Produits
            </Link>
            <Link to="/contact" className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-industrial-blue">
              Contactez-nous
            </Link>
          </div>
        )}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

