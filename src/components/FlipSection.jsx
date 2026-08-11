import { NavLink } from "react-router-dom";


function FlipSection({ image, title, titleSpan, description, flip, showBtn }) {
    return (
        <>
            <div className="flipSection md:py-6 py-4 bg-white">
                <div className="page-width">
                    <div className={`innerContainer flex flex-col lg:flex items-center lg:gap-[40px] gap-[26px] ${flip ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                        <img className="lg:w-[50%] w-[100%] max-h-[500px] object-cover" src={image} alt={title} />
                        <div className="contentWrapper lg:w-[50%] w-[100%] flex flex-col items-start lg:gap-4 gap-[12px] text-left">
                            <h2 className="mainHeading !text-[#1C1B1B] md:!text-[50px] !text-[30px] !m-0 !font-black uppercase">{title} <span className="text-[#FF8500]">{titleSpan}</span></h2>
                            <p className="description text-[#1C1B1B] md:text-[16px] leading-[150%] text-[14px]">{description}</p>
                            {showBtn && (
                                <NavLink to={'/shop'} className="rounded-[5px] md:text-[22px] text-[16px] capitalize font-semibold bg-[#FF8500] md:py-[14px] md:px-[40px] py-[14px] px-[30px] text-white">
                                    shop now
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FlipSection;