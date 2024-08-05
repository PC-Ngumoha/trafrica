import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Destinations from "../../Components/Destinations/Destinations";
import Offers from "../../Components/Offers/Offers";
import Stats from "../../Components/Stats/Stats";
import Services from "../../Components/Services/Services";
import CTA from "../../Components/CTA/CTA";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Offers />
      <Stats />
      <Services />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
