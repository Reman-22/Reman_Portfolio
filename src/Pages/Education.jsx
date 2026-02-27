import React from 'react'
import Title from '../Components/Title/Title'
import './Education.css'
import Button from '../Components/Button/Button'
const Education = ({sectionRef,ContactRef}) => {
    const ToContact =()=>{
    if(ContactRef && ContactRef.current){
    window.scrollTo({
        top:ContactRef.current.offsetTop -80,
        behavior:'smooth'
    })}
  }
  return (
    <div className='Edc' ref={sectionRef}>
        <h1>Education & Experience</h1>
        <div className='info'>
        <Title title="​Frontend Developer " description= "مطورة واجهات أمامية متدربة في شركة Vica، حيث ركزتُ على تحويل مفاهيم التصميم المعقدة إلى تطبيقات ويب تفاعلية باستخدام React.js. خلال هذه الفترة، قمتُ ببناء مجموعة واسعة من المشاريع البرمجية التي تلتزم بمعايير الكود النظيف وتجربة المستخدم السلسة، مع ضمان التوافق الكامل مع مختلف الشاشات والأجهزة." />
        <Title   title="Education " description=" .ادرس حالياً هندسة المعلوماتية مع تخصص دقيق في الذكاء الاصطناعي وتعلم الآلة. مكنتني هذه الدراسة من امتلاك خلفية برمجية قوية تتجاوز بناء الواجهات التقليدية، حيث أسعى لدمج الخوارزميات الذكية والحلول الهندسية المبتكرة في تطوير الويب لخلق مواقع أكثر ذكاءً واستجابة لاحتياجات المستخدمين"/>
        </div>
        <div className='offer'>
            <Title  style={{color:"white"}} title="Try me out, risk free!"
            description={<>"If you’re not happy with the design after the first draft,<br/> I’ll refund your deposit, no questions asked" </>}/>
            <Button style={{marginTop:'40px'}}  name='Contact' onClick={ToContact}/>
        </div>
    </div>
  )
}

export default Education
