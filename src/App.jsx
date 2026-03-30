
import './App.css'
import BannerSection from './components/BannerSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import StatsSection from './components/StatsSection'

function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <StatsSection></StatsSection>
      <PricingSection></PricingSection>
      <Footer></Footer>
    </div>
  )
}

export default App
