import { Service as SERVICES } from '../mockdata/services'

const Service = (data: SERVICES) => {
  return (
    <div className="!snap-center shadow-sm shadow-[#FAFAFA] rounded bg-white p-5 min-w-[333px] min-h-[287px] mb-1">
      <img
        src={data.image}
        alt={data.title}
        className="h-[40px] border border-t-[#F96000] border-r-[#0254B6] border-b-[#F96000] border-l-[#0254B6] rounded-full p-1"
      />
      <h3 className="font-semibold my-[20px] text-[20px] mb-3">{data.title}</h3>
      <small className="text-[14px] font-thin">{data.description}</small>
    </div>
  )
}

export default Service
