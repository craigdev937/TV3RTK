import React from "react";
import styles from "./Navbar.module.css";
import { Link, Outlet } from "react-router";
import { Sun, Moon } from "lucide-react";
import { UAS, UAD } from "../global/Hooks";
import { toggleTheme } from "../global/ThemeSlice";
import LOGO from "@public/favicon.ico";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = UAD();
    const mode = UAS((state) => state.theme.mode);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <header className={styles.navbar}>
                <nav className={styles.nav}>
                    <Link
                        to={"/"}
                        className={styles.nav__logo}
                        onClick={closeMenu}
                    >
                        <img 
                            alt="TV" 
                            src={LOGO} 
                            className={styles.nav__img} 
                        />
                    </Link>

                    {/* THEME TOGGLE */}
                    <button
                        className={styles.nav__theme}
                        type="button"
                        aria-label={
                            mode === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        title={
                            mode === "dark"
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                        onClick={() => dispatch(toggleTheme())}
                    >
                        {mode === "dark" ? (
                            <Sun className={styles.nav__icon} />
                        ) : (
                            <Moon className={styles.nav__icon} />
                        )}
                    </button>

                    {/* NAV MENU BUTTON */}
                    <button
                        className={styles.nav__button}
                        type="button"
                        aria-label="toggle"
                        aria-expanded={open}
                        onClick={handleClick}
                    >
                        <aside
                            className={`
                                ${styles.nav__burger} 
                                ${open ? styles.open : ""}
                        `}>
                            <span className={styles.nav__line} />
                            <span className={styles.nav__line} />
                            <span className={styles.nav__line} />
                        </aside>
                    </button>

                    {/* SIDEBAR AND CONTAINER QUERIES */}
                    <menu className={open ?
                        `${styles.nav__menu} ${styles.active}` :
                        styles.nav__menu
                    }>
                        <li className={styles.nav__item}>
                            <Link
                                to={"/tv"}
                                className={styles.nav__links}
                                onClick={closeMenu}
                            >
                                TV
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link
                                to={"/film"}
                                className={styles.nav__links}
                                onClick={closeMenu}
                            >
                                Film
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link
                                to={"/actor"}
                                className={styles.nav__links}
                                onClick={closeMenu}
                            >
                                Actors
                            </Link>
                        </li>
                        <li className={styles.nav__item}>
                            <Link
                                to={"/fav"}
                                className={styles.nav__links}
                                onClick={closeMenu}
                            >
                                Favorites
                            </Link>
                        </li>
                    </menu>
                </nav>
            </header>
            <Outlet />
        </React.Fragment>
    );
};


