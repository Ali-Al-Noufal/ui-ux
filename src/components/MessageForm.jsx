import { useState } from "react"


const MessageForm = ({changeData}) => {
     const [data,setData]=useState({})
      const handleData=(event)=>{
event.preventDefault()
changeData(data)
}
  return (
<form className="w-full md:w-[65%] mt-5 md:mt-0 h-80 md:h-full flex flex-col justify-between relative" onSubmit={handleData}>
<div className="w-full h-14 flex justify-between">
<input type="text" placeholder="Full Name" className="border w-[48%] h-full border-[#BEC0BF] px-3 text-[#92929D] text-[16px] font-normal rounded-lg "
onChange={(event)=>{setData({...data,["name"]:event.target.value})}} />
<input type="text" placeholder="Your email" className="border w-[48%] h-full border-[#BEC0BF] px-3 text-[#92929D] text-[16px] font-normal rounded-lg "
onChange={(event)=>{setData({...data,["email"]:event.target.value})}} />
</div>
<input type="number" placeholder="Phone number" className="border w-full h-14 border-[#BEC0BF] px-3 text-[#92929D] text-[16px] font-normal rounded-lg "
onChange={(event)=>{setData({...data,["phone"]:event.target.value})}}/>
<textarea placeholder="Message" className="border w-full h-[50%] border-[#BEC0BF] py-3 px-7 text-[#92929D] text-[16px] font-normal rounded-lg "
onChange={(event)=>{setData({...data,["content"]:event.target.value})}} ></textarea>
<input type="submit" value="Send Message" className="hover:bg-[#1D2130] hover:border-[#FFFFFF] dark:hover:border-[#FFFFFF] hover:text-[#FFFFFF] h-14 bg-[#0C96E2] border border-[#0C96E2] rounded-lg text-[#FFFFFF] font-medium text-[14px] absolute bottom-[-25%] w-50 text-center" />
</form>
  )
}

export default MessageForm
