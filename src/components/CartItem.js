import { IMAGE_CDN_URL } from "../utils/constants";

const CartItem = ({ name, costForTwoString }) => {
  return (
    <div className="w-72 px-4 pt-4 pb-10 border-2 border-white hover:border-2 hover:border-neutral-300">
      <img src={`${IMAGE_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <h1>{name}</h1>
      <h6>{costForTwoString}</h6>
    </div>
  );
};

export default CartItem;
