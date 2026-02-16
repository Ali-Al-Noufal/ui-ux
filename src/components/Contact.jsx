import axios from "axios"
import { use, useEffect, useState } from "react"
import MessageForm from "./MessageForm"
import { useNavigate } from "react-router-dom"


const Contact = ({items}) => {
  const [data,setData]=useState({})
  const navigate=useNavigate()
useEffect(()=>{
if(data.name){
    axios.post("https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/1/messages",data,{
        headers:{
        "Accept":"application/json"
      }
}).then(res=>{console.log(res),alert(res.data.message),navigate(0)})
.catch(err=>console.log(err))
}
  
},[data])

  return (
    <div className="p-[5%] h-200 md:h-screen">
<div className="w-full flex flex-col justify-between items-start pb-10">
    <h1 className="text-[#0C96E2] font-medium text-[20px]">Contact</h1>
    <p className=" font-semibold text-[25px] md:text-[40px] dark:text-[#FFFFFF]">Let's Discuss Your <span className="text-[#0C96E2]">Project</span></p>
</div>
<div className="flex flex-wrap md:h-80  justify-between items-center">
<div className="w-full md:w-[35%] lg:w-[30%] h-50 md:h-full flex flex-col justify-between">
{items.map((item,index)=>{
  return(
    <div key={index} className="w-full lg:px-[5%] h-[30%] border dark:border-none border-[#FFFFFF] rounded-lg flex items-center">
      <div className="bg-[#0C96E2] border   border-[#0C96E2] rounded-lg w-14 h-14 flex justify-center items-center">
        <p className="text-[#FFFFFF] text-3xl font-extralight">{item.icon}</p>
      </div>
      <div className="h-14 flex flex-col justify-between items-start px-4">
        <p className="text-[#92929D] text-[16px]">{item.title}</p>
        <p className="text-[#1D2130] text-[16px] dark:text-[#FFFFFF]">{item.info}</p>
      </div>
    </div>
  )
})}
</div>
<MessageForm changeData={setData} />
</div>
    </div>
  )
}

export default Contact
