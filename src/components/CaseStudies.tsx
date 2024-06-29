import Paragraph from './Paragraph'

export type CaseStudy = {
  img: string
  title: string
  description: string
  desc_bg_color: string
  img_bg_color: string
}
const CaseStudies = (props: CaseStudy) => {
  return (
    <div className="sm:flex">
      <div className="sm:h-[416px] mb-0 mr-0">
        <img
          src={props.img}
          alt={props.title}
          // className={`bg-${props.img_bg_color}`}
          className="sm:h-[416px] sm:rounded-l-[10px] rounded-t-[10px] mr-0 md:rounded-tr-none"
        />
      </div>
      <div
        // className={` ${"bg-["+props.desc_bg_color+"]"} ml-0   `}
        className={`bg-[${props.img_bg_color}] sm:saturate-100 sm:w-[601px] sm:h-[416px] sm:rounded-r-[10px] rounded-b-[10px] md:rounded-bl-none ml-0 px-2 mt-0 text-white  py-4 `}
      >
        <Paragraph
          bodyCss="text-white"
          title="Case Study"
          subTitle={props.title}
          body={props.description}
        />
      </div>
    </div>
  )
}

export default CaseStudies
