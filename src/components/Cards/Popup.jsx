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
                    <h3>{name}</h3>
                    <div className={styles.content}>
                        <div className={styles.imagevape}>
                            <img src={image} alt="" />
                        </div>
                        <div className={styles.info}>
                            <h4>Descripcion:</h4>
                            <p>
                                Viene con un tamaño portátil y una sensación cómoda en
                                la mano. Capacidad de 10 ml de e-líquido.
                            </p>
                            <p>4000 hits</p>
                            <p className={styles.price}>${price}</p>
                        </div>
                    </div>
                    <div
                        className={styles.button1}
                    >
                        <button
                            onClick={handleAddToCart}
                            className={styles}
                        >
                            Agregar a carrito{" "}
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                    <div className={styles.button2}>
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
