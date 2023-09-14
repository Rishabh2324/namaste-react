import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { toggleFilter } from "../redux/slices/filterSlice";
import { QUERY_PARAM_KEYS } from "../utils/constants";

import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

export const LoadingSortBar = () => {
  return (
    <div className="flex justify-between items-end border-b-2 max-w-screen-xl m-auto mt-8 pb-2">
      <div className="h-8 bg-gray-300 p-3 w-1/6 rounded-lg" />
      <div className="flex w-2/4 justify-between">
        {[1, 2, 3, 4].map((el) => (
          <div key={el} className="h-8 w-32 rounded-lg bg-gray-300 p-3" />
        ))}
      </div>
    </div>
  );
};

/**
 * @param title
 * @param selected
 * @param visible
 * @returns SortComponent
 */

const SortWidget = ({ sortKey, title, selected, visible }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSortOptionClick = () => {
    setSearchParams((searchParams) => {
      searchParams.set(QUERY_PARAM_KEYS.SORT_BY, sortKey);
      return searchParams;
    });
  };

  if (!visible) return;
  return (
    <div
      role="button"
      className={`relative ${
        selected
          ? "after:absolute after:inset-x-0 after:-bottom-2.5 after:border-b-2 after:border-gray-900"
          : ""
      }`}
      onClick={handleSortOptionClick}
    >
      <span className="text-gray-600 text-sm">{title}</span>
    </div>
  );
};

/**
 *
 * @param title
 * @param sorts List of SortWidget
 * @returns SortBar
 */
const SortBar = ({ title, sorts }) => {
  const dispatch = useDispatch();
  const handleFilterClick = () => {
    dispatch(toggleFilter());
  };
  return (
    <div className="flex justify-between items-end border-b-2 max-w-screen-xl m-auto mt-8 pb-2">
      <h1 className="font-bold text-3xl">{title}</h1>
      <div className="flex  [&>*]:ml-8">
        {sorts?.map((sortWidget) => (
          <SortWidget
            key={sortWidget.key}
            title={sortWidget.title}
            selected={sortWidget.selected}
            visible={sortWidget.visible}
            sortKey={sortWidget.key}
          />
        ))}
        <button className="flex" onClick={handleFilterClick}>
          <span className="font-semibold">Filters</span>
          <AdjustmentsVerticalIcon
            color="orange"
            className="w-6 ml-4 rounded-full border-2 border-orange-400"
          />
        </button>
      </div>
    </div>
  );
};

export default SortBar;
