import Hero from "./Components/Hero"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Connect from "./Components/Connect"
import Footer from "./Components/Footer"


export default function Home() {
  return (
    <div>
       <Hero />
       <Services />
       <About />
       <Contact />
       <Connect />
       <Footer />
    </div>
  )
}
