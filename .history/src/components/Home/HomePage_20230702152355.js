import videoHomepage from '../../assets/video-homepage.mp4'
const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                src={videoHomepage} 
                type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className='homepage-content'>

            </div>
        </div>
    )
}

export default HomePage;