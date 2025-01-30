import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import Button2 from "../Button2/Button2";

const ProductCard = ({ image, title, pricePerUnit, weight }) => {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(pricePerUnit);

    const handleQuantityChange = (change) => {
        const newQuantity = Math.max(1, quantity + change);
        setQuantity(newQuantity);
        setTotalPrice(pricePerUnit * newQuantity);
    };

    return (
        <div className={styles.productCard}>
            <img src={image} alt={title} className={styles.productImage} />
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={styles.weight}>Вес: {weight}</p>
            <div className={styles.priceRow}>
                <p className={styles.price}>{totalPrice} с</p>
                <div className={styles.counter}>
                    <button
                        className={styles.butt}
                        onClick={() => handleQuantityChange(-1)}
                    >
                        -
                    </button>
                    <input
                        className={styles.inpt}
                        type="text"
                        value={quantity}
                        readOnly
                    />
                    <button
                        className={styles.butt}
                        onClick={() => handleQuantityChange(1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <Button2 label="В корзину" />
        </div>
    );
};

export default ProductCard;
