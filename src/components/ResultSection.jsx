function ResultSection(){
    const data = [
        {
            id:1, title: '96%', text:'agreed skin feels moisturized & refreshed'
        },
        {
            id:2, title: '95%', text:'agreed skin looks more even-toned'
        },
        {
            id:3, title: '98%', text:'agreed skin looks healthier'
        }
    ]
    return(
        <section className="result_Section">
            <div className="page-width">
                <div className="innerContainer bg-[#ff8500] rounded-[20px] md:py-[50px] py-[30px] px-[50px] flex flex-col items-center gap-[50px]">
                    <h2 className="!m-0 leading-[90%] md:!text-[70px] !text-[45px] !font-black capitalize md:!tracking-[-6px] !tracking-[-3px] !text-white">Real Results</h2>
                    <div className="box-wrapper1 w-full flex items-center md:flex-row flex-col md:gap-0 gap-[30px] !justify-between ">
                        {data.map((item) => (
                            <div key={item.id} className="box flex flex-col items-center gap-[10px]">
                                <h3 className="!m-0 leading-[90%] md:!text-[70px] !text-[45px] !font-black uppercase !text-white">{item.title}</h3>
                                <p className="text-white max-w-[200px] md:text-[16px] leading-[140%] text-[14px]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResultSection;