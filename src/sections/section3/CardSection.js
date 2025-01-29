import React from "react";
import styles from "./CardSection.module.css";
import Card from "../Card/Card";
import CardImage1 from "../../assets/images/Card-image1.png";
import CardImage2 from "../../assets/images/Card-image2.png";
import CardImage3 from "../../assets/images/Card-image3.png";
import CardImage4 from "../../assets/images/Card-image4.png";

const CardSection = () => {
    const cards = [
        { image: CardImage1, title: "Шоколадная продукция" },
        { image: CardImage2, title: "Ореховая продукция" },
        { image: CardImage3, title: "Молочная продукция" },
        { image: CardImage4, title: "Декоративные изделия" },
    ];

    return (
        <section className={styles.cardSection}>
            <h2 className={styles.sectionTitle}>
                Просмотр товаров <span>по категориям</span>
            </h2>
            <div className={styles.cardContainer}>
                {cards.map((card, index) => (
                    <Card key={index} image={card.image} title={card.title} />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
