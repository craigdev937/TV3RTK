import React from "react";
import styles from "./TVDet.module.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const TVDet = () => {
    const { id } = useParams();
    const tvID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = TMDB.useTvdetailQuery(tvID);
    // const { data: TCast } = TMDB.useTvcastQuery(tvID);
    const TV = data!;
    // const TC = TCast!;

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>;
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
                    <section className={styles.tv__card}>
                        <h1>{TV.original_name}</h1>
                        <img 
                            alt={TV.original_name}
                            src={`${IMG}/${TV.backdrop_path}`}
                        />
                        <h3>Last air date: {TV.last_air_date}</h3>
                        <button>
                            <a href={TV.homepage} target="_blank">
                                Homepage
                            </a>
                        </button>
                    </section>

                    <section className={styles.tv__credits}>
                        {TV.credits?.cast.slice(0, 12).map((actor) => (
                            <aside
                                key={actor.id}
                                className={styles.tv__actor}
                            >
                                <h4>{actor.name}</h4>
                                <h5>{actor.character}</h5>
                                <img
                                    alt={actor.name} 
                                    src={`${IMG}/${actor.profile_path}`} 
                                />
                            </aside>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


