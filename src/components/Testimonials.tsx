const testimonials = [
  {
    name: 'Ravi Kumar',
    position: 'CTO, NexaTech Solutions (Bengaluru)',
    content:
      'BuildBros delivered our web application with exceptional quality. The team’s deep technical expertise and commitment to deadlines made a huge difference to our business.',
    avatar: '👨‍💼',
  },
  {
    name: 'Priya Sharma',
    position: 'Product Manager, FinEdge Systems (Bengaluru)',
    content:
      'The BuildBros team helped us modernize our fintech dashboard using React and Spring Boot. Their professionalism and responsiveness were top-notch throughout the project.',
    avatar: '👩‍💻',
  },
  {
    name: 'Ankit Rao',
    position: 'Founder, HealthWave Technologies (Bengaluru)',
    content:
      'Working with BuildBros was a pleasure. They understood our healthcare product vision perfectly and built a user-friendly, secure solution that scales beautifully.',
    avatar: '👨‍⚕️',
  },
]

const Testimonials = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We’re proud to have partnered with forward-thinking companies based in Bengaluru and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.position}</div>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">{testimonial.content}</p>
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
