import React from "react";
import ReactDOM from "react-dom";
import styles from "./TVideo.module.css";
import { useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const YT = "https://www.youtube.com/embed";

type TM = {
    show: boolean,
    closeTV: () => void
};

export const TVideo = ({ show, closeTV }: TM) => {
    const { id } = useParams();
    const vidID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data } = TMDB.useTvtrailQuery(vidID);

    if (!show) return null;

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

    return ReactDOM.createPortal(
        <React.Fragment>
            {data && data?.results.map((video) => (
                <section className={styles.tv__modal}>
                    <aside 
                        className={styles.tv__overlay} 
                        onClick={closeTV} 
                    />
                    <aside 
                        className={styles.tv__video}
                    >
                        <a 
                            href={`${YT}/${video.key}`}
                            target="_blank"
                        >
                            <button>Trailer: {video.name}</button>
                        </a>
                        <button onClick={closeTV}>Close</button>
                    </aside>
                </section>
            ))}
        </React.Fragment>,
        document.getElementById("modal") as HTMLElement
    )
};


