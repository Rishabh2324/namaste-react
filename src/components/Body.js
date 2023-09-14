import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SortBar, { LoadingSortBar } from "./SortBar";
import ResturantCard from "./ResturantCard";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

import useResturants from "../hooks/useResturants";
import useOnline from "../hooks/useOnline";
import Filters from "./Filters";

const Body = () => {
  const [filteredResturants, setFilteredResturants] = useState(null);

  const isUserOnline = useOnline();
  const { resturants, sorts, filters, fetchResturants, isError, isLoading } =
    useResturants();

  useEffect(() => {
    if (resturants?.data && resturants?.data.length)
      setFilteredResturants(resturants?.data);
  }, [resturants]);

  if (!isUserOnline) return <h1>I AM OFFLINE</h1>;

  useEffect(() => {
    // Implementing infinite scroll

    if (!isLoading) {
      const observer = new IntersectionObserver(function (enteries) {
        enteries.forEach((entry) => {
          if (entry.isIntersecting) {
            fetchResturants(
              resturants?.currentResturants < resturants?.totalResturants,
              resturants?.currentResturants + 15
            );
          }
        });
      }, {});

      const list = document.getElementById("loading-cards");

      observer.observe(list);
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <LoadingSortBar />
      ) : (
        <SortBar
          title={resturants?.totalResturants + " resturants"}
          sorts={sorts}
        />
      )}

      <div
        className="flex flex-wrap max-w-screen-xl m-auto"
        data-testid="res-list"
      >
        {isLoading ? (
          <LoadingScreen />
        ) : isError ? (
          <ErrorScreen />
        ) : filteredResturants?.length === 0 ? (
          <>No resturants found for your search</>
        ) : (
          filteredResturants?.map((resturant) => (
            <Link
              key={
                resturant?.subtype === "basic"
                  ? resturant.data.id
                  : resturant?.data?.data?.id
              }
              to={
                "/resturants/" + resturant?.subtype === "basic"
                  ? resturant.data.id
                  : resturant?.data?.data?.id
              }
              className="m-3"
            >
              <ResturantCard
                resturant={
                  resturant?.subtype === "basic" ? resturant : resturant?.data
                }
              />
            </Link>
          ))
        )}
      </div>
      {resturants?.currentResturants < resturants?.totalResturants && (
        <div
          className="flex flex-wrap max-w-screen-xl m-auto"
          id="loading-cards"
        >
          <LoadingScreen />
        </div>
      )}
      <Filters filters={filters} />
    </div>
  );
};

export default Body;
