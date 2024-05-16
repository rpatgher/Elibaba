import { useState } from 'react';
import { Link } from "react-router-dom"
import styles from "./MainNavBar.module.css"

const MainNavBar = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <div className={styles.navbar}>
                <h1 className={styles.logoname}>Elibaba</h1>
                <div className={styles.logoimage}>
                    <img src="../src\assets\img\Elibabalogo.png" alt="Logo Elibaba" />
                </div>
                <div className={styles.actions}>
                    <i className={`fa-solid fa-cart-shopping ${styles.cartlogo}`}  onClick={() => setCartOpen(!cartOpen)}></i>
                    <Link to="/login"><i className="fa-solid fa-user"></i></Link>
                </div>
                <div className={`${styles.cartpanel} ${cartOpen ? 'open' : ''}`}>
                    <button className={styles.closebtn} onClick={() => setCartOpen(false)}><i className="fa-solid fa-x"></i></button>

                    <div className={styles.titulo}>
                    <h2>Tu carrito</h2>
                    <div className={styles.titulocategorias}>
                    <p>producto</p>
                    <p>total</p>
                    </div>
                    
                    </div>

                    <div className={styles.carritoitems}>
                    
                        <div className={styles.fotoproducto}>
                            <img src="./public/img/Aloe_Grape.png" alt="Aloe Grape" />
                        </div>
                        <div className={styles.producto}>
                            <h4>Vape name</h4>
                            <div className={styles.descripcion}> 
                                <p>Descripcion del producto</p>
                                <p>$30</p>
                            </div>
                            
                            <div className={styles.cantidad}>
                               <button>-</button>
                               <input></input>
                               <button>+</button>
                            </div>
                            
                            

                        </div>

                        <button className={styles.colse}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKRJREFUSEvtlUEKgCAQRV93CYK6TsdpGXSZrlPQaYpAXVjDt8xd7mR03v8z6FQUXlXh/ChAD4xAYwjZgAGYLaEKsACtcLkC3VvA7i5aQlRclkglUPELwF/I7X1wHFsvDvDKpfXIonn+dfO+BsQK1T7wUx2ohNkl+gGXd/W0JH8P5NeUXSJFeAxIGTQx9HbwWC/5HJUTUCvpLm6OTjUyE/Pbx4oDDlBhOBmYaWrOAAAAAElFTkSuQmCC"/></button>
                        
                    </div>


                    
                   
             
                    <div className={styles.finalcart}>
                        <div className={styles.topfinalcart}>
                        <div className={styles.finalcartotal}> 
                            Total estimado
                        </div>
                        <div className={styles.finalcarcosto}>
                            $ 900.00 MXN
                        </div>
                        </div>
                        <div className={styles.finalcardesc}>
Descripcion de todo como aviso de privacidad Descripcion de todo como aviso de privacidad Descripcion de todo como aviso de privacidad
                        </div>
                        <div>
                        <button className={styles.completeorder}>Completar compra <i class="fa-regular fa-credit-card"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {cartOpen && <div className={styles.backdrop} onClick={() => setCartOpen(false)}></div>}
        </>
    );
}

export default MainNavBar;
