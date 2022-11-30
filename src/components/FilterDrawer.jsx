import { XMarkIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'


const FilterDrawer = ({state,setState}) => {
    const [categoriesState,setCategoriesState] = useState(false)
    const [priceState,setPriceState] = useState(false)
    const [sortState,setSortState] = useState(false)

    const [rangeValue,setRangeValue] = useState(150)

    const handleCollapsableC = (e) => {
        e.preventDefault()
        setCategoriesState(!categoriesState)
    }

    const handleCollapsableP = (e) => {
        e.preventDefault()
        setPriceState(!priceState)
    }

    const handleCollapsableS = (e) => {
        e.preventDefault()
        setSortState(!sortState)
    }

    const handleRange = (e) => {
        setRangeValue(e.target.value)
    }

    const show = state  ? '96' : '0'

  return (
    <div className={`fixed w-96 bg-white top-0 bottom-0 -left-96 translate-x-${show} transition-transform duration-500`}>
        <div className="h-full flex flex-col">

            <div className="px-10 h-24">
                <div className="py-4 flex justify-between items-center border-b border-[#e8e8e1]">
                    <div className="uppercase font-bold text-5xl leading-tight">Filter</div>
                    <div className='flex items-center'>
                        <button className='p-2 translate-x-2' onClick={() => setState(!state)}>
                            <XMarkIcon className="h-7"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-10 px-10'>
                <form className='-mt-10'>
                    <div>
                        <button className='relative w-full text-left py-5 font-sans	text-lg font-medium'
                        onClick={handleCollapsableC}
                        >Categories
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${categoriesState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <div className={`${categoriesState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-[146px]'} transition-all duration-500`}>
                            <div>
                                <ul className='mb-5'>
                                    <li className='mb-2.5'>
                                        <label className='flex items-center'>
                                            <input type="checkbox" className="accent-black h-5 w-5"></input>
                                            <span className='pl-3 font-sans	text-md font-medium'>T-shirts</span>
                                        </label>
                                    </li>
                                    <li className='mb-2.5'>
                                        <label className='flex items-center'>
                                            <input type="checkbox" className="accent-black h-5 w-5"></input>
                                            <span className='pl-3 font-sans	text-md font-medium'>Hoodies</span>
                                        </label>
                                    </li>
                                    <li className='mb-2.5'>
                                        <label className='flex items-center'>
                                            <input type="checkbox" className="accent-black h-5 w-5"></input>
                                            <span className='pl-3 font-sans	text-md font-medium'>Hoodies</span>
                                        </label>
                                    </li>
                                    <li className='mb-2.5'>
                                        <label className='flex items-center'>
                                            <input type="checkbox" className="accent-black h-5 w-5"></input>
                                            <span className='pl-3 font-sans	text-md font-medium'>Hoodies</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-[#e8e8e1]'>
                        <button className='relative w-full text-left py-5 font-sans	text-lg font-medium'
                        onClick={handleCollapsableP}
                        >Price
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${priceState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <div className={`${priceState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-16'} transition-all duration-500`}>
                            <div>
                                <div className='flex justify-between pb-2 w-full text-2xl leading-6'>
                                    <span>${rangeValue}.00</span>
                                    <span>$Max</span>
                                </div>
                                <div className='px-2 pb-2'>
                                    <input type="range" min="0" max="150" value={rangeValue} className="range w-full accent-black" step="25" 
                                    onChange={(e) => handleRange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-[#e8e8e1]'>
                        <button className='relative w-full text-left py-5 font-sans	text-lg font-medium'
                        onClick={handleCollapsableS}
                        >Sort
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${sortState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <div className={`${sortState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-16'} transition-all duration-500`}>
                            <div className='flex justify-between font-semibold'>
                                <button className='uppercase border-2 border-[#e8e8e1] py-2 px-3'>Price, low to high</button>
                                <button className='uppercase border-2 border-[#e8e8e1] py-2 px-3'>Price, high to low</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default FilterDrawer