import React from 'react'
import { toast } from 'react-toastify'

const ToolsCard = ({tools, addToCart,disabledIds}) => {
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-4 '>
        {
            tools.map(tool=> {
                const isDisabled = disabledIds.includes(tool.id)

                return(
                    <div className='text-left p-4 border-2 border-[#E6E3E3] rounded-3xl'>
            
        <div>
            <h1 className='text-[24px] font-semibold mb-4'>{tool.icon}  {tool.name}</h1>
            <p className='mb-4'>{tool.description}</p>
        </div>
        <div className='mb-4'><span className='font-bold text-[24px]'>${tool.price}</span> <span className='text-[#627382]'>/MO</span></div>
        <div className='mb-4'>{
           tool.features.map(feature=> <><li className='list-none text-[#627382]'>$$${feature}</li></>)
            }</div>
        <button onClick={() =>  {addToCart(tool); toast.success(`${tool.icon} ${tool.name} Added in The Cart`)} } disabled={isDisabled} className="btn bg-[#4F39F6] mr-4 border-none text-white rounded-4xl w-full">{isDisabled ? "Added" : "Buy Now"}</button>
            </div>
                )
            })
        }
    </div>
  )
}

export default ToolsCard


// 0
// : 
// description
// : 
// "Basic resume builder for beginners with simple templates."
// features
// : 
// (3) ['10+ templates', 'Basic customization', 'Export to PDF']
// icon
// : 
// "📄"
// id
// : 
// 1
// name
// : 
// "Starter Resume Kit"
// period
// : 
// "one-time"
// price
// : 
// 5
// tag
// : 
// "new"
// tagType
// : 
// "new"