import Hero from '../components/Hero'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const industries = [
  {
    icon: '🏥',
    name: 'Healthcare',
    description:
      'HIPAA-compliant solutions including telemedicine platforms, patient management systems, and healthcare analytics.',
    examples: ['Electronic Health Records', 'Telemedicine Apps', 'Medical Device Integration'],
    image: '/Health care.jpeg',
  },
  {
    icon: '💰',
    name: 'FinTech',
    description:
      'Secure financial applications, payment processing systems, and trading platforms with real-time data.',
    examples: ['Digital Banking', 'Payment Gateways', 'Trading Platforms'],
    image: '/Fintech.jpeg',
  },
  {
    icon: '🛒',
    name: 'E-Commerce',
    description:
      'Scalable online stores, inventory management, and personalized shopping experiences.',
    examples: ['Online Marketplaces', 'B2B Platforms', 'Mobile Commerce'],
    image: '/E commerce.jpeg',
  },
  {
    icon: '🎓',
    name: 'Education',
    description:
      'Learning management systems, virtual classrooms, and educational content platforms.',
    examples: ['E-Learning Platforms', 'Student Management', 'Virtual Classrooms'],
    image: '/Education.png',
  },
  {
    icon: '🏭',
    name: 'Manufacturing',
    description:
      'IoT solutions, supply chain optimization, and predictive maintenance systems.',
    examples: ['IoT Monitoring', 'Supply Chain', 'Quality Control'],
    image: '/Manufacturing.jpeg',
  },
  {
    icon: '🏨',
    name: 'Hospitality',
    description:
      'Booking systems, property management, and customer experience platforms.',
    examples: ['Reservation Systems', 'Guest Management', 'Loyalty Programs'],
    image: '/Hospitality.jpeg',
  },
]

const IndustriesPage = () => {
  return (
    <>
      <Meta
        title="Industries We Serve - BuildBros Innovations"
        description="Custom software solutions for Healthcare, FinTech, E-Commerce, Education, Manufacturing, and Hospitality industries."
      />

      <Hero
        title="Industries We Serve"
        subtitle="Deep expertise across multiple sectors, delivering solutions that understand your unique challenges."
      />

      {/* Industries Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{industry.name}</h3>
                  <p className="text-slate-600 mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.examples.map((example, i) => (
                      <div key={i} className="flex items-center text-sm text-slate-700">
                        <svg
                          className="w-4 h-4 text-primary-600 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 5l7 7-7 7" />
                        </svg>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              See Our Industry Expertise in Action
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Explore our portfolio to see real-world examples of solutions we've delivered across various industries.
            </p>
            <Link to="/portfolio" className="btn-primary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default IndustriesPage
