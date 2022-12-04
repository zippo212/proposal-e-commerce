import { ShoppingBagIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';
import Cart from './Cart';

const Navbar = () => {
    const [drawerState, setDrawerState] = useState(false);

  return (
    <header className='bg-[#f4f4f4]'>
        <div className='px-10 mx-auto max-w-[1300px]'>
            <div className='flex'>
                <Link to="/" className='flex items-center'>
                    <img src={logo} alt='' className='h-[80%]'></img>
                </Link>
                <div className='flex mx-auto items-center'>
                    <ul className='flex text-xl font-semibold'>
                        <Link to="/" className='py-7 px-5 hover:bg-[#e8e8e1] transition-all duration-200 cursor-pointer'>
                                HOME
                        </Link>
                        <li className='py-7 px-5 hover:bg-[#e8e8e1] relative group z-10 transition-all duration-200 cursor-pointer'>
                            <div className='flex items-center'>
                                APPAREL
                                <ChevronDownIcon className='h-4 w-4 text-[#aeaeae] ml-1'/>
                            </div>
                            <div className='absolute top-[100%] left-0 border-t border-[#aeaeae] hidden group-hover:block'>
                                <div className='flex flex-col bg-[#f4f4f4] font-medium text-lg py-1 min-w-[122px]'>
                                    <Link className='whitespace-nowrap py-1.5 pl-4 hover:pl-6 hover:bg-[#e8e8e1] transition-all duration-200' to="/products/1" state={'Women'}>WOMEN</Link>
                                    <Link className='whitespace-nowrap py-1.5 pl-4 hover:pl-6 hover:bg-[#e8e8e1] transition-all duration-200' to="/products/2" state={'Men'}>MEN</Link>
                                    <Link className='whitespace-nowrap py-1.5 pl-4 hover:pl-6 hover:bg-[#e8e8e1] transition-all duration-200' to="/products/3" state={'Accessories'}>ACCESSORIES</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div className='py-7 px-5 cursor-pointer'>
                        <MagnifyingGlassIcon className="h-7 w-7"/>
                    </div>
                    <div className='py-7 px-5 cursor-pointer relative'
                    onClick={()=>setDrawerState(!drawerState)}
                    >
                        <ShoppingBagIcon className="h-7 w-7"/>
                        <span className='w-4 h-4 rounded-full bg-[#ff4f33] absolute top-[46px] right-[16px] border border-white text-white text-xs font-medium flex items-center justify-center'>6</span>
                    </div>
                </div>
            </div>
        </div>
        <Cart state={drawerState} setState={setDrawerState}/>
    </header>
  )
}

export default Navbar