import React from 'react'
import './Title.css'
const Title = ({title , description,style}) => {
  return (
    <div style={style}>
        <h2>{title}</h2>
        <p style={style}>{description}</p>
    </div>
  )
}

export default Title