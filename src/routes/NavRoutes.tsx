import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router"; 
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { TV } from "../pages/tv/TV";
import { TVDet } from "../containers/tv/TVDet";
import { Film } from "../pages/film/Film";
import { Actors } from "../pages/actors/Actors";
import { Favorites } from "../pages/fav/Favorites";

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
                path: "/tv/:id",
                element: <TVDet />
            },
            {
                path: "/film",
                element: <Film />
            },
            {
                path: "/actors",
                element: <Actors />
            },
            {
                path: "/fav",
                element: <Favorites />
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




