import { ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { Link } from "react-router-dom"

const MobileMenu = ({state,setState}) => {
    const [collapsableState,setCollapsableState] = useState(true)
    
    const handleCollapsable = (e) => {
        e.preventDefault()
        setCollapsableState(!collapsableState)
    }

  return (
        <div className={`fixed w-[350px] sm:w-[420px] bg-white top-0 bottom-0 -right-[420px] ${state ? '-translate-x-[420px]' : 'translate-x-0'} transition-transform duration-500 drop-shadow-2xl z-40`}>        <div className="h-full flex flex-col">
            <div className="px-4 sm:px-10 h-24">
                <div className="py-4 flex justify-between items-center border-b border-[#e8e8e1]">
                    <div className="uppercase font-bold text-5xl leading-tight"></div>
                    <div className='flex items-center'>
                        <button className='p-2 translate-x-2' onClick={() => setState(!state)}>
                            <XMarkIcon className="h-7"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-10 px-4 sm:px-10'>
                <div className='-mt-10'>
                    <div className="py-5">
                        <a href="/" className='relative w-full text-left py-5 text-2xl font-medium uppercase'>
                            Home
                        </a>
                    </div>

                    <div className='border-t border-[#e8e8e1]'>
                        <button className='relative w-full text-left py-5 text-2xl font-medium uppercase'
                        onClick={handleCollapsable}
                        >Apparel
                            <span className='block absolute right-0 top-[50%] -translate-y-[50%]'>
                                <ChevronUpIcon className={`h-7 ${collapsableState ? 'rotate-180' : ''} transition-transform duration-300`}/>
                            </span>
                        </button>
                        <ul  className={`${collapsableState ? 'invisible opacity-0 h-0' : 'visible opacity-100 h-16'} transition-all duration-500 text-xl font-light`}>
                            <li className='py-1'>
                                <Link to="/products/2" state={'Women'}>WOMEN</Link>
                            </li>
                            <li className='py-1'>
                                <Link to="/products/1" state={'Men'}>MEN</Link>
                            </li>
                            <li className='py-1'>
                                <Link to="/products/3" state={'Accessories'}>ACCESSORIES</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileMenu