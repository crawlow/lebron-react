import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface MenuState {
  isActive: boolean;
}

const initialState: MenuState = {
  isActive: false,
};

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isActive = !state.isActive;
    },
    close: (state) => {
      state.isActive = false;
    },
  },
});

export const { toggle, close } = menuSlice.actions;

export const selectActive = (state: RootState) => state.menu.isActive
