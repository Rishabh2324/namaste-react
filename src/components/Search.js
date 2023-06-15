import { useState } from "react";
import useResturants from "../hooks/useResturants";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ResturantCard from "./ResturantCard";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredResturants] = useState(null);

  const { resturants } = useResturants();

  const getFilteredResturants = (query) => {
    setSearchText(query);
    if (query.length === 0) {
      setFilteredResturants([]);
    } else {
      const data =
        resturants?.filter((resturants) =>
          resturants?.data?.name?.toLowerCase()?.includes(query?.toLowerCase())
        ) || [];
      setFilteredResturants(data);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-2/4 m-auto mt-10 relative">
          <input
            className="w-full p-3 border-solid border border-gray-400 text-gray-500 outline-none rounded-md placeholder:font-semibold font-semibold"
            data-testid="search-inp"
            value={searchText}
            onChange={(e) => getFilteredResturants(e.target.value)}
            placeholder="Search for resturants and food"
          />
          {searchText?.length > 0 ? (
            <XMarkIcon
              role="button"
              className="absolute right-2 top-3 w-6 text-gray-400"
              data-testid="search-btn"
              onClick={() => {
                setFilteredResturants([]);
                setSearchText("");
              }}
            />
          ) : (
            <MagnifyingGlassIcon
              role="button"
              className="absolute right-2 top-3 w-6 text-gray-400"
              data-testid="search-btn"
            />
          )}
        </div>
      </div>
      <div
        className="flex flex-wrap max-w-screen-xl m-auto"
        data-testid="res-list"
      >
        {filteredResturants?.map((resturant) => (
          <Link
            key={resturant.data.id}
            to={"/resturants/" + resturant.data.id}
            className="m-3"
          >
            <ResturantCard resturant={resturant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Search;
