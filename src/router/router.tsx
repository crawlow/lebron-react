import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./../App";
import { About, Home } from "../pages";
import { Layout } from "../shared/layout/ui/layout";

export const ROUTES = {
    Home: 'home',
    About: 'about'
};

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [{
            Component: App,
            children: [
                {
                    path: ROUTES.Home,
                    Component: Home
                },
                {
                    path: ROUTES.About,
                    Component: About
                }
            ]            
        }]
    }
]);

export const Router = () => {
    return <RouterProvider router={router} />
};