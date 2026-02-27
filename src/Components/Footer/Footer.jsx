import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <p>@ 2026. All Rights Reserved</p>
        <p>Develpoment by Reman</p>
        <div className='SocialIcons'>
            <a href="https://facebook.com/reman.ha.1" target='_blank' rel='noreferrer'> <FaFacebook/></a>
            <a href="https://www.linkedin.com/in/reman-hamadah-090030345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel='noreferrer'> <FaLinkedin/></a>
            <a href="https://www.instagram.com/reman.ha1?igsh=MWFtMGR0bnh0OG1scg==" target='_blank' rel='noreferrer'> <FaInstagram/></a>
        </div>
    </div>
  )
}

export default Footer