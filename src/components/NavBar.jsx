
import { useState } from "react"
import { FaMoon } from "react-icons/fa"
import { IoMdMenu } from "react-icons/io"
import { IoSunnySharp } from "react-icons/io5"
import { RxCross2 } from "react-icons/rx"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"


const NavBar = ({name,items,mode,changeMode}) => {
const [show,setShow]=useState(false)

  return (
    <>
    <nav className="w-full flex fixed  z-999999 justify-between items-center py-3 px-5 md:px-17.5 text-[#1D2130] bg-[#FFFFFF] dark:bg-[#1B2431]   dark:text-[#FFFFFF]">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="md:flex gap-6 hidden">
        {items?.map((item,index)=>{
            return(<Link key={index}  to={item.id} smooth={true} duration={500} spy={true} offset={0}
            className="font-medium cursor-pointer text-[16px]"
            activeClass="text-[#0C96E2] font-medium text-[16px]"
            >
                <NavLink to="/">{item.text}</NavLink>
            </Link>)
        })}
      </div>
      <div className="flex gap-1 h-full items-center">
        <button className="hover:bg-[#1D2130] dark:hover:border-[#FFFFFF] hover:text-[#FFFFFF] bg-[#0C96E2] text-[#FFFFFF] w-20 me-5 h-10 text-[15px] font-semibold border border-[#FFFFFF] dark:border-[#0C96E299] rounded-md my-2"><NavLink to="/login">Login</NavLink></button>

              {mode=="dark"?<p onClick={()=>changeMode("light")} className="text-[#FFFFFF] text-2xl"><FaMoon /></p>:<p onClick={()=>changeMode("dark")} className="text-[#1D2130] text-3xl"><IoSunnySharp /></p>}
        <button className={!show?"md:hidden  rounded-md  w-10 h-10 flex justify-center items-center text-2xl text-[#1D2130] dark:text-[#FFFFFF] ":"hidden"}
        onClick={()=>setShow(!show)}><IoMdMenu /></button>
        <button className={show?" rounded-md  w-10 h-10 flex md:hidden justify-center items-center text-2xl text-[#1D2130]  dark:text-[#FFFFFF] ":"hidden"}
        onClick={()=>setShow(!show)}><RxCross2 /></button>
      </div>
    </nav>
        <div className={show?"fixed w-full  md:w-112.5 text-[#1D2130] bg-[#FFFFFF] dark:bg-[#1B2431]   dark:text-[#FFFFFF] rounded-lg flex flex-col justify-around items-center px-2 top-15  z-999999":"hidden"}>
                  {items?.map((item,index)=>{
            return(<Link key={index}  to={item.id} smooth={true} duration={500} spy={true} offset={0}
            className="font-medium cursor-pointer text-[20px]"
            activeClass="text-[#0C96E2] font-medium text-[20px]"
            >
                <NavLink to="/">{item.text}</NavLink>
            </Link>
            )
        })}
        </div>
        </>
  )
}

export default NavBar
