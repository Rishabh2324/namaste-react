import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleFilter } from "../redux/slices/filterSlice";
import { QUERY_PARAM_KEYS } from "../utils/constants";
import { decodeFilters, encodeFilters } from "../utils/filters";

import { XMarkIcon } from "@heroicons/react/24/outline";

const FilterWidget = ({
  filterType,
  title,
  configType,
  visible,
  options,
  selectedFitlers,
  handleSelectFilter,
}) => {
  if (!visible) return;
  return (
    <div className="mt-5">
      <h5 className="font-semibold text-lg mb-4">{title}</h5>
      <div className="flex flex-col max-h-96 flex-wrap">
        {options.map((option) =>
          (() => {
            switch (configType) {
              case "checkbox":
                return (
                  <div key={option?.option} className="flex mb-2">
                    <input
                      type="checkbox"
                      checked={
                        selectedFitlers[filterType]
                          ? !!selectedFitlers[filterType][option?.option]
                          : false
                      }
                      name={option.option}
                      id={option.option}
                      onChange={() =>
                        handleSelectFilter(filterType, option?.option)
                      }
                    />
                    <label className="ml-3 text-sm" htmlFor={option?.option}>
                      {option?.option || ""}
                    </label>
                  </div>
                );
              default:
                return <>No config found</>;
            }
          })()
        )}
      </div>
    </div>
  );
};

const Filters = ({ filters }) => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const showFilter = useSelector((store) => store.filter.showFilter);

  const [selectedFitlers, setSelectedFilters] = useState({});

  /**
   * Interface of state
   * {
   *  [filterType] : {
   *    [filter]:boolean
   *   }
   * }
   */
  const handleSelectFilter = (filterType, filter) => {
    let isFilterAlreadySelected = false;

    if (selectedFitlers[filterType])
      isFilterAlreadySelected = !!selectedFitlers[filterType][filter];

    setSelectedFilters({
      ...selectedFitlers,
      [filterType]: {
        ...selectedFitlers[filterType],
        [filter]: isFilterAlreadySelected ? false : true,
      },
    });
  };

  /**
   * 1. If filters are selected then create filter query
   * 2. Get filters {[filterType]:Array<filter>}
   * 3. Filters not selected then remove filter param from query and set sortBy based on selected option
   */

  const handleShowResturants = () => {
    setSearchParams((searchParams) => {
      let key,
        value = "";
      if (Object.keys(updatedFilters).length) {
        let updatedFilters = encodeFilters(selectedFitlers);
        key = QUERY_PARAM_KEYS.FILTERS;
        value = JSON.stringify(updatedFilters);
        searchParams.set(key, value);
      } else {
        searchParams.delete(QUERY_PARAM_KEYS.FILTERS);
      }
      key = QUERY_PARAM_KEYS.SORT_BY;
      value = searchParams.get(key) ? searchParams.get(key) : "RELEVANCE";
      searchParams.set(key, value);
      return searchParams;
    });
    closeFilter();
  };

  /**
   * Reset all filters state
   * Removed filters search param
   * Toggle filter sidebar
   */
  const handleClearFilters = () => {
    setSelectedFilters({});
    setSearchParams((searchParams) => {
      searchParams.delete(QUERY_PARAM_KEYS.FILTERS);
      return searchParams;
    });
    closeFilter();
  };

  const closeFilter = () => {
    dispatch(toggleFilter());
  };

  useEffect(() => {
    /**
     * On page load if filters are present in query then
     * 1. decode them from query
     * 2. Update selectedFilters state
     */
    setSelectedFilters(decodeFilters(searchParams));
  }, []);

  if (!showFilter) return;
  return (
    <>
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="absolute right-0 left-2/4 inset-y-0 bg-white flex flex-col justify-between py-8">
        <div className="flex items-center px-11">
          <XMarkIcon role="button" onClick={closeFilter} className="w-8" />
          <span className="font-semibold ml-5 text-lg">Filters</span>
        </div>
        <div className="overflow-y-auto px-12">
          {filters.map((filter) => {
            switch (filter.type) {
              case "FilterWidget":
                return (
                  <FilterWidget
                    key={filter.key}
                    filterType={filter.key}
                    configType={filter.configType}
                    options={filter?.options}
                    title={filter.title}
                    visible={filter.visible}
                    selectedFitlers={selectedFitlers}
                    handleSelectFilter={handleSelectFilter}
                  />
                );

              default:
                return <>No widget found</>;
            }
          })}
        </div>
        <div className="px-11">
          <button
            onClick={handleClearFilters}
            className="border-2 border-gray-400 text-gray-400 px-2 py-3 font-semibold uppercase text-md"
          >
            Clear
          </button>
          <button
            onClick={handleShowResturants}
            className="ml-4 border-2 border-orange-600 font-semibold bg-orange-600 text-white px-2 py-3 uppercase text-md hover:bg-white hover:text-orange-600 "
          >
            Show resturants
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
