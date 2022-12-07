import { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import FeaturedProducts from '../../components/FeaturedProducts'
import HeroVid from '../../components/HeroVid'

const Home = () => {
  const [state, setState] = useState(false)

  useEffect(()=> {
    setState(true)
  },[])

  return (
    <div className={`${state ? 'opacity-100' : 'opacity-0'} transition-all duration-[2000ms]`}>
      <HeroVid/>
      <FeaturedProducts type={'featured'}/>
      <Categories />
      <FeaturedProducts type={'trending'}/>
    </div>
  )
}

export default Home