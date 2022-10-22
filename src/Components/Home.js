import './Home.css'
import Typed from 'react-typed';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { IoChevronDown } from "react-icons/io5";

const skills = [
  'Html',
  'Css',
  'Javascript',
  'React Js',
  'React Native',
  'Core Java'

]

const Home = () => {
  return (
    <BrowserRouter>
    <div className='home-cont1'>
    <div className='head-cont'>
    <p className='logo animate__animated animate__pulse animate__infinite infinite'>Yasir Ubed Khan</p>
    <ul className='list-item'>
   
    <Link to='/' smooth className='link'>
    <li>Home</li>
    </Link>
    <Link to='#about' smooth className='link'>
    <li>About</li>
    </Link>
    <Link to='#project' smooth className='link'>
    <li>Project</li>
    </Link>
    <Link to='#contact' smooth className='link'>
    <li>Contact Me</li>
    </Link>
    
    </ul>
    </div>
    <main>
    <section>
    <h1 className='name-text animate__animated animate__pulse animate__infinite infinite'>Yasir Ubed Khan</h1>
    <p className='education-text'>Bachelor's In Engineering @ Sant Gadge Baba Amravati University</p>
    <p className='my-skills-text'>My Skills Are <Typed className='skills-text' strings={skills} typeSpeed={200} backSpeed={150} loop></Typed></p>
    <p className='bio-text'>Frontend Developer Working In React</p>
    <p className='bio-text2'>Git | Devops | Linux</p>
    <Link to='#about' smooth className='read-more-text-link'>
    <div className='read-more-text animate__animated animate__bounce animate__infinite infinite animate__slower'><span className='read-more-text-hover'>Read More <br></br><i><IoChevronDown className='down-icon'/></i></span></div>
    </Link>
    </section>
    </main>
   
    </div>
  
    </BrowserRouter>
  )
}

export default Home