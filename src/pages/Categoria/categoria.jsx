import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// ************ Components ************
import HeaderCat from "../../components/HeaderCat/HeaderCat.jsx";
import VapeCard from "../../components/Cards/VapeCard.jsx";
import SearchBarCat from "../../components/SearchBarCat/SearchBarCat.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// ************ Styles ************
import styles from "./Categoria.module.css";

// ************ Hooks ************
import useApp from "../../hooks/useApp.jsx";

// ************ Helpers ************
import orderElements from "../../helpers/orderElements.js";


const Categoria = () => {
    const { subcategory } = useParams();
    const { products, categories, setCategoryOrder, setInitialSubCategory } = useApp();
    const [filteredProducts, setFilteredProducts] = useState([]);

    
    useEffect(() => {
        const filterProducts = () => {
            setInitialSubCategory(subcategory);
            setFilteredProducts(products?.find(product => product.category === subcategory)?.products); 
            const mainCategory = categories?.filter(cat => cat.subcategories.map(subcat => subcat.name).includes(subcategory))[0]?.name;
            setCategoryOrder(mainCategory);
        };
        filterProducts();
    }, [products]);

    return (
        <>
            <HeaderCat />
            <div className={styles.body}>
                <div className={styles.back}>
                    <Link to="/">
                        <i className="fa-solid fa-arrow-left"></i> Regresar
                    </Link>
                </div>

                <div className={styles.CatHeaddiv}>
                    <h1>{subcategory}</h1>
                </div>
                <SearchBarCat />
                {/* <div className={styles.subtitle}>
                    <h2>Vapes</h2>
                </div> */}
                <div className={styles.vapes}>
                    {filteredProducts?.map(vape => (
                        <VapeCard 
                            key={vape.id}
                            vape={vape}
                        />
                    ))}
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Categoria;
