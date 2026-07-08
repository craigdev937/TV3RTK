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

    // Prefer an official YouTube "Trailer", otherwise fall
    // back to the first YouTube video returned by TMDB.
    const videos = data?.results.filter(
        (video) => video.site === "YouTube"
    ) ?? [];
    const trailer = videos.find(
        (video) => video.type === "Trailer" && video.official
    ) ?? videos.find(
        (video) => video.type === "Trailer"
    ) ?? videos[0];

    return ReactDOM.createPortal(
        <section className={styles.tv__modal}>
            <aside
                className={styles.tv__overlay}
                onClick={closeTV}
            />
            <aside className={styles.tv__video}>
                <button
                    className={styles.tv__close}
                    onClick={closeTV}
                >
                    Close
                </button>
                {isLoading ? (
                    <Spinner />
                ) : trailer ? (
                    <iframe
                        allowFullScreen
                        className={styles.tv__frame}
                        src={`${YT}/${trailer.key}`}
                        title={trailer.name}
                        allow={"accelerometer; autoplay; " +
                            "clipboard-write; encrypted-media; " +
                            "gyroscope; picture-in-picture"}
                    />
                ) : (
                    <p className={styles.tv__empty}>
                        No trailer available.
                    </p>
                )}
            </aside>
        </section>,
        document.getElementById("modal") as HTMLElement
    )
};


