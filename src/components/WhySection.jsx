import WhyCard from "./WhyCard"


function WhySection({heading, grid2x2, features}) {
    return (
        <>
            <div className="WhySection py-8 bg-[#FFF9F4]">
                <div className="page-width">
                    <h2 className="md:!text-[50px] !text-[26px] md:!pb-[30px] !pb-[15px]"><strong className="text-[#1C1B1B] font-semibold">{heading} </strong><span className="text-[#FF8500] font-semibold">NUANCE </span><span className="text-[#1C1B1B] font-light">GLOW </span><span className="text-[#FF8500] font-semibold">?</span></h2>

                    <div className={`grid ${grid2x2 ? 'grid-cols-2' : 'lg:grid-cols-4 grid-cols-2'} md:gap-4 gap-2`}>
                        {features.map((feature) => (
                            <WhyCard
                                key={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhySection;