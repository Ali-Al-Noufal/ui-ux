import { Link } from "react-router-dom"


const Footer = ({icons}) => {
  return (
    <div className="max-w-screen lg:h-23 px-[5%] dark:bg-[#1B2431]">
    <hr className=" text-[#BEC0BF] " />
    <div className="h-30 lg:h-full flex flex-wrap justify-between items-center">
      <p className="text-[#1D2130] text-center dark:text-[#FFFFFF] w-full md:w-fit ">@ 2024. All Rights Reserved</p>
      <p className="text-[#1D2130] text-center dark:text-[#FFFFFF] w-full md:w-fit">Develpoment by Lorina</p>
      <div className="flex gap-4 w-full justify-center md:w-fit">
        {
        icons?.map((icon,index)=>{
            return <div key={index} className="w-6 h-6 bg-[#0C96E2] border border-[#0C96E2] rounded-[50%] text-[#FFFFFF] text-[15px] flex justify-center items-center"><Link to={icon.link} target="_blank" rel="noopener noreferrer">{icon.icon}</Link></div>
        })
        }
      </div>
    </div>
    </div>
  )
}

export default Footer
