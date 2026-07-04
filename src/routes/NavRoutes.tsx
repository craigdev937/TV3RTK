import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router"; 
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { TV } from "../pages/tv/TV";
import { Film } from "../pages/film/Film";
import { Actors } from "../pages/actors/Actors";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tv",
                element: <TV />
            },
            {
                path: "/film",
                element: <Film />
            },
            {
                path: "/actors",
                element: <Actors />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList}  />
        </React.Fragment>
    );
};




