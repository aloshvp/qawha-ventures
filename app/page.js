// import About from "@home/About";
import Banner from "@home/Banner";
import Blogs from "@home/Blogs";
// import Brochure from "@home/Brochure";
import Faq from "@home/Faq";
// import FuelYourDay from "@home/FuelYourDay";
// import MarqueeComponent from "@home/Marquee";
// import PelliniDetails from "@home/PelliniDetails";
// import ProductSlider from "@home/ProductSlider";
// import Testimonial from "@home/Testimonial";
// import WhoWeAre from "@home/WhoWeAre";
import BrandLegacy from "@home/BrandLegacy";
import PelleniSec from "@home/PelleniSec";


export default function Home() {
  return (
    <>
      <Banner />
      <BrandLegacy />
      <PelleniSec />
      {/* <WhoWeAre /> */}
      {/* <FuelYourDay /> */}
      {/* <PelliniDetails /> */}
      {/* <MarqueeComponent /> */}
      {/* <ProductSlider /> */}
      {/* <About /> */}
      <Faq />
      {/* <Testimonial /> */}
      <Blogs />
      {/* <Brochure /> */}
    </>
  );
}
