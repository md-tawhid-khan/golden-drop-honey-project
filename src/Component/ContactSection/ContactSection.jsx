import beeImg10 from '../../assets/beeImg10.png';
import beeImg4 from '../../assets/beeImg4.png';

const ContactSection = () => {
    return (
        <section className="grid grid-cols-2 gap-6 p-16">
            <div>
                   <img src={beeImg10} alt="" />
            </div>
            <div className='p-6'>
                 <h1 className='relative' >
                    <span className='text-5xl text-[#FFB700]'>Contact Us</span>
                 <span className='absolute  left-[181px] -top-20 '>
                    <img src={beeImg4} alt="" />
                    </span>
                 </h1>
                 
                 <form>
                 
                 <div className='flex gap-4 my-3'>
               
                <input id="username" name='firstName' type="text" placeholder='First Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#FFB700] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                <input id="username" name='LastName' type="text" placeholder='Last Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#FFB700] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>  
                 </div>
                 <div>
                 <input id="username" name='email' type="email" placeholder='your G -mail address here ' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#FFB700] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                 </div>
                 <div className='my-3'>
                 <textarea className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-[#FFB700] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Your Message Here"></textarea>
                </div>
                <div>
                    <button className='text-white bg-[#FFB700] px-4 py-1 rounded-md hover:bg-yellow-700'>send</button>
                </div>
                
                </form>
            </div>
        </section>
    );
};

export default ContactSection;