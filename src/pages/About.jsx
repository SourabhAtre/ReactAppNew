import FlipSection from '../components/FlipSection.jsx';
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import WhySection from '../components/WhySection.jsx';
import {AboutfeaturesData} from "../data/WhyData.jsx"
import AboutBanner from '../components/AboutBanner.jsx';
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import image22 from "../assets/image33.png";

function About() {
  return (
    <div>
      <AboutBanner />
      <FlipSection showBtn={true} flip={true} image={image22} title="Our" titleSpan="Philosophy" description="At NuanceGlow, we stand at the intersection of nature and innovation. Our philosophy revolves around the idea that skincare should not only enhance your appearance but also celebrate the beauty that makes you one of a kind. We believe in the power of botanicals, the precision of science, and the joy of indulgence, creating products that nourish, revitalize, and illuminate." />
      <WhySection heading="WHY CHOOSE" grid2x2={true} features={AboutfeaturesData} />
      <FlipSection image={img5} title="Our" titleSpan="mission" description="At NuanceGlow, our mission is to redefine beauty by offering skincare that goes beyond the surface. We are committed to providing innovative, proven, and luxurious products that empower individuals to embrace and enhance their natural radiance. Through a harmonious blend of nature and science, we strive to create a skincare experience that transcends routine, promoting self-love and confidence." />
      <FlipSection flip={true} image={img6} title="Our" titleSpan="vision" description="NuanceGlow envisions a world where skincare is a holistic celebration of individual beauty. We aim to be a global leader in innovative and sustainable skincare solutions, inspiring a community of empowered individuals who radiate confidence and self-love. Our vision is to continuously push the boundaries of skincare, setting new standards for excellence, and contributing to a brighter, more beautiful world." />
      <FeaturedCollection showHeading={true}/>
    </div>
  );
}
export default About;