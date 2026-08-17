import React from "react";
import classes from "./ActorDet.module.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const ActorDet = () => {
    const { id } = useParams();
    const actID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data } = TMDB.usePeopleQuery(actID);
    const ACT = data!;

    if(error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error : 
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    const credits = (data?.combined_credits.cast ?? [])
        .filter((credit) => credit.poster_path)
        .sort((a, b) => b.popularity - a.popularity);

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main>
                    <section className={classes.actor__card}>
                        <aside className={classes.actor__poster}>
                            <img
                                alt={ACT.name}
                                src={`${IMG}/${ACT.profile_path}`}
                            />
                        </aside>

                        <aside className={classes.actor__info}>
                            <h1>{ACT.name}</h1>
                            <p className={classes.actor__rating}>
                                Rating: {ACT.popularity}
                            </p>
                            <h3>Birthday: {ACT.birthday}</h3>
                            <h3>Overview</h3>
                            <p>{ACT.biography}</p>
                        </aside>
                    </section>

                    <section className={classes.actor__credits}>
                        {credits.map((credit) => (
                            <Link
                                key={credit.credit_id}
                                to={`/${credit.media_type}/${credit.id}`}
                                className={classes.actor__credit}
                            >
                                <img
                                    alt={credit.title ?? credit.name}
                                    src={`${IMG}/${credit.poster_path}`}
                                />
                                <h4>{credit.title ?? credit.name}</h4>
                                <p>{credit.character}</p>
                            </Link>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


