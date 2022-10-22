import './Education.css'

const Education = () => {
  return (
    <div className='education-cont'>
    <h1 className='e-education'>Education <span>Details</span></h1>
    <div className='education-box-wrap'>
    <div className='education-box'>
    <span className='educatio-year'>2013</span>
    <h3 className='education-title-name'>Secondary School Certificate</h3>
    <p className='eduacation-para'>I have completed ssc in 2013 with 85.20% from amravaty board and my ssc school name is anjuman anwarul islam high school balapur</p>
    </div>
    <div className='education-box'>
    <span className='educatio-year'>2017</span>
    <h3 className='education-title-name'>Diploma In Engineering</h3>
    <p className='eduacation-para'>I have completed diploma in 2017 with 75% from msbte and my diploma college name is manav school of polytechnic,akola</p>
    </div>
    <div className='education-box'>
    <span className='educatio-year'>2020</span>
    <h3 className='education-title-name'>Bachelor's In Engineering</h3>
    <p className='eduacation-para'>I have completed engineering in 2020 with 83.22% from sgbau and my engineering college name is manav school of engineering,akola</p>
    </div>
    </div>
    </div>
  )
}

export default Education