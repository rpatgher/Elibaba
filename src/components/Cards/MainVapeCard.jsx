// MainVapeCard.jsx
import React, { useState } from 'react';
import styles from './MainVapeCard.module.css';
import PopupPortal from './PopupPortal';

const MainVapeCard = ({ vape }) => {
    const { name, image, price, brand, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (event) => {
        event.stopPropagation();
        setShowPopup(!showPopup);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        alert('Producto agregado a carrito');
    };

    return (
        <div className={styles.mainCard} data-color={color} onClick={togglePopup}>
            <div className={styles.mainText}>
                <h2>{name}</h2>
                <p className={styles.mainPrice} style={{ color }}>${price}</p>
                <div className={styles.mainRating}></div>
                <p className={styles.mainBrand}>{brand}</p>
            </div>
            <div className={styles.mainImage}>
                <img src={image} alt={`${name} Vape Image`} />
            </div>
            {showPopup && (
                <PopupPortal>
                    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                        <h3>Vape: {name}</h3>
                        <h4>Descripcion:</h4>
                        <p>Viene con un tamaño portátil y una sensación cómoda en la mano. Capacidad de 10 ml de e-líquido.</p>
                        <p className={styles.imagevape}>
                            <img src={image} alt="" />
                        </p>
                        <p>Precio: ${price}</p>
                        <p>Hits: 4000</p>
                        <button onClick={handleAddToCart} className={styles.button1}>
                            Agregar a carrito <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className={styles.button2} onClick={togglePopup}>×</button>
                    </div>
                </PopupPortal>
            )}
        </div>
    );
};

export default MainVapeCard;
