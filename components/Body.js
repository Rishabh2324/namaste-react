import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ResturantCard from "./ResturantCard";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

import useResturants from "../hooks/useResturants";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [filteredResturants, setFilteredResturants] = useState(null);
  const [searchText, setSearchText] = useState("");

  const isUserOnline = useOnline();
  const { resturants, loadingRestutants, errorFetchingResturants } =
    useResturants();

  useEffect(() => {
    if (resturants && resturants.length) setFilteredResturants(resturants);
  }, [resturants]);

  const getFilteredResturants = (query) => {
    const data =
      resturants?.filter((resturants) =>
        resturants?.data?.name?.toLowerCase()?.includes(query?.toLowerCase())
      ) || [];
    return data;
  };

  if (!isUserOnline) return <h1>I AM OFFLINE</h1>;

  return (
    <div className="app-body">
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() =>
            setFilteredResturants(getFilteredResturants(searchText))
          }
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {loadingRestutants ? (
          <LoadingScreen />
        ) : errorFetchingResturants ? (
          <ErrorScreen />
        ) : filteredResturants?.length === 0 ? (
          <>No resturants found for your search</>
        ) : (
          filteredResturants?.map((resturant) => (
            <Link to={"/resturants/" + resturant.data.id}>
              <ResturantCard key={resturant.data.id} resturant={resturant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
