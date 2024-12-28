
import { useRef } from "react";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import ContactSection from "../Component/ContactSection/ContactSection";
import Feature from "../Component/Feature/Feature";
import Feedback from "../Component/Feedback/Feedback";
import Footer from "../Component/FooterSection/Footer";
import Offersection from "../Component/OfferSection/Offersection";
import ShopSection from "../Component/Shop/ShopSection";

import Navbar from "../Share/Navbar/Navbar";



const HomePage = () => {
    const shopRef=useRef(null)
    const aboutRef=useRef(null)
    const feedbackRef=useRef(null)
    const contactRef=useRef(null)
    
    const handleShopRef=()=>{
        if(shopRef.current){
            shopRef.current.scrollIntoView({behavior:'smooth',block:'end'})
        }else {
            console.warn("Shop section reference is null. Ensure the section is rendered.");
        }      
    }  
    
    const handleAboutRef=()=>{
        if(aboutRef.current){
            aboutRef.current.scrollIntoView({behavior:'smooth',block:'end'})
        }else{
            console.warn("Shop section reference is null. Ensure the section is rendered.")
        }
    }
    const handlefeedbackRef=()=>{
        if(feedbackRef.current){
            feedbackRef.current.scrollIntoView({behavior:'smooth',block:'end'})
        }else{
            console.warn("Shop section reference is null. Ensure the section is rendered.")
        }
    }
    const handleContactRef=()=>{
        if(contactRef.current){
            contactRef.current.scrollIntoView({behavior:'smooth',block:'end'})
        }else{
            console.warn("Shop section reference is null. Ensure the section is rendered.")
        }
    }

    return (
        <div className=" mx-auto">
            <Navbar handleShopRef={handleShopRef}
            handleAboutRef={handleAboutRef}
            handlefeedbackRef={handlefeedbackRef}
            handleContactRef={handleContactRef}/>
            <Banner/>
            <AboutSection ref={aboutRef}/>
            <Feature/>
            <ShopSection ref={shopRef}/>
            <Feedback ref={feedbackRef}/>
            <ContactSection ref={contactRef}/>
            <Offersection/>
            <Footer/>
           
       
        </div>
    );
};

export default HomePage;