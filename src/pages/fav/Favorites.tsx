import React from "react";
import styles from "./Favorites.module.css";
import { Link } from "react-router";
import { UAS, UAD } from "../../global/Hooks";
import { remove } from "../../global/FavSlice";
const IMG = "https://image.tmdb.org/t/p/w500";

export const Favorites = () => {
    const favorites = UAS((state) => state.favorites.fav);
    const dispatch = UAD();

    if (favorites.length === 0) {
        return (
            <main>
                <h1 className={styles.title}>Favorites Page</h1>
                <p className={styles.empty}>
                    No favorites yet. Add a show to see it here.
                </p>
            </main>
        );
    }

    return (
        <React.Fragment>
            <main>
                <h1 className={styles.title}>Favorites Page</h1>
                <section className={styles.fav__grid}>
                    {favorites.map((item) => {
                        // Poster for TV/Movie, profile for People
                        const image = "poster_path" in item ?
                            item.poster_path : item.profile_path;
                        // Movies use "title", TV/People use "original_name"
                        const name = "title" in item ?
                            item.title : item.original_name;

                        return (
                            <aside key={item.id} className={styles.fav}>
                                <Link to={`/tv/${item.id}`}>
                                    <img
                                        alt={name}
                                        src={`${IMG}${image}`}
                                    />
                                </Link>
                                <h4>{name}</h4>
                                <button
                                    onClick={() => dispatch(remove(item.id))}
                                >
                                    Remove
                                </button>
                            </aside>
                        );
                    })}
                </section>
            </main>
        </React.Fragment>
    );
};
