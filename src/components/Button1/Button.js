import React from "react";
import styles from "./Button.module.css";
import ArrowIcon from "../../assets/images/Arrow.png";

const Button = ({ label, onClick, className }) => {
    // Combine all classNames properly
    const buttonClassNames = [styles.button];

    if (className?.includes("roundedButton"))
        buttonClassNames.push(styles.roundedButton);
    if (className?.includes("gapButton"))
        buttonClassNames.push(styles.gapButton);

    return (
        <button className={buttonClassNames.join(" ")} onClick={onClick}>
            {label}
            <div className={styles.arrowContainer}>
                <img src={ArrowIcon} alt="Arrow Icon" />
            </div>
        </button>
    );
};

export default Button;
