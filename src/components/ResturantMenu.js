import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import useResturant from "../hooks/useResturant";
import { addItem } from "../utils/cartSlice";

const ResturantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { resturant, loadingRestutant, errorFetchingResturant } =
    useResturant(id);

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  if (!resturant) return null;

  return (
    <div>
      <h1>Resturant Menu {id}</h1>
      <h2>{resturant[0]?.card?.card?.info?.name}</h2>
      <h3>{resturant[0]?.card?.card?.info?.city}</h3>
      <h3>{resturant[0]?.card?.card?.info?.avgRating}</h3>

      <div>
        {resturant[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
          (item) => (
            <div key={item?.card?.info?.id}>
              {item?.card?.info?.name}
              <button
                className="bg-green-500 ml-2 p-1 font-bold"
                onClick={() => addItemToCart(item?.card?.info)}
              >
                Add
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ResturantMenu;
