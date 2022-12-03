import heroVid from '../img/hero.mp4';

const HeroVid = () => {
  return (
    <div>
        <video loop autoPlay muted>
            <source src={heroVid} type="video/mp4"/>
        </video>
    </div>
  )
}

export default HeroVid