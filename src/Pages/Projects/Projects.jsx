import Button from '../../Components/Button/Button'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './Projects.css'
const Projects = ({sectionRef}) => {
  return (
    <div ref={sectionRef}>
        <div className='nav' >
            <h1>My Creative Works Latest Projects</h1>
            <a href='https://github.com/Reman-22' target='_blank' rel='noreferrer'>
            <Button name="View Github"/>
            </a>
        </div>
    <div className='cards'>
        <ProjectCard id="0" img1="/Reman_Portfolio/Images/Travel.jpg" title="Travel website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="1" img1="/Reman_Portfolio/Images/Blogs.jpg" title="Blogs website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="2" img1="/Reman_Portfolio/Images/DashBoard.jpg" title="DashBoard website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="3" img1="/Reman_Portfolio/Images/food.jpg" title=" Restaurant website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="4" img1="/Reman_Portfolio/Images/medicine.jpg" title="Medicine website" description="Html-Css3-Vanilla javscript"/>
        <ProjectCard id="5" img1="/Reman_Portfolio/Images/iPhon.jpg" title="iPhone website" description="Html-