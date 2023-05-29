import { useEffect, useState } from "react";

const useResturant = (resturantId) => {
  const [resturant, setResturant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchResturant();
  }, []);

  const fetchResturant = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.461094843480193&lng=78.55619128793478&restaurantId=${resturantId}&submitAction=ENTER`
      );
      const data = await response.json();
      setResturant(data?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    resturant,
    loadingRestutant: loading,
    errorFetchingResturant: error,
  };
};

export default useResturant;
