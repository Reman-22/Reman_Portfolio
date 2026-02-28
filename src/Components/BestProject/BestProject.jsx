import ProjectCard from '../ProjectCard/ProjectCard'
import './BestProject.css'
import React, { useRef } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const BestProject = () => {
    const scrollRef = useRef(null); // المرجع لحاوية الكروت
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
    current.scrollLeft -= 350; // مقدار التحريك لليسار
    } else {
    current.scrollLeft += 350; // مقدار التحريك لليمين
    }
  }
  

  return (
        <div className='BestProjectSection'>
      <div className='header-nav'>
        <h1>The Best Projects</h1>
        <div className='scroll-btns'>
          <button onClick={() => scroll('left')}><MdOutlineArrowBackIos /></button>
          <button onClick={() => scroll('right')}><MdOutlineArrowForwardIos /></button>
        </div>
      </div>
        <div className='cards-wrapper' ref={scrollRef}>
        <ProjectCard id="0" img1="/Reman_Portfolio/Images/Travel.jpg" title="Travel website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="1" img1="/Reman_Portfolio/Images/Blogs.jpg" title="Blogs website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="2" img1="/Reman_Portfolio/Images/DashBoard.jpg" title="DashBoard website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="3" img1="/Reman_Portfolio/Images/food.jpg" title=" Restaurant website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="4" img1="/Reman_Portfolio/Images/medicine.jpg" title="Medicine website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="5" img1="/Reman_Portfolio/Images/iPhon.jpg" title="iPhone website" description="Html-Css3-Vanilla javscript"/>
        
    </div>
    </div>
  )
}

export default BestProject