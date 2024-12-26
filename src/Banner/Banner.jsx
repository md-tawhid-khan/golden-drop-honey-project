import { RiSearch2Line } from 'react-icons/ri';
import beeImg1 from '../assets/beeImg1.png';
import beeImg2 from '../assets/beeImg2.png';
import radialImg from '../assets/radialImg.png'

const Banner = () => {
    return (
        <section className="min-h-screen grid grid-cols-2 ">
        <div className="relative px-14 pt-20">
            <div className="text-7xl font-semibold mb-[30px]"
            ><h1>Experience the</h1> <h1 className=' py-5'> Pure  Joy of </h1>  <h1> Golden Honey</h1>
            </div>
              <p className='mb-[75px]'>Welcome to Golden Drops, where natures sweetness comes straight from the hive to your table! Our high-quality honey is crafted with care, ensuring you experience the purest flavors and health benefits. Discover the golden goodness that adds a delicious touch to your meals and wellness routine.</p> 

              <p className='border border-[#FFB700] px-5 flex gap-3 items-center py-1'><span><RiSearch2Line /></span><span>What are you want</span></p>  
              <p className='absolute top-32 right-6'><img src={beeImg1} alt="" /></p>        
       </div>
       <div className='relative'>
              <div>
              <img src={beeImg2} alt="" />
              </div>

              <div className='absolute top-12 -left-11 z-[-1]'>
                <img className='w-[890px] h-[890px] rounded-full' src={radialImg} alt="" />
              </div>
              
       </div>
        </section>
    );
};

export default Banner;