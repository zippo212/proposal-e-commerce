import FeaturedProducts from '../../components/FeaturedProducts'
import HeroVid from '../../components/HeroVid'

const Home = () => {
  return (
    <div>
      <HeroVid/>
      <FeaturedProducts type={'FEATURED'}/>
      <FeaturedProducts type={'TRENDING'}/>
    </div>
  )
}

export default Home