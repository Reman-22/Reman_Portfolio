import { useNavigate } from 'react-router-dom'
import './ProjectCard.css'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { ProjectsData } from '../../Pages/Projects.Data';


const ProjectCard = ({id,  img1, title,description}) => {
  const Project=ProjectsData.find((p) =>p.id === id);
  const navigate=useNavigate()
  const handleShow=()=>{
    navigate(`/projectPages/${id}`)
    
  }
  
  return (
        <div className='Card'>
        <img src={img1} alt='img project ' />
        <div className='heading'> 
        <h3>{ title}</h3>
          <a href={Project.githubDemo} target='_blank' rel='noreferrer'>
            <button><MdOutlineArrowOutward className='iconArrow' /></button>
            </a> 
            </div>
        <p className='desc' >{description} <span onClick={handleShow}>Read More... </span></p>
    </div>
    
  )
}

export default ProjectCard