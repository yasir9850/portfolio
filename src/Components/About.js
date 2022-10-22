import './About.css'
import myimg from '../Images/yasir-removebg-preview (1).jpg'
// const About = () => {
//   return (
//     <div className='about-cont' id='about'>
//       <h2 className='about-me'>About Me</h2>
//       <div className='about-data-cont'>
//         <img className='my-img' src={myimg} alt='img' />
//         <div className='about-data'>
//           <h1 className='hi-text'>Hi There</h1>
//           <h2 className='my-name-text'>My Name Is Yasir Ubed Khan </h2>
//           <h3 className='about-detail-text'>I am a frontend developer</h3>
//           <h3 className='about-detail-text'>Currently working on React js</h3>
//           <h3 className='about-detail-text'>Love to solve comlpex problems</h3>
//           <h3 className='about-detail-text'>Ability to handled chalanging tasks</h3>
//           <button className='resume-btn'>View My Resume</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About


import React, { useState } from 'react'
import AboutData from './AboutData/AboutData'
import Education from './AboutData/Education'
import Library from './AboutData/Library'
import Skills from './AboutData/Skills'


const About = () => {

const [activeComp ,setActiveComp] = useState('firstcomp')

  return (
    <div className='about-cont' id='about'>
    <div className='fixed-about-cont'>
    <div className='image-cont'><img src={myimg} alt='imge'/></div>
    <h1>Yasir Ubed Khan</h1>
    <h3>Front End Developer</h3>
   <div className='about-btn-cont'>
   <button onClick={ ()=>{setActiveComp('firstcomp')}}>About</button><br></br>
   <button onClick={()=>{setActiveComp('secondcomp')}} >Education</button><br></br>
   <button onClick={ ()=>{setActiveComp('thirdcomp')}}>Skills</button><br></br>
   <button onClick={()=>{setActiveComp('fourthcomp')}}>Library</button>
   </div>
    </div>
    <div>
    {activeComp === 'firstcomp' && <AboutData/>}
    {activeComp === 'secondcomp' && <Education/>}
    {activeComp === 'thirdcomp' && <Skills/>}
    {activeComp === 'fourthcomp' && <Library/>}
    </div>
    </div>
  )
}

export default About