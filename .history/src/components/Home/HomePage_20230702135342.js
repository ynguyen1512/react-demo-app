const HomePage = () => {
    return (
        <div className="homepage-container">
            <video width="auto" height="auto" autoplay>
  <source src={require('../assets/video.mp4')} type="video/ogg"/>
Your browser does not support the video tag.
</video>
        </div>
    )
}

export default HomePage;