import { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import FeaturedProducts from '../../components/FeaturedProducts'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'
import HeroVid from '../../components/HeroVid'
import Logo from '../../img/logobig.png'
import SocialSlider from '../../components/SocialSlider';

const Home = () => {
  const [state, setState] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
    const timer = setTimeout(() => {
      setState(true)
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const { width, height } = useWindowSize()

  return (
    <>
    <div className='fixed h-screen w-full z-20 bg-white' hidden={state}>
      <div className='fixed text-6xl h-[189px] sm:h-[236px] w-[315px] sm:w-[393px] top-0 bottom-0 left-0 right-0 m-auto overflow-hidden'>
        <img className={`${open ? 'translate-y-[0%]' : 'translate-y-[105%]'} transition-all ease-in-out duration-1000`} src={Logo} alt='proposal logo'/>
      </div>
      <Confetti
        width={width*0.97}
        height={height}
        gravity={0.6}
      />
    </div>
      <div className={`${state ? 'opacity-100' : 'opacity-0'} transition-opacity delay-75 duration-1000`}>
        <HeroVid/>
        <FeaturedProducts type={'featured'}/>
        <Categories/>
        <FeaturedProducts type={'trending'}/>
        <SocialSlider/>
      </div>
    </>
  )
}

export default Home