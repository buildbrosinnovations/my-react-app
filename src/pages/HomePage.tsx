import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import ClientLogoCarousel from '../components/ClientLogoCarousel'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description:
      'Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.',
    link: '/services/custom-software',
    image: '../../public/custom website.jpeg',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications that deliver exceptional user experiences across all devices.',
    link: '/services/web-development',
    image: '../../public/Web development.jpeg',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that engage users and drive business results.',
    link: '/services/mobile-apps',
    image: '../../public/mobile devlopment.jpeg',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to optimize performance and reduce costs.',
    link: '/services/cloud-solutions',
    image: '../../public/cloud solutions.png',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions powered by cutting-edge AI and ML technologies to automate and innovate.',
    link: '/services/ai-ml',
    image: '../../public/Ai&ml.png',
  },
  {
    icon: '🧠',
    title: 'Data Science',
    description:
      'Unlock insights from complex data through analytics, visualization, and machine learning for smarter decisions.',
    link: '/services/data-science',
    image: '../../public/Data science.jpeg',
  },
]

const HomePage = () => {
  return (
    <>
      <Meta />

      <Hero
        title="Build the Future with Innovative Digital Solutions"
        subtitle="We transform bold ideas into powerful software that drives business growth. Partner with BuildBros for custom development that delivers results."
        ctaPrimary={{ text: 'Start Your Project', link: '/contact' }}
        ctaSecondary={{ text: 'View Our Work', link: '/portfolio' }}
        backgroundImage="/hero-banner.jpeg"
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      <Stats />

      {/* Featured Work */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore how we've helped businesses across industries achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Link to="/portfolio/fintech-dashboard" className="card overflow-hidden group">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src="../../public/Fintech.jpeg"
                  alt="FinTech Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-medium text-primary-600 mb-2">FINTECH</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  Real-Time Trading Platform
                </h3>
                <p className="text-slate-600 mb-4">
                  A comprehensive financial dashboard with real-time data processing, serving 50,000+ active traders with sub-second latency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">WebSocket</span>
                </div>
              </div>
            </Link>

            <Link to="/portfolio/healthcare-platform" className="card overflow-hidden group">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  src="../../public/telemedicine.jpeg"
                  alt="Healthcare Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-medium text-primary-600 mb-2">HEALTHCARE</div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  Telemedicine Platform
                </h3>
                <p className="text-slate-600 mb-4">
                  HIPAA-compliant telehealth solution connecting patients with healthcare providers through secure video consultations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">React Native</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">Python</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">AWS</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ClientLogoCarousel />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Let's discuss how we can help you achieve your digital transformation goals. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
