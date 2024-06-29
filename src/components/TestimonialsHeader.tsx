// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from './Section'

import videoIMG from '../assets/video.png'
import playBtn from '../assets/play-circle-fill.png'
import SectionTitle from './SectionTitle'
import Line from './Line'
import Paragraph from './Paragraph'

const TestimonialsHeader = () => {
  return (
    <Section centerItems={true} graybackground={false}>
      <div className="sm:flex justify-center items-center">
        <div className=" ">
          <Line centerItems={false} />
          <SectionTitle
            title="Leading Company trust us"
            subTitle="to develop software"
            centerItems={false}
          />
          <Paragraph
            body="
              We <highLight>add development capacity<highLight> to tech teams. Our value isn’t limited to building teams but is
              equally distributed across the project lifecycle. We are a custom
              software development company that guarantees the successful
              delivery of your project. We are a team of experts in software
              "
          />
          <div>
            <div className="relative block md:hidden my-2">
              <img src={videoIMG} alt="" className="h-[500px] w-[1500px]" />

              <img
                src={playBtn}
                alt=""
                className="absolute top-[50%] left-[50%] p-3 rounded-full bg-white transform translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
            <Line centerItems={false} />
            <SectionTitle
              title="Meet the People"
              subTitle="Who work with us"
              centerItems={false}
            />
          </div>
        </div>

        <div className="relative hidden sm:block">
          <img src={videoIMG} alt="" className="h-[500px] w-[1500px]" />

          <img
            src={playBtn}
            alt=""
            className="absolute top-[50%] left-[50%] p-3 rounded-full bg-white transform translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </div>
    </Section>
  )
}

export default TestimonialsHeader
