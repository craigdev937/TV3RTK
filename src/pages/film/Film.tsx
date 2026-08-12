import React from "react";
import classes from "./Film.module.css";
import { Link } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const Film = () => {
    const { error, isLoading, 
        data } = TMDB.useTrendmovQuery("week");

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className={classes.film__grid}>
                    {data && data.results.map((film) => (
                        <aside 
                            key={film.id} 
                            className={classes.film}
                        >
                            <Link to={`/film/${film.id}`}>
                                <img
                                    alt={film.title} 
                                    src={`${IMG}${film.poster_path}`}
                                />
                            </Link>
                        </aside>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


