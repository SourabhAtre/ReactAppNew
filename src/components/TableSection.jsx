const CheckIcon = () => (
    <svg className="md:w-[40px] md:h-[40px] w-[25px] h-[25px]" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.7583 0.542603C48.9794 0.542603 62.9749 14.5373 62.9751 31.7584C62.9751 48.9786 48.9807 63.024 31.7583 63.024C14.5372 63.0238 0.54248 49.0284 0.54248 31.8073C0.542693 14.5874 14.5362 0.542847 31.7583 0.542603Z" fill="#FF8500" stroke="#FF8500" stroke-width="1.08556"/>
        <path d="M45.9517 18.6526C46.371 18.4502 46.8429 18.3838 47.3013 18.4631C47.76 18.5426 48.183 18.7642 48.5112 19.0959L48.6294 19.2249C48.8921 19.5348 49.0677 19.9111 49.1362 20.3147C49.2145 20.776 49.1494 21.2505 48.9497 21.6731L48.9282 21.719L48.8921 21.7551L25.4663 45.4153C25.0845 45.8472 24.5516 46.1143 23.978 46.1584L23.9556 46.1604L23.9331 46.1584C23.3593 46.1143 22.8266 45.8472 22.4448 45.4153L14.6362 37.5286L14.6001 37.4924L14.5786 37.4465C14.3788 37.0241 14.3137 36.5495 14.3921 36.0881C14.4705 35.6267 14.6888 35.201 15.0171 34.8694C15.3453 34.5378 15.7676 34.317 16.2261 34.2375C16.6273 34.1681 17.0389 34.2097 17.4165 34.3567L17.5767 34.426L17.6226 34.4485L17.6577 34.4846L23.8774 40.7659L45.8716 18.7102L45.9067 18.6741L45.9517 18.6526Z" fill="white" stroke="white" stroke-width="0.589976"/>
    </svg>
);
const CrossIcon = () => (
    <svg className="md:w-[20px] md:h-[20px] w-[15px] h-[15px]" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4507 1.14026C23.2477 0.343326 24.5666 0.343546 25.3638 1.14026C26.1598 1.93624 26.1604 3.25193 25.3667 4.04944L25.3677 4.05042L4.05713 25.7506L4.0542 25.7545C3.25705 26.5517 1.93729 26.5517 1.14014 25.7545C0.343258 24.9575 0.34337 23.6386 1.14014 22.8414L22.4478 1.14417L22.4507 1.14026Z" fill="white" stroke="white" stroke-width="1.08556"/>
        <path d="M1.14014 1.14026C1.88756 0.392836 3.09427 0.346437 3.89893 1.00061L4.0542 1.14026L4.05713 1.14417L25.3677 22.8444H25.3667C26.161 23.6418 26.16 24.9583 25.3638 25.7545C24.5666 26.5514 23.2478 26.5516 22.4507 25.7545L22.4478 25.7506L1.14014 4.05334C0.343477 3.25614 0.34315 1.93725 1.14014 1.14026Z" fill="white" stroke="white" stroke-width="1.08556"/>
    </svg>
);
import logoImage from '../assets/navLogo.png';


function TableSection() {
    const tableData = [
        { id: 1, name: 'Revolutionary Formulations', crossIcon: <CrossIcon />, checkIcon: <CheckIcon /> },
        { id: 2, name: '100% Proven Results', crossIcon: <CrossIcon />, checkIcon: <CheckIcon /> },
        { id: 3, name: 'Natural Goodness', crossIcon: <CrossIcon />, checkIcon: <CheckIcon /> },
        { id: 4, name: 'Eco-Friendly Practices', crossIcon: <CrossIcon />, checkIcon: <CheckIcon /> },
        { id: 5, name: 'Lab Tested', crossIcon: <CrossIcon />, checkIcon: <CheckIcon /> },
    ];

    return (
        <section className="tableSection bg-[radial-gradient(circle,_#FFA746,_#FF7A00)] py-[50px]">
            <div className="page-width !max-w-[1000px]">
                <div className="innercontainer">
                    <div className="table-header flex items-center">
                        <div className="column1 common-column md:w-[60%] w-[46%] md:py-[20px] py-[20px]">
                            <h2 className="!m-0 !leading-[90%] md:!text-[50px] text-left !text-[25px] max-w-[300px] !font-black uppercase !text-white">how we stack up</h2>
                        </div>
                        <div className="rounded-tl-[20px] rounded-tr-[20px] column2 common-column bg-white md:w-[20%] w-[29%] h-auto flex items-center justify-center md:py-[20px] py-[20px]" >
                            <img src={logoImage} alt="Table Logo" className="md:max-w-[160px] max-w-[100%] px-[10px]" />
                        </div>
                        <div className="column3 common-column md:w-[20%] w-[25%] h-auto flex items-center justify-center md:py-[20px] py-[20px]" >
                            <span className="text-white md:text-[20px] text-[16px] leading-[120%] font-black">other<br />brands</span>
                        </div>
                    </div>
                    {tableData.map((item) => (
                        <div key={item.id} className="table-td flex items-center border-t-2 border-white">
                            <div className="column1 common-column md:w-[60%] w-[46%] flex items-center justify-start">
                                <span className="leading-[115%] text-white text-left md:text-[20px] text-[15px] md:max-w-[unset] max-w-[100px] font-black">{item.name}</span>
                            </div>
                            <div className={`column2 col-${item.id} common-column bg-white md:w-[20%] w-[29%] h-auto flex items-center justify-center md:py-[30px] py-[25px]`}>
                                <span>{item.checkIcon}</span>
                            </div>
                            <div className="column3 common-column md:w-[20%] w-[25%] h-auto flex items-center justify-center md:py-[30px] py-[25px]">
                                <span>{item.crossIcon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TableSection;