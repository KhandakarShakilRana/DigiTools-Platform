
import { useState } from 'react'
import './App.css'
import BannerSection from './components/BannerSection'
import Footer from './components/Footer'
import GetStated from './components/GetStated'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import ReadyToStart from './components/ReadyToStart'
import StatsSection from './components/StatsSection'
import Tools from './components/Tools'
import { useEffect } from 'react'


function App() {
   const [tools, setTools] = useState([]);
   const [cartItems, setCartItems] = useState([])

  // fetch products once
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setTools(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Navbar cartItems={cartItems}></Navbar>
      <BannerSection></BannerSection>
      <StatsSection></StatsSection>
      <Tools tools={tools} cartItems={cartItems} setCartItems={setCartItems}></Tools>
      <GetStated></GetStated>
      <PricingSection></PricingSection>
      <ReadyToStart></ReadyToStart>
      <Footer></Footer>
    </div>
  )
}

export default App
