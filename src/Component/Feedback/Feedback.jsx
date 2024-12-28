import { FaStar } from "react-icons/fa6";
import FeedbacksData from "../../fakeData/Feedback";


import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdStarOutline } from "react-icons/io";
import { forwardRef } from "react";

const Feedback =forwardRef((props, ref) => {
  // console.log(FeedbacksData)

  const randerStars=(rating)=>{
    const totalStar=5;
    return Array.from({length:totalStar},(_,index)=>(
        index<rating ?( <FaStar key={index} className="text-[#FFB700]"/>):(<IoMdStarOutline key={index} /> )
))
  }
  return (
    <div ref={ref} className="p-16">
      <h1 className="font-bold text-3xl text-center text-[#FFB700] my-10">
        What Our Customer Says
      </h1>
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
          {FeedbacksData.map((feedbackdata) => (
            <SwiperSlide key={feedbackdata.id}>
              <div className="card border border-[#FFB700] p-4">
                <div className="flex items-center justify-center gap-5 ">
                  <div className="avatar">
                    <div className="w-12 rounded-full border border-[#FFB700]">
                      <img src={feedbackdata.customerImage} />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#FFB700]">{feedbackdata.customerName}</h1>
                    <p>{feedbackdata.dateTime}</p>
                  </div>
                </div>
                <div>
                    <p className="my-4">{feedbackdata.message}</p>
                </div>
                <div>
                    <p className="flex">{randerStars(feedbackdata.stars)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});

Feedback.displayName='Feedback';

export default Feedback;
