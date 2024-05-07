import { useState } from 'react';
import './MainNavBar.css';
import { Link } from "react-router-dom"

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
                    <Link to="/login"><i className="fa-solid fa-user"></i></Link>
                </div>
                <div className={`cart-panel ${cartOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={() => setCartOpen(false)}>X</button>

                    <div className='titulo'>
                    <h2>Tu carrito</h2>
                    <div className='titulo-categorias'>
                    <p>producto</p>
                    <p>total</p>
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

                        <button className="close"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"/></button>
                        
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

                        <button className="close"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"/></button>
                        
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
