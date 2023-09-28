import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthToken {
  accessToken: string | null;
}

const initialState: AuthToken = {
  accessToken: "acces token authSlice",
};

export const authSliceReducer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
  },
});

export default authSliceReducer.reducer;
