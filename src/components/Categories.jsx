import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="px-2 mx-auto flex w-full">
        <Link to="/products/1" className='w-6/12 relative'>
            <img className="h-full" src="img/w.jpg" alt=""></img>
            <span className="absolute top-0 right-0 h-16 w-32 bg-black text-4xl text-white font-extrabold flex justify-center items-center cursor-default">
                WOMEN
            </span>
        </Link>
        <Link to="/products/2" className="w-6/12 pl-2.5 relative">
            <img className="h-full" src="img/m.jpg" alt=""></img>
            <span className="absolute top-0 right-0 h-16 w-32 bg-white text-4xl font-extrabold flex justify-center items-center cursor-default">
                MEN
            </span>
        </Link>
    </div>
  )
}

export default Categories