import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchField: "",
  robots: [],
  loading: false,
  error: "",
};

export const fetchRobots = createAsyncThunk("robot/fetchRobots", () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
});
const robotSlice = createSlice({
  name: "robot",
  initialState,
  reducers: {
    setSearchField: (state, action) => {
      state.searchField = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRobots.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRobots.fulfilled, (state, action) => {
      state.loading = false;
      state.robots = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRobots.rejected, (state, action) => {
      state.loading = false;
      state.robots = [];
      state.error = action.error.message;
    });
  },
});
export const { setSearchField, getRobots } = robotSlice.actions;

export default robotSlice.reducer;
