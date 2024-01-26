import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./../App";
// import { About, Home } from "../pages";
import { Layout } from "../shared/layout/layout";
import { SignInPage } from "@pages/auth/signIn/signin-page";
import { SignUpPage } from "@pages/auth/signUp/signup-page";

export const ROUTES = {
  Home: "home",
  About: "about",
  SignIn: "/sign-in",
  SignUp: "/sign-up",
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: ROUTES.SignIn,
        Component: SignInPage,
      },
      {
        path: ROUTES.SignUp,
        Component: SignUpPage,
      }
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
