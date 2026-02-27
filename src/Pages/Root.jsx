import React, { useRef } from 'react'
import NavBar from "../Components/NavBar/NavBar"
import { Outlet } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Education from './Education'
import Projects from './Projects/Projects'
import Contact from './Contact'
import Footer from '../Components/Footer/Footer'
import { useState, useEffect } from 'react'
import './Root.css'
const Root = () => {
    const aboutRef=useRef(null);
    const HomeRef=useRef(null);
    const EducationRef=useRef(null);
    const ProjectsRef=useRef(null);
    const ContactRef=useRef(null);

    const items=[
      {
        ref:HomeRef,
      content:"Home",
      url:"/home"
    },
    {
        ref:aboutRef,
      content:"About me",
      url:"/about"
    } ,
    {
        ref:EducationRef,
      content:"Education",
      url:"/Education"
    } ,
    {
        ref:ProjectsRef,
      content:"Projects",
      url:"/Projects"
    } ,
    {
        ref:ContactRef,
      content:"Contact",
      url:"/contact"
    } 
    ]
const [theme , setTheme]=useState('light');
const toggleTheme =()=>{
    setTheme( theme ==='light' ?'dark':'light');
}
useEffect(()=>{
    document.body.className=theme;
},[theme]);
  return (
    <div className={theme}>
        <NavBar name="Reman" items={items} mode={theme} theme={theme} toggleTheme={toggleTheme}/>
        <Home sectionRef={HomeRef}/>
        <About sectionRef={aboutRef}/>
        <Education sectionRef={EducationRef} ContactRef={ContactRef}/>
        <Projects sectionRef={ProjectsRef}/>
        <Contact sectionRef={ContactRef}/>
        <Footer/>
    </div>
  )
}

export default Root