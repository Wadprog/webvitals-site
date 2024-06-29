import Section from '../../../../components/Section'
import SectionTitle from '../../../../components/SectionTitle'
const CTA = () => {
  return (
    <Section graybackground={false}>
      <div className=" p-5 sm:px-52">
        <div className="sm:flex bg-[#F9F9FF] justify-around items-center rounded">
          <SectionTitle
            title="Ready to start a project with us?"
            subTitle="contract us now"
            titleCss=" text-2xl sm:text-4xl"
            centerItems={false}
          />
          <button className="text-white rounded mt-2 sm:mt-0 w-full sm:inline block bg-red-600 p-2 bg-gradient-to-r from-cyan-500 to-blue-500">
            Contact Us
          </button>
        </div>
      </div>
    </Section>
  )
}

export default CTA
