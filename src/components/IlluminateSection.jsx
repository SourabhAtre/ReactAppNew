import mainImage from "../assets/illiumenate.png";
import image1 from "../assets/item1.png";
import image2 from "../assets/item2.png";
import image3 from "../assets/item3.png";

function IlluminateSection() {
    const data = [
        {
            id: 1,
            image: image1,
            title: "Revolutionary Formulations",
            description: "NuanceGlow stands at the forefront of skincare innovation, crafting revolutionary formulations that blend cutting-edge science with natural goodness."
        },
        {
            id: 2,
            image: image2,
            title: "Luxury Redefined",
            description: "Elevate your skincare routine with NuanceGlow's commitment to luxury. Immerse yourself in the opulence of our meticulously crafted products,"
        },
        {
            id: 3,
            image: image3,
            title: "Proven Results, Every Time",
            description: "Our commitment to excellence ensures that each product delivers on its promise, giving you the confidence to embrace your natural beauty with radiant, glowing skin."
        },
    ]

    return(
        <section className="illuminate-section md:py-[60px] py-[30px]">
            <div className="page-width">
                <div className="innercontainer flex lg:flex-row flex-col items-start gap-x-[60px] gap-y-[30px]">
                    <img className="lg:w-[50%] w-full" src={mainImage} alt="Main Image" />
                    <div className="content-wrapper lg:w-[50%] w-full">
                        <h2 className="md:!text-[50px] !text-[26px] md:!pb-[30px] !pb-[15px] text-left"><strong className="text-[#1C1B1B] font-semibold">Illuminate Your Beauty with </strong><span className="text-[#FF8500] font-semibold">NUANCE </span><span className="text-[#1C1B1B] font-light">GLOW </span><span className="text-[#FF8500] font-semibold">?</span></h2>
                        <div className="botton-wrapper">
                            {data.map((item) => (
                                <div key={item.id} className="item flex gap-x-[15px] md:gap-x-[20px] items-start mb-[30px]">
                                    <img className="md:w-[55px] md:h-[55px] w-[30px] h-[30px] object-contain" src={item.image} alt={item.title} />
                                    <div className="block-content-wrapper flex flex-col md:gap-y-[10px] gap-y-[6px] justify-start items-start text-left">
                                        <h3 className="text-[#FF8500] font-bold md:text-[18px] text-[16px]">{item.title}</h3>
                                        <p className="max-w-[400px] text-gray-600 md:text-[16px] text-[14px] leading-[135%]">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IlluminateSection;