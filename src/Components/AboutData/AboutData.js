import './AboutData.css'
import {IoNavigate} from 'react-icons/io5'
const AboutData = () => {
  return (
    <div className='abotdata-cont'>
    <h1>About <span>Me</span></h1>
   
    {/*<div className='about-name-dtata-cont'>
    <div className='name-hd-text-wrap'><text className='name-hd-text' >Name:</text><text className='sub-name-text'>Yasir Ubed Khan</text></div>
    <div className='name-hd-text-wrap'><text className='name-hd-text'>Age:</text><text className='sub-name-text'>24</text></div>
    <div className='name-hd-text-wrap'><text className='name-hd-text'>Qualification:</text><text className='sub-name-text'>Bachelor's In Engineering</text></div>
    <div className='name-hd-text-wrap'><text className='name-hd-text'>Post:</text><text className='sub-name-text'>Front End Developer</text></div>
    <div className='name-hd-text-wrap'><text className='name-hd-text'>Language:</text><text className='sub-name-text'>English , Hindi , Urdu , Marathi</text></div>
  </div>*/}
<div className='aboutdata-child-cont'>
  <h2>Hi There,</h2>
  <p>My name is Yasir Ubed Khan Afsar Khan.I'm 24years old. I born 
  in Akola, Maharashtra. Currently, I am staying in <br /> Pune, India. In my family,
  I live with my father, mother and three elder brother.I am thankful to God <br /> that he gives me such a wonderful family. 
  I
  am working as a web developer in react and I am a <br /> Android developer too.My speciality is front-end web design and development,turning photoshop <br /> design into HTML & CSS.
  My interests, however, extend beyond the web and i love helping developer <br /> which is stuck in development.
   I want to share
  with you my experiences during Colleges. I hope
  my <br /> portfolio will show you, and give you my knowledge and a right candidate that you are looking
  to.</p>
<p>
  I am a engineering student from india.I have completed my graduation at
  Manav School of <br /> Engineering & Technology College.I develope and design
  professional quality websites and I specialize <br /> in development with
  react. I have been developing websites for the past 6 months.
</p>
<p>
  In my project is all about
  creativity and innovative work in the field of Technology. I provide
  web <br />development and android development. You will get all of my project source code
  and you are free to check <br />it and make changes if required. Please give me your
  valuable feedback and suggestions. I <br />appreciate your opinions and will
  use it to evaluate changes and make improvements on my projects.
</p>
<p>
  I am avidly looking for working opportunities and would love to
  work with you. I am looking to grow <br /> my experience, knowledge and my inbox is open for you.
</p>

    <button className='view-my-btn'>View My Resume<IoNavigate className='nav-icon'/></button>
    </div>
    </div>
  )
}

export default AboutData