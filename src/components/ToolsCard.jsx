import React from "react";
import { toast } from "react-toastify";
const tagStyles = {
  new: "bg-[#DBFCE7] text-[#0A883E]",
  "best seller": "bg-[#FEF3C6] text-[#BB4D00]",
  popular: "bg-[#E1E7FF] text-[#4F39F6]",
};


const ToolsCard = ({ tools, addToCart, disabledIds }) => {
  return (
    



    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 ">
      {tools.map((tool) => {
        const isDisabled = disabledIds.includes(tool.id);

        return (
          <div className="text-left p-4 border-2 border-[#E6E3E3] rounded-3xl">
            <div className="relative">
              <div className="text-[35px] border-2 border-[#E6E3E3] inline rounded-full p-1">
                {tool.icon}
              </div>
              <div
                className={`absolute top-1 right-2 px-2 py-1 rounded-4xl
    ${
      tool.tag === "new"
        ? "bg-[#DBFCE7] text-[#0A883E]"
        : tool.tag === "best seller"
          ? "bg-[#FEF3C6] text-[#BB4D00]"
          : tool.tag === "popular"
            ? "bg-[#E1E7FF] text-[#4F39F6]"
            : "bg-gray-400"
    }`}
              >
                {tool.tag}
              </div>

              <h1 className="text-[24px] font-semibold mb-4">{tool.name}</h1>
              <p className="mb-4">{tool.description}</p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-[24px]">${tool.price}</span>{" "}
              <span className="text-[#627382]">/MO</span>
            </div>
            <div className="mb-4">
              {tool.features.map((feature) => (
                <>
                  <li className="list-none text-[#627382]">✓ {feature}</li>
                </>
              ))}
            </div>
            <button
              onClick={() => {
                addToCart(tool);
                toast.success(`${tool.icon} ${tool.name} Added in The Cart`);
              }}
              disabled={isDisabled}
              className="btn bg-[#4F39F6] mr-4 border-none text-white rounded-4xl w-full"
            >
              {isDisabled ? "Added" : "Buy Now"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ToolsCard;

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
