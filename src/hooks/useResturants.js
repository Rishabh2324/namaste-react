import { useEffect, useState } from "react";

import { CARD_TYPE, RESTAURANTS_URL } from "../utils/constants";

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
      const response = await fetch(RESTAURANTS_URL);
      const data = await response.json();
      setResturants(
        data?.data?.cards?.find(
          (card) => card.cardType === CARD_TYPE.ALL_RESTURANTS
        )?.data?.data?.cards
      );
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
