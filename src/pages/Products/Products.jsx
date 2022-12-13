import { useLocation, useParams } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Card from "../../components/Card";
import FilterDrawer from "../../components/FilterDrawer";
import { useState } from "react";
import heroImg from '../../img/prod.jpg';
import useFetch from "../../hooks/useFetch";
import Logo from '../../img/logobig.png'

const Products = () => {
  const [drawerState, setDrawerState] = useState(false);

  const catId = parseInt((useParams().id))
  const [rangeValue,setRangeValue] = useState(400)
  const [sort,setSort] = useState(null)
  const [selectedSubCats, setselectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}
  ${selectedSubCats.map(item =>`&[filters][sub_categories][id][$eq]=${item}`).join('')}&[filters][price][$lte]=${rangeValue}
  ${sort ? `&sort=price:${sort}` : ''}`);

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setselectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  const location = useLocation();
  const title = location.state;
  
  return (
    <>
  <div className='fixed h-screen w-full z-20 bg-white' hidden={!loading}>
    <div className='fixed text-6xl h-[189px] sm:h-[236px] w-[315px] sm:w-[393px] top-0 bottom-0 left-0 right-0 m-auto animate-wiggle'>
      <img className="animate-pulse" src={Logo} alt='proposal logo'/>
    </div>
  </div>
  {error ? 'Something went wrong' :
  <div className={`relative ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity delay-75 duration-1000`}>
    <header className="relative">
        <img className='w-full h-full' src={heroImg} alt="banner of young fashionable individuales"></img>
        <span className="uppercase absolute top-0 bottom-0 left-0 right-0 m-auto text-7xl h-20 w-fit text-white font-bold tracking-wide">{title}</span>
    </header>
    <div className={`py-7 sm:py-14 px-2 md:px-10 mx-auto max-w-[1300px] ${drawerState ? 'blur-sm' : 'blur-none'}`}>
      <div className="mb-5">
        <div className="sm:pl-2.5 xl:pl-7">
          <button className="px-5 border border-[#e8e8e1] h-11 font-semibold flex items-center"
          onClick={() => setDrawerState(!drawerState)}
          >
            <AdjustmentsHorizontalIcon className="h-7 w-7 mr-2.5"/>
            <span className="block">FILTER</span> 
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map(item => (<Card data={item} key={item.id} size={['h-full','w-full']} loading={loading}/>))}
      </div> 
    </div>
  </div>
   }
    <FilterDrawer state={drawerState} setState={setDrawerState} rangeValue={rangeValue} setRangeValue={setRangeValue}
      setSort={setSort} handleChange={handleChange} catId={catId}
    />
    </>
  )
}

export default Products