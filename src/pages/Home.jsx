import { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// ************ Components ************
import Header from "../components/Header/Header";
import SwiperVapes from "../components/Swiper/SwiperVapes";
import SearchBar from "../components/SeachBar/SeachBar"
import Footer from '../components/Footer/Footer';

// ************ Styles ************
import "../styles/Home.css";

// ************ Hooks ************
import useApp from "../hooks/useApp";


import { VAPES_POPULAR, VAPES_IPLAY, VAPES_WAKA } from "../data/vapes.js";

const Home = () => {
    const { products } = useApp();
    
    return (
        <>
            <Header />
            <div className="body">
                <div className='container'>
                    <SearchBar />
                    <Link to="/template">Templates</Link>
                    {products.length > 0 ? (
                        products.map((element, index) => (
                            <Fragment
                                key={index}
                            >
                                <div 
                                    className="subtitle"
                                >
                                    <h2>{element.category}</h2>
                                    <button><Link to={`/categoria/${element.category}`}>Ver más</Link></button>
                                </div>
                                <SwiperVapes 
                                    vapes={element.products}
                                />
                            </Fragment>
                        ))
                    ): (
                        <h2 className='no-products'>No hay productos disponibles para esta categoría</h2>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
