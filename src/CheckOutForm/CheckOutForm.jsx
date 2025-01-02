import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";


const CheckOutForm = () => {
  const [totalPrice,setTotalPrice]=useState(0)
  const [productQuantity, setProductQuantity]=useState(1)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
const location=useLocation()
const product=location?.state?.product ;
const [subTotalPrice, setSubtotalPrice]=useState(product.price)

    const onSubmit=(data)=>{
 console.log(data)
    }
const handlePlaceChange=(amount)=>{   
  setTotalPrice(subTotalPrice+amount)
}

const handlePluseButton=()=>{
  const newProductQuantity=productQuantity+1;
  setProductQuantity(newProductQuantity)
  setSubtotalPrice(newProductQuantity*product.price)

}
const handleMinusButton=()=>{
  if(productQuantity>1){
    const newProductQuantity=productQuantity-1;
  setProductQuantity(newProductQuantity)
  }
}

// console.log(productQuantity)

    return (
        <section className="">
            <h1 className="text-center text-3xl font-inter">Billing Details</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

           <div className="flex flex-col w-1/2 mx-auto gap-5">

      {/* register your input into the hook by invoking the "register" function */}
      <div className="flex flex-col ">
      <label className="text-[#FFB700] mb-3" > Your Name :</label>
      <input placeholder="Give Your Name" className="border border-yellow-500 p-1 rounded-md w-full" {...register("name",{required:true})} />
      {/* errors will return when field validation fails  */}
      {errors.name && <span className="text-red-500">this field is required</span>}
      </div>

      {/* include validation with required or other standard HTML validation rules */}
      <div className="flex flex-col ">
        <label className="text-[#FFB700] mb-3"  > Phone Number : </label>
      <input type="number" placeholder="Give Your Phone Number"  className="border border-yellow-500 p-1 rounded-md w-full" {...register("phoneNumber", { required: true })} />
{/* errors will return when field validation fails  */}
{errors.phoneNumber && <span className="text-red-500">this field is required</span>}
      </div>

      {/* include validation with required or other standard HTML validation rules */}
     <div  className="flex flex-col ">
     <label className="text-[#FFB700] mb-3"  > Your Address : </label>
     <input placeholder="Give Your Address"  className="border border-yellow-500 p-1 rounded-md w-full" {...register("address", { required: true })} />   
      {/* errors will return when field validation fails  */}
      {errors.address && <span className="text-red-500">This field is required</span>}
      </div>

      {/* --------------- product details ----------------------- */}

    <div className=" bg-blue-50">
         <h1 className="text-center text-4xl text-[#FFB700] p-4">Your Orders</h1>

{/*  --------------- main section in product details ---------- */}
         <div  className="m-5 bg-white p-3">
     
     <div className="flex justify-between  border-b-2  py-6">
        <h1>Product</h1>
        <h1>Subtotal</h1>
     </div>
     {/* product img and name section */}
     <div className="flex items-center justify-between pt-7 pb-3">
        <div className="flex  items-center gap-3">
           <img className="w-16" src={product.image} alt="No image" />
           <div >
            <h1>{product.productName}</h1>
            <div className="flex items-center gap-4">
                <p onClick={handleMinusButton} className="border btn bg-[#FFB700]"> - </p>
                <p className="text-green-700">{productQuantity}</p>
                <p onClick={handlePluseButton} className="border  btn bg-[#FFB700]"> + </p>
            </div>
           </div>
        </div>
        <div>
            <p>{subTotalPrice} <span className="ml-3 text-3xl">৳ </span></p>
        </div>
     </div>
    {/* ----------- subtotal section ----------- */}
     <div className="flex items-center justify-between p-5 border border-x-0">
        <h1>Subtotal</h1>
        <p className="text-[#FFB700]">{subTotalPrice} <span className="ml-3 text-3xl">৳ </span> </p>
     </div>

     {/* ---------- shipping and place  section -------------  */}
     <div className="flex items-center justify-between py-4">
        <h1>shipping</h1>
        <div >
        <div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Inside Dhaka <span className="text-[#FFB700]">50 ৳ </span></span>
    <input type="radio" onChange={()=>handlePlaceChange(50)} name="radio-6" className="radio radio-warning" required />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer gap-4">
    <span className="label-text">Outside Dhaka <span className="text-[#FFB700]">80 ৳ </span></span>
    <input type="radio" onChange={()=>handlePlaceChange(80)} name="radio-6" className="radio radio-warning"  />
  </label>
</div>
     </div>
     </div>

     {/* -------------------- total price section ------------- */}

     <div className="flex items-center justify-between pt-6 border-t">
        <h1>totalPrice</h1>
        <p className="text-[#FFB700] text-3xl">{totalPrice} <span>৳ </span></p>
     </div>

     </div>

<div className="m-2 px-3 flex flex-col gap-4 ">
    <h1 className="px-3">Cash on delivery</h1>

    <p className="bg-white p-3 text-[#FFB700]">Pay with cash upon delivery.</p>
</div>


     {/* ------------------------------------------ */}
    </div>


    {/* ------------------------ privacy policy ------------------- */}
      <p className="bg-blue-50 p-5">
      Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-2xl text-[#FFB700]"> Privacy policy</span>.
      </p>
     <div className="bg-blue-50 ">
      <input className="border border-yellow-500 p-1 w-full rounded-md bg-[#FFB700] hover:bg-lime-500 my-5 btn"   type="submit" />
      </div>
      </div>
    </form>
        </section >
    );
};

export default CheckOutForm;