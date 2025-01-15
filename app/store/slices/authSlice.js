import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import axiosInstance from "../../utils/interceptor.js";
import { logoutHandler } from "../../utils/auth.js";

const defaultDict = {
  isAuthenticated: false,
  user: null,
  isLoginPopupOpen: false,
};

const initialState = getCookie("accessToken")
  ? { ...defaultDict, isAuthenticated: true, isLoginPopupOpen: false }
  : defaultDict;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoginPopupOpen = false;
    },
    firstTimeUserFetching: (state, action) => {
      state.user = action.payload.user;
    },
    openLoginPopup: (state, action) => {
      state.isLoginPopupOpen = action.payload
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export default authSlice.reducer;
export const { login, logout, updateUser, firstTimeUserFetching, openLoginPopup } =
  authSlice.actions;

// Actions
export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get("/user");
    dispatch(firstTimeUserFetching({ user: data.message }));
  } catch (error) {
    logoutHandler();
  }
};
