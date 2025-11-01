import { useParams, Navigate } from 'react-router-dom'
import CaseStudyTemplate from '../components/CaseStudyTemplate'
import Meta from '../components/Meta'
import portfolioData from '../data/portfolio.json'

const CaseStudyPage = () => {
  const { projectId } = useParams<{ projectId: string }>()
  const project = portfolioData.find((p) => p.id === projectId)

  if (!project) {
    return <Navigate to="/portfolio" replace />
  }

  return (
    <>
      <Meta
        title={`${project.title} - BuildBros Innovations`}
        description={project.short}
        type="article"
      />
      <CaseStudyTemplate project={project} />
    </>
  )
}

export default CaseStudyPage