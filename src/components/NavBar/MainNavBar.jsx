import { useState } from 'react';
import './MainNavBar.css';

const MainNavBar = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <div className="navbar">
                <h1 className="logo-name">Elibaba</h1>
                <div className="logo-image">
                    <img src="./img/Elibabalogo.png" alt="Logo Elibaba" />
                </div>
                <div className="actions">
                    <i className="fa-solid fa-cart-shopping" onClick={() => setCartOpen(!cartOpen)}></i>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className={`cart-panel ${cartOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={() => setCartOpen(false)}>X</button>
                    {/* Aquí iría el contenido de tu carrito de compras */}
                    <p>Carrito de compras...</p>
                </div>
            </div>
            {cartOpen && <div className="backdrop" onClick={() => setCartOpen(false)}></div>}
        </>
    );
}

export default MainNavBar;
