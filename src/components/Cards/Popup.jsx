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
                    <h3>Vape: {name}</h3>
                    <h4>Descripcion:</h4>
                    <p>
                        Viene con un tamaño portátil y una sensación cómoda en
                        la mano. Capacidad de 10 ml de e-líquido.
                    </p>
                    <p className={styles.imagevape}>
                        <img src={image} alt="" />
                    </p>
                    <p>Precio: ${price}</p>
                    <p>Hits: 4000</p>
                    <button
                        onClick={handleAddToCart}
                        className={styles.button1}
                    >
                        Agregar a carrito{" "}
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button className={styles.button2} onClick={togglePopup}>
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
