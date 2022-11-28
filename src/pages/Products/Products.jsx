import { useLocation } from "react-router-dom";
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Card from "../../components/Card";


const Products = () => {

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
    {
        id:3,
        img:'https://images.asos-media.com/products/asos-design-oversized-borg-western-jacket-in-black/202822022-1-black?$n_640w$&wid=513&fit=constrain',
        img2:'https://images.asos-media.com/products/asos-design-oversized-borg-western-jacket-in-black/202822022-4?$n_640w$&wid=513&fit=constrain',
        title:'oversized borg western jacket',
        isNew:false,
        price:69.99,
    },
    {
        id:4,
        img:'https://images.asos-media.com/products/asos-design-knitted-textured-rib-jumper-with-all-over-floral-in-lilac/201574346-1-lilac?$n_640w$&wid=513&fit=constrain',
        img2:'https://images.asos-media.com/products/asos-design-knitted-textured-rib-jumper-with-all-over-floral-in-lilac/201574346-2?$n_640w$&wid=513&fit=constrain',
        title:'knitted textured rib jumper',
        isNew:false,
        price:26.99,
    },
  ]

  const location = useLocation();
  const title = location.state;
  return (
  <div className="">
    <header className="relative">
        <img className='w-full h-full' src="../img/prod.jpg" alt=""></img>
        <span className="uppercase absolute top-0 bottom-0 left-0 right-0 m-auto text-7xl h-20 w-fit text-white font-bold tracking-wide">{title}</span>
    </header>
    <div className="py-14 px-2 md:px-10 mx-auto max-w-[1300px]">
      <div className="mb-5">
        <div className="pl-2.5 xl:pl-7">
          <button className="px-5 border border-[#e8e8e1] h-11 font-semibold flex items-center">
            <AdjustmentsHorizontalIcon className="h-7 w-7 mr-2.5"/>
            <span className="block">FILTER</span> 
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map(item => (<Card data={item} key={item.id} size={['h-full','w-full']}/>))}
      </div>
    </div>
  </div>
  )
}

export default Products