import Hero from "../Components/Hero/Hero"

const Home = ({sectionRef}) => {
    
  return (
    <div ref={sectionRef}>
        
        <Hero title={<> <span style={{fontWeight:"200"}}  className="hey-style">HEY!</span> I'm Reman, Frontend Developer</>}  description="Agency-quality Webflow websites with the personal touch of a freelancer." btn="Download Cv"   />
        
  </div>
  )
}
export default Home;
