import { forwardRef, useState } from "react";
import data from '../../fakeData/FakeJSON';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCartShopping } from "react-icons/fa6";
import {  useNavigate } from "react-router-dom";


const ShopSection = forwardRef((props,ref) => {
  const {refs,clickCount}=props;
  const {shopRef,countRef}=refs ;

  const [products, setProducts] = useState(data);
  const navigate=useNavigate()
  const handleBuyNowButton=(product)=>{
    // console.log(product)
    navigate('/checkout',{state:{product}})
  }

  return (
    <section className="max-h-screen " ref={shopRef}>
      <h1 className="font-bold text-4xl text-center text-[#FFB700] mb-16">Shop Now</h1>
      <div  >
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <div >
          {products.map(product => (
            <SwiperSlide key={product.id} className="card bg-base-100 shadow-xl flex flex-col gap-8">             
            <figure>
              <img className="w-full" src={product.image} alt="No Image" />
            </figure>
            <div className="card-body  flex flex-col justify-between">
              <div>
                <h2 className="card-title">{product.productName}</h2>
                <p>Price : {product.price}</p>
              </div>
              <div className="card-actions justify-end ">
                <div className="flex items-center gap-8  ">
                <button onClick={()=>handleBuyNowButton(product)} className="border border-black rounded-md px-9 hover:bg-[#FFB700] btn">Buy Now</button >
                <button ref={countRef} onClick={() => clickCount(product)} className="flex items-center justify-end">
                  <FaCartShopping className="text-xl hover:text-2xl" />                
                </button>
                </div>                
              </div>
            </div>
            
          </SwiperSlide>
          ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
});

ShopSection.displayName = "ShopSection";

export default ShopSection;