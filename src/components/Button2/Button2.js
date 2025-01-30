import React from "react";
import styles from "./Button2.module.css";
import ArrowIcon from "../../assets/images/Arrow.png";

const Button2 = ({ label, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {label}
            <div className={styles.arrowContainer}>
                <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
        </button>
    );
};

export default Button2;
