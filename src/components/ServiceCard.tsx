import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  link: string
  image: string
}

const ServiceCard = ({ icon, title, description, link, image }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group block overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute bottom-3 left-3 text-white text-2xl">{icon}</div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <span className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
          Learn more
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default ServiceCard
