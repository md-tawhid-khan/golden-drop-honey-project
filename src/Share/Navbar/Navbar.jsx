import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/logoImg.png"

const Navbar = () => {

    const navLink=<div className="flex gap-3">
        <li><NavLink to='/' className={({isActive})=>isActive? 'bg-[#FFB700]':'bg-white ' }>Home</NavLink></li>
        <li><NavLink to='/sfh' className={({isActive})=>isActive? 'bg-[#FFB700]':'bg-white ' }>About Us</NavLink></li>
      <li><NavLink  to='/sfh4' className={({isActive})=>isActive? 'bg-[#FFB700]':'bg-white ' }>Shop</NavLink></li>
        <li><NavLink to='/ert' className={({isActive})=>isActive? 'bg-[#FFB700]':'bg-white ' }>Blog</NavLink></li>
        <li><NavLink to='/dgfh' className={({isActive})=>isActive? 'bg-[#FFB700]':'bg-white ' }>Contact</NavLink></li>
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
    <a className="btn hover:bg-[#FFB700]">Log In</a>
    <a className="btn hover:bg-[#FFB700]">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;