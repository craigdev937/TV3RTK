import React from "react";
import styles from "./TV.module.css";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";

export const TV = () => {


    return (
        <React.Fragment>
            <main>
                <h1 className={styles.title}>TV Page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis consectetur sed blanditiis, asperiores omnis fugit dolorem rem molestias unde pariatur ducimus architecto placeat cumque amet nemo provident voluptatem repellat totam!</p>
            </main>
        </React.Fragment>
    );
};

/*
    I want to create a tearnany operator with 
    the choice for a string:  "day" or "week".  
    This will be connected to a button 
    that can slide between "day" or "week"
*/

