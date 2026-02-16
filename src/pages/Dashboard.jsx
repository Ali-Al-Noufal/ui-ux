import { Outlet } from "react-router-dom"
import AdminNavBar from "../components/AdminNavBar"


const Dashboard = () => {
const items=[
  {
    text:"profile",
    link:"/dashboard"
  },
  {
    text:"projects",
    link:"/dashboard/projects"
  },
  {
    text:"messages",
    link:"/dashboard/messages"
  },
  {
    text:"skills",
    link:"/dashboard/skills"
  },
]
  return (
    <div >
      <AdminNavBar items={items} />
<Outlet />
    </div>
  )
}

export default Dashboard
