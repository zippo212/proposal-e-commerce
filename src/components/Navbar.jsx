import { ShoppingBagIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <header className='bg-[#f4f4f4]'>
        <div className='px-10 mx-auto max-w-[1300px]'>
            <div className='flex'>
                <Link to="/" className='flex items-center'>
                    <img src='img/logo.png' alt='' className='h-[80%]'></img>
                </Link>
                <div className='flex mx-auto items-center'>
                    <ul className='flex text-xl font-semibold'>
                        <li className='py-7 px-5 hover:bg-[#e8e8e1] transition-all duration-200 cursor-pointer'>
                            <Link to="/">
                                HOME
                            </Link>
                        </li>
                        <li className='py-7 px-5 hover:bg-[#e8e8e1] relative group z-10 transition-all duration-200 cursor-pointer'>
                            <div className='flex items-center'>
                                APPAREL
                                <ChevronDownIcon className='h-4 w-4 text-[#aeaeae] ml-1'/>
                            </div>
                            <div className='absolute top-[100%] left-0 border-t border-[#aeaeae] hidden group-hover:block'>
                                <div className='flex flex-col bg-[#f4f4f4] font-medium text-lg py-1 min-w-[122px]'>
                                    <Link className='whitespace-nowrap py-1.5 pl-4 hover:pl-6 hover:bg-[#e8e8e1] transition-all duration-200' to="/products/1">WOMEN</Link>
                                    <Link className='whitespace-nowrap py-1.5 pl-4 hover:pl-6 hover:bg-[#e8e8e1] transition-all duration-200' to="/products/2">MEN</Link>
                                    <Link className='whitespace-nowrap py-1.5 pl-4 hover:pl-6 hover:bg-[#e8e8e1] transition-all duration-200' to="/products/3">ACCESSORIES</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div className='py-7 px-5 cursor-pointer'>
                        <MagnifyingGlassIcon className="h-7 w-7"/>
                    </div>
                    <div className='py-7 px-5 cursor-pointer relative'>
                        <ShoppingBagIcon className="h-7 w-7"/>
                        <span className='w-4 h-4 rounded-full bg-[#ff4f33] absolute top-[46px] right-[16px] border border-white text-white text-xs font-medium flex items-center justify-center'>6</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar