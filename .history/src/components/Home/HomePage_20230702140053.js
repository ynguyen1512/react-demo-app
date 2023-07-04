import videoHomepage from '../../assets/video-home-page.mp4'
const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                src={videoHomepage} 
                type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HomePage;