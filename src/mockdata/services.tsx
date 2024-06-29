export type Service = {
  id: number
  title: string
  description: string
  image: string
}

import phone_img from '../assets/Mobile_app_perspective_matte.png'
import code_img from '../assets/Code_perspective_matte.png'

export const services: Service[] = [
  {
    id: 1,
    title: 'Search Engine Optimization',
    description:
      "We optimize and maintain search engine optimization that help you to rank on Google's first page and increase your website's visibility.",
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      'We build and maintain mobile applications that meet your needs and requirements. We are here to help you to express your ideas and thoughts in a mobile application.',
    image: phone_img,
  },
  {
    id: 3,
    title: 'Web Design & Development',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    image: code_img,
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'We marke and maintain digital marketing that meet your needs',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Database Design & Management',
    description:
      'We design and maintain database that meet your needs and requirements. We are here to help you to express your ideas and thoughts in a database.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Content Writing',
    description: 'We write and maintain content writing that meet your needs',
    image: 'https://via.placeholder.com/150',
  },
]
