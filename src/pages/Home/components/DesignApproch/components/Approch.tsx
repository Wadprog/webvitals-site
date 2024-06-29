import Paragraph from '../../../../../components/Paragraph'
export type ApprochProps = {
  title: string
  icon?: string
  iconWrapperColor: string
  body: string
  highlighteds?: string[]
  highlightedColor?: string
  gradient?: string
}

const Approch = (props: ApprochProps) => {
  return (
    <article className="flex justify-space-around  gap-[20px] bg-white py-10 px-5 border border-1 border-[#E7DAED] rounded-md">
      <div
        className={`${props.gradient} bg-red-600 px-3 h-[48px] rounded flex justify-center items-center`}
      >
        <img src={props.icon} alt="" className="w-[48px]" />
      </div>
      <aside>
        <Paragraph title={props.title} body={props.body} titleLine={false} />
      </aside>
    </article>
  )
}

export default Approch
