import Approch, { ApprochProps } from './components/Approch'
import { icons } from '../../../../libs/assets'
import Section from '../../../../components/Section'

const approaches: ApprochProps[] = [
  {
    title: 'UX Driven Engineering',
    icon: icons.rocket,
    iconWrapperColor: 'blue-500',
    body: 'We design beautiful modern websites and mobile apps that are easy to use and stand out from the crowd.',
    highlighteds: ['UI/UX Design', 'Mobile Apps'],
    highlightedColor: 'blue-500',
    gradient: 'bg-gradient-to-r from-[#29272E] to-[#27272E]',
  },
  {
    title: 'Developing Shared Understanding',
    icon: icons.codeSymbol,
    iconWrapperColor: 'green-500',
    body: 'We build high-quality websites and web applications that are fast, secure, and easy to manage.',
    highlighteds: ['Web Development', 'E-Commerce'],
    highlightedColor: 'green-500',
    gradient: 'bg-gradient-to-r from-[#68DBF2] to-[#509CF5]',
  },
  {
    title: 'Proven Experience and Expertise',
    icon: icons.heart,
    iconWrapperColor: 'purple-500',
    body: 'We create custom mobile apps for iOS and Android that are user-friendly and fully functional.',
    highlighteds: ['Mobile Development', 'React Native'],
    highlightedColor: 'purple-500',
    gradient: 'bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]',
  },
  {
    title: 'Security & Intellectual Property (IP)',
    icon: icons.shield,
    iconWrapperColor: 'yellow-500',
    body: 'We help businesses develop a strong brand identity that resonates with their target audience.',
    highlighteds: ['Branding', 'Logo Design'],
    highlightedColor: 'yellow-500',
    gradient: 'bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]',
  },
  {
    title: 'Code Reviews',
    icon: icons.checkMark,
    iconWrapperColor: 'yellow-500',
    body: 'We help businesses develop a strong brand identity that resonates with their target audience.',
    highlighteds: ['Branding', 'Logo Design'],
    highlightedColor: 'yellow-500',
    gradient: 'bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]',
  },
  {
    title: 'Quality Assurance & Testing',
    icon: icons.padlock,
    iconWrapperColor: 'yellow-500',
    body: 'We help businesses develop a strong brand identity that resonates with their target audience.',
    highlighteds: ['Branding', 'Logo Design'],
    highlightedColor: 'yellow-500',
    gradient: 'bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A]',
  },
]

const DesignAproach = () => {
  return (
    <Section
      title="Our Design and"
      subTitle="development approch"
      titleLine
      centerItems
    >
      <div className="sm:grid grid-cols-2 gap-4 mt-5">
        {approaches.map((approach, index) => (
          <Approch key={`aprch-${index}`} {...approach} />
        ))}
      </div>
    </Section>
  )
}

export default DesignAproach
