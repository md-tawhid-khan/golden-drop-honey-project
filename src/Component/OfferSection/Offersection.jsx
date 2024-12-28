import beeImg11 from '../../assets/beeImg11.png'
import beeImg12 from '../../assets/beeImg12.png'
import curledline from '../../assets/curledLine.png'
 import radialImg from '../../assets/radialImg.png'

const Offersection = () => {
    return (
        <section className=" bg-[#FEFAF1] w-full grid grid-cols-3 place-items-center" style={{
            backgroundImage:`url(${curledline})`
        }}>
            <div className='relative '>
                <img  src={radialImg} alt="" />
                <img className='absolute top-0 left-0 z-[1]' src={beeImg11} alt="" />
            </div>
            <div  >
                <h1 className='font-Lily text-[#828282]'><span className='text-5xl '>get</span> <span className='text-4xl'>up to </span> <span className='text-[#FFB700] text-8xl'>20 % </span></h1>
                <h4 className='font-Lily text-2xl flex justify-end text-[#828282]'>off on fast order</h4>
            </div>
            <div className='relative '>
                <img  src={radialImg} alt="" />
                <img className='absolute top-0 left-0 z-[1]' src={beeImg12} alt="" />
            </div>
        </section>
    );
};

export default Offersection;