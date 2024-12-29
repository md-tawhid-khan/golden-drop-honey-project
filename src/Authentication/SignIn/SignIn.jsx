
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signInImg from '../../assets/singInImg.png'
import useAuth from '../../Custom/useAuth';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
const SignIn = () => {
  const {signIn,googleSignIn}=useAuth()
  const location=useLocation()
  const navigate=useNavigate()

  const from=location.state || ('/')

  const handleSignIn=async(e)=>{
    e.preventDefault()
    const form =e.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log({email,password})
    try{
      const result=await signIn(email,password)
      if(result?.user){
        Swal.fire("successfully sign in ")
        navigate(from)
      }
    }
    catch(error){
      Swal.fire(error.message)
    }
  }

const handleGoogleSignIn=async()=>{
  try{
    await googleSignIn()
    navigate(from)
  }
  catch(error){
    Swal.fire(error.message)
  }
     
}

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content grid lg:grid-cols-2">
          <div className="text-center lg:text-left">
            
            <img src={signInImg} alt="" />
          </div>
          <div >
          <h1 className="text-5xl font-bold mb-11 text-[#FFB700] px-7">Login now!</h1>
         
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FFB700]">Login</button>
              </div>
            </form>
            <p className='px-4'>if you do not have  an account <Link to='/signUp' className='btn btn-link '>sign up</Link> </p>

            <div onClick={handleGoogleSignIn} className='btn  flex gap-3 items-center text-3xl bg-red-100 mb-3 mx-6'>
              <p><FaGoogle /></p>
              <h1  className='text-[#FFB700]'>GoogleSignIn</h1>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
};

export default SignIn;