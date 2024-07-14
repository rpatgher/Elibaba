import styles from "./SearchBarCat.module.css"

const SearchBarCat = () => {
    return (
        <div className={styles.searchbarcontainer}>
            <div className={styles.searchbar}>
                <input 
                    type="text" 
                    placeholder="Buscar"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default SearchBarCat
