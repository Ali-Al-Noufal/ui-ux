import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";


const AdminShowProject = () => {
    const params=useParams()
    const [isOpen, setIsOpen] = useState(false)     
    const [data, setData] = useState({})
    const navigate=useNavigate()     
      const [project,setProject]=useState({})
      useEffect(()=>{
        axios.get(`https://ui-ux-portfolio-alpha.vercel.app/api/api/projects/${params.id}`,{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>{setProject(res.data),setData(res.data)})
        .catch(err=>console.log(err))
      },[project])
            const handleForm=(event)=>{
        event.preventDefault()
        axios.post(`https://ui-ux-portfolio-alpha.vercel.app/api/api/projects/${params.id}`,{...data,"_method":"PUT"},{
          headers:{
            "Accept":"application/json",
            "Content-Type":"multipart/form-data",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>{console.log(res),alert(res.data.message),navigate(0)})
.catch(err=>console.log(err))
      }
  return (
       <div className="w-full px-[5%] h-300 md:h-150 pt-[10%] flex flex-wrap justify-between">
                 <div className="relative group w-full md:w-[55%] h-[50%] md:h-full overflow-hidden rounded-lg cursor-pointer mt-[15%]  md:mt-0">
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
     
             <div className="w-full md:w-[40%] h-[50%] md:h-full flex flex-col relative justify-start gap-4">
             <h1 className="text-[#1D2130] font-semibold text-[22px] dark:text-[#FFFFFF]">{project.title}</h1>
             <p className="text-[#A6A6A6] font-medium text-[14px]">{project.type}</p>
             <p className="text-[#1D2130] font-normal text-[18px] dark:text-[#FFFFFF]">{project.description}</p>
             <p className="text-[#1D2130] font-normal text-[18px] dark:text-[#FFFFFF]"><span className="font-medium">Features : </span>{project.features}</p>
             <Link to={project.url} target="_blank" rel="noopener noreferrer" className="absolute  top-0 right-0 text-4xl text-[#0C96E2]"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M2.09373 23.5317C0.534614 17.6934 2.04518 11.2059 6.62545 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2084 13.4598 38.2084 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.2501 24.2502V13.7502M24.2501 13.7502H13.7501M24.2501 13.7502L6.74973 31.2501" stroke="#0C96E2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
     </Link>
             </div>
        <p className="my-10 font-black">.....................................................................................................................................................................................................</p>
      <form className="w-[80vw] lg:w-200 h-210 flex flex-col items-center gap-10 bg-[#F1F4F9] mt-10 border-2 rounded-3xl" onSubmit={handleForm}>
        <h1 className="font-black text-2xl mt-3">Edit project</h1>
            <input type="text" placeholder="title" defaultValue={project.title} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["title"]:event.target.value})}}  />
            <input type="text" placeholder="type" defaultValue={project.type} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["type"]:event.target.value})}}  />
            <input type="text" placeholder="features" defaultValue={project.features} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["features"]:event.target.value})}}  />
            <input type="text" placeholder="url" defaultValue={project.url} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["url"]:event.target.value})}}  />
            <p>Project Image</p>
            <input type="file" name="image" placeholder="image" className="bg-[#FFFFFF] border  p-5 rounded-2xl"
            onChange={(event)=>{setData({...data,["image"]:event.target.files[0]})}} />
            <textarea placeholder="description" className="bg-[#FFFFFF] border w-[60%] h-30 rounded-2xl p-5" defaultValue={project.description}
            onChange={(event)=>{setData({...data,["description"]:event.target.value})}} ></textarea>
            <input type="submit" value="Edite" className="bg-[#1d1d1d] text-[#FFFFFF] border w-[60%] h-15 text-center rounded-2xl px-3" />
      </form>
         </div> 
  
  )
}

export default AdminShowProject
