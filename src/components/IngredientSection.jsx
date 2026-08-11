import IngredientCard from "./IngredientCard";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const data = [
    {
        id:1,
        image: img1,
        title: 'Papaya',
        description: 'help even out the look of skin tone & help brighten & protect from the damaging effects of blue light & pollution.',
    },
    {
        id:2,
        image: img2,
        title: 'Tumeric',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
        id:3,
        image: img3,
        title: 'Kojic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    },
    {
        id:4,
        image: img4,
        title: 'Niacinamide',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    }
]

function IngredientSection() {
    return (
        <>
            <div className="IngredientSection py-8 bg-[#FFF9F4]">
                <div className="page-width">
                    <span className="uppercase text-black tracking-[4px] font-normal text-[14px] md:pb-[20px] pb-[15px] block">formulated with</span>
                    <h2 className="max-w-[600px] !mx-auto md:!text-[50px] !text-[26px] !text-black uppercase md:!pb-[30px] !pb-[15px] !font-semibold">Powerful, clean and organic <span className="text-[#FF8500] font-semibold">Ingredients</span></h2>
                    <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
                        {data.map((item, index) => (
                            <IngredientCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default IngredientSection;