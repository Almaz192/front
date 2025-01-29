import React from "react";
import styles from "./CardSection.module.css";
import Card from "./../../components/Card/Card";
import CardImage1 from "../../assets/images/Card-image1.png";
import CardImage2 from "../../assets/images/Card-image2.png";
import CardImage3 from "../../assets/images/Card-image3.png";
import CardImage4 from "../../assets/images/Card-image4.png";

const section3 = () => {
    const cards = [
        { image: CardImage1, title: "Шоколад и какао продуты" },
        { image: CardImage2, title: "Молочная продукция" },
        { image: CardImage3, title: "Ингредиенты" },
        { image: CardImage4, title: "Покрытия и наполнители" },
    ];

    return (
        <section className={styles.cardSection}>
            <h2 className={styles.sectionTitle}>
                Просмотр товаров
                <br /> по <span>категориям</span>
            </h2>
            <div className={styles.cardContainer}>
                {cards.map((card, index) => (
                    <Card key={index} image={card.image} title={card.title} />
                ))}
            </div>
        </section>
    );
};

export default section3;
