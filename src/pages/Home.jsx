import HeroBanner from '../components/HeroBanner.jsx';
import LogoSlider from '../components/LogoSlider.jsx';
import {featuresData} from "../data/WhyData.jsx"
import WhySection from '../components/WhySection.jsx';
import FlipSection from '../components/FlipSection.jsx';
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import CollectionCard from '../components/CollectionCard.jsx';
import IlluminateSection from '../components/IlluminateSection.jsx';
import TableSection from '../components/TableSection.jsx';
import image22 from "../assets/image22.png";

function Home() {
  return (
    <div>
      <HeroBanner />
      <LogoSlider />
      <FlipSection showBtn={true} flip={true} image={image22} title="Transform Your Beauty Ritual" description="Immerse yourself in a transformative journey to healthier, more beautiful skin with NuanceGlow. Revolutionize your daily routine as our carefully crafted products redefine the essence of self-care, promising a radiant transformation at every step." />
      <WhySection heading="WHY" grid2x2={false}  features={featuresData}/>
      <FeaturedCollection showHeading={true}/>
      <CollectionCard />
      <IlluminateSection />
      <TableSection />
      <FeaturedCollection showHeading={true}/>
    </div>
  );
}
export default Home;