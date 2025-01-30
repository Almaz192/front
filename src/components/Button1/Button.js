import React from "react";
import styles from "./Button.module.css";
import ArrowIcon from "../../assets/images/Arrow.png";

const Button = ({ label, onClick, className }) => {
    return (
        <button
            className={`${styles.button} ${
                className === "roundedButton" ? styles.roundedButton : ""
            }`}
            onClick={onClick}
        >
            {label}
            <div
                className={`${styles.arrowContainer} ${
                    className === "roundedButton" ? styles.roundedArrow : ""
                }`}
            >
                <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
        </button>
    );
};

export default Button;
