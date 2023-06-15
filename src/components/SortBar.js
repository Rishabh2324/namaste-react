import { useDispatch } from "react-redux";
import { toggleFilter } from "../redux/slices/filterSlice";

import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

/**
 * @param title
 * @param selected
 * @param visible
 * @returns SortComponent
 */

const SortWidget = ({ title, selected, visible }) => {
  if (!visible) return;
  return (
    <div
      role="button"
      className={`relative ${
        selected
          ? "after:absolute after:inset-x-0 after:-bottom-2.5 after:border-b-2 after:border-gray-900"
          : ""
      }`}
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
        {sorts.map((sortWidget) => (
          <SortWidget
            title={sortWidget.title}
            selected={sortWidget.selected}
            visible={sortWidget.visible}
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
