import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setPhoneNumber(state, action: PayloadAction<string>) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setPhoneNumber } = loginSlice.actions;

export default loginSlice.reducer;
