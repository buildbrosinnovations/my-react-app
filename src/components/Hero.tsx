import { Link } from 'react-router-dom'

interface HeroProps {
  title: string
  subtitle: string
  ctaPrimary?: { text: string; link: string }
  ctaSecondary?: { text: string; link: string }
  backgroundImage?: string
}

const Hero = ({ title, subtitle, ctaPrimary, ctaSecondary, backgroundImage }: HeroProps) => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />
      
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 -z-10 opacity-10">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" aria-hidden="true" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-8 lg:mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctaPrimary && (
                <Link to={ctaPrimary.link} className="btn-primary w-full sm:w-auto">
                  {ctaPrimary.text}
                </Link>
              )}
              {ctaSecondary && (
                <Link to={ctaSecondary.link} className="btn-secondary w-full sm:w-auto">
                  {ctaSecondary.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero