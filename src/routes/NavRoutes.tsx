import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router"; 
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { Home } from "../pages/home/Home";
import { TV } from "../pages/tv/TV";
import { TVDet } from "../containers/tv/TVDet";
import { Film } from "../pages/film/Film";
import { FilmDet } from "../containers/film/FilmDet";
import { Actors } from "../pages/actors/Actors";
import { ActorDet } from "../containers/act/ActorDet";
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
                path: "/film/:id",
                element: <FilmDet />
            },
            {
                path: "/actor",
                element: <Actors />
            },
            {
                path: "/actor/:id",
                element: <ActorDet />
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




