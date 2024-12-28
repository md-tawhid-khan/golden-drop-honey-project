import { forwardRef } from 'react';
import beeImg3 from '../assets/beeImg3.png' 
import beeImg4 from '../assets/beeImg4.png'
import radialImg from '../assets/radialImg.png'

const AboutSection =forwardRef((props,ref) => {
    return (
        <section ref={ref} className=" grid grid-cols-2 place-items-center">
            {/* img section */}
            <div className='relative  px-4'>
           <h1>
            <img src={beeImg3} alt="" />
           </h1>
           <p className='absolute -top-7 left-0 z-[-1]'>
            <img className='w-[800px] h-[800px] rounded-lg' src={radialImg} alt="" />
           </p>
            </div>
            {/* content section */}
            <div className='relative px-4'>
           <h1 className='font-semibold text-[#FFB700] text-5xl mb-[30px] '>About Us</h1>
           <p>At Golden Drops, we are committed to bringing you the finest honey that is both delicious and pure. Our handcrafted honey is sourced from local beekeepers who share our passion for sustainability and quality. Each jar is filled with nature's sweet gift, perfect for adding to your favorite recipes or enjoying straight from the jar. When you choose Golden Drops, you are not just enjoying honey; you are supporting local communities and the vital role bees play in our ecosystem.</p>
           <p className='absolute -top-20 left-[170px]'>
            <img src={beeImg4} alt="No Image" />
           </p>
            </div>
            
        </section>
    );
});

AboutSection.displayName='AboutSection';

export default AboutSection;