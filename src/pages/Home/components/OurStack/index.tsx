import Section from '../../../../components/Section'

const OurStack = () => {
  return (
    <Section
      title="Our"
      subTitle="Tech Stack"
      titleLine
      centerItems
      graybackground={false}
    >
      <ul className="flex gap-4 items-center justify-center mt-5">
        <li className="bg-gradient-to-r bg-clip-text from-[#F96000] to-[#0254B6] text-transparent font-bold ">
          Backend
          <span className="bg-red-300 w-[100px]"></span>
        </li>
        <li>
          <span>FrontEnd</span>
          <div className="bg-red-300 w-[100px]"></div>
        </li>
        <li>Database</li>
        <li>DCMS</li>
        <li>CloudTesting</li>
        <li>DevOps</li>
      </ul>
    </Section>
  )
}

export default OurStack
