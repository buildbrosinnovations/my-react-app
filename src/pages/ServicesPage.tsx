import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description:
      'End-to-end custom software solutions designed to solve your unique business challenges. From enterprise applications to specialized tools, we build scalable, maintainable software that grows with your business.',
    link: '/services/custom-software',
    image: '../../public/custom website.jpeg',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Modern, responsive web applications built with the latest technologies. We create fast, secure, and user-friendly websites that deliver exceptional experiences across all devices and platforms.',
    link: '/services/web-development',
    image: '../../public/Web development.jpeg',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Native iOS and Android apps, or cross-platform solutions using React Native and Flutter. We build mobile experiences that users love and that drive measurable business results.',
    link: '/services/mobile-apps',
    image: '../../public/mobile devlopment.jpeg',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'Cloud migration, infrastructure optimization, and serverless architecture. We help you leverage AWS, Azure, and GCP to reduce costs, improve performance, and scale effortlessly.',
    link: '/services/cloud-solutions',
    image: '../../public/cloud solutions.png',
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Intelligent automation, predictive analytics, and machine learning models that transform data into actionable insights. From natural language processing to computer vision.',
    link: '/services/ai-ml',
    image: '../../public/Ai&ml.png',
  },
  {
    icon: '🧠',
    title: 'Data Science',
    description:
      'Unlock insights from complex data through advanced analytics, statistical modeling, and AI-driven decision-making. We help businesses leverage data to gain a competitive edge.',
    link: '/services/data-science',
    image: '../../public/Data science.jpeg',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that delight users and drive engagement through research-backed design decisions.',
    link: '/services/ui-ux-design',
    image: '../../public/Ui&ux design.jpeg',
  },
  {
    icon: '⚙️',
    title: 'DevOps & CI/CD',
    description:
      'Streamline your development workflow with automated testing, continuous integration, and deployment pipelines. Reduce time to market while maintaining code quality.',
    link: '/services/devops',
    image: '../../public/Devops.jpg',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description:
      'Turn raw data into strategic insights with custom dashboards, reporting systems, and business intelligence solutions. Make data-driven decisions with confidence.',
    link: '/services/data-analytics',
    image: '../../public/Data analytics.jpeg',
  },
]

const ServicesPage = () => {
  return (
    <>
      <Meta
        title="Our Services - BuildBros Innovations"
        description="Explore our comprehensive suite of digital services including custom software development, web and mobile apps, cloud solutions, AI/ML, and more."
      />

      <Hero
        title="Comprehensive Digital Solutions"
        subtitle="From strategy to execution, we deliver end-to-end services that transform your business and drive growth."
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We dive deep into your business goals, challenges, and requirements to create a comprehensive project roadmap.',
              },
              {
                step: '02',
                title: 'Design',
                description:
                  'Our designers create intuitive, beautiful interfaces while our architects plan scalable technical solutions.',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  "Agile development sprints with regular demos and feedback loops to ensure we're building exactly what you need.",
              },
              {
                step: '04',
                title: 'Launch & Support',
                description:
                  'Smooth deployment to production with comprehensive testing, followed by ongoing maintenance and optimization.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Schedule a free consultation with our team. We'll help you identify the right solutions for your business goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
