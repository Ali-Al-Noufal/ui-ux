import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditSkill = () => {
    const params=useParams()     
    const [data, setData] = useState({})     
      const [skill,setSkill]=useState({})
      useEffect(()=>{
        axios.get(`https://ui-ux-portfolio-alpha.vercel.app/api/api/skills/${params.id}`,{
          headers:{
            "Accept":"application/json",
            'Content-Type':"application/json",
            Authorization:localStorage.getItem("Token")
          }
        }).then(res=>{setSkill(res.data),setData(res.data)})
        .catch(err=>console.log(err))
      },[skill])
            const handleForm=(event)=>{
        event.preventDefault()
        axios.post(`https://ui-ux-portfolio-alpha.vercel.app/api/api/skills/${params.id}`,{...data,"_method":"PUT"},{
          headers:{
            "Accept":"application/json",
            "Content-Type":"multipart/form-data",
            Authorization:localStorage.getItem("Token")
          }
        }).then(res=>{console.log(res),alert(res.data.message),navigate("/skills")})
.catch(err=>console.log(err))
      }
  return (
    <div className=" flex justify-center items-center max-w-screen h-screen">
        <form className="w-[80vw] lg:w-200 h-110 flex flex-col items-center gap-10 bg-[#F1F4F9] mt-10 border-2 rounded-3xl" onSubmit={handleForm}>
        <h1 className="font-black text-2xl mt-3">Edit skill</h1>
            <input type="text" name="title" placeholder="title" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["title"]:event.target.value})}} />
            <textarea type="text" name="description" placeholder="description" className="bg-[#FFFFFF] border w-[60%] h-30 rounded-2xl p-5"
            onChange={(event)=>{setData({...data,["description"]:event.target.value})}}></textarea>
            <input type="submit" value="edit" className="bg-[#1d1d1d] text-[#FFFFFF] border w-[60%] h-15 text-center rounded-2xl px-3" />
      </form>
    </div>
  )
}

export default EditSkill
