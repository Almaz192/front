import React from "react";
import styles from "./Card.module.css";
import Button2 from "../Button2/Button2";

const Card = ({ image, title }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {}
                <div className={styles.buttonContainer}>
                    <Button2 label="Подробнее" />
                </div>
            </div>
        </div>
    );
};

export default Card;
