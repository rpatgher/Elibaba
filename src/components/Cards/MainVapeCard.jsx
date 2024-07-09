// MainVapeCard.jsx
import React, { useState } from "react";
import styles from "./MainVapeCard.module.css";
import PopupPortal from "./PopupPortal";
import Popup from "./Popup";

const MainVapeCard = ({ vape, setCartOpen }) => {
    const { name, image, price, brand, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (event) => {
        event.stopPropagation();
        setShowPopup(!showPopup);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        alert("Producto agregado a carrito");
        setCartOpen(true); // # esto se agrega

    };

    return (
        <div
            className={styles.mainCard}
            data-color={color}
            onClick={togglePopup}
        >
            <div className={styles.mainText}>
                <h2>{name}</h2>
                <p className={styles.mainPrice} style={{ color }}>
                    ${price}
                </p>
                <div className={styles.mainRating}></div>
                <p className={styles.mainBrand}>{brand}</p>
            </div>
            <div className={styles.mainImage}>
                <img src={image} alt={`${name} Vape Image`} />
            </div>
            {showPopup && (
                <PopupPortal>
                    <Popup 
                        vape={vape} 
                        togglePopup={togglePopup} 
                        handleAddToCart={handleAddToCart}
                    />
                </PopupPortal>
            )}
        </div>
    );
};

export default MainVapeCard;
