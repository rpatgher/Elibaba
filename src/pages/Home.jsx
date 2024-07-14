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
                    {products.map((element, index) => (
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
                    ))}
                    {/* <div className="subtitle">
                        <h2>Popular</h2>
                        <button><Link to="/categoria/popular">Ver más</Link></button>
                    </div>
                    <SwiperVapes 
                        vapes={VAPES_POPULAR}
                    />
                    <div className="subtitle">
                        <h2>IPLAY</h2>
                        <button><Link to="/categoria/iplay">Ver más</Link></button>
                    
                    </div>
                    <SwiperVapes 
                        vapes={VAPES_IPLAY}
                    />
                    <div className="subtitle">
                        <h2>Waka</h2>
                        <button><Link to="/categoria/waka">Ver más</Link></button>
                    </div>
                    <SwiperVapes 
                        vapes={VAPES_WAKA}
                    /> */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
