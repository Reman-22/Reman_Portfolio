import React from 'react'
import Button from '../Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectsData } from '../../Pages/Projects.Data'
import './ProjectPage.css'
import { MdOutlineArrowBack, MdOutlineArrowOutward } from 'react-icons/md'
const ProjectPage = () => {
  const navigate=useNavigate();
const {id}=useParams();
const Project=ProjectsData.find((p) =>p.id === id);
if (!Project) return <h2>Project not found!</h2>
  return (
    <div className='ProjectPage'>
        <button className='back_Home' onClick={()=> {navigate('/')}}><MdOutlineArrowBack/></button>
        <img src={Project.image} alt='img project '/>
        <div className='content'>
          <div className='title'>
          <h1>{Project.title}</h1>
            <a href={Project.githubDemo} target='_blank' rel='noreferrer'>
            <button  ><MdOutlineArrowOutward className='iconArrow' /></button>
            </a>
            </div>
          <p className='desc'> {Project.description}</p>
          <p>Basic Languages: {Project.languages}</p>
          <p>Framework : {Project.framework}</p>
          <p>Libraries : {Project.libraries}</p>
          <a href={Project.githubRepo} target='_blank' rel='noreferrer'>
          <Button name="Github Repo"/>
          </a>
        </div>
    </div>
  )
}

export default ProjectPage