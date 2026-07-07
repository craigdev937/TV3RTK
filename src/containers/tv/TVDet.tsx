import React from "react";
import styles from "./TVDet.module.css";
import { useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
import { TVideo } from "../video/TVideo";
const IMG = "https://image.tmdb.org/t/p/w500";

export const TVDet = () => {
    const [show, setShow] = React.useState(false);
    const { id } = useParams();
    const tvID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data } = TMDB.useTvdetailQuery(tvID);
    const TV = data!;

    const handleShow = () => {
        setShow((state) => !state);
    };

    const handleTVideo = () => {
        setShow(false)
    };

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
                        <aside className={styles.tv__poster}>
                            <img
                                alt={TV.original_name}
                                src={`${IMG}/${TV.poster_path}`}
                            />
                        </aside>

                        <aside className={styles.tv__info}>
                            <h1>{TV.original_name}</h1>
                            <p className={styles.tv__rating}>
                                Rating: {TV.vote_average}
                            </p>
                            <h3>Overview</h3>
                            <p>{TV.overview}</p>
                            <h3>Last air date: {TV.last_air_date}</h3>
                            <div className={styles.tv__actions}>
                                <button>
                                    <a href={TV.homepage} target="_blank">
                                        Homepage
                                    </a>
                                </button>
                                <button onClick={handleShow}>Trailer</button>
                            </div>
                            <TVideo show={show} closeTV={handleTVideo} />
                        </aside>
                    </section>

                    <section className={styles.tv__credits}>
                        {TV.credits?.cast.slice(0, 12).map((actor) => (
                            <aside
                                key={actor.id}
                                className={styles.tv__actor}
                            >
                                <h4>{actor.character}</h4>
                                <img
                                    alt={actor.name} 
                                    src={`${IMG}/${actor.profile_path}`} 
                                />
                                <h4>{actor.name}</h4>
                            </aside>
                        ))}
                    </section>

                    <section className={styles.tv__prod}>
                        {TV.credits.crew.slice(0, 24).map((crew) => (
                            <aside 
                                key={crew.id}
                                className={styles.tv__crew}
                            >
                                <h4>{crew.name}</h4>
                                <img 
                                    alt={crew.name}
                                    src={`${IMG}/${crew.profile_path}`} 
                                />
                                <h4>{crew.job}</h4>
                            </aside>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};



