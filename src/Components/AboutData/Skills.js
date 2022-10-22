import './Skills.css'
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb"
import { FaJava } from "react-icons/fa";
const Skills = () => {
  return (
    <div className='skills-cont'>
      <h1>My <span>Skills</span></h1>
      <div className='skils-icon'>
        <div className='html-icon-cont'>
        <AiFillHtml5 className='icon html-icon'/>
        <h2>HTML</h2>
        <p>hypertext markup language</p>
        </div>
        <div className='css-icon-cont'>
        <DiCss3 className='icon'/>
        <h2>CSS</h2>
        <p>cascading style sheets</p>
        </div>
        <div className='javascript-icon-cont'>
        <IoLogoJavascript className='icon'/>
        <h2>JS</h2>
        <p>javascript</p>
      </div>
      </div>
      <div className='skils-icon'>
      <div className='reactjs-icon-cont'>
      <GrReactjs className='icon'/>
      <h2>REACTJS</h2>
        <p>react js</p>
      </div>
      <div className='reactnative-icon-cont'>
      <TbBrandReactNative className='icon'/>
      <h2>REACT NATIVE</h2>
        <p>react native</p>
      </div>
      <div className='java-icon-cont'>
     <FaJava className='icon'/>
     <h2>JAVA</h2>
        <p>java</p>
      </div>
      </div>
    </div>
  )
}

export default Skills