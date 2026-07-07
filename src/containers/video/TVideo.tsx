import ReactDOM from "react-dom";
import styles from "./TVideo.module.css";

type TM = {
    show: boolean,
    closeTV: () => void
};

export const TVideo = ({ show, closeTV }: TM) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <section className={styles.tv__modal}>
            <aside 
                className={styles.tv__overlay} 
                onClick={closeTV} 
            />
            <aside 
                className={styles.tv__video}
            >
                <h1>TVideo Portal</h1>
                <button onClick={closeTV}>Close</button>
            </aside>
        </section>,
        document.getElementById("modal") as HTMLElement
    )
};


