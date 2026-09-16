import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Facilities from './sections/Facilities'
import Training from './sections/Training'
import WhyChooseUs from './sections/WhyChooseUs'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import MembershipCTA from './sections/MembershipCTA'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-brand-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Training />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <MembershipCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
