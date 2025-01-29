import React from "react";
import styles from "./Card.module.css";
import Button from "../Button1/Button";

const Card = ({ image, title }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {/* ✅ Stretch Button */}
                <div className={styles.buttonContainer}>
                    <Button
                        label="Подробнее"
                        className="roundedButton gapButton"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
