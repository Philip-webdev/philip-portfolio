import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Portfolio from '../components/Portfolio'
import Founder from '../components/Founder'
import Vision from '../components/Vision'
import Contact from '../components/Contact'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title={null}
        description="Philip Bankole — Developer & founder building EdTech, FinTech, and FoodTech solutions across Africa. Recognized by the African Stable-coin Network."
      />
      <Hero />
      <Problem />
      <Portfolio />
      <Founder />
      <Vision />
      <Contact />
    </>
  )
}
