import Banner from "../components/Banner";
import BenefitSection from "../components/BenefitSection";
import Brand from "../components/Brand";
import MerchantSection from "../components/MerchantSection";
import Services from "../components/shared/Service";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Brand></Brand>
            <BenefitSection></BenefitSection>
            <MerchantSection></MerchantSection>
        </div>
    );
};

export default Home;