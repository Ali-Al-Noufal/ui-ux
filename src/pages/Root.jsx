import { createContext, useState } from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti"
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa"
export const ModeContext=createContext(null)

const Root = () => {
    const [mode,setMode]=useState("light")
    localStorage.setItem("mode",mode)
    const items=[
        {
            id:"home",
            text:"Home",
        },
        {
            id:"about",
            text:"About me",
        },
        {
            id:"education",
            text:"Education"
        },
        {
            id:"projects",
            text:"Projects",
        },
        {
            id:"contact",
            text:"Contact",
        },
    ]
    const icons=[
    {
        icon:<TiSocialFacebook />,
        link:"https://www.facebook.com/"
    },
    {
        icon:<FaBehance />,
        link:"https://x.com/"
    },
    {
        icon:<FaLinkedinIn />,
        link:"https://www.linkedin.com/"
    }]

  return (
    <div className={mode}>
      <NavBar name="Alaa" items={items} mode={mode} changeMode={setMode}/>
      <ModeContext value={mode}>
        <Outlet />
      </ModeContext>
      <Footer icons={icons} />
    </div>
  )
}

export default Root
