import { XMarkIcon, ArrowLongRightIcon,TrashIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { removeItem, resetCart } from "../redux/cartReducer";

const Cart = ({state,setState}) => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.cart.products)

    const total = () => {
        let totalPrice = 0;
        products.forEach(item =>{
            totalPrice += item.quantity*item.price;
        })
        return totalPrice
    }

  return (
    <div className={`fixed w-[350px] sm:w-[420px] bg-white top-0 bottom-0 right-0  ${state ? '-translate-x-[0%]' : 'translate-x-[100%]'} transition-transform duration-500 drop-shadow-2xl z-40 will-change-transform`}>
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
                <div className="overflow-y-auto">
                {products.map((item) => (
                    <div className="flex gap-5 border-b border-[#e8e8e1] py-5" key={item.id}>
                        <div className="w-3/12">
                            <a href={`/product/${item.id.slice(0,-1)}`}>
                                <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt=""></img>
                            </a>
                        </div>
                        <div className="w-9/12">
                            <a href={`/product/${item.id.slice(0,-1)}`} className="mb-2.5 text-xl capitalize block align-top leading-4">{item.title}</a>
                            <div className="mb-2.5 text-lg font-medium uppercase">{item.size}</div>
                            <div className="flex justify-between items-center">
                                <div className="min-w-[90px] relative border border-[#e8e8e1] flex items-center justify-between">
                                    <label className="absolute h-[1px] w-[1px] overflow-hidden">Quantity</label>
                                    <span className="py-1 px-2.5 font-medium text-lg block">{item.quantity}</span>
                                    <XMarkIcon className="h-4 block"/>
                                    <span className="text-2xl px-2.5 block">${item.price}</span>
                                </div>
                                <button className="p-2"
                                onClick={() => dispatch(removeItem(item.id))}
                                >
                                    <TrashIcon className="h-5"/>
                                </button>
                            </div>
                        </div>
                    </div> 
                ))}
                </div>
                    <div className="py-7 flex flex-col flex-1 justify-end">
                        <div className="font-bold pb-2.5 text-lg tracking-wide cursor-pointer"
                        onClick={() => dispatch(resetCart())}
                        >Clear</div>
                        <div className="flex justify-between mb-5">
                            <div className="font-sans font-bold tracking-[0.2em]">SUBTOTAL</div>
                            <span className="block text-2xl leading-6">{total().toFixed(2)}</span>
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