import { useSelector } from 'react-redux';
import videoHomepage from '../../assets/video-homepage.mp4'
const HomePage = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const account = useSelector(state => state.user.isAuthenticated)

    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                src={videoHomepage} 
                type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className='homepage-content'>
                <div className='title-1'>
                     Looks striking. Feels effortless.
                </div>
                <div className='title-2'>
                    Impress your form takers. Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions with just one at a time.
                </div>
                <div className='title-3'>
                    <button>Get started. It's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;