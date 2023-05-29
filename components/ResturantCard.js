import { IMAGE_CDN_URL } from "../utils/constants";

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
    <div className="res-card">
      <img src={`${IMAGE_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{maxDeliveryTime}</h6>
      <h6>{avgRating}</h6>
      <h6>{costForTwoString}</h6>
    </div>
  );
};

export default ResturantCard;
