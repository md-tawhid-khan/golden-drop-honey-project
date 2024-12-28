import playstoreImg from "../../assets/playstoreImg.png"
import appstoreImg from '../../assets/appstore.png'
import logoImg from '../../assets/logoImg.png'
import { TiSocialFacebook } from "react-icons/ti";
import { FaBehance, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10 mt-16">
        <aside>
          <div className="flex items-center gap-4 mb-5">
            <img src={logoImg} alt="" />
            <h1 className="text-3xl text-[#FFB700]">Golden Drops</h1>
          </div>
          <div className="flex flex-row-reverse gap-4">
          <a className="border border-black rounded-full p-1"><TiSocialFacebook  /></a>
         <a className="border border-black rounded-full p-1"><FaYoutube  /></a>
          <a className="border border-black rounded-full p-1"><FaInstagram  /></a>
        <a  className="border border-black rounded-full p-1"><FaXTwitter /></a>
          <a className="border border-black rounded-full p-1"><FaBehance  /></a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Home</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">whatsapp</a>
        </nav>
        <nav>
          <h6 className="footer-title">Help Center</h6>
          <a className="link link-hover">Help</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">condition</a>
          <a className="link link-hover">setting</a>
        </nav>
        <nav>
          <h6 className="footer-title">get the app !</h6>
          <a className="link link-hover"><img src={playstoreImg} alt="" /></a>
          <a className="link link-hover"><img src={appstoreImg} alt="" /></a>        
        </nav>
      </footer>
    );
};

export default Footer;