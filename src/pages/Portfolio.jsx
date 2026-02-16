
import Section from "../components/Section"
import Home from "../components/Home"
import About from "../components/About"
import Ask from "../components/Ask"
import Contact from "../components/Contact"
import { FiPhone } from "react-icons/fi"
import { MdOutlineMail } from "react-icons/md"
import { HiOutlineLocationMarker } from "react-icons/hi"
import Education from "../components/Education"
import Projects from "../components/Projects"
import { useEffect, useState } from "react"
import axios from "axios"



const Portfolio = () => {
  const [user,setUser]=useState([])
  const [skills,setSkills]=useState([])
  const [projects,setProjects]=useState([])
  useEffect(()=>{
    axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/users/1",{
      headers:{
        "Accept":"application/json",
        'Content-Type':"application/json"
      }
    }).then(res=>setUser(res.data))
    .catch(err=>console.log(err))
    axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/skills",{
      headers:{
        "Accept":"application/json",
        'Content-Type':"application/json"
      }
    }).then(res=>setSkills(res.data))
    .catch(err=>console.log(err))
    axios.get("https://ui-ux-portfolio-alpha.vercel.app/api/api/guest/projects",{
      headers:{
        "Accept":"application/json",
        'Content-Type':"application/json"
      }
    }).then(res=>setProjects(res.data))
    .catch(err=>console.log(err))
  },[])
const items=[
  {
    icon:<FiPhone />,
    title:"Call me",
    info:user.phone
  },
  {
    icon:<MdOutlineMail />,
    title:"Email me",
    info:user.email
  },
  {
    icon:<HiOutlineLocationMarker />,
    title:"Address",
    info:user.address
  }
]


  return (
    <div >
    <Section id="home">
      <Home image={user.image?user.image:"/images/alaa.png"} cv={user.cv} name={user.name} position="Ui\Ux Designer." description="I specialize in all stages of product design, from research to final design, ensuring each element meets business goals and user needs."/>
    </Section>
    <Section id="about">
      <About image={user.image?user.image_url:"/images/alaa.png"} description={user.about_me}
      yearsOfExperiance={user.yearsOfExperiance} projectNumber={user.projectNumber}/>
    </Section>
    <Section id="education">
      <Education informations={skills} />
    </Section>
    <Ask title="Try me out, risk free!" description="If you’re not happy with the design after the first draft,
I’ll refund your deposit, " span="no questions asked" />
    <Section id="projects">
      <Projects projects={projects} />
    </Section>
    <Section id="contact">
      <Contact items={items}/>
    </Section>

    </div>
  )
}

export default Portfolio
