import Hero from '../components/Hero'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const values = [
  {
    title: 'Innovation First',
    description:
      'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
  },
  {
    title: 'Client Partnership',
    description:
      'Your success is our success. We work as an extension of your team, invested in your long-term growth.',
  },
  {
    title: 'Quality Obsessed',
    description:
      'We maintain the highest standards in code quality, security, and user experience on every project.',
  },
  {
    title: 'Transparent Communication',
    description:
      'Regular updates, honest feedback, and clear timelines. No surprises, just results.',
  },
]

const AboutPage = () => {
  return (
    <>
      <Meta
        title="About Us - BuildBros Innovations"
        description="Learn about BuildBros Innovations, our values, and commitment to delivering exceptional digital solutions."
      />

      <Hero
        title="About BuildBros Innovations"
        subtitle="We're a team of passionate developers, designers, and strategists dedicated to building software that makes a difference."
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Founded in <strong>2025</strong>, BuildBros Innovations started with a simple mission:
                to help businesses leverage technology to achieve their goals. What began as a small
                team of developers has grown into a full-service digital agency serving clients across
                the globe.
              </p>
              <p>
                We've successfully completed over <strong>10 projects</strong> for startups and growing
                companies across multiple industries. Our passionate team combines technical expertise
                with creativity to deliver innovative, scalable, and user-focused digital solutions.
              </p>
              <p>
                Today, we're proud to be a reliable technology partner for businesses in various
                sectors including healthcare, finance, and e-commerce. We don't just build software —
                we build lasting relationships and help our clients thrive in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do, from project planning to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-lg text-primary-100 mb-8">
              We're always looking for talented individuals who are passionate about technology and
              innovation.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
