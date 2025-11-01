const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '10+', label: 'Team Members' },
  { value: '10+', label: 'Happy Clients' },
  { value: '90%+', label: 'Client Satisfaction' },
]

const Stats = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
