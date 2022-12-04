import { Link } from "react-router-dom"

const Card = ({data,size}) => {
  return (
    <div className='sm:pl-2.5'>
        <div className='mb-10'>
            <Link to={`/product/${data.id}`}>
                <div className={`relative ${size[0]} sm:h-full ${size[1]} sm:w-full`}>
                    <div className="h-full w-full">
                        <img className='h-full w-full' src={data.img} alt=''></img>
                    </div>
                    <div className='absolute top-0 h-full w-full opacity-0 hover:opacity-100 transition-all ease-in-out duration-400'>
                        <img className='h-full w-full' src={data.img2} alt=''></img>
                    </div>
                    <div className='absolute bg-white bottom-0 py-2.5 pl-3.5 pr-5'>
                        <span className='text-2xl leading-5'>
                            ${data.price}
                        </span>
                    </div>
                    {data.isNew ? 
                    <div className="absolute top-0 right-0 bg-[#282828] font-bold lg:font-extrabold text-white text-[0.5rem] lg:text-xs py-0.5 md:py-1 pl-1 lg:pl-2 pr-1.5 lg:pr-3 uppercase font-sans tracking-widest">
                        New Season
                    </div>
                    : ''}
                </div>
                <div className='relative'>
                    <div className='tracking-[0.2em] font-light text-[#1c1d1d]'>PROPOSAL</div>
                    <div className='uppercase text-2xl leading-6 font-semibold'>{data.title}</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Card