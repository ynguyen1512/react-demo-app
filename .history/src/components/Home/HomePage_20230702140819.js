import videoHomepage from '../../assets/video-home-page.webm'
const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                src={videoHomepage} 
                type="video/webm"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HomePage;