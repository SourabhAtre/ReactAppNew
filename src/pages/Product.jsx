import IngredientSection from '../components/IngredientSection.jsx'
import WhySection from '../components/WhySection.jsx'
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import ResultSection from '../components/ResultSection.jsx';
import {featuresData} from "../data/WhyData.jsx"
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { products } from "../data/ProductData.jsx";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();           // 🆕 for redirecting
    const { addToCart } = useCart();          // 🆕 from context
    // const [quantity, setQuantity] = useState(1); // quantity picker


    const product = products.find(p => p.id === Number(id));
    if (!product) {
        return (
        <div>
            <h2>Product not found!</h2>
            <NavLink to="/shop">Back to Shop</NavLink>
        </div>
        );
    }
    const [count, setCount] = useState(1);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleAddToCart() {
        addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: count,        // ← quantity user selected
        });
        navigate("/cart");           // ← redirect to cart page
    }


    return (
        <div>
            <div className="page-width">
                <div className="inner-container flex md:flex-row flex-col md:pt-[40px] pt-[20px] gap-[20px]">
                    <img className="md:w-[45%] w-[100%] md:max-h-[500px] max-h-[300px] object-contain border-1" src={product.image} alt={product.title} />
                    <div className="productInforwarpper md:w-[55%] w-[100%]">
                        <div className="max-w-[480px] sticky top-[10px]">
                            <h1 className="!m-0 !leading-[120%] md:!text-[40px] tracking-[-2px] text-left !text-[30px] !font-black uppercase !text-black">{product.title}</h1>
                            <p className="text-left py-[10px] text-[16px] leading-[140%] max-w-[480px]">{product.description}</p>
                            <p className="text-left !leading-[120%] md:tracking-[-2px] tracking-[-1px] md:!text-[35px] !text-[26px] !font-black" >{product.price}</p>
                            <div className="mt-[10px] mb-[20px] qtyWrapper max-w-[130px] h-[47px] border-1 flex items-center justify-between">
                                <button onClick={decrement} className="bg-[#e0e0e0] cursor-pointer w-[33.33%] h-auto flex items-center justify-center qty-button-common">-</button>
                                <span className="w-[33.33%] h-auto flex items-center justify-center qty-button-common" >{count}</span>
                                <button onClick={increment} className="bg-[#e0e0e0] cursor-pointer w-[33.33%] h-auto flex items-center justify-center qty-button-common">+</button>
                            </div>
                            <button onClick={handleAddToCart} className="cursor-pointer my-[10px] flex items-center justify-center w-full rounded-[5px] md:text-[20px] text-[16px] capitalize font-semibold bg-[#FF8500] md:py-[14px] md:px-[40px] py-[14px] px-[30px] text-white" >Add To Cart</button>
                            <NavLink to="/shop" className="text-left w-full flex text-[14px] hover:underline">← Back to Shop</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <WhySection heading="WHY" grid2x2={false} features={featuresData} />
            <ResultSection />
            <IngredientSection />
            <FeaturedCollection showHeading={true} />
        </div>
    );
}
export default Product;

