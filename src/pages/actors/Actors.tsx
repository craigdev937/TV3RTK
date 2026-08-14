import React from "react";
import styles from "./Actors.module.css";
import { Link } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const Actors = () => {
    const { error, isLoading, 
        data } = TMDB.useTrendpeopleQuery("week");
    const PE = data?.results;
    console.log(PE);

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
                <main className={styles.actor__grid}>
                    {data && data.results.map((actor) => (
                        <aside
                            key={actor.id}
                            className={styles.actor}
                        >
                            <Link to={`/actor/${actor.id}`}>
                                <section>
                                    <h4>{actor.name}</h4>
                                    <img
                                        alt={actor.name} 
                                        src={`${IMG}${actor.profile_path}`}
                                    />
                                </section>
                            </Link>
                        </aside>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


