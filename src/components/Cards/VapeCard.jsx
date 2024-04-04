import React, { useState } from 'react';
import './VapeCard.css';

const VapeCard = ({ vape }) => {
    const { name, price, image, color } = vape;
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);

    };

    return (
        <div className="card" style={{ backgroundColor: `color-mix(in srgb, ${color} 40%, #fff)` }}>
            <div className="vape" onClick={togglePopup}>
                <div className="image">
                    <img src={image} alt="Vape Image" />
                </div>
                <p className="descripcion">{name} </p>
                <button className="add-button" onClick={handleAddClick}>+</button>
            </div>
            <div className="price">
                <p style={{ backgroundColor: color }}>${price}</p>
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

export default VapeCard;

