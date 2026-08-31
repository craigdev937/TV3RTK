import styles from "./MediaCard.module.css";
import { Link } from "react-router";
import { Star, Calendar } from "lucide-react";
const IMG = "https://image.tmdb.org/t/p/w500";
import type { MC } from "../../models/Interfaces";

export const MediaCard = ({ 
    id, title, posterPath, type, 
    voteAverage, releaseDate 
}: MC) => {
    const linkPath = type === "movie" ? 
    `/film/${id}` : `/tv/${id}`;

    return (
        <Link
            className={styles.media__card}
            to={linkPath}
        >
            <section className={styles.media__content}>
                <h3>{title}</h3>
                <aside className={styles.media__date}>
                    <Calendar />
                    <span>{releaseDate ? new Date(releaseDate)
                        .getFullYear() : "N/A"}
                    </span>
                </aside>
            </section>
            <section className={styles.media__img}>
                {posterPath ? (
                    <img
                        alt={title} 
                        src={`${IMG}${posterPath}`}
                    />
                ) : (
                    <aside className={styles.media__plc}>
                        No Image
                    </aside>
                )}
            </section>
        </Link>
    );
};



