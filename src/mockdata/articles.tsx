import advice1 from '../assets/Rectangle 17.png'
import advice2 from '../assets/Rectangle 19.png'

export type Article = {
  image: string
  title: string
  highlighted: string
  content: string
}

const content =
  'from a single developer to a full-scale team, we have the right talent to help you scale your development capacity. We have a dedicated team of developers, designers, and project managers to help you achieve your goals. We are a custom software development company that guarantees the successful delivery of your project.'
export default [
  {
    image: advice1,
    title: 'Building the right team to scale',
    highlighted:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    content,
  },
  {
    image: advice2,
    title: 'Building the right team to scale',
    highlighted:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    content,
  },
]
