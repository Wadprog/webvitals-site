import Section from './Section'
import heroImg from '../assets/hero_img.png'
const Hero = () => (
  <Section centerItems graybackground={false}>
    <div className="flex md:flex-row sm:flex-col justify-center items-center sm:h-screen">
      <div className="grow">
        <h1 className="text-4xl sm:text-5xl font-light text-[#1A202C] dark:text-white mt-2 sm:mt-0">
          Great{' '}
          <b className="bg-gradient-to-r bg-clip-text from-[#F96000] to-[#0254B6] text-transparent font-bold">
            Product
          </b>{' '}
          is
          <br />
          <b>
            built by great{' '}
            <span className="bg-gradient-to-r bg-clip-text to-[#F96000] from-[#0254B6] text-transparent font-bold">
              teams
            </span>
          </b>
        </h1>
        <small className="block mt-[28px] text-[18px] leading-9 font-extralight">
          We help build and manage a team of world-class developers <br />
          to bring your vision to life
        </small>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>
        <button
          type="button"
          className="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contact Us
        </button>
      </div>
      <div className="hidden sm:block w-1/2">
        <img src={heroImg} alt="" className="" />
      </div>
    </div>
  </Section>
)

export default Hero
