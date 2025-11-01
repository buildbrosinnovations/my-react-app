const clients = [
  { name: 'Client 1', logo: '/placeholder-client.svg' },
  { name: 'Client 2', logo: '/placeholder-client.svg' },
  { name: 'Client 3', logo: '/placeholder-client.svg' },
  { name: 'Client 4', logo: '/placeholder-client.svg' },
  { name: 'Client 5', logo: '/placeholder-client.svg' },
  { name: 'Client 6', logo: '/placeholder-client.svg' },
]

const ClientLogoCarousel = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-600">
            We partner with forward-thinking companies to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img src={client.logo} alt={client.name} className="max-h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogoCarousel
