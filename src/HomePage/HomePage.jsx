import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Feature from "../Component/Feature/Feature";


const HomePage = () => {
    return (
        <div className=" mx-auto">
            <Banner/>
            <AboutSection/>
            <Feature/>
        </div>
    );
};

export default HomePage;