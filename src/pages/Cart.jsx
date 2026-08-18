import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  // empty cart screen
  if (cart.length === 0) {
    return (
      <div className="py-[80px]">
        <h2>Your cart is empty!</h2>
        <button className="underline" onClick={() => navigate("/shop")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  const handleCheckout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: total*100,
        }),
      });

      const order = await response.json();
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "My React Store",
        description: "Test Payment",
        order_id: order.id,


        theme: {
          color: "#000000",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };


  return (


    <div className="page-width w-full !max-w-[1000px]">
      <h1 className="md:!text-[30px] !text-[26px]">Your Cart</h1>
      <button className="py-[20px] underline text-right md:text-[16px] text-[14px] cursor-pointer ml-auto block" onClick={() => navigate("/shop")}>
        Continue Shopping
      </button>
      {/* Cart Items */}
      {cart.map((item) => (
        <div key={item.id} className="flex items-center gap-[20px] mb-[20px] text-left border-b border-[#b8b8b8] md:pb-0 pb-[10px]">

          <img src={item.image} alt={item.title} className="md:w-[15%] w-[25%] md:min-w-[120px] md:h-[120px] min-w-[100px] h-[100px] object-contain" />
          <div className="contentWrapper md:w-[85%] w-[75%] flex md:flex-row flex-col justify-between md:items-center items-start gap-[5px]">
            <div className="flex items-start flex-col text-left">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
            <div className="qty-remove-wrapper flex items-center gap-[20px]">
              <div className="qtyWrapper md:min-w-[100px] md:h-[35px] min-w-[80px] h-[30px] border-1 flex items-center justify-between">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="bg-[#e0e0e0] cursor-pointer w-[33.33%] h-auto flex items-center justify-center qty-button-common"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-[#e0e0e0] cursor-pointer w-[33.33%] h-auto flex items-center justify-center qty-button-common"
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                <svg className="md:w-[20px] md:h-[20px] w-[18px] h-[18px] cursor-pointer" width="800" height="800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1" fill="#cf1f1f" />
                </svg>
              </button>
            </div>
            <p>
              ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
            </p>
          </div>

        </div>
      ))}

      {/* Order Summary */}
      <div className="text-right py-[20px]">
        <h4>Order Summary</h4>
        {/* <p>Items: {cart.length}</p> */}
        <h3>Total: <strong>${total.toFixed(2)}</strong></h3>
        <button onClick={handleCheckout} className="block w-max py-[7px] cursor-pointer text-[16px] px-[30px] mt-[10px] ml-auto text-center bg-[#000] text-[#fff]">
          Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;