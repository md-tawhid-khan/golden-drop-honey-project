import { useForm } from "react-hook-form";
import useAuth from "../../Custom/useAuth";
import axios from "axios";


const SignUp = () => {
const {createUser,updateprofile}=useAuth()
  const {register, handleSubmit,formState:{errors}}=useForm()

const onSubmit=async(data)=>{
   const {name, email, password}=data;
   console.log(data)
   await createUser(email,password)
   await updateprofile(name)
  
 
}

    return (
     <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="flex flex-col gap-3">
      <label>Your Name</label>
      <input className="border border-[#FFB700]" type="text"  placeholder="Your Name" {...register("name", {required:'Insert your name '})} 
      aria-invalid={errors.name?'true':'false'}/>
    {errors.name && <p className="text-red-500" role="alert">{errors.name.message}</p>} 
      </div>
      <div className="flex flex-col gap-3 my-2">
        <label> Your Email</label>
      <input className="border border-[#FFB700]" type="email" placeholder="your email address "
        {...register("email", { required: "Email Address is required !!!" })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email && <p className="text-red-500" role="alert">{errors.mail.message}</p>}
      </div>

      <div className="flex flex-col gap-3 mb-2">
        <label>Password</label>
        <input className="border border-[#FFB700]" type="password" placeholder="give password" 
        {...register('password', {maxLength:{
          value:15,
          message:'password length not more than 15 character'
        },minLength:{
          value:7,
          message:'at least 7 character give in password field'
        },required:'Password is required !!!',
          pattern: {
            value: /^(?=.*[A-Z])(?!.*[A-Z].*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?/]).{7,}$/,
            message: "Password must contain exactly one uppercase letter, at least one number, and one special character"
          }
        })}
        aria-invalid={errors.password?"true":"false"}/>
        {
          errors.password && <p className="text-red-500" role="alert">{errors.password.message}</p>
        }
      </div>
      
      <input className="border border-[#FFB700] rounded-md hover:bg-[#FFB700]" placeholder="submit" type="submit" />

      
     </form>
    );
};

export default SignUp;