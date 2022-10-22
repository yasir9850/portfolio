import './Library.css'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiMaterialui} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiReactrouter} from 'react-icons/si'
import {SiAntdesign} from 'react-icons/si'
const Library = () => {
  return (
    <div className='library-cont'>
    <h1>Libraries That I Have <span>  Work On</span></h1>
    <div className='lib-icon-cont'>
    <div className='bootstrap-cont'>
    <BsBootstrapFill className='icon'/>
    <h2>BS</h2>
    <p>bootstrap</p>
    </div>
    <div className='mui-cont'>
    <SiMaterialui className='icon'/>
    <h2>MUI</h2>
    <p>material design</p>
    </div>
    <div className='bootstrap-cont'>
    <SiRedux className='icon'/>
    <h2>REDUX</h2>
    <p>react redux</p>
    </div>
    </div>

    <div className='lib-icon-cont'>
    <div className='router-cont'>
    <SiReactrouter className='icon'/>
    <h2>ROUTER</h2>
    <p>react router dom</p>
    </div>
    <div className='antd-cont'>
    <SiAntdesign className='icon'/>
    <h2>ANT DESIGN</h2>
    <p>ant design react</p>
    </div>
    <div className='bootstrap-cont'>
    <SiRedux className='icon'/>
    <h2>REDUX</h2>
    <p>react redux</p>
    </div>
    </div>
    </div>
  )
}

export default Library