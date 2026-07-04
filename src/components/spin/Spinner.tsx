import styles from "./Spinner.module.css";

export const Spinner = () => {
    return (
        <section className={styles.spin__container}>
            <aside className={styles.spinner}>
                Loading...
            </aside>
        </section>
    );
};


