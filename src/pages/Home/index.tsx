import HeroSection from '../../components/Hero'
import Companies from '../../components/Companies'
import ServicesSection from '../../components/Services'
import Testimonials from '../../components/Testimonials'
import TestimonialsHeader from '../../components/TestimonialsHeader'
import Projects from '../../components/Projects'
import Advices from '../../components/Advices'
import DesignAproach from './components/DesignApproch'
import OurStack from './components/OurStack'
import Ressources from './components/Reasources'
import Footer from '../../components/Footer'
import Cta from './components/Cta'

const Home = () => {
  return (
    <main className="font-body">
      <HeroSection />
      <ServicesSection />
      <TestimonialsHeader />
      <Companies />
      <Testimonials />
      <Projects />
      <Advices />
      <DesignAproach />
      <OurStack />
      <Ressources />
      <Cta />
      <Footer />
    </main>
  )
}

export default Home
