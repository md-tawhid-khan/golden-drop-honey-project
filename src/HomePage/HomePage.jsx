import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Feature from "../Component/Feature/Feature";
import ShopSection from "../Component/Shop/ShopSection";



const HomePage = () => {
    return (
        <div className=" mx-auto">
            <Banner/>
            <AboutSection/>
            <Feature/>
            <ShopSection/>
       
        </div>
    );
};

export default HomePage;