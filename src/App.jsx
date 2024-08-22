import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Roadmap from "./components/Roadmap"
import Services from "./components/Services"
const App = () => {
  return (
    <>
      <div className="pt-[4.7rem] lg:pt-[5.5rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits></Benefits>
        <Collaboration></Collaboration>
        <Services></Services>
        <Pricing></Pricing>
        <Roadmap></Roadmap>
        <Footer></Footer>
      </div>
      <ButtonGradient></ButtonGradient>
    </>
  )
}

export default App