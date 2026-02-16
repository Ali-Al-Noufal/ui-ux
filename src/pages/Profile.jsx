import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Profile = () => {
      const [user,setUser]=useState([])
      const [data,setData]=useState({})
      const [reload,setReload]=useState(false)
      
      useEffect(()=>{
        axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/users/1",{
          headers:{
            "Accept":"application/json"
          }
        }).then(res=>{setUser(res.data),setData(res.data)})
        .catch(err=>console.log(err))
      },[reload])
      const handleForm=(event)=>{
        event.preventDefault()
        axios.post("https://ui-ux-portfolio-alpha.vercel.app/api/api/user/1/edit",{...data,"_method":"PUT"},{
          headers:{
            "Accept":"application/json",
            "Content-Type":"multipart/form-data",
            Authorization:localStorage.getItem("token")
          }
        }).then(res=>{console.log(res),alert(res.data.message),setReload(pre=>!pre)})
.catch(err=>console.log(err))
      }
  return (
    <div className=" flex flex-col items-center gap-10 ">
        
        <form className="w-[80vw] lg:w-200 h-350 flex flex-col items-center gap-10 bg-[#F1F4F9] mt-20 border-2 rounded-3xl " onSubmit={handleForm}>
            <h1 className="font-black text-2xl mt-3">Edit your profile</h1>
            <input type="email" placeholder="email" defaultValue={user.email} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["email"]:event.target.value})}} />
            <input type="password" placeholder="password" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["password"]:event.target.value})}}  />
            <input type="password" placeholder="password_contirmation" className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["password_contirmation"]:event.target.value})}}  />
            <input type="text" placeholder="name" defaultValue={user.name} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["name"]:event.target.value})}}  />
            <input type="text" placeholder="yearsOfExperiance" defaultValue={user.yearsOfExperiance} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["yearsOfExperiance"]:event.target.value})}}  />
            <input type="text" placeholder="address" defaultValue={user.address} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3" 
            onChange={(event)=>{setData({...data,["address"]:event.target.value})}} />
            <input type="text" placeholder="projectNumber" defaultValue={user.projectNumber} className="bg-[#FFFFFF] border w-[60%] h-15 rounded-2xl px-3"
            onChange={(event)=>{setData({...data,["projectNumber"]:event.target.value})}}  />
            <textarea placeholder="about_me" className="bg-[#FFFFFF] border w-[60%] h-30 rounded-2xl p-5" defaultValue={user.about_me}
            onChange={(event)=>{setData({...data,["about_me"]:event.target.value})}} ></textarea>
            <p>CV</p>
            <input type="file" name="cv" placeholder="CV" className="bg-[#FFFFFF] border  p-5 rounded-2xl"
            onChange={(event)=>{setData({...data,["cv"]:event.target.files[0]})}} />
            <p>User Image</p>
            <input type="file" name="user_image" placeholder="User_Image" className="bg-[#FFFFFF] border  p-5 rounded-2xl"
            onChange={(event)=>{setData({...data,["image"]:event.target.files[0]})}} />
            <input type="submit" value="Edite" className="bg-[#1d1d1d] text-[#FFFFFF] border w-[60%] h-15 text-center rounded-2xl px-3" />
        </form>
      

    </div>
  )
}

export default Profile
