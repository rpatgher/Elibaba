import styles from "./SeachBar.module.css"

const SeachBar = () => {
    return (
        <div className={styles.searchbarcontainer}>
            <div className={styles.searchbar}>
                <input 
                    type="text" 
                    placeholder="Buscar"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={styles.categories}>
                <div className={styles.category}>
                    Marca
                </div>
                <div className={styles.category}>
                    Sabor
                </div>
                <div className={styles.category}>
                    Hits
                </div>
                <div className={styles.category}>
                    Recargable
                </div>
            </div>
        </div>
    )
}

export default SeachBar
