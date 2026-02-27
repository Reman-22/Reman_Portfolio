import { useNavigate } from 'react-router-dom'
import './ProjectCard.css'
import { MdOutlineArrowOutward } from 'react-icons/md'


const ProjectCard = ({id,  img1, title,description}) => {
  const navigate=useNavigate()
  const handleShow=()=>{
    navigate(`/projectPages/${id}`)
    
  }
  return (
        <div className='Card'>
        <img src={img1} alt='img project ' />
        <div className='heading'> 
        <h3>{ title}</h3>
        <button onClick={handleShow}><MdOutlineArrowOutward className='iconArrow' /></button>
        </div>
        <p className='desc'>{description}</p>
    </div>
    
  )
}

export default ProjectCard