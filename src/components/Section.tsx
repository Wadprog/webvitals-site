import Line from './Line'
import SectionTitle from './SectionTitle'
type SectionProps = {
  title?: string
  subTitle?: string
  titleLine?: boolean
  children: React.JSX.Element
  centerItems?: boolean
  graybackground?: boolean
  css?: string
}

const defaultProps: SectionProps = {
  title: '',
  subTitle: '',
  titleLine: false,
  centerItems: false,
  graybackground: true,
  css: '',
} as SectionProps
const Section = (props: SectionProps) => {
  props = { ...defaultProps, ...props }
  return (
    <section
      className={`bg-${props.graybackground ? '[#F9F9FF]' : 'white'} py-10 sm:pt-[46px] sm:pb-10   w-full
      ${props.centerItems && 'px-5 sm:px-[105px] sm:pb-[50px] '}
      ${props.css}`}
    >
      {props.titleLine && <Line />}
      {props.title && (
        <SectionTitle
          title={props.title}
          subTitle={props.subTitle || undefined}
          css="mb-10"
        />
      )}
      {props.children}
    </section>
  )
}

export default Section
