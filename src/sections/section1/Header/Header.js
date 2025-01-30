import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import Logo from "../../../assets/images/Logo.png";
import BagIcon from "../../../assets/images/Bag.png";
import UserIcon from "../../../assets/images/User.png";
import MenuIcon from "../../../assets/images/Menu.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src={Logo} alt="Food Land Logo" />
                    </a>
                </div>
                <nav
                    className={`${styles.nav} ${menuOpen ? styles.hidden : ""}`}
                >
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

                <div className={styles.icons}>
                    <div className={styles.iconWrapper}>
                        <img src={BagIcon} alt="Shopping Bag" />
                    </div>
                    <div className={styles.iconWrapper}>
                        <img src={UserIcon} alt="User Profile" />
                    </div>

                    <div
                        className={styles.mobileMenu}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <img src={MenuIcon} alt="Menu" />
                    </div>
                </div>
            </div>

            <div
                ref={menuRef}
                className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}
            >
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
            </div>
        </header>
    );
};

export default Header;
