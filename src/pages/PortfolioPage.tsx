import Hero from '../components/Hero'
import PortfolioGrid from '../components/PortfolioGrid'
import Meta from '../components/Meta'

const PortfolioPage = () => {
  return (
    <>
      <Meta
        title="Our Portfolio - BuildBros Innovations"
        description="Explore our portfolio of successful projects across Healthcare, FinTech, E-Commerce, and more."
      />

      <Hero
        title="Our Work"
        subtitle="Explore our portfolio of successful projects that have transformed businesses across various industries."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <PortfolioGrid />
        </div>
      </section>
    </>
  )
}

export default PortfolioPage