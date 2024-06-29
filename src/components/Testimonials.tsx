import { useState } from 'react'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Witness from './Witness'
import Section from './Section'
import Paragraph from './Paragraph'
const feebacks = [
  'Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.',
  'There service is excellent and the great thing is that they are always available to help. I would recommend them to anyone who is looking for a professional website.',
  'I am very happy with the service I received from Alcaline Solutions. They are very professional and always available to help. I would recommend them to anyone who is looking for a professional website.',
]
const clients = [
  {
    name: 'John Doe',
    title: 'CEO, Google',
    image: 'https://via.placeholder.com/150',
    starCount: 4,
  },
  {
    name: 'John Doe',
    title: 'CEO, Google',
    image: 'https://via.placeholder.com/150',
    starCount: 4,
  },
  {
    name: 'John Doe',
    title: 'CEO, Google',
    image: 'https://via.placeholder.com/150',
    starCount: 4,
  },
]
const Testimonials = () => {
  const [selectedFeedback, setSelectedFeedback] = useState<number>(1)
  return (
    <Section
      centerItems={true}
      graybackground={false}
      titleLine
      title="Why our clients love"
      subTitle="working with us"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center b-red-500">
          <div
            className="w-[50px] h-[50px] border border-[#F76680] rounded-full justify-center items-center cursor-pointer hidden sm:flex"
            onClick={() => setSelectedFeedback(0)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>

          <blockquote
            className="after:content-open-quote after:ml-3 after:text-red-500 
          before:content-['\''] before:mr-3 before:text-red-500 text-center sm:w-[533px] mt-5 leading-9 text-[#718096]"
          >
            <Paragraph body={feebacks[selectedFeedback]} />
          </blockquote>
          <div
            className="w-[50px] h-[50px] border border-[#F76680] rounded-full justify-center items-center cursor-pointer hidden sm:flex"
            onClick={() => setSelectedFeedback(1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-[76px] mt-5">
          {clients.map((client, index) => (
            <Witness key={index} {...client} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
