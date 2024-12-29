

import { Link } from "react-router-dom";
import LogoImg from "../../assets/logoImg.png"

const Navbar = ({handleShopRef,handleAboutRef,handlefeedbackRef,handleContactRef}) => {
   

    const navLink=<div className="flex gap-3">
        <li><button className="active:bg-[#FFB700]"  >Home</button></li>
        <li><button onClick={handleAboutRef} className="active:bg-[#FFB700]" >About Us</button></li>
      <li><button onClick={handleShopRef} className="active:bg-[#FFB700]" >Shop</button></li>
        <li><button onClick={handlefeedbackRef} className="active:bg-[#FFB700]">Blog</button></li>
        <li><button onClick={handleContactRef} className="active:bg-[#FFB700]">Contact</button></li>
    </div>
    
    return (
        <div className="navbar bg-base-100 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="flex flex-row-reverse items-center gap-2">
    <h1 className="font-bold text-2xl text-[#FFB700]">Golden Drops</h1>
    <img src={LogoImg} alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link to='/signIn' className="btn hover:bg-[#FFB700]">Log In</Link>
    <Link to='/signUp' className="btn hover:bg-[#FFB700]">Sign Up</Link>
  </div>
</div>
    );
};

export default Navbar;