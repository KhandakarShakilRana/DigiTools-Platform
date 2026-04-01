import React from "react";

const ToolsCart = ({ cartItems ,removeFromCart ,setFilter ,filter,clearCart}) => {

  const totalPrice = cartItems.reduce((total, item) => {
  return total + item.price;
}, 0);
console.log(totalPrice);
  return (
    <div className=" border-4 border-[#F2F2F2] rounded-3xl p-10 flex flex-col gap-6">
      <h1 className="text-[#101727] font-semibold text-left text-[24px] mb-7">
        Your Cart
      </h1>
      
      {
        cartItems.length !== 0 ? <div>
            {cartItems.map((cartItem) => (
        <div className="text-left rounded-3xl p-5 bg-[#edf9ff] flex items-center justify-between mb-4">
        <div className="flex items-center gap-5">
          <div className="text-[24px]">
            {cartItem.icon}
          </div>
          <div>
            <h1 className="text-[20px] mb-2 font-semibold text-[#101727]">{cartItem.name}</h1>
            <p className="text-[#627382] text-[16px]">${cartItem.price}</p>
          </div>
        </div>
        <h1 onClick={()=> removeFromCart(cartItem.id)} className="text-[#FF3980] font-semibold text-[18px]">Remove</h1>
      </div>
      ))}
        </div> : <button onClick={() => {setFilter("product")}} className={filter === "product" ? "btn bg-[#4F39F6] mr-4 border-none text-white rounded-4xl" : "btn bg-white mr-4 border-[#4F39F6]  text-[#4F39F6] rounded-4xl" }>Please Add Some Products</button>
      }

      <div className="flex justify-between items-center">
        <h1 className="text-[#627382]">Total : </h1>
        <h1 className="font-bold text-[#101727]">${totalPrice}</h1>
      </div>
      <button onClick={() => clearCart()} className="btn bg-[#4F39F6] mr-4 border-none text-white rounded-4xl w-full">Proceed To Checkout</button>
      
      

      
    </div>
  );
};

export default ToolsCart;
