import heroVid from '../img/hero3.mp4';


const HeroVid = () => {
  return (
    <div>
        <video src={heroVid} loop autoPlay muted preload='none' type="video/mp4"></video>
    </div>
  )
}

export default HeroVid