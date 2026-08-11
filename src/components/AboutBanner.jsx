import bannerImage from "../assets/AboutBanner.png";

function AboutBanner(){
    return(
        <section className="heroBanner bg-cover bg-no-repeat md:bg-center bg-[position:59%_center]" style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="page-width">
                <div className="inner-container md:max-w-[500px] max-w-full ml-[auto]">
                    <div className="text_wrapper md:h-[530px] h-[460px] flex flex-col items-center justify-center gap-[10px]">
                        <h1 className="!m-0 leading-[90%] md:!text-[70px] !text-[45px] !font-black uppercase !text-white">about nuance glow</h1>
                        <p className="text-white md:text-[16px] leading-[140%] text-[14px]">We believe that beauty is a nuanced expression, a delicate balance of nature and science working harmoniously. Our journey began with a passion for crafting skincare that transcends the ordinary, delivering transformative results that speak to the unique essence of every individual.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner;