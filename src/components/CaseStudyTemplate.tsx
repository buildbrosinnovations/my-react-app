interface Project {
  id: string
  title: string
  short: string
  long: string
  images: string[]
  stack: string[]
  industry: string
  stats: {
    label: string
    value: string
  }[]
}

interface CaseStudyTemplateProps {
  project: Project
}

const CaseStudyTemplate = ({ project }: CaseStudyTemplateProps) => {
  return (
    <article className="container-custom py-16 lg:py-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-sm font-medium text-primary-600 mb-4">{project.industry}</div>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{project.title}</h1>
        <p className="text-xl text-slate-600">{project.short}</p>
      </div>

      {/* Hero Image */}
      <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-auto"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
        {project.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-slate-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
          <p className="text-slate-700 leading-relaxed">{project.long}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary-50 text-primary-700 font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to build something amazing?
          </h3>
          <p className="text-slate-600 mb-6">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a href="/contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </article>
  )
}

export default CaseStudyTemplate