import './NavBar.css'
import { NavLink} from 'react-router-dom'
import { IoSunnyOutline ,IoMoonOutline } from 'react-icons/io5'
import { useState } from 'react';
import {HiMenuAlt3, HiX} from "react-icons/hi"
const NavBar = ({name, items ,theme, toggleTheme}) => {
const [isOpen ,setIsOpen]=useState(false);
  const handleScroll=(sectionRef)=>{
    if(sectionRef && sectionRef.current){
      window.scrollTo({
        top:sectionRef.current.offsetTop -80,
        behavior:'smooth'
      })
    }
  }
  return (
    <nav className={`navbar ${theme}`}>
        <div className='menu-icon' onClick={()=>setIsOpen(!isOpen)}>{isOpen?<HiX size={30}/>:<HiMenuAlt3 size={30}/>}</div>
        <h1>{name}</h1>
        <ul className={isOpen?"nav-links open":"nav-links"}>
            {items?.map((item , index) => {
                return(
                    <li key={index}><NavLink to={item?.url } onClick={(e)=>{
                      if(item.ref){
                        e.preventDefault();
                        handleScroll(item.ref)
                        setIsOpen(false)
                      }
                    }} className={({isActive})=> isActive?'active':''} >{item?.content} </NavLink></li>
                )
            })}
        </ul>
    <button className='mode-toggle' onClick={toggleTheme} >
      {theme ==='dark'?<IoSunnyOutline color='white' size={40}/>:<IoMoonOutline size={40} />}</button>
    </nav>
  )
}

export default NavBar