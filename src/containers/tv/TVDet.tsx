import React from "react";
import styles from "./TVDet.module.css";
import { Link, useParams } from "react-router";
import { TMDB } from "../../global/TMDB";
import { Spinner } from "../../components/spin/Spinner";
const IMG = "https://image.tbdb.org/t/p/w500";

export const TVDet = () => {
    const { id } = useParams();
    const tvID = id !== undefined ? Number(id) : 0;
    const { data } = TMDB.useTvdetailQuery(tvID);
    console.log(data!);

    return (
        <React.Fragment>

        </React.Fragment>
    );
};


