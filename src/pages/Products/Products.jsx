import { useLocation, useParams } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Card from "../../components/Card";
import FilterDrawer from "../../components/FilterDrawer";
import { useEffect, useState } from "react";
import heroImg from '../../img/prod.jpg';
import useFetch from "../../hooks/useFetch";


const Products = () => {
  const [drawerState, setDrawerState] = useState(false);

  const catId = parseInt((useParams().id))
  const [rangeValue,setRangeValue] = useState(400)
  const [sort,setSort] = useState(null)
  const [selectedSubCats, setselectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}
  ${selectedSubCats.map(item =>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${rangeValue}
  ${sort ? `&sort=price:${sort}` : ''}`);

  const handleChange = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked
    setselectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  const location = useLocation();
  const title = location.state;

  const [state, setState] = useState(false)

  useEffect(()=> {
    setState(true)
  },[])

  return (
  <div className={`relative ${state ? 'opacity-100' : 'opacity-0'} transition-all duration-[1500ms]`}>
    <header className="relative">
        <img className='w-full h-full' src={heroImg} alt=""></img>
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
        {data.map(item => (<Card data={item} key={item.id} size={['h-full','w-full']}/>))}
      </div> 
    </div>
    <FilterDrawer state={drawerState} setState={setDrawerState} rangeValue={rangeValue} setRangeValue={setRangeValue}
      setSort={setSort} handleChange={handleChange} catId={catId}
    />
  </div>
  )
}

export default Products