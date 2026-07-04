import React from "react";
import styles from "./Find.module.css";
import { Spinner } from "../../components/spin/Spinner";
import { TMDB } from "../../global/TMDB";
const IMG = "https://image.tmdb.org/t/p/w500";

export const Find = () => {
    const [text, setText] = React.useState("");
    const [query, setQuery] = React.useState("");
    const { error, isLoading, data } =
        TMDB.useSeaQuery(query, { skip: query === "" });
    const FI = data?.results;

    const handleChange =
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setQuery(text.trim());
    };

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
                <section className={styles.hero}>
                    <aside className={styles.hero__banner}>
                        <span className={styles.hero__title}>Welcome</span>
                        <span className={styles.hero__subtitle}>
                            Millions of TV shows, Films, and Actors.
                        </span>
                        <form
                            className={styles.hero__input}
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                value={text}
                                onChange={handleChange}
                                placeholder="Search for a TV Show, Film, or an Actor..."
                            />
                            <button type="submit">Find</button>
                        </form>
                    </aside>
                    <aside className={styles.hero__results}>
                        {FI && FI.length === 0 && (
                            <h1>No results found for "{query}".</h1>
                        )}
                        {FI && FI.map((hero) => (
                            <article
                                key={hero.id}
                                className={styles.hero__card}
                            >
                                {hero.poster_path && (
                                    <img
                                        alt={"title" in hero ? hero.title : hero.name}
                                        src={`${IMG}${hero.poster_path}`}
                                    />
                                )}
                                <h2>
                                    {"title" in hero ? hero.title : hero.name}
                                </h2>
                            </article>
                        ))}
                    </aside>
                </section>
            )}
        </React.Fragment>
    );
};


