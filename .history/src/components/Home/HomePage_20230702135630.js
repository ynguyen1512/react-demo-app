import videoHomepage from '../../assets/video-home-page.mp4'
const HomePage = () => {
    return (
        <div className="homepage-container">
            <video width="auto" height="auto" autoplay="true">
                <source 
                src={videoHomepage} 
                type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HomePage;