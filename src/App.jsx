
import './App.css'
import BannerSection from './components/BannerSection'
import Footer from './components/Footer'
import GetStated from './components/GetStated'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import ReadyToStart from './components/ReadyToStart'
import StatsSection from './components/StatsSection'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <StatsSection></StatsSection>
      <GetStated></GetStated>
      <PricingSection></PricingSection>
      <ReadyToStart></ReadyToStart>
      <Footer></Footer>
    </div>
  )
}

export default App
