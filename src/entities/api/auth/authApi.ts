import { api } from "../common/api";
import { IChangeUserRequest } from "./dto/IChangeUserRequest";
import { ILoginRequest } from "./dto/ILoginRequest";
import { IRegisterUserRequest } from "./dto/IRegisterUserRequest";
import { IUser } from "./dto/IUser";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<IUser, ILoginRequest>({
      query: (payload) => ({
        url: "Auth/SignIn",
        method: "POST",
        body: payload,
      }),
    }),
    SignUp: builder.mutation<IUser, IRegisterUserRequest>({
      query: (payload) => ({
        url: "Auth/SignUp",
        method: "POST",
        body: payload,
      }),
    }),
    changeUser: builder.mutation<void, IChangeUserRequest>({
      query: (payload) => ({
        url: "Auth/Change",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useChangeUserMutation, useSignInMutation, useSignUpMutation } =
  authApi;
