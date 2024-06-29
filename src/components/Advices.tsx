import Section from './Section'

import advice1 from '../assets/Rectangle 17.png'
import advice2 from '../assets/Rectangle 19.png'
import Article from './Article'
import Paragraph from './Paragraph'

const Advices = () => {
  return (
    <Section
      title="Way of building"
      subTitle="Great Software"
      graybackground={false}
      titleLine
      centerItems
    >
      <div className="flex flex-col justify-center items-center gap-8 py-10">
        <Article
          image={advice1}
          title="Building the right team to scale"
          highlighted='"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"'
        >
          <Paragraph body="from a single developer to a full-scale team, we have the right talent to help you scale your development capacity. We have a dedicated team of developers, designers, and project managers to help you achieve your goals. We are a custom software development company that guarantees the successful delivery of your project." />
        </Article>
        <Article
          image={advice2}
          title="Building the right team to scale"
          highlighted='"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"'
        >
          <Paragraph
            body="
            from a single developer to a full-scale team, we have the right
            talent to help you scale your development capacity. We have a
            dedicated team of developers, designers, and project managers to
            help you achieve your goals. We are a custom software development
            company that guarantees the successful delivery of your project"
          />
        </Article>
      </div>
    </Section>
  )
}

export default Advices
