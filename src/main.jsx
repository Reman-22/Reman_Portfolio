import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Root from './Pages/Root.jsx'
import Education from './Pages/Education.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import ProjectPage from './Components/ProjectPage/ProjectPage.jsx'
import ProjectPages from './Pages/ProjectPages.jsx'
const routes =createBrowserRouter([
  {
    path:"/",
    element:<Root/>, 
    children:[
      {
    path:"home",
    element:<Home/>,
  },
      {
    path:"about",
    element:<About/>,
  },{
    path:"Education",
    element:<Education/>,
  },
  {
    path:"Projects",
    element:<Projects/>,
    
  },{
    path:"Contact",
    element:<Contact/>,
  }
    ]
  },{
        path:"ProjectPages/:id",
        element:<ProjectPages/>,
      }
],{basename:"/Reman_Portfolio"})
createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router=