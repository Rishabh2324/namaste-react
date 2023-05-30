import { useParams } from "react-router-dom";
import useResturant from "../hooks/useResturant";

const ResturantMenu = () => {
  const { id } = useParams();

  const { resturant, loadingRestutant, errorFetchingResturant } =
    useResturant(id);

  return (
    <div>
      <h1>Resturant Menu {id}</h1>
      <h2>{resturant?.name}</h2>
      <h3>{resturant?.city}</h3>
      <h3>{resturant?.avgRating}</h3>
    </div>
  );
};

export default ResturantMenu;
