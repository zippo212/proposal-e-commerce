import { XMarkIcon, ArrowLongRightIcon,TrashIcon } from "@heroicons/react/24/outline"

const Cart = ({state,setState}) => {
    const data = [
        {
            id:1,
            img:'https://images.asos-media.com/products/asos-design-twill-dad-wool-mix-coat-in-red/202992301-2?$n_640w$&wid=513&fit=constrain',
            img2:'https://images.asos-media.com/products/asos-design-twill-dad-wool-mix-coat-in-red/202992301-1-red?$n_320w$&wid=317&fit=constrain',
            title:'twill dad wool mix coat in red',
            isNew:true,
            price:64.99,
        },
        {
            id:2,
            img:'https://images.asos-media.com/products/asos-design-oversized-bonded-borg-hero-aviator-jacket-in-black/203294822-1-blackandcream?$n_640w$&wid=513&fit=constrain',
            img2:'https://images.asos-media.com/products/asos-design-oversized-bonded-borg-hero-aviator-jacket-in-black/203294822-4?$n_640w$&wid=513&fit=constrain',
            title:'oversized bonded aviator jacket',
            isNew:true,
            price:110.99,
        },
    ]
    
  return (
    <div className={`fixed w-[350px] sm:w-[420px] bg-white top-0 bottom-0 -right-[420px] ${state ? '-translate-x-[420px]' : 'translate-x-0'} transition-transform duration-500 drop-shadow-2xl z-40`}>
        <div className="h-full flex flex-col">

            <div className="px-4 sm:px-10 h-24">
                <div className="py-4 flex justify-between items-center border-b border-[#e8e8e1]">
                    <div className="uppercase font-bold text-5xl leading-tight">Cart</div>
                    <div className='flex items-center'>
                        <button className='p-2 translate-x-2' onClick={() => setState(!state)}>
                            <XMarkIcon className="h-7"/>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-10 px-4 sm:px-10 h-full'>
                <div className='flex flex-col h-full -mt-5'>
                {data.map((item) => (
                    <div className="flex gap-5 border-b border-[#e8e8e1] py-5" key={item.id}>
                        <div className="w-3/12">
                            <a href={`/product/${item.id}`}>
                                <img src={item.img} alt=""></img>
                            </a>
                        </div>
                        <div className="w-9/12">
                            <a href={`/product/${item.id}`} className="mb-2.5 text-xl capitalize block align-top leading-4">{item.title}</a>
                            <div className="mb-2.5 text-lg font-medium">S</div>
                            <div className="flex justify-between items-center">
                                <div className="min-w-[90px] relative border border-[#e8e8e1] flex items-center justify-between">
                                    <label className="absolute h-[1px] w-[1px] overflow-hidden">Quantity</label>
                                    <span className="py-1 px-2.5 font-medium text-lg block">1</span>
                                    <XMarkIcon className="h-4 block"/>
                                    <span className="text-2xl px-2.5 block">${item.price}</span>
                                </div>
                                <button className="p-2">
                                    <TrashIcon className="h-5"/>
                                </button>
                            </div>
                        </div>
                    </div> 
                ))}
                    <div className="py-7 flex flex-col flex-1 justify-end">
                        <div className="flex justify-between mb-5">
                            <div className="font-sans font-bold tracking-[0.2em]">SUBTOTAL</div>
                            <span className="block text-2xl leading-6">$420.69</span>
                        </div>
                        <div className="text-center mb-5">
                            <small>
                                Shipping, taxes, and discount codes calculated at checkout.
                                <br/>
                            </small>
                        </div>
                        <div>
                        <button className='bg-black text-white py-2 px-4 w-full relative group overflow-hidden'>
                            <span className='uppercase text-xl font-bold group-hover:pr-7 transition-all duration-300'>Check out</span>
                            <ArrowLongRightIcon className="h-7 absolute top-0 bottom-0 my-auto -right-7 group-hover:right-7 transition-all duration-300"/>
                        </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Cart