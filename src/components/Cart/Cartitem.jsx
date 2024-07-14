import styles from "./CartItem.module.css";


// ************ Hooks ************
import useApp from "../../hooks/useApp";

const CartItem = ({ vape }) => {
    const { addItemAmount, restItemAmount, removeItem, changeItemAmount } = useApp();
    const { name, price, image, description, amount } = vape;
    return (
        <div className={styles.item}>
            <div className={styles.fotoproducto}>
                <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/uploads/elements/${image}`}
                    alt="Vape Image"
                />
            </div>
            <div className={styles.producto}>
                <div className={styles.descripcion}>
                    <h4>{name} <span>${price}</span></h4>
                    <p>{description}</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.cantidad}>
                        <button
                            type="button"
                            onClick={() => restItemAmount(vape.id)}
                            disabled={amount === 0}
                        >-</button>
                        <input 
                            type="text" 
                            value={amount}
                            onChange={(e) => changeItemAmount(e, vape.id)}
                        />
                        <button
                            type="button"
                            onClick={() => addItemAmount(vape.id)}
                        >+</button>
                    </div>
                    <div className={styles.subtotal}>
                        <p>Subtotal: <span>${price * amount}</span></p>
                    </div>
                </div>
            </div>
            <button 
                className={styles.delete}
                type="button"
                onClick={() => removeItem(vape.id)}
            >
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    );
};

export default CartItem;
