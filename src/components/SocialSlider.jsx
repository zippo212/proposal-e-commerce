import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const SocialSlider = () => {
    const [data,setData] = useState();
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get('https://api.npoint.io/1596adf2d402cb490147');
                setData(res.data.social)
            } catch(err) {
                console.log(err);
            }
        }
        fetchData();
    },[])

        const box = useRef([])
//initially place each box position in a row
    if(box.current.length > 0) {
        gsap.set(box.current, {
            x: (i) => i * 350
          });

        gsap.to(box.current, {
            duration: 18,
            ease: "none",
            x: "+=1750", //move each box 1750px to right
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % 1750) //force x value to be between 0 and 1750 using modulus
            },
            repeat: -1
        });
    }

  return (
    <div className='my-24 overflow-hidden'>
        <div className='px-10 mx-auto max-w-[1300px]'>
            <div className='text-center mb-12'>
                <h2 className='text-5xl font-bold uppercase'>Social</h2>
            </div>
        </div>
        <div className='w-[1400px] h-[350px] relative m-auto overflow-hidden border-t-4 border-b-4 border-black'>
            <div className="relative -left-[350px]">
                {data?.map((item,i)=> (
                <img key={i} className="h-[345px] w-[345px] absolute" src={item} alt="social media post" ref={el => box.current[i] = el}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SocialSlider