import React from "react";
import styles from "./SearchBar.module.css";
import Button from "../Button1/Button"; // Using the new button component

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Найти..."
                className={styles.searchInput}
            />
            <Button
                label="Заказать звонок"
                onClick={() => alert("Calling...")}
            />
        </div>
    );
};

export default SearchBar;
