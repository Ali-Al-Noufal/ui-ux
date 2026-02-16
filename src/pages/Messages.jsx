import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Messages = () => {
  const [messages,setMessages]=useState([])
const navigate=useNavigate()
        useEffect(()=>{
          axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/messages",{
            headers:{
              "Accept":"application/json",
              'Content-Type':"application/json",
              Authorization:localStorage.getItem("Token")
            }
          }).then(res=>setMessages(res.data))
          .catch(err=>console.log(err))
  },[])
        const deleteMessage=(id)=>{
          axios.delete(`https://ui-ux-portfolio-alpha.vercel.app/api/api/messages/${id}`,{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("Token")
          }
        }).then(res=>navigate(0))
        .catch(err=>console.log(err))
      }
  return (
    <div className=" flex flex-col items-center gap-10">
            <h1 className="font-black text-2xl mt-20">Messages</h1>
      <div className="w-full flex flex-wrap justify-evenly">
        {messages?.map((message)=>{
            return(
                <div key={message.id} className="w-85 h-100 flex flex-wrap flex-col items-center border rounded-2xl bg-[#F1F4F9] m-5">
                    <h1 className="font-bold text-xl m-3">{message.name}</h1>
                    <h1 className="font-bold text-[20px] m-3">{message.email}</h1>
                    <h1 className="font-bold text-[20px] m-3">{message.phone}</h1>
                    <p className="ps-3 w-full h-[50%]  text-[14px]">{message.content}</p>
<div className="flex  gap-5 my-3">
<button onClick={()=>deleteMessage(message.id)} className="border w-20 bg-[#be2828] text-[#FFFFFF] h-10 rounded-sm">delete</button></div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Messages
