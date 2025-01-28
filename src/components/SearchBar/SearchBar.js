import React from "react";
import styles from "./SearchBar.module.css";
import ArrowIcon from "../../assets/images/Arrow.png";

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Найти..."
                className={styles.searchInput}
            />
            <button className={styles.searchButton}>
                Заказать звонок
                <div className={styles.arrowContainer}>
                    <img src={ArrowIcon} alt="Arrow Icon" />
                </div>
            </button>
        </div>
    );
};

export default SearchBar;
