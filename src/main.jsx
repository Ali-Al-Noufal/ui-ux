import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Portfolio from './pages/Portfolio'
import Show from './pages/Show'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Skills from './pages/Skills'
import AdminProjects from './pages/AdminProjects'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import AdminShowProject from './pages/AdminShowProject'
import EditSkill from './pages/EditSkill'
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      {
        path:"",
        element:<Portfolio />
      },
      {
        path:"show/:id",
        element:<Show />
      }
    ]
  },{
    path:"login",
    element:<Login />
  },
  {
    path:"dashboard",
    element:<Dashboard />,
    children:[
      {
        path:"",
        element:<Profile />
      },
      {
        path:"skills",
        element:<Skills />
      },
      {
        path:"projects",
        element:<AdminProjects />,
      },          
      {
            path:"editProject/:id",
            element:<AdminShowProject />
      },
      {
            path:"editSkill/:id",
            element:<EditSkill />
      },
      {
        path:"messages",
        element:<Messages />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={routes} />
  </StrictMode>,
)
