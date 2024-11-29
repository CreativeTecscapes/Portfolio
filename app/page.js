import Hero from "./Components/Hero"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Connect from "./Components/Connect"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"
import Navbar1 from "./Components/Navbar1"
import Intro from "./Components/Intro"

export default function Home() {
  return (
    <div>
       <Hero />
       <Navbar1 />
       <Intro />
       <Services />
       <About />
       <Projects />
       <Contact />
       <Connect />
       <Footer />
    </div>
  )
}

