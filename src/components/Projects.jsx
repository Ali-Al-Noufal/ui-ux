import { MdOutlineArrowOutward } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"


const Projects = ({projects,behance}) => {
    const navigate=useNavigate()
    const showProject=(id)=>{
        navigate(`/show/${id}`)
    }
  return (
    <div className="p-[5%]">
        <div className="w-full flex flex-wrap justify-between items-center">
                  <div className="w-[70%] lg:w-[30%] flex flex-col justify-between items-start pb-10">
    <h1 className="text-[#0C96E2] font-medium text-[20px]">Portfolio</h1>
    <p className=" font-semibold text-[25px] lg:text-[40px] dark:text-[#FFFFFF]">My Creative Works Latest <span className="text-[#0C96E2]">Projects</span></p>
</div>
<Link to={behance} target="_blank" rel="noopener noreferrer"><button className="w-40 h-12.5 mb-3 md:mb-0 bg-[#0C96E2] border border-[#0C96E2] rounded-md text-[#FFFFFF] text-[14px] font-semibold flex justify-center items-center gap-3 hover:bg-[#1D2130] hover:border-[#FFFFFF]"><p className="text-[14px] font-semibold">View Behance</p> <p className="text-2xl"><MdOutlineArrowOutward /></p></button></Link>
        </div>
        <div className="w-full   flex flex-wrap gap-y-15 justify-between">
            {projects?.map((project)=>{
                return(
                    <div key={project.id} onClick={()=>{showProject(project.id)}} className="h-80 w-full md:w-[30%] flex flex-col justify-between pointer-coarse ">
                        <img src={project.image} className="w-full h-55 border border-[#FFFFFF] rounded-lg dark:border-[#1D2130]"/>
                        <div className="h-17 w-full flex flex-col justify-between items-start relative">
                            <h1 className="text-[#1D2130] font-semibold text-[22px] dark:text-[#FFFFFF]">{project.title}</h1>
                            <p className="text-[#1D2130] font-normal text-[16px] dark:text-[#FFFFFF]">{project.type}</p>
                            <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className="absolute  bottom-0 right-0 text-4xl text-[#0C96E2]"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09373 23.5317C0.534614 17.6934 2.04518 11.2059 6.62545 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2084 13.4598 38.2084 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.2501 24.2502V13.7502M24.2501 13.7502H13.7501M24.2501 13.7502L6.74973 31.2501" stroke="#0C96E2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects
