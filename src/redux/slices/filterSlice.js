import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    showFilter: false,
  },
  reducers: {
    toggleFilter: (state) => {
      state.showFilter = !state.showFilter;
      // Toggle the disable-scroll class on the body element
      if (!state.showFilter) {
        document.body.classList.remove("disable-scroll");
      } else {
        document.body.classList.add("disable-scroll");
      }
    },
  },
});

export const { toggleFilter } = filterSlice.actions;

export default filterSlice.reducer;
