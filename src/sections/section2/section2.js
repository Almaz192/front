import React from "react";
import styles from "./Section2.module.css";
import BlockImage from "../../assets/images/Block-image.png";
import Button from "../../components/Button1/Button";

const Section2 = () => {
    return (
        <section className={styles.section2}>
            <div className={styles.overlay}>
                <h2 className={styles.title}>
                    Мы помогаем местным кондитерам и шеф-поварам претворять в
                    жизнь свои самые смелые кулинарные задумки
                </h2>
                <div className={styles.blockContainer}>
                    <div className={styles.greenBlock}>
                        <p className={styles.mobileOnly}>
                            Мы гордимся долгосрочными и крепкими отношениями с
                            нашими партнёрами и активно развиваем новые.
                        </p>
                        <p>
                            Мы предлагаем вам не просто сырье, а экспертность и
                            индивидуальный подход, всегда готовы помочь найти
                            альтернативу, закрыть срочную потребность или
                            предложить уникальное решение.
                        </p>
                    </div>

                    <div className={styles.imageBlock}>
                        <img src={BlockImage} alt="Кондитерский процесс" />
                        <div className={styles.buttonContainer}>
                            <Button
                                label="Читать далее"
                                className="roundedButton"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
