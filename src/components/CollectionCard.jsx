import { NavLink } from 'react-router-dom';
import image1 from '../assets/card1.png';  
import image2 from '../assets/card2.png';  
import image3 from '../assets/card3.png';  
import image4 from '../assets/card4.png';  


function CollectionCard(){
    const card = [
        {
            id:1, image: image1, title: 'Radiant Complexion'
        },
        {
            id:2, image: image2, title: 'Hydration Haven'
        },
        {
            id:3, image: image3, title: 'Ageless Beauty'
        },
        {
            id:4, image: image4, title: 'Soothing Sensitivity'
        },
    ]

    return(
        <section className="CollectionCard py-[30px]">
            <div className="page-width1">
                <div className="inner-container grid grid-cols-2 lg:grid-cols-4">
                    {card.map((card) => (
                        <NavLink to={'/shop'} key={card.id} className="h-[260px] md:h-[400px] bg-cover card-wrapper flex justify-center items-center" style={{ backgroundImage: `url(${card.image})` }}>
                            <div>
                                <h3 className="md:text-[28px] text-[20px] text-center text-white text-[20px] font-medium !m-[0px]">{card.title}</h3>
                                <span className="text-white underline pt-[10px] block">shop now</span>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CollectionCard;