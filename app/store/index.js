import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice.js";
import homeSlice from "./slices/homeSlice.js";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    home: homeSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
