import { createContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import clientAxios from '../config/clientAxios';
import generateHash from '../helpers/generateHash.js';

// ************ Helpers ************
import orderElements from "../helpers/orderElements.js";

const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [initialSubCategory, setInitialSubCategory] = useState('');
    const [elements, setElements] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryOrder, setCategoryOrder] = useState('');


    const [cart, setCart] = useState([]);

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
            };
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

    const handleAddToCart = (product) => {
        setCart([...cart, { ...product, amount: 1 }]);
    };

    const addItemAmount = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, amount: item.amount + 1 };
            }
            return item;
        });
        setCart(newCart);
    }

    const restItemAmount = (id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                if(item.amount === 1){
                    return item;
                }else{
                    return { ...item, amount: item.amount - 1 };
                }
            }
            return item;
        });
        setCart(newCart);
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    const changeItemAmount = (e, id) => {
        const newCart = cart.map(item => {
            if (item.id === id) {
                if(!(isNaN(e.target.value) || e.target.value < 1)){
                    return { ...item, amount: parseInt(e.target.value) };   
                }
            }
            return item;
        });
        setCart(newCart);
    }


    return (
        <AppContext.Provider value={{
            products,
            categories,
            changeCategory,
            categoryOrder,
            setCategoryOrder,
            setInitialSubCategory,
            handleAddToCart,
            cart,
            addItemAmount,
            restItemAmount,
            removeItem,
            changeItemAmount
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider };
export default AppContext;