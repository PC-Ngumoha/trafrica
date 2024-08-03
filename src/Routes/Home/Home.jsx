import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Destinations from "../../Components/Destinations/Destinations";
import Offers from "../../Components/Offers/Offers";
import Stats from "../../Components/Stats/Stats";
import Services from "../../Components/Services/Services";
import CTA from "../../Components/CTA/CTA";

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
      <h1>Loading more sections...</h1>
    </>
  );
};

export default Home;
