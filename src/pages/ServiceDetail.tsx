import { useParams, Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Meta from '../components/Meta'

const serviceDetails: Record<string, any> = {
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'End-to-end solutions tailored to your business goals.',
    image: '/custom website.jpeg',
    description:
      'Our custom software development team builds scalable, secure, and high-performing software to match your exact business requirements. We collaborate closely with your stakeholders to create software that grows with your company.',
    features: [
      'Enterprise-grade applications',
      'Custom ERP & CRM systems',
      'API integrations',
      'Third-party software integration',
      'Maintenance & ongoing support',
    ],
    technologies: ['React', 'Node.js', 'Spring Boot', 'MySQL', 'AWS', 'Docker'],
  },

  'web-development': {
    title: 'Web Development',
    subtitle: 'Modern, responsive web solutions for all platforms.',
    image: '/Web development.jpeg',
    description:
      'We create fast, interactive, and SEO-friendly web applications that help your brand stand out. Whether you need a simple website or a large-scale SaaS platform, we deliver quality code and smooth performance.',
    features: [
      'Responsive design',
      'E-commerce platforms',
      'Custom CMS systems',
      'PWA (Progressive Web Apps)',
      'Single Page Applications (SPA)',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },

  'mobile-apps': {
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform apps that engage users.',
    image: '/mobile devlopment.jpeg',
    description:
      'We design and build mobile applications that offer seamless user experiences and robust functionality. Our apps are built for both iOS and Android using modern frameworks.',
    features: [
      'Native iOS & Android apps',
      'Cross-platform (React Native, Flutter)',
      'Push notifications',
      'App Store & Play Store deployment',
      'Offline functionality',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },

  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Scalable and secure cloud infrastructure for your business.',
    image: '/cloud solutions.png',
    description:
      'Our cloud solutions ensure your business is always online, scalable, and cost-effective. We specialize in AWS, Azure, and GCP to build and maintain world-class cloud infrastructure.',
    features: [
      'Cloud migration',
      'Serverless architecture',
      'Infrastructure as Code (IaC)',
      'CI/CD pipelines',
      'Monitoring & optimization',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform'],
  },

  'ai-ml': {
    title: 'AI & Machine Learning',
    subtitle: 'Smarter, data-driven decisions with intelligent systems.',
    image: '/Ai&ml.png',
    description:
      'From predictive analytics to automation, our AI & ML experts build intelligent systems that analyze data, learn from it, and drive better business outcomes.',
    features: [
      'Predictive analytics',
      'Natural language processing',
      'Image recognition',
      'Recommendation engines',
      'Custom ML model development',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
  },

  'data-science': {
    title: 'Data Science',
    subtitle: 'Turn data into business intelligence and insights.',
    image: '/Data science.jpeg',
    description:
      'We help organizations harness the power of data with advanced analytics, machine learning models, and custom dashboards for real-time insights.',
    features: [
      'Data cleaning & preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Model training & deployment',
      'Data visualization',
      'Predictive modeling',
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'SQL'],
  },

  'ui-ux-design': {
    title: 'UI/UX Design',
    subtitle: 'Designs that delight users and drive conversions.',
    image: '/Ui&ux design.jpeg',
    description:
      'Our design team crafts intuitive interfaces that enhance usability and elevate your brand. Every pixel and interaction is focused on creating an exceptional user experience.',
    features: [
      'User research & wireframing',
      'UI/UX strategy & prototyping',
      'Responsive design systems',
      'Design handoff & documentation',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Framer'],
  },

  'devops': {
    title: 'DevOps & CI/CD',
    subtitle: 'Faster releases with reliable automation pipelines.',
    image: '/Devops.jpg',
    description:
      'We implement DevOps practices that improve efficiency, reduce manual errors, and enable faster, more reliable deployments across your software ecosystem.',
    features: [
      'Continuous integration & delivery (CI/CD)',
      'Containerization with Docker & Kubernetes',
      'Infrastructure monitoring',
      'Automated testing pipelines',
    ],
    technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS'],
  },

  'data-analytics': {
    title: 'Data Analytics',
    subtitle: 'Data-driven strategies to fuel business growth.',
    image: '/Data analytics.jpeg',
    description:
      'Transform your raw data into clear insights through analytics dashboards, BI reports, and custom data visualization tools that support informed decision-making.',
    features: [
      'Dashboard & reporting tools',
      'Data visualization',
      'Business intelligence (BI)',
      'ETL pipelines',
    ],
    technologies: ['Power BI', 'Tableau', 'Python', 'SQL', 'Excel'],
  },
}

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = serviceDetails[serviceId || '']

  if (!service) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">
          The service you're looking for doesn't exist.
        </p>
        <Link to="/services" className="btn-primary">
          Back to Services
        </Link>
      </div>
    )
  }

  return (
    <>
      <Meta title={`${service.title} - BuildBros Innovations`} description={service.description} />

      <Hero title={service.title} subtitle={service.subtitle} backgroundImage={service.image} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-xl mb-10 shadow-md"
            />

            <p className="text-lg text-slate-700 leading-relaxed mb-12">{service.description}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Offer</h2>
                <ul className="space-y-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary-50 text-primary-700 font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-6">
                Let’s collaborate to bring your vision to life. Contact our team today!
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
