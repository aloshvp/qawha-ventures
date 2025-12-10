import About from "@home/About";
import Banner from "@home/Banner";
import FuelYourDay from "@home/FuelYourDay";
import MarqueeComponent from "@home/Marquee";
import PelliniDetails from "@home/PelliniDetails";
import ProductSlider from "@home/ProductSlider";
import Testimonial from "@home/Testimonial";
import WhoWeAre from "@home/WhoWeAre";


export default function Home() {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <FuelYourDay />
      <PelliniDetails />
      <MarqueeComponent />
      <ProductSlider />
      <About />
      <Testimonial />
    </>
  );
}
