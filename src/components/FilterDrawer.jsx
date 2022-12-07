import { XMarkIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import useFetch from '../hooks/useFetch'


const FilterDrawer = ({state,setState,rangeValue,setRangeValue,setSort,handleChange,catId}) => {
    const [categoriesState,setCategoriesState] = useState(false)
    const [priceState,setPriceState] = useState(false)
    const [sortState,setSortState] = useState(false)

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

    const [isClicked,setIsClicked] = useState(null);
    const handleSort = (e) => {
        if (e.target.id === isClicked){
            setSort(null)
            setIsClicked(null)
        } else {
            setSort(e.target.id)
            setIsClicked(e.target.id)
        }
    }



  return (
    <div className={`fixed w-80 sm:w-96 bg-white top-0 bottom-0 ${state ? '-translate-x-[0%]' : '-translate-x-[100%]'} transition-transform duration-500 drop-shadow-2xl will-change-transform z-40`}>
        <div className="h-full flex flex-col">

            <div className="px-4 sm:px-10 h-24">
                <div className="py-4 flex justify-between items-center border-b border-[#e8e8e1]">
                    <div className="uppercase font-bold text-5xl leading-tight">Filter</div>
                    <div className='flex items-center'>
                        <button className='p-2 translate-x-2' onClick={() => setState(!state)}>
                            <XMarkIcon className="h-7"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-10 px-4 sm:px-10'>
                <div className='-mt-10'>
                    <div>
                        <button className='relative w-full text-left py-5 font-sans	text-lg font-medium'
                        onClick={()=>setCategoriesState(!categoriesState)}
                        >Categories
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${categoriesState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <div className={`${categoriesState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-[214px]'} transition-all duration-500`}>
                            <div>
                                <ul className='mb-5'>
                                    {data?.map((item) => (
                                    <li className='mb-2.5' key={item.id}>
                                        <label className='flex items-center w-full cursor-pointer'>
                                            <input type="checkbox" className="accent-black h-5 w-5" id={item.id} value={item.id}
                                            onChange={handleChange}
                                            />
                                            <span className='pl-3 font-sans	text-md font-medium'>{item?.attributes?.title}</span>
                                        </label>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-[#e8e8e1]'>
                        <button className='relative w-full text-left py-5 font-sans	text-lg font-medium'
                        onClick={()=>setPriceState(!priceState)}
                        >Price
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${priceState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <div className={`${priceState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-16'} transition-all duration-500`}>
                            <div>
                                <div className='flex justify-between pb-2 w-full text-2xl leading-6'>
                                    <span>${rangeValue}.00</span>
                                    <span>$400</span>
                                </div>
                                <div className='px-2 pb-2'>
                                    <input type="range" min="0" max="400" value={rangeValue} className="range w-full accent-black" step="25" 
                                    onChange={(e)=>setRangeValue(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-[#e8e8e1]'>
                        <button className='relative w-full text-left py-5 font-sans	text-lg font-medium'
                        onClick={()=>setSortState(!sortState)}
                        >Sort
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${sortState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <div className={`${sortState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-16'} transition-all duration-500`}>
                            <div className='flex justify-between font-semibold'>
                                <button className={`uppercase border-2 border-[#e8e8e1] py-2 px-3 ${isClicked === 'asc' ? 'bg-black text-white' : ''}`} id={'asc'}
                                onClick={(e) => handleSort(e)}
                                >Price, low to high</button>
                                <button className={`uppercase border-2 border-[#e8e8e1] py-2 px-3 ${isClicked === 'desc' ? 'bg-black text-white' : ''}`} id={'desc'}
                                onClick={(e) => handleSort(e)}
                                >Price, high to low</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FilterDrawer