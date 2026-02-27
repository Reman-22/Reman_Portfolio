import { useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import BestProject from '../Components/BestProject/BestProject'
import ProjectPage from '../Components/ProjectPage/ProjectPage'

const ProjectPages = () => {
    const {id}=useParams();
    useEffect(()=>{
     window.scrollTo(0,0)},[id]);
  return (
    <div>

        <ProjectPage/>
    <BestProject/>
    </div>
  )
}

export default ProjectPages