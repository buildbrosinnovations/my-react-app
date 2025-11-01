import { useParams, Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Meta from '../components/Meta'

const serviceDetails: Record<string, any> = {
  'custom-software': {
    title: 'Custom Software Development',
    subtitle: 'Tailored solutions that perfectly fit your business needs',
    image: '/custom-website.jpeg',
    description:
      'We specialize in building custom software applications that solve unique business challenges. Our experienced team works closely with you to understand your requirements and deliver solutions that drive efficiency and growth.',
    features: [
      'Enterprise Application Development',
      'Legacy System Modernization',
      'API Development & Integration',
      'Database Design & Optimization',
      'Third-Party Software Integration',
      'Ongoing Maintenance & Support',
    ],
    technologies: ['React', 'Spring Boot', 'Java', 'MySQL', 'Docker', 'AWS'],
    benefits: [
      { title: 'Scalable Architecture', description: 'Built to grow with your business, handling increased load without performance degradation.' },
      { title: 'Secure by Design', description: 'Industry-standard security practices implemented from day one to protect your data.' },
      { title: 'Agile Development', description: 'Iterative approach with regular feedback cycles ensures we build exactly what you need.' },
    ],
  },

  'web-development': {
    title: 'Web Development',
    subtitle: 'Modern, responsive websites that engage and convert',
    image: '../../public/Web development.jpeg',
    description:
      'Create stunning web experiences that work flawlessly across all devices. From simple landing pages to complex web applications, we build fast, secure, and user-friendly websites.',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'CMS Integration',
      'Single Page Applications (SPA)',
      'SEO Optimization',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    benefits: [
      { title: 'Lightning Fast', description: 'Optimized for speed with sub-second load times and smooth interactions.' },
      { title: 'Mobile-First', description: 'Designed for mobile devices first, ensuring perfect experience on any screen.' },
      { title: 'SEO Optimized', description: 'Built with search engines in mind to maximize your online visibility.' },
    ],
  },

  'mobile-apps': {
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform apps that users love',
    image: '../../public/mobile devlopment.jpeg',
    description:
      'Build engaging mobile experiences for iOS and Android. Whether you need a native app or a cross-platform solution, we deliver high-performance applications that delight users.',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-Platform (React Native, Flutter)',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    benefits: [
      { title: 'Native Performance', description: 'Smooth, responsive interfaces that feel natural on each platform.' },
      { title: 'Offline Support', description: 'Apps that work seamlessly even without an internet connection.' },
      { title: 'Easy Maintenance', description: 'Clean code architecture that makes updates and enhancements simple.' },
    ],
  },

  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Scalable, reliable, and cost-efficient cloud infrastructure',
    image: '../../public/cloud solutions.png',
    description:
      'Leverage the power of AWS, Azure, and GCP with our cloud expertise. We help you design, migrate, and manage scalable cloud solutions tailored to your business.',
    features: [
      'Cloud Migration & Optimization',
      'Serverless Architecture',
      'CI/CD Automation',
      'Disaster Recovery Setup',
      'Performance Monitoring',
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
    benefits: [
      { title: 'Reduced Costs', description: 'Optimize infrastructure expenses with scalable, pay-as-you-go solutions.' },
      { title: 'Improved Reliability', description: 'High availability and fault-tolerant systems that minimize downtime.' },
      { title: 'Faster Deployment', description: 'Automated pipelines accelerate feature delivery and updates.' },
    ],
  },

  'ai-ml': {
    title: 'AI & Machine Learning',
    subtitle: 'Empowering your business with intelligent automation',
    image: '../../public/Ai&ml.png',
    description:
      'Harness artificial intelligence and machine learning to make smarter decisions, automate workflows, and uncover patterns from your data.',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Data Classification & Clustering',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
    benefits: [
      { title: 'Smarter Insights', description: 'Use data-driven insights for better decision-making.' },
      { title: 'Automation', description: 'Reduce manual work through intelligent systems.' },
      { title: 'Scalable Models', description: 'Solutions that adapt as your data and business grow.' },
    ],
  },

  'data-science': {
    title: 'Data Science',
    subtitle: 'Transform data into actionable business intelligence',
    image: '../../public/Data science.jpeg',
    description:
      'Unlock insights from data with advanced analytics, predictive modeling, and visualization. We help you harness the power of your data for strategic decision-making.',
    features: [
      'Data Collection & Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Statistical Modeling',
      'Machine Learning Integration',
      'Data Visualization Dashboards',
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'SQL', 'Pandas'],
    benefits: [
      { title: 'Actionable Insights', description: 'Convert raw data into meaningful business intelligence.' },
      { title: 'Informed Decisions', description: 'Predict trends and behaviors with data-backed models.' },
      { title: 'Custom Dashboards', description: 'Real-time visualization for better monitoring and analysis.' },
    ],
  },

  'devops': {
    title: 'DevOps & CI/CD',
    subtitle: 'Automate and accelerate your development process',
    image: '../../public/Devops.jpg',
    description:
      'Implement continuous integration and deployment pipelines to improve collaboration, reduce delivery times, and ensure reliable releases.',
    features: [
      'CI/CD Pipeline Setup',
      'Containerization (Docker, Kubernetes)',
      'Monitoring & Logging',
      'Automated Testing',
      'Version Control Integration',
    ],
    technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    benefits: [
      { title: 'Faster Releases', description: 'Automate your delivery process for faster time-to-market.' },
      { title: 'Improved Quality', description: 'Early issue detection with automated testing pipelines.' },
      { title: 'Enhanced Collaboration', description: 'Bridge the gap between dev and ops teams.' },
    ],
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
          View All Services
        </Link>
      </div>
    )
  }

  return (
    <>
      <Meta
        title={`${service.title} - BuildBros Innovations`}
        description={service.description}
      />

      <Hero
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.image}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-xl mb-10 shadow-md"
            />

            <p className="text-lg text-slate-700 leading-relaxed mb-12">
              {service.description}
            </p>

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

            <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {service.benefits.map((benefit: any, index: number) => (
                <div key={index} className="card p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-600 mb-6">
                Let's discuss how we can help bring your project to life.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
