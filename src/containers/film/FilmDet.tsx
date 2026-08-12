import React from "react";
import classes from "./FilmDet.module.css";
import { useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const FilmDet = () => {
    const { id } = useParams();
    const filmID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data } = TMDB.useMovdetailQuery(filmID);
    const FILM = data!;

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
                <main>
                    <section className={classes.film__card}>
                        <h1>{FILM.title}</h1>
                        <img
                            alt={FILM.title} 
                            src={`${IMG}/${FILM.backdrop_path}`}  
                        />
                        <h3>Release date: {FILM.release_date}</h3>
                        <button>
                            <a href={FILM.homepage} target="_blank">
                                Homepage
                            </a>
                        </button>
                    </section>

                    <section className={classes.film__credits}>
                        {FILM.credits.cast.slice(0, 12).map((actor) => (
                            <aside
                                key={actor.id}
                                className={classes.film__actor}
                            >
                                <h1>{actor.character}</h1>
                                <img 
                                    alt={actor.name} 
                                    src={`${IMG}/${actor.profile_path}`} 
                                />
                                <h4>{actor.name}</h4>
                            </aside>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};



