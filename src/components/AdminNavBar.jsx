import axios from "axios"
import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { RxCross2 } from "react-icons/rx"
import { NavLink, useNavigate } from "react-router-dom"


const AdminNavBar = ({items}) => {
    const [show,setShow]=useState(false)
    const navigate=useNavigate()
    const logout=()=>{
          axios.post(`https://ui-ux-portfolio-alpha.vercel.app/api/api/logout`,{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>{console.log(res.data),navigate("/"),localStorage.removeItem("token")})
        .catch(err=>console.log(err))
    }
  return (
    <>
    <nav className="w-full flex fixed  z-999999 justify-between items-center py-3 px-5 md:px-17.5 text-[#1D2130] bg-[#FFFFFF] dark:bg-[#1B2431]   dark:text-[#FFFFFF]">
      <h1 className="text-2xl font-semibold">Alaa</h1>
      <div className="md:flex gap-6 hidden">
        {items?.map((item,index)=>{
            return(
                <NavLink key={index} className={({isActive})=>isActive?"text-[#0C96E2] font-medium text-[16px]":"font-medium cursor-pointer text-[16px]"} to={item.link}>{item.text}</NavLink>
        )
        })}
      </div>
      <div className="flex gap-1 h-full items-center">
        <button className="hover:bg-[#1D2130] dark:hover:border-[#FFFFFF] hover:text-[#FFFFFF] bg-[#0C96E2] text-[#FFFFFF] w-20 me-5 h-10 text-[15px] font-semibold border border-[#FFFFFF] dark:border-[#0C96E299] rounded-md my-2" onClick={logout}><NavLink >logout</NavLink></button>
        <button className={!show?"md:hidden  rounded-md  w-10 h-10 flex justify-center items-center text-2xl text-[#1D2130] dark:text-[#FFFFFF] ":"hidden"}
        onClick={()=>setShow(!show)}><IoMdMenu /></button>
        <button className={show?" rounded-md  w-10 h-10 flex md:hidden justify-center items-center text-2xl text-[#1D2130]  dark:text-[#FFFFFF] ":"hidden"}
        onClick={()=>setShow(!show)}><RxCross2 /></button>

      </div>
    </nav>
        <div className={show?"fixed w-full  md:w-112.5 text-[#1D2130] bg-[#FFFFFF] dark:bg-[#1B2431]   dark:text-[#FFFFFF] rounded-lg flex flex-col justify-around items-center px-2 top-15  z-999999":"hidden"}>
                  {items?.map((item,index)=>{
            return(                <NavLink key={index} className={({isActive})=>isActive?"text-[#0C96E2] font-medium text-[16px]":"font-medium cursor-pointer text-[16px]"} to={item.link}>{item.text}</NavLink>

            )
        })}
                <button className="hover:bg-[#1D2130] dark:hover:border-[#FFFFFF] hover:text-[#FFFFFF] bg-[#0C96E2] text-[#FFFFFF] w-20 me-5 h-10 text-[15px] font-semibold border border-[#FFFFFF] dark:border-[#0C96E299] rounded-md my-2" onClick={logout}><NavLink >logout</NavLink></button>

        </div>
        </>
  )
}

export default AdminNavBar
