import './ScrollToTop.css'
import {useState,useEffect} from 'react'
import { FaAngleDoubleUp } from "react-icons/fa";


const ScrollToTp = () => {
    const [backToTopButton,setBckToTopButton] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY >100){
                setBckToTopButton(true)
            }
            else{
                setBckToTopButton(false)
            }
        })
    },[])
    const ScrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <button>
    {backToTopButton && <FaAngleDoubleUp className='scrol-icon' onClick={ScrollTop}/>}
    </button>
  )
}

export default ScrollToTp