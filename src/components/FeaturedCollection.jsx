import { products } from '../data/ProductData.jsx';
import { NavLink } from "react-router-dom";
function FeaturedCollection({showHeading, color}){
    return(
        <section className={`FeaturedCollection bg-${color || 'white'} py-[30px]`}>
            <div className="page-width">
                <div className="inner-container">
                    {showHeading && <h2 className="md:!text-[50px] !text-[26px] md:!pb-[30px] !pb-[15px] !mb-[20px]">Featured Collection</h2>}
                    <div className="collection-wrapper grid grid-cols-2 lg:grid-cols-4 md:gap-[20px] gap-[10px]">
                        {products.map((product) => (
                            <NavLink to={`/product/${product.id}`} key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} />
                                <h3 className="md:mb-[15px] mb-[8px] leading-[120%] text-left md:text-[20px] font-medium text-[16px]">{product.title}</h3>
                                <p className="text-left md:text-[30px] text-[20px] font-semibold">{product.price}</p>
                                <button className="rounded-[5px] md:text-[18px] cursor-pointer text-[16px] md:mt-[20px] mt-[15px] capitalize w-full font-semibold bg-[#FF8500] md:py-[14px] md:px-[40px] py-[10px] px-[30px] text-white" >Add To Cart</button>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FeaturedCollection;