import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Destinations from "../../Components/Destinations/Destinations";
import Offers from "../../Components/Offers/Offers";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Offers />
      <h1>Loading more sections...</h1>
    </>
  );
};

export default Home;
