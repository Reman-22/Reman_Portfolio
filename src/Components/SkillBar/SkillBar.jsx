import React from 'react'
import './SkillBar.css'
const SkillBar = ({name,percentage}) => {
  return (
    <div className='skill_container'>
    <div className='skill_info'>
        <span className='skill_name' >{name}</span>
    </div>
    <div className='skill_bar'>
        <div  className='skill_progress' style={{width:`${percentage}%`}}>
            <div className='skill_tooltip'> 
                {percentage}%
            </div>
            <div className="skill_dot"></div>
        </div>
    </div>
    </div>
  )
}

export default SkillBar