import React from "react";
import styles from "./Pagination.module.css";
import StraightArrow from "../../assets/images/Straight-arrow.png";

const Pagination = ({ currentPage, onPageChange }) => {
    const pages = [1, 2, 3];

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.arrowButton}
            >
                <img
                    src={StraightArrow}
                    alt="Previous"
                    className={styles.leftArrow}
                />
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? styles.active : ""}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pages.length}
                className={styles.arrowButton}
            >
                <img
                    src={StraightArrow}
                    alt="Next"
                    className={styles.rightArrow}
                />
            </button>
        </div>
    );
};

export default Pagination;
