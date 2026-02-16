import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const AdminProjects = () => {
      const [projects,setProjects]=useState([])
      const [data, setData] = useState({})
      const navigate=useNavigate()
      useEffect(()=>{
        axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/projects",{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>setProjects(res.data))
        .catch(err=>console.log(err))
      },[])
      const editProject=(id)=>{
        navigate(`/dashboard/editProject/${id}`)
    }
        const handleForm=(event)=>{
        event.preventDefault()
        axios.post(`https://ui-ux-portfolio-alpha.vercel.app/api/api/projects`,data,{
          headers:{
            "Accept":"application/json",
            "Content-Type":"multipart/form-data",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>{console.log(res),alert(res.data.message),navigate(0)})
.catch(err=>console.log(err))
      }
      const deleteProject=(id)=>{
          axios.delete(`https://ui-ux-portfolio-alpha.vercel.app/api/api/projects/${id}`,{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>navigate(0))
        .catch(err=>console.log(err))
      }
  return (
    <div className=" flex flex-col items-center gap-10">
            <h1 className="font-black text-2xl mt-20">Projects</h1>
              <div className="w-full px-[5%]  flex flex-wrap gap-y-15 justify-between">
            {projects?.map((project)=>{
                return(
                    <div key={project.id}  className="h-80 w-full md:w-[30%] flex flex-col justify-between pointer-coarse ">
                        <img src={project.image} className="w-full h-50 border border-[#FFFFFF] rounded-lg dark:border-[#1D2130]"/>
                        <div className="h-27 w-full flex flex-col justify-between items-start relative">
                            <h1 className="text-[#1D2130] font-semibold text-[22px] dark:text-[#FFFFFF]">{project.title}</h1>
                            <p className="text-[#1D2130] font-normal text-[16px] dark:text-[#FFFFFF]">{project.type}</p>
                            <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" className="absolute  bottom-0 right-0 text-4xl text-[#0C96E2]"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.09373 23.5317C0.534614 17.6934 2.04518 11.2059 6.62545 6.62563C13.4596 -0.208544 24.54 -0.208544 31.3742 6.62563C38.2084 13.4598 38.2084 24.5402 31.3742 31.3744C26.7939 35.9546 20.3064 37.4652 14.4681 35.9061M24.2501 24.2502V13.7502M24.2501 13.7502H13.7501M24.2501 13.7502L6.74973 31.2501" stroke="#0C96E2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Link>
<div className="flex w-full gap-5">
<button onClick={()=>{editProject(project.id)}} className="border w-20 bg-[#0C96E2] text-[#FFFFFF] h-10 rounded-sm">Edit</button>
<button onClick={()=>deleteProject(project.id)} className="border w-20 bg-[#be2828] text-[#FFFFFF] h-10 rounded-sm">delete</button></div>
                        </div>
                    </div>
                )
            })}
        </div>
        <p className="my-10 font-black">...............................................................................................................................</p>
      <form className="w-[80vw] lg:w-200 h-210 flex flex-col items-center gap-10 bg-[#F1F4F9] my-10 border-2 rounded-3xl" onSubmit={handleForm}>
                <h1 className="font-black text-2xl mt-3">Add project</h1>
            <input type="text" placeholder="title" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["title"]:event.target.value})}}  />
            <input type="text" placeholder="type" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["type"]:event.target.value})}}  />
            <input type="text" placeholder="features" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["features"]:event.target.value})}}  />
            <input type="text" placeholder="url"  className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["url"]:event.target.value})}}  />
            <p>Project Image</p>
            <input type="file" name="image" placeholder="image" className="bg-[#FFFFFF] border  p-5 rounded-2xl"
            onChange={(event)=>{setData({...data,["image"]:event.target.files[0]})}} />
            <textarea placeholder="description" className="bg-[#FFFFFF] border w-[60%] h-30 rounded-2xl p-5"
            onChange={(event)=>{setData({...data,["description"]:event.target.value})}} ></textarea>
            <input type="submit" value="Edite" className="bg-[#1d1d1d] text-[#FFFFFF] border w-[60%] h-15 text-center rounded-2xl px-3" />
      </form>
    </div>
  )
}

export default AdminProjects
