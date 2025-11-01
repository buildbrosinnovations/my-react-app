import { useState } from 'react'
import { Link } from 'react-router-dom'
import portfolioData from '../data/portfolio.json'

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = ['all', ...new Set(portfolioData.map((item) => item.industry))]

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.industry === activeFilter)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
              activeFilter === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            aria-pressed={activeFilter === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/portfolio/${project.id}`}
            className="group card overflow-hidden"
          >
            <div className="aspect-video overflow-hidden bg-slate-100">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="text-xs font-medium text-primary-600 mb-2">
                {project.industry}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-4">{project.short}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600">No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default PortfolioGrid