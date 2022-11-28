import Card from './Card'

const FeaturedProducts = ({type}) => {

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

  return (
    <div className='my-24'>
        <div className='px-10 mx-auto max-w-[1300px]'>
            <div className='text-center mb-12'>
                <h2 className='text-5xl font-bold'>{type} PRODUCTS</h2>
            </div>
        </div>
        <div className='overflow-x-scroll sm:overflow-hidden px-2 sm:px-10 sm:mx-auto -ml-2.5 sm:ml:0 flex'>
            {data.map(item => (<Card data={item} key={item.id}/>))}
        </div>
    </div>
  )
}

export default FeaturedProducts