import beeImg5 from "../../assets/beeImg5.png";
import radialImg from "../../assets/radialImg.png";
import beeImg6 from "../../assets/beeImg6.png";
import beeImg7 from "../../assets/beeImg7.png";
import beeImg8 from "../../assets/beeImg8.png";
import beeImg9 from "../../assets/beeImg9.png";
const Feature = () => {
  return (
    <section className="my-32">
      <h1 className="font-semibold text-[#FFB700] text-4xl text-center p-7 mb-16">
        Why Choose Us
      </h1>
      <div className="relative grid grid-cols-2 place-items-center gap-12">
      <div className="border border-[#FFB700] flex items-center gap-4  rounded-lg overflow-hidden">
  <div className="relative w-full ">
    <p>
      <img className="max-w-full" src={beeImg5} alt="Bee illustration" />
    </p>
    <p className="absolute -top-16 -left-4 z-[-1]">
      <img
        style={{ width: '1200px', height: '270px' }}
        className="rounded-full"
        src={radialImg}
        alt="Radial background"
      />
    </p>
  </div>
  <div>
    <p className="p-4">
      At Golden Drops, we are committed to bringing you the finest honey
      that is both delicious and pure. Our handcrafted honey is sourced
      from local beekeepers who share our passion for sustainability and
      quality. When you choose Golden Drop.
    </p>
  </div>
</div>
<div className="border border-[#FFB700] flex items-center gap-4  rounded-lg overflow-hidden">
  <div className="relative w-full  ">
    <p>
      <img className="max-w-full" src={beeImg6} alt="Bee illustration" />
    </p>
    <p className="absolute -top-16 -left-4 z-[-1]">
      <img
        style={{ width: '1200px', height: '270px' }}
        className="rounded-full"
        src={radialImg}
        alt="Radial background"
      />
    </p>
  </div>
  <div>
    <p className="p-4">
      At Golden Drops, we are committed to bringing you the finest honey
      that is both delicious and pure. Our handcrafted honey is sourced
      from local beekeepers who share our passion for sustainability and
      quality. When you choose Golden Drop.
    </p>
  </div>
</div>
      <div className="border border-[#FFB700] flex items-center gap-4  rounded-lg overflow-hidden">
  <div className="relative w-full  ">
    <p>
      <img className="max-w-full" src={beeImg7} alt="Bee illustration" />
    </p>
    <p className="absolute -top-16 -left-4 z-[-1]">
      <img
        style={{ width: '1200px', height: '270px' }}
        className="rounded-full"
        src={radialImg}
        alt="Radial background"
      />
    </p>
  </div>
  <div>
    <p className="p-4">
      At Golden Drops, we are committed to bringing you the finest honey
      that is both delicious and pure. Our handcrafted honey is sourced
      from local beekeepers who share our passion for sustainability and
      quality. When you choose Golden Drop.
    </p>
  </div>
</div>
      <div className="border border-[#FFB700] flex items-center gap-4  rounded-lg overflow-hidden">
  <div className="relative  w-full ">
    <p>
      <img className="max-w-full" src={beeImg8} alt="Bee illustration" />
    </p>
    <p className="absolute -top-16 -left-4 z-[-2]">
      <img
        style={{ width: '1200px', height: '270px' }}
        className="rounded-full"
        src={radialImg}
        alt="Radial background"
      />
    </p>
  </div>
  <div>
    <p className="p-4">
      At Golden Drops, we are committed to bringing you the finest honey
      that is both delicious and pure. Our handcrafted honey is sourced
      from local beekeepers who share our passion for sustainability and
      quality. When you choose Golden Drop.
    </p>
  </div>
</div> 
   <img className="absolute right-[525px] top-28 w-32" src={beeImg9} alt="" />
      </div>
    </section>
  );
};

export default Feature;
