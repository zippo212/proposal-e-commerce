import { Link } from "react-router-dom"
import menImg from "../img/m.jpg";
import womenImg from "../img/w.jpg";


const Categories = () => {
  return (
    <div className="px-2 mx-auto flex flex-col sm:flex-row w-full">
        <Link to="/products/1" state={'Women'} className='w-full sm:w-6/12 relative'>
            <img className="h-full" src={womenImg} alt=""></img>
            <span className="absolute top-0 right-0 h-16 w-32 bg-black text-4xl text-white font-extrabold flex justify-center items-center cursor-default">
                WOMEN
            </span>
        </Link>
        <Link to="/products/2" state={'Men'} className="w-full sm:w-6/12 pt-2.5 sm:pt-0 sm:pl-2.5 relative">
            <img className="h-full" src={menImg} alt=""></img>
            <span className="absolute top-0 right-0 h-16 w-32 bg-white text-4xl font-extrabold flex justify-center items-center cursor-default">
                MEN
            </span>
        </Link>
    </div>
  )
}

export default Categories