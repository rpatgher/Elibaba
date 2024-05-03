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
                    <i className="fa-solid fa-cart-shopping cartlogo" onClick={() => setCartOpen(!cartOpen)}></i>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className={`cart-panel ${cartOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={() => setCartOpen(false)}>X</button>
                    
                    <div className='carrito-items'>
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




                    <div className='carrito-items'>
                    
                        <div className='foto_producto'>
                            <img src="./public/img/Aloe_Grape.png" alt="" />
                        </div>
                        <div className='producto'>
                            <h4>Vape name</h4>
                            <div className='descripcion'> 
                                <p>Descripcion del producto</p>
                            </div>
                            
                            <div className='cantidad'>
                               <button>-</button>
                               <input></input>
                               <button>+</button>
                            </div>
                            

                        </div>
                        <button className="close">X</button>
                    </div>
                   
             
                    <div className='finalcart'>
                        <div className='topfinalcart'>
                        <div className='finalcartotal'> 
                            Total estimado
                        </div>
                        <div className='finalcarcosto'>
                            $ 900.00 MXN
                        </div>
                        </div>
                        <div className='finalcardesc'>
Descripcion de todo como aviso de privacidad Descripcion de todo como aviso de privacidad Descripcion de todo como aviso de privacidad
                        </div>
                        <div>
                        <button className='completeorder'>Completar compra <i class="fa-regular fa-credit-card"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {cartOpen && <div className="backdrop" onClick={() => setCartOpen(false)}></div>}
        </>
    );
}

export default MainNavBar;
