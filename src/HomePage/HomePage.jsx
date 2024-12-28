import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Feature from "../Component/Feature/Feature";
import Feedback from "../Component/Feedback/Feedback";
import ShopSection from "../Component/Shop/ShopSection";



const HomePage = () => {
    return (
        <div className=" mx-auto">
            <Banner/>
            <AboutSection/>
            <Feature/>
            <ShopSection/>
            <Feedback/>
       
        </div>
    );
};

export default HomePage;