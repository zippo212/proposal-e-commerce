import Logo from '../img/logobig.png'

const NotFound = () => {
  return (
    <div className='relative h-[90vh] w-full overflow-hidden'>
        <h1 className='absolute left-0 right-0 top-[20px] mx-auto text-8xl h-28 w-32'>404</h1>
        <div className='absolute h-[189px] sm:h-[236px] w-[315px] sm:w-[393px] top-0 bottom-0 left-0 right-0 m-auto animate-wiggle'>
            <img className="animate-pulse" src={Logo} alt='proposal logo'/>
        </div>
    </div>
  )
}

export default NotFound