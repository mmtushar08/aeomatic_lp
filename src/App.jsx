import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Stats from './components/Stats'
import Features from './components/Features'
import Channels from './components/Channels'
import Testimonials from './components/Testimonials'
import Awards from './components/Awards'
import Integrations from './components/Integrations'
import Developer from './components/Developer'
import CtaPoster from './components/CtaPoster'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <div className="container">
          <TrustBar />
        </div>
        <Stats />
        <Features />
        <Channels />
        <Testimonials />
        <Awards />
        <Integrations />
        <Developer />
        <CtaPoster />
      </main>
      <Footer />
    </>
  )
}
