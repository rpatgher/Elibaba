import styles from "./CartItem.module.css";


const CartItem = () => {
    return (
        <div className={styles.item}>
            <div className={styles.fotoproducto}>
                <img src="./public/img/Aloe_Grape.png" alt="Aloe Grape" />
            </div>
            <div className={styles.producto}>
                <div className={styles.descripcion}>
                    <h4>Vape name <span>$300</span></h4>
                    <p>Descripcion del producto</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.cantidad}>
                        <button>-</button>
                        <input></input>
                        <button>+</button>
                    </div>
                    <div className={styles.subtotal}>
                        <p>Subtotal: <span>$250</span></p>
                    </div>
                </div>
            </div>
            <button className={styles.delete}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    );
};

export default CartItem;
