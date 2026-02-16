import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Skills = () => {
const [skills,setSkills]=useState([])
const navigate=useNavigate()
      useEffect(()=>{
        axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/skills",{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("Token")
          }
        }).then(res=>setSkills(res.data))
        .catch(err=>console.log(err))
},[])
      const editSkill=(id)=>{
        navigate(`/dashboard/editSkill/${id}`)
    }
        const handleForm=(event)=>{
        event.preventDefault()
        axios.post(`https://ui-ux-portfolio-alpha.vercel.app/api/api/skills`,data,{
          headers:{
            "Accept":"application/json",
            "Content-Type":"multipart/form-data",
            Authorization:localStorage.getItem("Token")
          }
        }).then(res=>{console.log(res),alert(res.data.message),navigate(0)})
.catch(err=>console.log(err))
      }
      const deleteSkill=(id)=>{
          axios.delete(`https://ui-ux-portfolio-alpha.vercel.app/api/api/skills/${id}`,{
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
            <h1 className="font-black text-2xl mt-20">Skills</h1>
      <div className="w-full flex flex-wrap justify-evenly">
        {skills?.map((skill)=>{
            return(
                <div key={skill.id} className="w-85 h-70 flex flex-wrap flex-col items-center border rounded-2xl bg-[#F1F4F9] m-5">
                    <h1 className="font-bold text-xl m-3">{skill.title}</h1>
                    <p className="ps-3 w-full h-[50%]  text-[14px]">{skill.description}</p>
<div className="flex  gap-5 my-3">
<button onClick={()=>{editSkill(skill.id)}} className="border w-20 bg-[#0C96E2] text-[#FFFFFF] h-10 rounded-sm">Edit</button>
<button onClick={()=>deleteSkill(skill.id)} className="border w-20 bg-[#be2828] text-[#FFFFFF] h-10 rounded-sm">delete</button></div>
                </div>
            )
        })}
      </div>
      <form className="w-[80vw] lg:w-200 h-110 flex flex-col items-center gap-10 bg-[#F1F4F9] mt-10 border-2 rounded-3xl" onSubmit={handleForm}>
        <h1 className="font-black text-2xl mt-3">Add a new skill</h1>
            <input type="text" name="title" placeholder="title" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["title"]:event.target.value})}} />
            <textarea type="text" name="description" placeholder="description" className="bg-[#FFFFFF] border w-[60%] h-30 rounded-2xl p-5"
            onChange={(event)=>{setData({...data,["description"]:event.target.value})}}></textarea>
            <input type="submit" value="add" className="bg-[#1d1d1d] text-[#FFFFFF] border w-[60%] h-15 text-center rounded-2xl px-3" />
      </form>
    </div>
  )
}

export default Skills
