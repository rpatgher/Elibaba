import React, { useState } from 'react';
import styles from './VapeCard.module.css'
import styles1 from "./MainVapeCard.module.css"

const VapeCard = ({ vape }) => {
    const { name, price, image, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);

    };

    const handleAddToCart = () => {
        togglePopup();
        // Aquí puedes mostrar la notificación
        alert('Producto agregado a carrito');
    };

    return (
        <div className={styles.card} style={{ backgroundColor: `color-mix(in srgb, ${color} 40%, #fff)` }}>
            <div className={styles.vape} onClick={togglePopup}>
                <div className= {styles.vapeimage}>
                    <img src={image} alt="Vape Image" />
                </div>
                <p>{name} </p>
                <button 
                    className={styles.addButton} 
                >+</button>
            </div>
            <div className={styles.price}>
                <p style={{ backgroundColor: color }}>${price}</p>
            </div>
            {showPopup && (
               <div className={styles1.popup} onMouseLeave={handleMouseLeave}>
               <h3>Vape: {name}</h3>
               <h4>Descripcion:</h4>
               <p>Viene con un tamaño portátil y una 
                   sensación cómoda en la mano. 
                   Capacidad de 10 ml de e-líquido.</p>
               <p className={styles1.imagevape}><img src={image} alt="" /></p>
               <p>Precio: ${price}</p>
               <p>Hits: 4000</p>
               <button onClick={handleAddToCart} className={styles1.button1}>Agregar a carrito <i className="fa-solid fa-cart-shopping"></i></button>
           </div>
            )}
        </div>
    );
};

export default VapeCard;

