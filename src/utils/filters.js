import { QUERY_PARAM_KEYS } from "./constants";

const encodeFilters = (selectedFitlers) => {
  let updatedFilters = {};
  Object.entries(selectedFitlers).forEach(([key, value]) => {
    updatedFilters[key] = Object.keys(value)
      .map((key) => (value[key] ? key : false))
      .filter((value) => value);
    if (updatedFilters[key].length == 0) delete updatedFilters[key];
  });
  return updatedFilters;
};

const decodeFilters = (searchParams) => {
  let updatedFilters = {};
  const filters = JSON.parse(searchParams.get(QUERY_PARAM_KEYS.FILTERS));
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      const options = {};
      value.forEach((element) => {
        options[element] = true;
      });
      updatedFilters[key] = options;
    });
  }
  return updatedFilters;
};

export { encodeFilters, decodeFilters };
