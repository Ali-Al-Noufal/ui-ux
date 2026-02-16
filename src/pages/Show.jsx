
import { Link, useNavigate, useParams } from "react-router-dom"
import {  Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsArrowsFullscreen } from "react-icons/bs";
import axios from "axios";


const Show = () => {
      const navigate=useNavigate()
      const params=useParams()
       const [swiperInstance, setSwiperInstance] = useState(null);
         const [isOpen, setIsOpen] = useState(false);
    const showProject=(id)=>{
        navigate(`/show/${id}`)
    }
  
  const [projects,setProjects]=useState([])
  const [project,setProject]=useState({})
  useEffect(()=>{
    axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/projects",{
      headers:{
        "Accept":"application/json",
        'Content-Type':"application/json"
      }
    }).then(res=>setProjects(res.data))
    .catch(err=>console.log(err))
    axios.get(`https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/projects/${params.id}`,{
      headers:{
        "Accept":"application/json",
        'Content-Type':"application/json"
      }
    }).then(res=>setProject(res.data))
    .catch(err=>console.log(err))
  },[])
    
  return (
    <div className=" max-w-screen overflow-hidden dark:bg-[#1B2431]">
      
    <div className="w-full px-[5%] h-200 md:h-100 mt-[10%] flex flex-wrap justify-between">
            <div className="relative group w-full md:w-[55%] h-[50%] md:h-full overflow-hidden rounded-lg cursor-pointer mt-[15%] md:mt-0">
        <img src={project.image} className="w-full h-full border border-[#FFFFFF] rounded-lg dark:border-[#1D2130]"/>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[#FFFFFF] text-6xl font-light" onClick={() => setIsOpen(true)}><BsArrowsFullscreen /></span> 
          <span><Link to={project.url} target="_blank" rel="noopener noreferrer"><svg width="65" height="63" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5179 38.8772C0.845122 29.2374 3.43467 18.5257 11.2866 10.9631C23.0023 -0.321024 41.9972 -0.321024 53.713 10.9631C65.4287 22.2472 65.4287 40.5423 53.713 51.8264C45.8611 59.389 34.7396 61.8831 24.7311 59.3088M41.5002 40.0634V22.7266M41.5002 22.7266H23.5002M41.5002 22.7266L11.4996 51.6212" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Link></span> 
        </div>
              {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 bg-opacity-90 flex items-center justify-center z-50000000 p-4"
          onClick={() => setIsOpen(false)}
        >
          <img src={project.image} className="max-w-full max-h-full border border-[#FFFFFF] rounded-lg dark:border-[#1D2130]"  />
        </div>
      )}
</div>

        <div className="w-full md:w-[40%] h-[50%] md:h-full flex flex-col relative justify-start gap-4 mt-5">
        <h1 className="text-[#1D2130] font-semibold text-[22px] dark:text-[#FFFFFF]">{project.title}</h1>
        <p className="text-[#A6A6A6] font-medium text-[14px]">{project.type}</p>
        <p className="text-[#1D2130] font-normal text-[18px] dark:text-[#FFFFFF]">{project.description}</p>
        <p className="text-[#1D2130] font-normal text-[18px] dark:text-[#FFFFFF]"><span className="font-medium">Features : </span>{project.features}</p>
        <Link to={project.url} target="_blank" rel="noopener noreferrer" className="absolute  top-0 right-0 text-4xl text-[#0C96E2]"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09373 23.5317C0.534614 17.6934 2.04518 11.2059 6.62545 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2084 13.4598 38.2084 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.2501 24.2502V13.7502M24.2501 13.7502H13.7501M24.2501 13.7502L6.74973 31.2501" stroke="#0C96E2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
        </div>
    </div>
    <svg className="my-20" width="1366" height="22" viewBox="0 0 1366 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-221.75"  y="11.3906" width="0.5" height="1810.45" transform="rotate(-90 -221.75 11.3906)" stroke="#D3D5D6" stroke-width="0.5" stroke-dasharray="5 10"/>
<circle cx="685.969" cy="11" r="10.5" fill="#EFF2F7" stroke="#1D2130"/>
<circle cx="685.969" cy="10.9998" r="7.44897" stroke="#1D2130"/>
<circle cx="685.969" cy="10.9998" r="7.44897" stroke="#1D2130"/>
<circle cx="685.969" cy="11" r="2" fill="#1D2130"/>
    </svg>
    <div className="px-[5%] mb-20 w-full">
      <div className="w-full flex justify-between items-center">
            <div className="w-full lg:w-[30%] flex flex-col justify-between items-start pb-10">
    <h1 className="text-[#0C96E2] font-medium text-[20px]">Portfolio</h1>
    <p className=" font-semibold text-[25px] lg:text-[40px] dark:text-[#FFFFFF]">The Best <span className="text-[#0C96E2]">Projects</span></p>
    </div>
    <div className="flex gap-2">
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="w-8.5 h-8.5 border border-[#0C96E2] rounded-[50%] hover:bg-[#0C96E2] flex justify-center items-center"
          >
            <p className="text-[#A6A6A6] text-[15px] hover:text-[#FFFFFF]"><SlArrowLeft /></p>
          </button>
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="w-8.5 h-8.5 border border-[#0C96E2] rounded-[50%] hover:bg-[#0C96E2]  flex justify-center items-center"
          >
            <p className="text-[#A6A6A6] text-[15px] hover:text-[#FFFFFF]"><SlArrowRight /></p>
          </button>
        </div>
      </div>
          <Swiper 
        onSwiper={setSwiperInstance}
        observer={true}           // يراقب التغييرات في العناصر
        observeParents={true}     // يراقب التغييرات في العناصر الأب
        loop={projects?.length>5}               // تفعيل الدوران
        slidesPerView={1}
        spaceBetween={30}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
modules={[Pagination, Navigation]} 
      >
            {projects?.map((project)=>{
                return(
                    <SwiperSlide key={project.id} onClick={()=>{showProject(project.id)}} className="h-80 flex flex-col justify-between pointer-coarse ">
                        <img src={project.image} className="w-full h-55 border border-[#FFFFFF] rounded-lg dark:border-[#1D2130]"/>
                        <div className="h-17 w-full flex flex-col justify-between items-start relative">
                            <h1 className="text-[#1D2130] font-semibold text-[22px] dark:text-[#FFFFFF]">{project.title}</h1>
                            <p className="text-[#1D2130] font-normal text-[16px] dark:text-[#FFFFFF]">{project.type}</p>
                            <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className="absolute px-0.5  bottom-0 right-0 text-4xl text-[#0C96E2]"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09373 23.5317C0.534614 17.6934 2.04518 11.2059 6.62545 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2084 13.4598 38.2084 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.2501 24.2502V13.7502M24.2501 13.7502H13.7501M24.2501 13.7502L6.74973 31.2501" stroke="#0C96E2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
                        </div>
                    </SwiperSlide>
                )
            })}
    </Swiper>
    </div>
    </div>
  )
}

export default Show
