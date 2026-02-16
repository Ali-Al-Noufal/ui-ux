import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Login = () => {
    const [data,setData]=useState({})
    const navigate=useNavigate()
    const handleForm=(event)=>{
        event.preventDefault()
        console.log(data)
        axios.post("https://ui-ux-portfolio-alpha.vercel.app/api/",data,{
            headers:{
                "Accept":"application/json",
            }
        }).then(res=>{console.log(res),localStorage.setItem("token",`Bearer ${res.data.data.token}`),navigate("/dashboard")})
        .catch(err=>console.log(err))
    }
  return (
    <div className="h-screen max-w-screen flex justify-center items-center relative dark:bg-[#1B2431]">
          <svg className="absolute top-0 left-0 "  width="779" height="400" viewBox="0 0 779 400" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path  fillRule="evenodd" clipRule="evenodd" d="M208.232 -153.049C-12.076 -97.7491 -125.668 70.2472 -45.4821 222.182C-2.61517 303.405 246.066 164.723 353.812 194.706C447.613 220.809 396.077 422.891 498.609 397.154C718.917 341.855 832.509 173.858 752.323 21.9241C672.138 -130.01 428.54 -208.348 208.232 -153.049Z" fill="#0C96E2"/>
</svg>
<svg className="absolute top-0 right-0 " width="554" height="260" viewBox="0 0 554 260" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path  fillRule="evenodd" clipRule="evenodd" d="M7.59105 -136.673C-39.8069 48.7081 139.681 225.488 408.487 258.176C552.191 275.651 494.199 22.0009 600.757 -35.466C693.523 -85.4949 958.968 67.9766 981.027 -18.3005C1028.42 -203.682 848.937 -380.462 580.131 -413.15C311.324 -445.838 54.989 -322.055 7.59105 -136.673Z" fill="#0C96E2"/>
</svg>
<svg className="absolute bottom-0 left-0 " width="683" height="383" viewBox="0 0 683 383" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path fillRule="evenodd" clipRule="evenodd" d="M258.497 585.514C492.943 585.514 683 454.442 683 292.757C683 206.321 380.538 277.982 294.16 224.393C218.962 177.739 367.609 0 258.497 0C24.0497 0 -166.007 131.072 -166.007 292.757C-166.007 454.442 24.0497 585.514 258.497 585.514Z" fill="#0C96E2"/>
</svg>
<svg className="absolute bottom-0   right-0 " width="546" height="462" viewBox="0 0 546 462" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path fillRule="evenodd" clipRule="evenodd" d="M1082.71 436.725C1135.02 232.129 936.927 37.026 640.259 0.950297C481.661 -18.3357 545.664 261.604 428.061 325.027C325.681 380.242 32.7233 210.863 8.37783 306.083C-43.9327 510.679 154.158 705.781 450.826 741.857C747.494 777.933 1030.4 641.32 1082.71 436.725Z" fill="#0C96E2"/>
</svg>
<form className="w-100 h-125 border border-[#FFFFFF] rounded-2xl z-99 bg-[#FFFFFF] flex flex-col items-center justify-evenly" onSubmit={(event)=>handleForm(event)}>
<p className="text-2xl font-black text-[#0C96E2]">welcome back Alaa</p>
<div className="w-80 gap-3 flex flex-col">
<p className="text-[20px] font-medium text-[rgb(12,150,226)]">Email</p>
<input type="email" name="email" className="h-15 border px-5 text-[#202224] border-[#D8D8D8] bg-[#F1F4F9] rounded-2xl"
onChange={(event)=>{setData({...data,["email"]:event.target.value})}} />
</div>
<div className="w-80 gap-3 flex flex-col">
<p className="text-[20px] font-medium text-[#0C96E2]">Password</p>
<input type="password" name="password" className="w-80 h-15 border px-5 text-[#202224] border-[#D8D8D8] bg-[#F1F4F9] rounded-2xl"
onChange={(event)=>{setData({...data,["password"]:event.target.value})}}   />
</div>
<input type="submit" className="w-80 text-[#FFFFFF] font-bold h-12.5 bg-[#0C96E2] border border-[#0C96E2] rounded-2xl" value="login" />
<Link to="/">Back?</Link>
</form>
    </div>
  )
}

export default Login
