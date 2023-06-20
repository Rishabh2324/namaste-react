import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { IMAGE_CDN_URL, SEARCH_URL } from "../utils/constants";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const SearchResult = ({ restaurant }) => {
  const { cloudinaryId, text, tagToDisplay, metadata, type } = restaurant;
  const parsedMetaData = JSON.parse(metadata);
  if (type === "DISH") return null;
  return (
    <Link
      className="flex p-2 hover:bg-gray-200 rounded-lg"
      to={"/resturants/" + parsedMetaData?.data?.primaryRestaurantId}
    >
      <div className="w-16">
        <img
          className="w-full h-full"
          src={`${IMAGE_CDN_URL}/${cloudinaryId}`}
          alt={text}
        />
      </div>
      <div className="ml-5">
        <h5 className="font-semibold">{text}</h5>
        <p className="text-sm text-gray-500">{tagToDisplay}</p>
      </div>
    </Link>
  );
};

const NoSearchResult = () => {
  return (
    <div className="bg-gray-300 flex py-3 rounded-lg items-center">
      <div className="border-gray-500 border-solid border w-12 h-12 rounded-md">
        <MagnifyingGlassIcon className="text-gray-500 p-2" />
      </div>
      <p className="ml-5 text-sm text-gray-600">No results found</p>
    </div>
  );
};

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredResturants, setFilteredResturants] = useState(null);

  // Using Debounce
  // There should be a gap of 200 ms between 2 key strokes
  useEffect(() => {
    if (isValidSearchQuery()) {
      const timer = setTimeout(() => {
        searchRestaurants();
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchText]);

  const isValidSearchQuery = () => {
    return !(searchText.length === 0 || searchText.length < 2);
  };

  const searchRestaurants = async () => {
    const response = await fetch(SEARCH_URL + "&str=" + searchText);
    const data = await response.json();
    setFilteredResturants(data?.data?.suggestions || []);
  };

  return (
    <>
      <div className="flex">
        <div className="w-2/4 m-auto mt-10 relative">
          <input
            className="w-full p-3 border-solid border border-gray-400 text-gray-500 outline-none rounded-md placeholder:font-semibold font-semibold"
            data-testid="search-inp"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
      <div className="flex flex-col max-w-screen-md m-auto mt-2">
        {filteredResturants?.map((resturant) => (
          <SearchResult restaurant={resturant} />
        ))}
        {filteredResturants?.length === 0 && searchText?.length > 0 && (
          <NoSearchResult />
        )}
      </div>
    </>
  );
};

export default Search;
