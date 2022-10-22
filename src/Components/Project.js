import './Project.css'

const Project = () => {
  return (
    <div className='project-cont' id='project'>
      <div className='project-head-cont'>
        <p className='project-head'>Projects that I have worked on</p>
      </div>
      <div className='project-detail-cont'>
        <div className='project-detai-1cont'>
          <h2 className='project-title'>Fullstack Shopping List</h2>
          <p className='project-info'>A shopping list app built with React which connects to a MongoDB database.
            The website is running on a Nodejs server using Express.</p>
            <div className='project-git-btn-cont'>
            <a target='__blank'  href='https://www.thapatechnical.com/'>
            <button  className='view-git-btn'>View On Github</button>
            </a>
            <button className='view-live-btn'>View Live</button>
            </div>
        </div>
        <div className='project-detai-2cont'>
          <h2 className='project-title'>Hangman Game</h2>
          <p className='project-info'>Hangman game where you need to guess the programming language to win. Made using React.</p>
          <div className='project-git-btn-cont'>
          <button className='view-git-btn'>View On Github</button>
          <button className='view-live-btn'>View Live</button>
          </div>
        </div>
        <div className='project-detai-3cont'>
          <h2 className='project-title'>ISS tracker</h2>
          <p className='project-info'>This tool fetches data from the open-notify API to get the co-ordinates of the international space station in realtime.
            Those co-ordinates are sent to the locationiq API to perform reverse geocoding and the result is visualised on a static map.</p>
            <div className='project-git-btn-cont'>
            <button  className='view-git-btn'>View On Github</button>
            <button className='view-live-btn'>View Live</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project