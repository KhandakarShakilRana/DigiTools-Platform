import React from 'react'
import { useState } from 'react'
import ToolsCard from './ToolsCard'
import ToolsCart from './ToolsCart'

const Tools = ({tools,cartItems,setCartItems}) => {
    
    const [filter, setFilter] = useState("product")
    
    const [disabledIds, setDisabledIds] = useState([]);

    const addToCart = (items) => {
      setCartItems(prevItems => [...prevItems, items])
      setDisabledIds(prev => [...prev, items.id])
    }

    const removeFromCart = (id) => {
  setCartItems(prev => prev.filter(item => item.id !== id));
  setDisabledIds(prev => prev.filter(itemId => itemId !== id)); // remove id
};

  const clearCart = () => {
  setCartItems([]);
  setDisabledIds([])
};
    


  return (
    <div className="text-center mb-30 max-w-300 mx-auto">
        <div className="mb-8 ">
        <h1 className="text-[40px] mb-4 font-semibold">
          Premium Digital Tools
        </h1>
        <p className="font-light">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>
      <div className='mb-7'>
          <button onClick={() => {setFilter("product")}} className={filter === "product" ? "btn bg-[#4F39F6] mr-4 border-none text-white rounded-4xl" : "btn bg-white mr-4 border-[#4F39F6]  text-[#4F39F6] rounded-4xl" }>Products</button>
          <button onClick={() => {setFilter("cart")}} className={filter === "cart" ? "btn bg-[#4F39F6] mr-4 border-none text-white rounded-4xl" : "btn bg-white mr-4 border-[#4F39F6]  text-[#4F39F6] rounded-4xl" } >Cart <span>({cartItems.length})</span></button>
        </div>
    

      <div >
  {filter === "product" ? (
    <ToolsCard tools={tools} addToCart={addToCart} cartItems={cartItems} disabledIds={disabledIds}/>
  ) : (
    <ToolsCart cartItems={cartItems} removeFromCart={removeFromCart} filter={filter} setFilter={setFilter} clearCart={clearCart} />
  )}
</div>


      
      

    </div>

    


  )
}

export default Tools