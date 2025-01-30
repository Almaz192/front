import React, { useState } from "react";
import styles from "./ProductSection.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import Button2 from "../../components/Button2/Button2";

import ProductImage1 from "../../assets/images/Product-image1.png";
import ProductImage2 from "../../assets/images/Product-image2.png";
import ProductImage3 from "../../assets/images/Product-image3.png";
import ProductImage4 from "../../assets/images/Product-image4.png";
const productsPerPage = [
    [
        {
            image: ProductImage1,
            title: "Шпатель кондитерский",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage2,
            title: "Фруктовая начинка",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage3,
            title: "Коффе в упаковке",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage4,
            title: "Смесь для выпечки",
            pricePerUnit: 550,
            weight: "150 кг",
        },
    ],
    [
        {
            image: ProductImage1,
            title: "Шпатель кондитерский 2",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage2,
            title: "Фруктовая начинка 2",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage3,
            title: "Пластиковая упаковка 2",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage4,
            title: "Смесь для выпечки 2",
            pricePerUnit: 550,
            weight: "150 кг",
        },
    ],
    [
        {
            image: ProductImage1,
            title: "Шпатель кондитерский 3",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage2,
            title: "Фруктовая начинка 3",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage3,
            title: "Пластиковая упаковка 3",
            pricePerUnit: 550,
            weight: "150 кг",
        },
        {
            image: ProductImage4,
            title: "Смесь для выпечки 3",
            pricePerUnit: 550,
            weight: "150 кг",
        },
    ],
];

const Section4 = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= productsPerPage.length) {
            setCurrentPage(page);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.topContainer}>
                <div className={styles.topText}>
                    <p className={styles.sectiontopTitle}>
                        Вам могут понравиться
                    </p>
                    <h2 className={styles.sectionTitle}>
                        Рекомендуемые
                        <br /> товары
                    </h2>
                </div>
                <div className={styles.buttonWrapper}>
                    <Button2
                        label="Все товары"
                        onClick={() => {}}
                        className="roundedButton"
                    />
                </div>
            </div>

            <div className={styles.productGrid}>
                {productsPerPage[currentPage - 1].map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        pricePerUnit={product.pricePerUnit}
                        weight={product.weight}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </section>
    );
};

export default Section4;
