import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  CARD_TYPE,
  QUERY_PARAM_KEYS,
  RESTAURANTS_URL,
} from "../utils/constants";

const useResturants = () => {
  let [searchParams] = useSearchParams();

  const filter =
    searchParams.size > 0
      ? window.location.search.split("?")[1]
      : QUERY_PARAM_KEYS.SORT_BY + "=RELEVANCE";

  const [resturants, setResturants] = useState({
    data: null,
    currentResturants: null,
    totalResturants: null,
  });
  const [sorts, setSorts] = useState(null);
  const [filters, setFilters] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //API CALL;
    fetchResturants();
  }, []);

  const fetchResturants = async (merge = false, offset) => {
    try {
      const response = await fetch(
        RESTAURANTS_URL +
          "&" +
          filter +
          `${
            merge
              ? `&offset=${offset}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
              : "&page_type=DESKTOP_WEB_LISTING"
          }`
      );
      const data = await response.json();
      const resturants = merge
        ? data?.data
        : data?.data?.cards?.find(
            (card) => card.cardType === CARD_TYPE.ALL_RESTURANTS
          )?.data?.data;
      setResturants((prevData) => ({
        data: merge
          ? [...prevData?.data, ...resturants?.cards]
          : resturants?.cards || [],
        currentResturants: merge
          ? prevData?.currentResturants + resturants?.card?.length
          : resturants?.cards?.length,
        totalResturants: merge
          ? prevData.totalResturants
          : resturants?.totalRestaurants || 0,
      }));
      if (!merge) {
        setSorts(data?.data?.sorts || []);
        setFilters(data?.data?.filters || []);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    resturants,
    sorts,
    filters,
    isLoading: loading,
    fetchResturants,
    isError: error,
  };
};

export default useResturants;
