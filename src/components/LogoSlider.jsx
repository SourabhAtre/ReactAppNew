import image1 from '../assets/logo1.png';
import image2 from '../assets/logo2.png';
import image3 from '../assets/logo3.png';
import image4 from '../assets/logo4.png';
import image5 from '../assets/logo5.png';
import image6 from '../assets/logo6.png';
import  {useState} from 'react';

function LogoSlider() {
    const [activeId, setActiveId] = useState(4);
    const data = [
        {
            id: 1, image: image1, text: 'NuanceGlow has truly transformed my daily skincare routine.'
        },
        {
            id: 2, image: image2, text: 'Body wash is a game-changer, leaving'
        },
        {
            id: 3, image: image3, text: 'The papaya-infused body wash is a game-changer'
        },
        {
            id: 4, image: image4, text: 'leaving my skin feeling refreshed and radiant all day'
        },
        {
            id: 5, image: image5, text: 'Elevate your shower routine with our tropical-inspired'
        },
        {
            id: 6, image: image6, text: 'Free standard shipping on all U.S. orders.'
        },
    ]

    return (
        <div className="logo-slider bg-[#FFBA6F] py-[40px]">
            <div className="page-width">
                <div className="innercontainer">
                    <div className="md:min-h-[unset] min-h-[80px]">
                        {data.map((data) => (
                            <p key={data.id} className={`text-white md:text-[30px] text-[20px] leading-[120%] md:!mb-[60px] !mb-[40px] text-semibold ${activeId === data.id ? "block" : "hidden"}`}>{data.text}</p>
                        ))}
                    </div>
                    <div className="md:flex grid grid-cols-3 gap-x-[10px] gap-y-[30px] items-center justify-center gap-[0] flex-wrap">
                        {data.map((data) => (
                            <div onClick={() => setActiveId(data.id)} className={`cursor-pointer logo-box md:w-[100px] md:h-[60px] w-[90px] h-[60px] m-auto opacity-50 ${activeId === data.id ? "opacity-100" : ""}`} key={data.id}>
                                <img className="w-full h-full object-contain" src={data.image} alt={data.text} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogoSlider;