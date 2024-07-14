import { useEffect, useState } from "react";
import styles from "./MainVapeCard.module.css";

// ************ Hooks ************
import useApp from "../../hooks/useApp";

const Popup = ({ vape, togglePopup }) => {
    const { handleAddToCart, cart, addItemAmount, restItemAmount, changeItemAmount } = useApp();
    const [isInCart, setIsInCart] = useState(false);
    const { name, image, price, color, description } = vape;

    const amount = cart.find(item => item.id === vape.id)?.amount || 0;

    useEffect(() => {
        const verifyCart = () => {
            if(cart.find(item => item.id === vape.id)){
                setIsInCart(true);
            }else{
                setIsInCart(false);
            }
        }
        return () => verifyCart();
    }, []);
    return (
        <div>
            <div
                className={styles.popupcontainer}
                style={{
                    backgroundColor: `color-mix(in srgb, ${color}30 40%, #000)`,
                }}
            >
                <div
                    className={styles.popup}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={styles.content}>
                        <div className={styles.imagevape}>
                            <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/elements/${image}`}
                                alt={`${name} Vape Image`}
                            />
                        </div>
                        <div
                            className={styles.info}
                            style={{
                                color: `color-mix(in srgb, ${color} 70%, #000)`,
                            }}
                        >
                            <h3
                                style={{
                                    color: `color-mix(in srgb, ${color} 70%, #000)`,
                                }}
                            >
                                {name}
                            </h3>
                            <p
                                className={styles.price}
                                style={{
                                    color: `color-mix(in srgb, ${color} 70%, #000)`,
                                }}
                            >
                                ${price}
                            </p>
                            <h4>Descripción</h4>
                            <p>{description}</p>
                            <div className={styles.tags}>
                                <p
                                    className={styles.tag}
                                    style={{
                                        backgroundColor: `color-mix(in srgb, ${color} 80%, #000)`,
                                    }}
                                >
                                    4000 hits
                                </p>
                            </div>
                            <div className={styles.addToCart}>
                                {!isInCart ? (
                                    <button
                                        onClick={() => {
                                            setIsInCart(true);
                                            handleAddToCart(vape)
                                        }}
                                        className={styles}
                                        style={{
                                            backgroundColor: `color-mix(in srgb, ${color} 80%, #000)`,
                                        }}
                                    >
                                        Agregar a carrito{" "}
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                ): (
                                    <div className={styles.cantidad}>
                                        <button
                                            type="button"
                                            onClick={() => restItemAmount(vape.id)}
                                            disabled={amount === 0}
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${color} 80%, #000)`,
                                            }}
                                        >-</button>
                                        <input 
                                            type="text" 
                                            value={amount}
                                            onChange={(e) => changeItemAmount(e, vape.id)}
                                            style={{
                                                color: `color-mix(in srgb, ${color} 80%, #000)`,
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => addItemAmount(vape.id)}
                                            style={{
                                                backgroundColor: `color-mix(in srgb, ${color} 80%, #000)`,
                                            }}
                                        >+</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.closeBtn}>
                        <button onClick={togglePopup}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
