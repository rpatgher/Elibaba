// VapeCard.jsx
import React, { useState } from 'react';
import styles from './VapeCard.module.css';
import styles1 from "./MainVapeCard.module.css";
import PopupPortal from './PopupPortal';

const VapeCard = ({ vape }) => {
    const { name, price, image, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = (e) => {
        e.stopPropagation();
        setShowPopup(!showPopup);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        alert('Producto agregado a carrito');
    };

    return (
        <div className={styles.card} style={{ backgroundColor: `color-mix(in srgb, ${color} 40%, #fff)` }} onClick={togglePopup}>
            <div className={styles.vape}>
                <div className={styles.vapeimage}>
                    <img src={image} alt="Vape Image" />
                </div>
                <p>{name}</p>
                <button className={styles.addButton}>+</button>
            </div>
            <div className={styles.price}>
                <p style={{ backgroundColor: color }}>${price}</p>
            </div>
            {showPopup && (
                <PopupPortal>
                    <div className={styles1.popup} onClick={(e) => e.stopPropagation()}>
                        <h3>Vape: {name}</h3>
                        <h4>Descripcion:</h4>
                        <p>Viene con un tamaño portátil y una 
                           sensación cómoda en la mano. 
                           Capacidad de 10 ml de e-líquido.
                        </p>
                        <p className={styles1.imagevape}>
                            <img src={image} alt="" />
                        </p>
                        <p>Precio: ${price}</p>
                        <p>Hits: 4000</p>
                        <button onClick={handleAddToCart} className={styles1.button1}>
                            Agregar a carrito <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        <button className={styles1.button2} onClick={togglePopup}>×</button>
                    </div>
                </PopupPortal>
            )}
        </div>
    );
};

export default VapeCard;
