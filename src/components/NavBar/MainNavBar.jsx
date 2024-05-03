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
                    
                    <div>
                        <div className='foto_producto'>
                            <img src="./public/img/Aloe_Grape.png" alt="" />
                        </div>
                        <div className='producto'>

                            <div className='descripcion'> 
                                <p>Descripcion del producto</p>
                            </div>
                            
                            <div className='cantidad'>
                                <p>contador</p>
                            </div>

                        </div>
                    </div>
                   
             
                    
                </div>
            </div>
            {cartOpen && <div className="backdrop" onClick={() => setCartOpen(false)}></div>}
        </>
    );
}

export default MainNavBar;
