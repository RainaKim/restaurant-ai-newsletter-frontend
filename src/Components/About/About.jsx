import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Embark on a transformative educational journey Embark on a transformative educational journey Embark on a transformative educational journey Embark on a transformative educational journey</p>
            <p>With the focus on innovation, hands-on writing, and personalized mentorship With the focus on innovation, hands-on writing, and personalized mentorship.</p>
            <p>With the focus on innovation, hands-on writing, and personalized mentorship With the focus on innovation, hands-on writing, and personalized mentorship.</p> 
        </div>
    </div>
  )
}

export default About