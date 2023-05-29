import { useEffect, useState } from "react";

const useResturants = () => {
  const [resturants, setResturants] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //API CALL
    fetchResturants();
  }, []);

  const fetchResturants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.461094843480193&lng=78.55619128793478&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      setResturants(data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    resturants,
    loadingRestutants: loading,
    errorFetchingResturants: error,
  };
};

export default useResturants;
