import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";



const Cart = ({cartOpen, setCartOpen}) => {
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const doAnimation = () => {
            setTimeout(() => {
                setAnimation(true);
            }, 100);
        };
        return () => doAnimation();
    }, []);

    const closeCart = () => {
        setAnimation(false);
        setTimeout(() => {
            setCartOpen(false);
        }, 100);
    };

    return (
        <div className={styles.backdrop}>
            <div
                className={`${styles.cartpanel} ${animation ? styles.open : ""}`}
            >
                <button
                    className={styles.closebtn}
                    onClick={() => closeCart()}
                >
                    <i className="fa-solid fa-x"></i>
                </button>

                <div className={styles.titulo}>
                    <h2>Tu carrito</h2>
                    <div className={styles.titulocategorias}>
                        <p>Productos</p>
                    </div>
                </div>

                <div className={styles.carritoitems}>
                    <CartItem />
                </div>

                <div className={styles.finalcart}>
                    <div className={styles.topfinalcart}>
                        <div className={styles.finalcartotal}>
                            Total estimado
                        </div>
                        <div className={styles.finalcarcosto}>$ 900.00 MXN</div>
                    </div>
                    <div className={styles.finalcardesc}>
                        Al completar tu compra, estás de acuerdo con nuestros
                        Términos y Condiciones y Política de Privacidad. Todos
                        los productos son revisados antes del envío para
                        garantizar la máxima calidad. Tu información personal es
                        segura con nosotros y se utilizará únicamente para
                        procesar tu pedido y mejorar tu experiencia de compra.{" "}
                    </div>
                    <div>
                        <button className={styles.completeorder}>
                            Completar compra{" "}
                            <i className="fa-regular fa-credit-card"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
