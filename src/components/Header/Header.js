import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/images/Logo.png";
import BagIcon from "../../assets/images/Bag.png";
import UserIcon from "../../assets/images/User.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Food Land Logo" />
                </div>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="/about">О нас</a>
                        </li>
                        <li>
                            <a href="/news">Новости</a>
                        </li>
                        <li>
                            <a href="/catalog">Каталог</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.iconWrapper}>
                    <img src={BagIcon} alt="Shopping Bag" />
                </div>
                <div className={styles.iconWrapper}>
                    <img src={UserIcon} alt="User Profile" />
                </div>
            </div>
        </header>
    );
};

export default Header;
