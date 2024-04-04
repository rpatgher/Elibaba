import React, { useState } from 'react';
import './MainVapeCard.css';



const MainVapeCard = ({ vape }) => {
    const { name, image, price, brand, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    return (
        <div className="main-card" data-color={color} onClick={togglePopup}>
            <div className="main-text">
                <p className="main-price" style={{ color }}>${price}</p>
                <div className="main-rating"></div>
                <p className="main-brand">{brand}</p>
            </div>
            <div className="main-image">
                <img src={image} alt={`${name} Vape Image`} />
            </div>
            {showPopup && (
                <div className="popup" onMouseLeave={handleMouseLeave}>
                    <h3>Descripción:</h3>
                    <p>Viene con un tamaño portátil y una 
                        sensación cómoda en la mano. 
                        Capacidad de 10 ml de e-líquido.</p>
                    <p>Vape: {name}</p>
                    <p className='imagevape'><img src={image} alt="" /></p>
                    <p>Precio: ${price}</p>
                    <p>Hits: 4000</p>
                    <button onClick={togglePopup} className='button1'>Agregar a carrito <i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            )}
        </div>
    );
};
export default MainVapeCard;
