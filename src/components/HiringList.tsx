import { Link } from 'react-router-dom'

const positions = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / New York',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'Project Manager',
    department: 'Operations',
    location: 'San Francisco',
    type: 'Full-time',
  },
]

const HiringList = () => {
  return (
    <div className="space-y-4">
      {positions.map((position) => (
        <div
          key={position.id}
          className="card p-6 hover:border-primary-200 border border-transparent transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{position.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {position.department}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {position.location}
                </span>
                <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                  {position.type}
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}

      {positions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600">
            No open positions at the moment. Check back soon or send us your resume!
          </p>
        </div>
      )}
    </div>
  )
}

export default HiringList
