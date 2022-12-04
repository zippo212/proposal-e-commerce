import { useState } from 'react';
import { ArrowLongRightIcon,PlusSmallIcon,MinusSmallIcon } from '@heroicons/react/24/outline'
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
} from "react-share";


const data = [
  'https://images.asos-media.com/products/asos-design-knitted-textured-rib-jumper-with-all-over-floral-in-lilac/201574346-1-lilac?$n_640w$&wid=513&fit=constrain',
  'https://images.asos-media.com/products/asos-design-oversized-borg-western-jacket-in-black/202822022-1-black?$n_640w$&wid=513&fit=constrain',
  'https://images.asos-media.com/products/asos-design-oversized-borg-western-jacket-in-black/202822022-4?$n_640w$&wid=513&fit=constrain',
  'https://images.asos-media.com/products/asos-design-knitted-textured-rib-jumper-with-all-over-floral-in-lilac/201574346-2?$n_640w$&wid=513&fit=constrain',
]

const Product = () => {
  const [currentImg, setCurrentImg] = useState(100);
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const handleInput = (value) => {
    if(Number.isInteger(+value)) {
      setQuantity(+value)
    } else return
  }

  return (
    <div className='py-7 sm:py-14 px-2 sm:px-10 mx-auto max-w-[1300px]'>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[40%] sm:overflow-hidden flex flex-row sm:flex-col'>
          <div className={`relative w-[80%] sm:w-full overflow-hidden`}>
            <div className={`-translate-x-[${currentImg}%] flex transition-all duration-400 relative`}>
              <img className="w-full translate-x-0" src={data[0]} alt=""/>
              <img className="w-full translate-x-100%" src={data[1]} alt=""/>
              <img className="w-full translate-x-200%" src={data[2]} alt=""/>
              <img className="w-full translate-x-300%" src={data[3]} alt=""/>
            </div>
          </div>
          <div className="sm:mt-5 w-[20%] sm:w-full">
            <div className='h-full flex flex-col sm:flex-row justify-between items-end sm:space-x-3 sm:justify-start pl-2 sm:pl-0 overflow-x-auto'>
              <img className={`max-w-full sm:max-w-[80px] ${currentImg === 0 ? 'border-2 border-black' : 'border-2 border-transparent'} cursor-pointer transition-all duration-150`} src={data[0]} alt="" onClick={()=>setCurrentImg(0)}/>
              <img className={`max-w-full sm:max-w-[80px] ${currentImg === 100 ? 'border-2 border-black' : 'border-2 border-transparent'} cursor-pointer transition-all duration-150`} src={data[1]} alt="" onClick={()=>setCurrentImg(100)}/>
              <img className={`max-w-full sm:max-w-[80px] ${currentImg === 200 ? 'border-2 border-black' : 'border-2 border-transparent'} cursor-pointer transition-all duration-150`} src={data[2]} alt="" onClick={()=>setCurrentImg(200)}/>
              <img className={`max-w-full sm:max-w-[80px] ${currentImg === 300 ? 'border-2 border-black' : 'border-2 border-transparent'} cursor-pointer transition-all duration-150`} src={data[3]} alt="" onClick={()=>setCurrentImg(300)}/>
            </div>
          </div>
        </div>
        <div className='w-full sm:w-[60%] sm:pl-7 mt-4 sm:mt-0'>
          <div className='sm:pl-11'>
            <div className='mb-6'>
              <div className='tracking-[0.2em] font-medium text-[#1c1d1d]'>PROPOSAL</div>
              <h1 className='text-5xl mb-2 font-bold uppercase'>Product name</h1>
            </div>
            <div>
              <div className='mb-6'>
                <span className='text-2xl'>$69.69</span>
                <span className='mt-2 text-xl block font-light'>Shipping calculated at checkout</span>
              </div>
              <div className='mb-6'>
                <hr className='h-[1px]'/>
              </div>
              <div className='mb-6'>
                <div>
                  <h3 className="mb-2 font-bold text-xl uppercase">Size</h3>
                  <ul className="items-center w-full text-sm font-medium flex"
                  onChange={(e)=>setSize(e.target.value)}>
                      <li className=" border border-[#e8e8e1] mr-3 mb-1">
                          <div className={`flex items-center justify-center ${size === 'S' ? 'border-2 border-black' : 'border-2 border-transparent'} transition-all duration-150`}>
                              <input id="s" type="radio" value="S" name="list-radio" defaultChecked className="" hidden></input>
                              <label htmlFor="s" className="w-full text-xl font-bold py-2.5 px-4 cursor-pointer">S</label>
                          </div>
                      </li>
                      <li className=" border border-[#e8e8e1] mr-3 mb-1">
                          <div className={`flex items-center justify-center ${size === 'M' ? 'border-2 border-black' : 'border-2 border-transparent'} transition-all duration-150`}>
                              <input id="m" type="radio" value="M" name="list-radio" className="" hidden></input>
                              <label htmlFor="m" className="w-full text-xl font-bold py-2.5 px-4 cursor-pointer">M</label>
                          </div>
                      </li>
                      <li className=" border border-[#e8e8e1] mr-3 mb-1">
                          <div className={`flex items-center justify-center ${size === 'L' ? 'border-2 border-black' : 'border-2 border-transparent'} transition-all duration-150`}>
                              <input id="l" type="radio" value="L" name="list-radio" className="" hidden></input>
                              <label htmlFor="l" className="w-full text-xl font-bold py-2.5 px-4 cursor-pointer">L</label>
                          </div>
                      </li>
                      <li className=" border border-[#e8e8e1] mr-3 mb-1">
                          <div className={`flex items-center justify-center ${size === 'XL' ? 'border-2 border-black' : 'border-2 border-transparent'} transition-all duration-150`}>
                              <input id="xl" type="radio" value="XL" name="list-radio" className="" hidden></input>
                              <label htmlFor="xl" className="w-full text-xl font-bold py-2.5 px-4 cursor-pointer">XL</label>
                          </div>
                      </li>
                  </ul>
                </div>
              </div>
              <div className='mb-6'>
                  <div className='border border-[#e8e8e1] flex justify-between h-[50px] max-w-[35%] sm:max-w-[25%]'>
                    <button className='px-2.5 group hover:bg-[#e8e8e1]'
                    onClick={()=> setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}
                    >
                      <MinusSmallIcon className="h-5 group-hover:text-white"/>
                    </button>
                    <input type="text" className="w-[50%] text-center font-medium text-lg" value={quantity} min="0" pattern="[0-9]*"
                      onChange={(e)=>handleInput(e.target.value)}
                    />
                    <button className='px-2.5 group hover:bg-[#e8e8e1]'
                    onClick={()=> setQuantity((prev) => (prev + 1))}
                    >
                      <PlusSmallIcon className="h-5 group-hover:text-white"/>
                    </button>
                  </div>
              </div>
              <div className='mb-6'>
                <button className='border border-black py-2 px-4 w-[50%] relative group overflow-hidden'>
                  <span className='uppercase text-2xl font-bold group-hover:pr-7 transition-all duration-300'>Add to cart</span>
                  <ArrowLongRightIcon className="h-7 absolute top-0 bottom-0 my-auto -right-7 group-hover:right-7 transition-all duration-300"/>
                </button>
              </div>
              <div className='mb-6'>
                <p className='mb-6 text-lg'>
                  <strong>Product Details:</strong>
                  <br/>
                  -"Himbo Gym" graphic screen print on front chest and center back
                  <br/>
                  -Taped seams, shoulder to shoulder
                  <br/>
                  -Made in the USA<span> with Union Labor support</span>
                </p>
                <p className='text-xl'>
                  <strong>Care and Fiber:</strong>
                  <br/>
                  <span>-100% pre-shrunk cotton</span>
                  <br/>
                  <span>-Wash inside out on cold with like colors - Hang dry</span>
                </p>
              </div>
              <div className='mt-6 sm:mt-10 flex items-center space-x-5'>
                <a href='https://facebook.com/' className='flex items-center'>
                  <FacebookIcon size={28} iconFillColor="white" bgStyle={{fill:"black"}}/>
                  <span className='text-xl font-bold pl-2'>Share</span>
                </a>
                <a href='https://twitter.com/' className='flex items-center'>
                  <TwitterIcon size={28} iconFillColor="white" bgStyle={{fill:"black"}}/>
                  <span className='text-xl font-bold pl-2'>Tweet</span>
                </a>
                <a href='https://www.pinterest.com/' className='flex items-center'>
                  <PinterestIcon size={28} iconFillColor="white" bgStyle={{fill:"black"}}/>
                  <span className='text-xl font-bold pl-2'>Pin it</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product