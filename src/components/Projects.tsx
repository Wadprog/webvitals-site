import CaseStudies from './CaseStudies'
import caseStudies from '../mockdata/caseStudies'
import Section from './Section'

const Projects = () => {
  return (
    <Section centerItems title="Our recent" subTitle="case studies">
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-8">
        {caseStudies.map((caseStudy, index) => (
          <CaseStudies key={index} {...caseStudy} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
