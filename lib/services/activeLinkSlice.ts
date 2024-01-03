import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = string;

const activeLinkSlice = createSlice({
  name: "activeLink",
  initialState: window?.location?.hash || "#about",
  reducers: {
    setActiveLink: (state: StateType, action: PayloadAction<StateType>) =>
      action.payload,
  },
});

export const { setActiveLink } = activeLinkSlice.actions;
export default activeLinkSlice.reducer;
