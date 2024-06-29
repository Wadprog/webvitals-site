import { useState } from 'react'
import Section from './Section'

import Service from './Service'
import Dot from '../components/Dots'
import { services } from '../mockdata/services'

const Services = () => {
  const [selectedService, setSelectedService] = useState<number>(1)

  const handleSelectedService = (id: number) => {
    // scroll to the selected service

    setSelectedService(id)
  }
  return (
    // <section className="bg-[#F9F9FF] pt-[46px] pb-10">
    <Section title="Service We offer">
      <>
        <section className="!snap-x snap-mandatory flex justify-between gap-4 px-2 sm:px-0 sm:gap-[40px]  w-full">
          {services.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </section>

        <div className="flex justify-center mt-10 gap-[8px]">
          {services.map((service) => (
            <Dot
              key={service.id}
              selected={service.id == selectedService}
              onPress={() => handleSelectedService(service.id)}
            />
          ))}
          {/* slider here @todo */}
        </div>
      </>
    </Section>
    // </section>
  )
}

export default Services
