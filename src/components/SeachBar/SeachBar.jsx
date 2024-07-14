import styles from "./SeachBar.module.css";

// ************ Hooks ************
import useApp from "../../hooks/useApp";

const SeachBar = () => {
    const { categories, changeCategory, categoryOrder } = useApp();
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
                {categories.map((category, index) => (
                    <div 
                        className={`${styles.category} ${category.name === categoryOrder ? styles.active : ''}`} 
                        key={index}
                        onClick={() => changeCategory(category.name)}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SeachBar
