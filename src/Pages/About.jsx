import Title from '../Components/Title/Title'
import SkillBar from '../Components/SkillBar/SkillBar'
import './About.css'
const About = ({sectionRef}) => {
  return (
    <div className='about' ref={sectionRef}>
    <div className='imgs'>
        <div className="icon html"> <img src="/Reman_Portfolio/Images/html-icon.png" /> </div>
    <div className="icon css"> <img src="/Reman_Portfolio/Images/css-icon.png" /> </div>
    <div className="icon react"> <img src="/Reman_Portfolio/Images/react-icon.png" /> </div>
    <div className="icon github"> <img src="/Reman_Portfolio/Images/github-icon.png" /> </div>
    <div className="icon figma"> <img src="/Reman_Portfolio/Images/figma-icon.png" /> </div>
    </div>
    <div className='info'>
        <Title title="About me" description="I possess advanced skills in building modern user interfaces, combining the precision of HTML5/CSS3 for responsive design with the logical power of JavaScript (ES6+). I specialize in the React ecosystem to develop fast, interactive, and scalable applications, with a dedicated focus on transforming Figma designs into clean, high-performance code."/>
    <SkillBar name='HTML5' percentage="80" />
    <SkillBar name='CSS3' percentage="85" />
    <SkillBar name='Javascript' percentage="95" />
    <SkillBar name='React' percentage="90" />

    </div>

    </div>
  )
}

export default About