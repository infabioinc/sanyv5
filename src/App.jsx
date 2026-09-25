import Header from './components/Header'
import Hero from './components/Hero'
import Argument from './components/Argument'
import ThreeTrucks from './components/ThreeTrucks'
import Technology from './components/Technology'
import PowerOfSix from './components/PowerOfSix'
import Economics from './components/Economics'
import Applications from './components/Applications'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Argument />
        <ThreeTrucks />
        <Applications />
        <Technology />
        <PowerOfSix />
        <Economics />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
