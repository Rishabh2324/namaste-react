import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.cart);
  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <button onClick={emptyCart} className="bg-red-500 font-bold">
        Clear Cart
      </button>
      {cartItems?.map((item) => (
        <div key={item?.id}>{item?.name}</div>
      ))}
    </div>
  );
};

export default Cart;
