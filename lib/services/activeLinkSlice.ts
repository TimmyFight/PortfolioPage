import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateType = string;

let locationHash = "#about";

if (typeof window !== "undefined") {
  if (window.location?.hash !== "") {
    locationHash = window.location.hash;
  }
}

const activeLinkSlice = createSlice({
  name: "activeLink",
  initialState: locationHash,
  reducers: {
    setActiveLink: (state: StateType, action: PayloadAction<StateType>) =>
      action.payload,
  },
});

export const { setActiveLink } = activeLinkSlice.actions;
export default activeLinkSlice.reducer;
