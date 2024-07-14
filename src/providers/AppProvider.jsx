import { createContext, useEffect, useState } from "react";

import clientAxios from '../config/clientAxios';
import generateHash from '../helpers/generateHash.js';

// ************ Helpers ************
import orderElements from "../helpers/orderElements.js";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [elements, setElements] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryOrder, setCategoryOrder] = useState('');


    useEffect(() => {
        // Get products from the server
        const getVapes = async () => {
            const hash = generateHash();
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'x-client-api-key': import.meta.env.VITE_API_KEY,
                    'x-client-hash': `${hash}`,
                    'x-client-website': 'Shakalo Store',
                }
            }
            try {
                const { data } = await clientAxios('/api/elibaba/elements', config);
                setElements(data.elements);
                setCategories(data.categories);
                setCategoryOrder(data.elements[0].categories[0].category);
                setProducts(orderElements(data.elements, data.elements[0].categories[0].category));
                // TODO: Poner categoría principal
            } catch (error) {
                console.log(error);
            }
        };
        return () => getVapes();
    }, []);

    const changeCategory = (category) => {
        setCategoryOrder(category);
        setProducts(orderElements(elements, category));
    }


    return (
        <AppContext.Provider value={{
            products,
            categories,
            changeCategory
            
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider };
export default AppContext;