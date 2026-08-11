import FeaturedCollection from '../components/FeaturedCollection.jsx';

function Shop() {
  return (
    <div>
      <h1 className="page-width md:!text-[50px] leading-[120%] !text-[26px] md:!pb-[30px] !pb-[15px] text-left !mt-[30px]"><strong className="text-[#1C1B1B] font-semibold">WHY </strong><span className="text-[#FF8500] font-semibold">NUANCE </span><span className="text-[#1C1B1B] font-light">GLOW </span></h1>
      <FeaturedCollection showHeading={false} color="#f9f4f4"/>
      <FeaturedCollection showHeading={false} color="#f9f4f4"/>
      <FeaturedCollection showHeading={true} color="#f9f4f4"/>
    </div>
  );
}
export default Shop;