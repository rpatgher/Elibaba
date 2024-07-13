import styles from "./MainVapeCard.module.css";

const Popup = ({vape, togglePopup, handleAddToCart}) => {
    const { name, image, price, color } = vape;
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
                            <img src={image} alt="" />
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
                            >{name}</h3>
                            <p
                                className={styles.price}   
                                style={{
                                    color: `color-mix(in srgb, ${color} 70%, #000)`,
                                }}
                            >${price}</p>
                            <h4>Descripción</h4>
                            <p>
                                Viene con un tamaño portátil y una sensación cómoda en
                                la mano. Capacidad de 10 ml de e-líquido.
                            </p>
                            <div className={styles.tags}>
                                <p 
                                    className={styles.tag}
                                    style={{
                                        backgroundColor: `color-mix(in srgb, ${color} 80%, #000)`,
                                    }}
                                >4000 hits</p>
                            </div>
                            <div
                                className={styles.addToCart}
                            >
                                <button
                                    onClick={handleAddToCart}
                                    className={styles}
                                    style={{
                                        backgroundColor: `color-mix(in srgb, ${color} 80%, #000)`,
                                    }}
                                >
                                    Agregar a carrito{" "}
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.closeBtn}>
                        <button onClick={togglePopup}>
                            ×
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
