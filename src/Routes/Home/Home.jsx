import Hero from "../../Components/Hero/Hero";
import Destinations from "../../Components/Destinations/Destinations";
import Offers from "../../Components/Offers/Offers";
import Stats from "../../Components/Stats/Stats";
import Services from "../../Components/Services/Services";
import CTA from "../../Components/CTA/CTA";
import Footer from "../../Components/Footer/Footer";

/**
 * Implements the Home / Landing page for the app.
 *
 * Essentially, this is the very first page that the user will see
 * whenever they access the web application.
 *
 *
 * @returns <Home />
 */
const Home = () => {
  return (
    <>
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
