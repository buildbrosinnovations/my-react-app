import Hero from '../components/Hero'
import Meta from '../components/Meta'

const benefits = [
  { icon: '💰', title: 'Competitive Stipend', description: 'Attractive monthly stipends for interns' },
  { icon: '📚', title: 'Learning Opportunity', description: 'Hands-on experience with real-world projects' },
  { icon: '💻', title: 'Remote / Hybrid Options', description: 'Flexible working environment' },
  { icon: '🚀', title: 'Career Growth', description: 'Chance to convert into a full-time position' },
  { icon: '🤝', title: 'Mentorship', description: 'Guidance from experienced developers and leads' },
  { icon: '🏆', title: 'Certificate & Recognition', description: 'Internship completion certificate and project exposure' },
]

const internships = [
  {
    title: 'Software Development Intern',
    duration: '3–6 Months',
    mode: 'Remote / Onsite',
    description:
      'Work on backend and frontend development using Java, Spring Boot, and React. Get exposure to full-stack development best practices.',
  },
  {
    title: 'Frontend Development Intern',
    duration: '3–6 Months',
    mode: 'Remote / Onsite',
    description:
      'Build responsive user interfaces using React, Tailwind CSS, and modern JavaScript frameworks.',
  },
  {
    title: 'Backend Development Intern',
    duration: '3–6 Months',
    mode: 'Remote / Onsite',
    description:
      'Develop REST APIs, manage databases, and ensure backend performance using Spring Boot or Node.js.',
  },
  {
    title: 'UI/UX Design Intern',
    duration: '2–4 Months',
    mode: 'Remote',
    description:
      'Design intuitive and user-friendly interfaces using Figma and Adobe XD while collaborating with developers.',
  },
  {
    title: 'Quality Assurance Intern',
    duration: '2–4 Months',
    mode: 'Remote',
    description:
      'Perform software testing, create test cases, and ensure product quality across multiple platforms.',
  },
  {
    title: 'Data Science Intern',
    duration: '3–6 Months',
    mode: 'Remote / Onsite',
    description:
      'Work on data analysis, visualization, and predictive modeling using Python, Pandas, NumPy, and machine learning libraries.',
  },
]

const CareersPage = () => {
  return (
    <>
      <Meta
        title="Internships - BuildBros Innovations"
        description="Explore internship opportunities at BuildBros Innovations — gain hands-on experience in software development, data science, design, and technology."
      />

      <Hero
        title="Join as an Intern"
        subtitle="Kickstart your career with hands-on experience and mentorship from industry experts."
      />

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Intern With Us?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Learn, grow, and make real contributions to live projects while developing professional skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Roles Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Available Internship Roles</h2>
            <p className="text-lg text-slate-600">
              Choose the internship that matches your interests and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {internships.map((intern, index) => (
              <div
                key={index}
                className="card p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition border border-slate-100"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{intern.title}</h3>
                <p className="text-slate-600 mb-3">{intern.description}</p>
                <div className="text-sm text-slate-500 space-y-1">
                  <span className="block">🕒 Duration: {intern.duration}</span>
                  <span className="block">🌍 Mode: {intern.mode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Collaborative</h3>
                <p className="text-slate-600">
                  We work together, share knowledge, and support each other's growth.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovative</h3>
                <p className="text-slate-600">
                  We encourage experimentation and embrace new technologies and methodologies.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Balanced</h3>
                <p className="text-slate-600">
                  We value work-life balance and understand that happy teams build better products.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Don’t See Your Desired Internship?
              </h3>
              <p className="text-slate-600 mb-6">
                We're always open to passionate learners. Send us your resume and we’ll find a spot for you!
              </p>
              <a
                href="mailto:buildbrosinnovations@gmail.com"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Email Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage
