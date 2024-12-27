import {  useState } from "react";
import data from '../../fakeData/FakeJSON'
// ----------------
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCartShopping } from "react-icons/fa6";
// ---------------

const ShopSection = () => {
    const [products,setProducts]=useState(data)

    // console.log(products)

   

    return (
        <section className="max-h-screen">
            <h1 className="font-bold text-4xl text-center text-[#FFB700] mb-16">Shop Now</h1>
            <div>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
            
        {
            products.map(product=><SwiperSlide key={product.id} className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img
                  className="w-full"
                    src={product.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions  items-center justify-between">
                    <button className="border border-black rounded-md px-9 hover:bg-[#FFB700]">Buy Now</button>
                    <button className="  flex items-center justify-end  "><FaCartShopping className=" text-xl  hover:text-2xl" /></button>
                  </div>
                </div>
              </SwiperSlide>)
            }
       
        
      </Swiper>
            
        </div>
           
        </section>
    );
};

export default ShopSection;