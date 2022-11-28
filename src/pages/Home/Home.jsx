import Categories from '../../components/Categories'
import FeaturedProducts from '../../components/FeaturedProducts'
import HeroVid from '../../components/HeroVid'

const Home = () => {
  return (
    <div>
      <HeroVid/>
      <FeaturedProducts type={'FEATURED'}/>
      <Categories />
      <FeaturedProducts type={'TRENDING'}/>
    </div>
  )
}

export default Home