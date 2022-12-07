import Card from './Card'
import useFetch from '../hooks/useFetch';

const FeaturedProducts = ({type}) => {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    
    <div className={`my-24`}>
        <div className='px-10 mx-auto max-w-[1300px]'>
            <div className='text-center mb-12'>
                <h2 className='text-5xl font-bold uppercase'>{type} PRODUCTS</h2>
            </div>
        </div>
        <div className='overflow-x-scroll sm:overflow-hidden px-2 sm:px-10 sm:mx-auto -ml-2.5 sm:ml:0 flex'>
        {error ? 'Something went wrong' :
            data?.map(item => (<Card data={item} key={item.id} size={['h-96','w-[301px]']} loading={loading}/>))
        }    
        </div>
    </div>
  )
}

export default FeaturedProducts