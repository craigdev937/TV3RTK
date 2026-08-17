import React from "react";
import classes from "./FilmDet.module.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { FilmVideo } from "../video/FilmVideo";
import { UAS, UAD } from "../../global/Hooks";
import { toggle } from "../../global/FavSlice";
const IMG = "https://image.tmdb.org/t/p/w500";

export const FilmDet = () => {
    const [show, setShow] = React.useState(false);
    const { id } = useParams();
    const filmID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data } = TMDB.useMovdetailQuery(filmID);
    const FILM = data!;

    const dispatch = UAD();
    const isFav = UAS((state) => 
        state.favorites.fav.some(
            (item) => item.id === filmID));
    
    const handleFav = () => {
        dispatch(toggle(FILM));
    };

    const handleShow = () => {
        setShow((state) => !state);
    };

    const handleFilmVideo = () => {
        setShow(false);
    };

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
                        <aside className={classes.film__poster}>
                            <img
                                alt={FILM.title} 
                                src={`${IMG}/${FILM.poster_path}`}  
                            />
                        </aside>

                        <aside className={classes.film__info}>
                            <h1>{FILM.title}</h1>
                            <p className={classes.film__rating}>
                                Rating: {FILM.vote_average}
                            </p>
                            <h3>Overview</h3>
                            <p>{FILM.overview}</p>
                            <h3>Release date: {FILM.release_date}</h3>

                            <section className={classes.film__actions}>
                                <button>
                                    <a
                                        href={FILM.homepage}
                                        target="_blank"
                                    >
                                        Homepage
                                    </a>
                                </button>

                                <button onClick={handleShow}>
                                    Trailer
                                </button>

                                <button onClick={handleFav}>
                                    {isFav ?
                                        "Remove from Favorites" :
                                        "Add to Favorites"
                                    }
                                </button>
                            </section>
                            <FilmVideo show={show} closeFILM={handleFilmVideo} />
                        </aside>
                    </section>

                    <section className={classes.film__credits}>
                        {FILM.credits.cast.slice(0, 12).map((actor) => (
                            <Link
                                key={actor.id}
                                to={`/actor/${actor.id}`}
                                className={classes.film__actor}
                            >
                                <h4>{actor.character}</h4>
                                <img
                                    alt={actor.name}
                                    src={`${IMG}/${actor.profile_path}`}
                                />
                                <h4>{actor.name}</h4>
                            </Link>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};



