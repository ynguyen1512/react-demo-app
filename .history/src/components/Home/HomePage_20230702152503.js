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
                <div>
                Looks striking. Feels effortless.
                </div>
                <div>
                Impress your form takers. Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions with just one at a time.
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default HomePage;