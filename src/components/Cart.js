import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col text-center">
      <h1 className="font-semibold text-gray-500">Your Cart is empty</h1>
      <Link to={"/"}>
        <button className="m-auto border-2 border-orange-600 font-semibold bg-orange-600 text-white px-8 py-2 uppercase text-lg hover:bg-white hover:text-orange-600 ">
          See resturants near you
        </button>
      </Link>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.cart);
  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) return <EmptyCart />;

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
