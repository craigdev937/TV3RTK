import React from "react";
import styles from "./TV.module.css";
import { Link } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tmdb.org/t/p/w500";

export const TV = () => {
    // const [tW, setTW] = React.useState<"day" | "week">("week");
    const { error, isLoading, 
        data } = TMDB.useTrendtvQuery("week");

    // const toggleWindow = () => {
    //     setTW(tW === "week" ? "day" : "week");
    // };

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
                <main className={styles.tv__grid}>
                    {/* <button
                        type="button"
                        className={styles.switch}
                        onClick={toggleWindow}
                        aria-label={`Trending: ${tW}`}
                    >
                        <span className={tW === "day"
                                ? styles.thumb
                                : `${styles.thumb} ${styles.thumbRight}`}
                        />
                        <span className={tW === "day"
                            ? styles.active : styles.option}>Day</span>
                        <span className={tW === "week"
                            ? styles.active : styles.option}>Week</span>
                    </button> */}
                    {data && data.results.map((tv) => (
                        <aside key={tv.id} className={styles.tv}>
                            <Link to={`/tv/${tv.id}`}>
                                <img
                                    alt="" 
                                    src={`${IMG}${tv.poster_path}`} 
                                />
                            </Link>
                        </aside>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};

