import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>SWIFT CART</h2>
        <p className={styles.tagline}>
          Your One-Stop Shop for Everything You Love
        </p>

        <div className={styles.socialIcons}>
          <a href="#" className={styles.icon}>
            <FaFacebook />
          </a>
          <a href="#" className={styles.icon}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.icon}>
            <FaInstagram />
          </a>
        </div>

        <div className={styles.footerLinks}>
          <p>
            &copy; {new Date().getFullYear()} Swift Cart. All Rights Reserved.
          </p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
