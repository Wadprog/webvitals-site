import SectionTitle from './SectionTitle'
import Line from './Line'

type ParagraphProps = {
  title?: string
  subTitle?: string
  titleLine?: boolean
  body: string
  bodyCss?: string
}

const highLightText = (text: string) => {
  console.log({ text })
  return `
    <span className="bg-gradient-to-r bg-clip-text from-[#F96000] to-[#0254B6] text-transparent font-bold">
      ${text}
    </span>
  `
}

const Paragraph = (props: ParagraphProps) => {
  const body = props.body.replace(
    /<highLight>(.*?)<highLight>/g,
    (_, match) => {
      return highLightText(match)
    }
  )

  // console.log({ body })
  return (
    <article>
      {props.titleLine && <Line centerItems={false} />}
      {props.title ||
        (props.subTitle && (
          <SectionTitle
            title={props.title || ' '}
            subTitle={props.subTitle || undefined}
            centerItems={false}
          />
        ))}
      <p className={`text-[#1A202C] text-[18px] font-thin ${props.bodyCss}`}>
        {body}
      </p>
    </article>
  )
}

export default Paragraph
