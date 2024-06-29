import img1 from '../assets/case_study_1.jpeg'
import img2 from '../assets/case_study_2.jpeg'
import img3 from '../assets/case_study_3.jpeg'

export type CaseStudy = {
  img: string
  title: string
  description: string
  desc_bg_color: string
  img_bg_color: string
}

const general_description =
  'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.'

export default [
  {
    img: img1,
    title: 'Case Study 1',
    description: general_description,
    img_bg_color: '#D1E1F0',
    desc_bg_color: '#57007f',
  },
  {
    img: img2,
    title: 'Case Study 2',
    description: general_description,
    img_bg_color: '#D1E1F0',
    desc_bg_color: '#57007f',
  },
  {
    img: img3,
    title: 'Case Study 3',
    description: general_description,
    img_bg_color: '#F76680',
    desc_bg_color: '#FFF4F4',
  },
]
