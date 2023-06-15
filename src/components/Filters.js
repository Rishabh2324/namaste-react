import { useDispatch, useSelector } from "react-redux";

import { toggleFilter } from "../redux/slices/filterSlice";

import { XMarkIcon } from "@heroicons/react/24/outline";

const FilterWidget = ({ title, configType, visible, options }) => {
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
                  <div className="flex mb-2">
                    <input
                      type="checkbox"
                      value={option.selected}
                      name={option.option}
                      id={option.option}
                    />
                    <label className="ml-3 text-sm" for={option.option}>
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

const Filters = () => {
  const dispatch = useDispatch();
  const showFilter = useSelector((store) => store.filter.showFilter);

  const closeFilter = () => {
    dispatch(toggleFilter());
  };

  const filters = [
    {
      type: "FilterWidget",
      title: "Cuisines",
      key: "CUISINES",
      configType: "checkbox",
      visible: 1,
      options: [
        {
          option: "American",
          selected: 0,
          visible: 1,
        },
        {
          option: "Asian",
          selected: 0,
          visible: 1,
        },
        {
          option: "Bakery",
          selected: 0,
          visible: 1,
        },
        {
          option: "Beverages",
          selected: 0,
          visible: 1,
        },
        {
          option: "Biryani",
          selected: 0,
          visible: 1,
        },
        {
          option: "Burgers",
          selected: 0,
          visible: 1,
        },
        {
          option: "Cafe",
          selected: 0,
          visible: 1,
        },
        {
          option: "Chaat",
          selected: 0,
          visible: 1,
        },
        {
          option: "Chinese",
          selected: 0,
          visible: 1,
        },
        {
          option: "Combo",
          selected: 0,
          visible: 1,
        },
        {
          option: "Desserts",
          selected: 0,
          visible: 1,
        },
        {
          option: "Fast Food",
          selected: 0,
          visible: 1,
        },
        {
          option: "Healthy Food",
          selected: 0,
          visible: 1,
        },
        {
          option: "Home Food",
          selected: 0,
          visible: 1,
        },
        {
          option: "Ice Cream",
          selected: 0,
          visible: 1,
        },
        {
          option: "Ice Cream Cakes",
          selected: 0,
          visible: 1,
        },
        {
          option: "Indian",
          selected: 0,
          visible: 1,
        },
        {
          option: "Italian",
          selected: 0,
          visible: 1,
        },
        {
          option: "Kebabs",
          selected: 0,
          visible: 1,
        },
        {
          option: "Keto",
          selected: 0,
          visible: 1,
        },
        {
          option: "Maharashtrian",
          selected: 0,
          visible: 1,
        },
        {
          option: "Mexican",
          selected: 0,
          visible: 1,
        },
        {
          option: "Mughlai",
          selected: 0,
          visible: 1,
        },
        {
          option: "North Indian",
          selected: 0,
          visible: 1,
        },
        {
          option: "Oriental",
          selected: 0,
          visible: 1,
        },
        {
          option: "Pastas",
          selected: 0,
          visible: 1,
        },
        {
          option: "Pizzas",
          selected: 0,
          visible: 1,
        },
        {
          option: "Punjabi",
          selected: 0,
          visible: 1,
        },
        {
          option: "Salads",
          selected: 0,
          visible: 1,
        },
        {
          option: "Snacks",
          selected: 0,
          visible: 1,
        },
        {
          option: "South Indian",
          selected: 0,
          visible: 1,
        },
        {
          option: "Street Food",
          selected: 0,
          visible: 1,
        },
        {
          option: "Sweets",
          selected: 0,
          visible: 1,
        },
        {
          option: "Tandoor",
          selected: 0,
          visible: 1,
        },
        {
          option: "Thai",
          selected: 0,
          visible: 1,
        },
        {
          option: "Thalis",
          selected: 0,
          visible: 1,
        },
        {
          option: "Tibetan",
          selected: 0,
          visible: 1,
        },
      ],
      detail: "",
      heading: "Cuisines",
      applicable: 1,
      searchable: 1,
    },
    {
      type: "FilterWidget",
      title: "Show Restaurants With",
      key: "SHOW_RESTAURANTS_WITH",
      configType: "checkbox",
      visible: 1,
      options: [
        {
          option: "Pure Veg",
          selected: 0,
          visible: 1,
        },
      ],
      detail: "",
      heading: "Offers & More",
      applicable: 1,
      searchable: 0,
    },
  ];

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
                    configType={filter.configType}
                    options={filter?.options}
                    title={filter.title}
                    visible={filter.visible}
                    key={filter.key}
                  />
                );

              default:
                return <>No widget found</>;
            }
          })}
        </div>
        <div className="px-11">
          <button className="border-2 border-gray-400 text-gray-400 px-8 py-3 font-semibold uppercase text-lg">
            Clear
          </button>
          <button className="ml-4 border-2 border-orange-600 font-semibold bg-orange-600 text-white px-12 py-3 uppercase text-lg hover:bg-white hover:text-orange-600 ">
            Show resturants
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;
