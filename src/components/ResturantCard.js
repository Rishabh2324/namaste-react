import { IMAGE_CDN_URL } from "../utils/constants";

export const LoadingCard = () => {
  return (
    <div className="m-3 w-72 px-4 pt-4 pb-10">
      <div className="bg-slate-200 w-full h-40"></div>
      <div className="bg-slate-200 w-3/4 h-2 mt-2"></div>
      <div className="bg-slate-200 w-1/2 h-2 mt-2"></div>
    </div>
  );
};

const ResturantCard = ({ resturant }) => {
  const {
    name,
    cuisines,
    costForTwoString,
    maxDeliveryTime,
    avgRating,
    cloudinaryImageId,
  } = resturant.data;
  return (
    <div className="w-72 px-4 pt-4 pb-10 border-2 border-white hover:border-2 hover:border-neutral-300">
      <img src={`${IMAGE_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <h3 title={name}>{name}</h3>
      <h5>{cuisines?.join(", ")}</h5>
      <h6>{maxDeliveryTime}</h6>
      <h6>{avgRating}</h6>
      <h6>{costForTwoString}</h6>
    </div>
  );
};

export default ResturantCard;
