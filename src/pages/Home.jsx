import React from 'react';
import { Link } from "react-router-dom"; // Asegúrate de que esta línea esté correctamente escrita

// ************ Components ************
import Header from "../components/Header/Header";
import SwiperVapes from "../components/Swiper/SwiperVapes";
import SearchBar from "../components/SeachBar/SeachBar"
import Footer from '../components/Footer/Footer';

// ************ Styles ************
import "../styles/Home.css";

const VAPES_POPULAR = [
    {
        id: 1,
        name: "Mint",
        image: "./img/Mint.png",
        price: "250",
        color: "#30BEE1"
    },
    {
        id: 2,
        name: "Aloe Grape",
        image: "./img/Aloe_Grape.png",
        price: "250",
        color: "#AB48F8"
    },
    {
        id: 3,
        name: "Blueberry Raspberry",
        image: "./img/Blueberry_Raspberry.png",
        price: "250",
        color: "#225AE4"
    },
    {
        id: 4,
        name: "Grape Pear",
        image: "./img/Grape_Pear.png",
        price: "250",
        color: "#eac704"
    }
];

const VAPES_IPLAY = [
    {
        id: 1,
        name: "Mint",
        image: "./img/Mint.png",
        price: "250",
        color: "#30BEE1"
    },
    {
        id: 2,
        name: "Aloe Grape",
        image: "./img/Aloe_Grape.png",
        price: "250",
        color: "#AB48F8"
    },
    {
        id: 9,
        name: "Watermelon Bubble Gum",
        image: "./img/Watermelon_Bubble_Gum.png",
        price: "250",
        color: "#DDDCE8"
    },
    {
        id: 3,
        name: "Blueberry Raspberry",
        image: "./img/Blueberry_Raspberry.png",
        price: "250",
        color: "#225AE4"
    },
    {
        id: 5,
        name: "Lemon Berry",
        image: "./img/Lemon_Berry.png",
        price: "250",
        color: "#eac704"
    },
    {
        id: 7,
        name: "Sour Apple",
        image: "./img/Sour_Apple.png",
        price: "250",
        color: "#89DF76"
    },
    {
        id: 8,
        name: "Strawberry Litchy",
        image: "./img/Strawberry_litchy.png",
        price: "250",
        color: "#E37AF1"
    },
    {
        id: 6,
        name: "Pinapple",
        image: "./img/Pinapple.png",
        price: "250",
        color: "#F0BF3C"
    },
    {
        id: 4,
        name: "Grape Pear",
        image: "./img/Grape_Pear.png",
        price: "250",
        color: "#eac704"
    }
];

const VAPES_WAKA = [
    {
        id: 1,
        name: "Dark Cherry",
        image: "./img/Waka_Dark_Cherry.png",
        price: "250",
        color: "#990000"
        },
        {
        id: 2,
        name: "Fresh Mint",
        image: "./img/Fresh_Mint.png",
        price: "250",
        color: "#303030"
        },
        {
        id: 3,
        name: "Watermelon",
        image: "./img/Watermelon_Chill.png",
        price: "250",
        color: "#990000"
        },
        {
        id: 4,
        name: "Cool Mint",
        image: "./img/Cool_Mint.png",
        price: "250",
        color: "#303030"
        },
        {
        id: 5,
        name: "Strawberry",
        image: "./img/Strawberry.png",
        price: "250",
        color: "#E37AF1"
        },
        {
        id: 6,
        name: "Blueberry",
        image: "./img/Blueberry.png",
        price: "250",
        color: "#225AE4"
        },
        {
        id: 7,
        name: "Grape Apple",
        image: "./img/Grape_Apple.png",
        price: "250",
        color: "#225AE4"
        },
        {
        id: 8,
        name: "Mango",
        image: "./img/Mango.png",
        price: "250",
        color: "#F0BF3C"
        },
        {
        id: 9,
        name: "Icy Water",
        image: "./img/Icy_Water.png",
        price: "250",
        color: "#225AE4"
        },
        {
        id: 10,
        name: "Strawberry Dragon Fruit",
        image: "./img/StrawberryDF.png",
        price: "250",
        color: "#E37AF1"
        },
        {
        id: 11,
        name: "Kiwi Dragon Fruit",
        image: "./img/KiwiDFB.png",
        price: "250",
        color: "#E37AF1"
        },
        {
        id: 12,
        name: "Mr.Blue",
        image: "./img/Mr.Blue.png",
        price: "250",
        color: "#225AE4"
        },
        {
        id: 13,
        name: "Peach Blue Raspberry",
        image: "./img/PBR.png",
        price: "250",
        color: "#225AE4"
        },
        {
        id: 14,
        name: "Chewy Watermelon",
        image: "./img/ChewyWM.png",
        price: "250",
        color: "#E37AF1"
        },
        {
        id: 15,
        name: "Banana Melon",
        image: "./img/Banana_Melon.png",
        price: "250",
        color: "#F0BF3C"
        }  
];

const Home = () => {
    return (
        <>
            <Header />
            <div className="body">
                <div className='container'>
                    <SearchBar />
                    <div className="subtitle">
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
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
