import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "@entities/api/auth/dto/IUser";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/es/storage'
import { RootState } from "./store";

interface AuthState {
  user: IUser | undefined;
}

const initialState: AuthState = {
  user: undefined,
};

const persistConfig = {
	version: 1,
	key: 'auth',
	storage,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
		},
		logout: (state) => {
			state.user = undefined
		},
  },
});

export const persistedAuthorizationReducer = persistReducer(
	persistConfig,
	authSlice.reducer,
)

export const selectUser = (state: RootState) => state.auth.user

export const { login: loginAction, logout: logoutAction } =
	authSlice.actions