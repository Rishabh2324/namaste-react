import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SortBar from "./SortBar";
import ResturantCard from "./ResturantCard";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

import useResturants from "../hooks/useResturants";
import useOnline from "../hooks/useOnline";
import Filters from "./Filters";

const Body = () => {
  const [filteredResturants, setFilteredResturants] = useState(null);

  const isUserOnline = useOnline();
  const { resturants, loadingRestutants, errorFetchingResturants } =
    useResturants();

  useEffect(() => {
    if (resturants && resturants.length) setFilteredResturants(resturants);
  }, [resturants]);

  if (!isUserOnline) return <h1>I AM OFFLINE</h1>;

  return (
    <div>
      <SortBar
        title={"103 resturants"}
        sorts={[
          {
            type: "SortWidget",
            key: "RELEVANCE",
            title: "Relevance",
            selected: 1,
            visible: 1,
            defaultSelection: true,
          },
          {
            type: "SortWidget",
            key: "DELIVERY_TIME",
            title: "Delivery Time",
            selected: 0,
            visible: 1,
            defaultSelection: false,
          },
          {
            type: "SortWidget",
            key: "RATING",
            title: "Rating",
            selected: 0,
            visible: 1,
            defaultSelection: false,
          },
          {
            type: "SortWidget",
            key: "COST_FOR_TWO",
            title: "Cost: Low to High",
            selected: 0,
            visible: 1,
            defaultSelection: false,
          },
          {
            type: "SortWidget",
            key: "COST_FOR_TWO_H2L",
            title: "Cost: High to Low",
            selected: 0,
            visible: 1,
            defaultSelection: false,
          },
        ]}
      />
      <div
        className="flex flex-wrap max-w-screen-xl m-auto"
        data-testid="res-list"
      >
        {loadingRestutants ? (
          <LoadingScreen />
        ) : errorFetchingResturants ? (
          <ErrorScreen />
        ) : filteredResturants?.length === 0 ? (
          <>No resturants found for your search</>
        ) : (
          filteredResturants?.map((resturant) => (
            <Link
              key={resturant.data.id}
              to={"/resturants/" + resturant.data.id}
              className="m-3"
            >
              <ResturantCard resturant={resturant} />
            </Link>
          ))
        )}
      </div>
      <Filters />
    </div>
  );
};

export default Body;
