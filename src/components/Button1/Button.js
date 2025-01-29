import React from "react";
import styles from "./Button.module.css";
import ArrowIcon from "../../assets/images/Arrow.png";

const Button = ({ label, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
            <div className={styles.arrowContainer}>
                <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
        </button>
    );
};

export default Button;
