import React from "react";
import styles from "./HeroSection.module.css";
import SearchBar from "../SearchBar/SearchBar";
import BackgroundImage from "../../../assets/images/Background-image.png";

const HeroSection = () => {
    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className={styles.overlay}>
                <h1 className={styles.title}>
                    Ваш путеводитель в области сырья
                </h1>
                <SearchBar />
            </div>
        </section>
    );
};

export default HeroSection;
