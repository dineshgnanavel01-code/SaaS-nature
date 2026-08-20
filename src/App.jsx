import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import About from "./components/About.jsx"
import Stats from "./components/Stats.jsx"
import Solutions from "./components/Solutions.jsx"
import Statistics from "./components/Statistics.jsx"
import Testimonials from "./components/Testimonials.jsx"
import CTA from "./components/CTA.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Solutions />
        <Statistics />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App