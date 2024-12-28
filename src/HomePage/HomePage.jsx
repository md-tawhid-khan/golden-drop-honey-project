import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import ContactSection from "../Component/ContactSection/ContactSection";
import Feature from "../Component/Feature/Feature";
import Feedback from "../Component/Feedback/Feedback";
import Footer from "../Component/FooterSection/Footer";
import Offersection from "../Component/OfferSection/Offersection";
import ShopSection from "../Component/Shop/ShopSection";



const HomePage = () => {
    return (
        <div className=" mx-auto">
            <Banner/>
            <AboutSection/>
            <Feature/>
            <ShopSection/>
            <Feedback/>
            <ContactSection/>
            <Offersection/>
            <Footer/>
       
        </div>
    );
};

export default HomePage;