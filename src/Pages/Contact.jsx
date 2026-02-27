import Button from '../Components/Button/Button'
import './Contact.css'
import FrameContact from './FrameContact/FrameContact'
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md'

const Contact = ({sectionRef}) => {
  return (
    <div className='Cont' ref={sectionRef}>
        <h1>Let’s Discuss Your Project</h1>
        <div className='Contact'>
        <div >
        <FrameContact nameIcon={<MdCall/>} title="Call me" desc="+963937473953"/>
        <FrameContact nameIcon={<MdEmail/>} title="Email me" desc="reemanhamada@gmail.com"/>
        <FrameContact nameIcon={<MdLocationOn/>} title="Address" desc="Damascus,syria"/>
        </div>
        <div className='inputs'>
            <input type='text' placeholder='Full name'/>
            <input type='email' placeholder='Your email'/>
            <input type='number' placeholder='Phone number'/>
            <input type='text' placeholder='Message'/>
            <Button name="Send Message"/>
        </div>
        </div>
    </div>
  )
}

export default Contact