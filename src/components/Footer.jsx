import React from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { SocialIcon } from 'react-social-icons';
import logo from '../img/logo.png';
import stripe from '../img/Powered_By_Stripe.png';



const Footer = () => {
  return (
    <footer className='bg-[#f4f4f4] pt-20 pb-10'>
        <div className='px-10 mx-auto max-w-[1300px] flex flex-col md:flex-row items-start'>
          <div className='md:w-[25%] md:pl-7 flex items-center md:flex-col'>
              <div className='mb-6 mr-6 md:mr-0'>
                <Link to="/" className='flex items-center'>
                    <img src={logo} alt='proposal logo' className='h-full'></img>
                </Link>
              </div>
              <ul className='flex'>
                <li>
                <SocialIcon url="https://instagram.com/" fgColor="#aeaeae" bgColor='transparent' className='h-10 w-10' />
                </li>
                <li>
                <SocialIcon url="https://twitter.com/" fgColor="#aeaeae" bgColor='transparent' className='h-10 w-10'/>
                </li>
                <li>
                <SocialIcon url="https://facebook.com/" fgColor="#aeaeae" bgColor='transparent' className='h-10 w-10'/>
                </li>
              </ul>
          </div>
          <div className='md:w-[20%] md:pl-7 pb-5 md:pb-0'>
            <p className='text-2xl font-bold border-b border-[#aeaeae] pb-2 mb-4'>QUICK LINKS</p>
            <ul className='text-xl font-light'>
              <li className='py-1'>
                <Link to="/">HOME</Link>
              </li>
              <li className='py-1'>
                <Link to="/products/2" state={'Women'}>WOMEN</Link>
              </li>
              <li className='py-1'>
                <Link to="/products/1" state={'Men'}>MEN</Link>
              </li>
            </ul>
          </div>
          <div className='md:w-[20%] md:pl-7 pb-5 md:pb-0'>
            <p className='text-2xl font-bold border-b border-[#aeaeae] pb-2 mb-4'>SUPPORT</p>
            <ul className='text-xl font-light'>
              <li className='py-1'>TERMS OF USE</li>
              <li className='py-1'>PRIVACY POLICY</li>
              <li className='py-1'>SHIPPING / RETURNS</li>
              <li className='py-1'>CONTACT US</li>
            </ul>
          </div>
          <div className='md:w-[33%] md:pl-7 pb-5 md:pb-0'>
            <p className='text-2xl font-bold border-b border-[#aeaeae] pb-2 mb-4'>JOIN PROPOSAL</p>
            <div>
              <p className='mb-4 text-xl font-light'>Subscribe to get the latest updates.</p>
            </div>
            <div className='relative'>
              <input className='text-xl font-light max-w-[300px] w-full pl-11 bg-[#fafafa] py-[10px] px-2 border focus:outline-none focus:border-black placeholder-black' placeholder="Enter your email"></input>
              <button className='absolute left-0 top-0 bottom-0 px-2'>
                <EnvelopeIcon className='h-6 w-6'/>
              </button>
            </div>
          </div>
        </div>
        <div className='pt-9 px-2 sm:px-10 mx-auto max-w-[1300px]'>
          <div className='px-0 sm:px-5 pb-5 text-left sm:text-center relative'>
            <span className='font-semibold text-sm'>© 2022 PROPOSAL . All Rights Reserved.</span>
            <img src={stripe} alt="stripe logo" className='absolute right-0 top-0 h-6'/>
          </div>
        </div>
    </footer>
  )
}

export default Footer