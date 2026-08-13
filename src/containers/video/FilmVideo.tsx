import ReactDOM from "react-dom";
import styles from "./FilmVideo.module.css";
import { useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const YT = "https://www.youtube.com/embed";

type FM = {
    show: boolean,
    closeFILM: () => void
};

export const FilmVideo = ({ show, closeFILM }: FM) => {
    const { id } = useParams();
    const filmID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, 
        data } = TMDB.useMovtrailQuery(filmID);
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

    // Prefer an official youTube "Trailer", otherwise fall
    // back to teh first YouTube video returned by TMDB.
    const videos = data?.results.filter(
        (video) => video.site === "YouTube"
    ) ?? [];
    const trailer = videos.find(
        (video) => video.type === "Trailer" && video.official
    ) ?? videos.find(
        (video) => video.type === "Trailer"
    ) ?? videos[0];
    
    return ReactDOM.createPortal(
        <section className={styles.film__modal}>
            <aside 
                className={styles.film__overlay}
                onClick={closeFILM}
            />
            <aside className={styles.film__video}>
                <button
                    className={styles.film__close}
                    onClick={closeFILM}
                >
                    Close
                </button>
                {isLoading ? (
                    <Spinner />
                ) : trailer ? (
                    <iframe 
                        allowFullScreen
                        className={styles.film__frame}
                        src={`${YT}/${trailer.key}`}
                        title={trailer.name}
                        allow={"accelerometer; autoplay; " +
                            "clipboard-write; encrypted-media; " + 
                            "gyrosscope; picture-in-picture"}
                    />
                ) : (
                    <p>
                        No trailer available.
                    </p>
                )}
            </aside>
        </section>,
        document.getElementById("modal") as HTMLElement
    )
};



