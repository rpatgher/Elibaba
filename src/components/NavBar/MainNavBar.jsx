import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./MainNavBar.module.css";
import Cart from "../Cart/Cart";

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
                    <button 
                        type='button'
                        className={`${styles.cartIcon}`}
                        onClick={() => setCartOpen(true)}
                    >
                        <i className={`fa-solid fa-cart-shopping`}></i>
                    </button>
                    
                    <Link to="/login"><i className="fa-solid fa-user"></i></Link>
                </div>
            </div>
            {cartOpen && (
                <Cart 
                    cartOpen={cartOpen}
                    setCartOpen={setCartOpen}
                />
            )}
        </>
    );
}

export default MainNavBar;
