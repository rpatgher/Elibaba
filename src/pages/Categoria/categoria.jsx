import React from "react";
import { Link, useParams } from "react-router-dom";

// ************ Components ************
import HeaderCat from "../../components/HeaderCat/HeaderCat";
import VapeCard from "../../components/Cards/VapeCard";
import SearchBarCat from "../../components/SearchBarCat/SearchBarCat";
import Footer from "../../components/Footer/Footer";

// ************ Styles ************
import styles from "./Categoria.module.css";




const VAPES_WAKA = [
    {
        id: 1,
        name: "Dark Cherry",
        image: "/img/Waka_Dark_Cherry.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 2,
        name: "Fresh Mint",
        image: "/img/Fresh_Mint.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 3,
        name: "Watermelon",
        image: "/img/Watermelon_Chill.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 4,
        name: "Cool Mint",
        image: "/img/Cool_Mint.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 5,
        name: "Strawberry",
        image: "/img/Strawberry.png",
        price: "250",
        color: "#E37AF1",
    },
    {
        id: 6,
        name: "Blueberry",
        image: "/img/Blueberry.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 7,
        name: "Grape Apple",
        image: "/img/Grape_Apple.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 8,
        name: "Mango",
        image: "/img/Mango.png",
        price: "250",
        color: "#F0BF3C",
    },
    {
        id: 9,
        name: "Icy Water",
        image: "/img/Icy_Water.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 10,
        name: "Strawberry Dragon Fruit",
        image: "/img/StrawberryDF.png",
        price: "250",
        color: "#E37AF1",
    },
    {
        id: 11,
        name: "Kiwi Dragon Fruit",
        image: "/img/KiwiDFB.png",
        price: "250",
        color: "#E37AF1",
    },
    {
        id: 12,
        name: "Mr.Blue",
        image: "/img/Mr.Blue.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 13,
        name: "Peach Blue Raspberry",
        image: "/img/PBR.png",
        price: "250",
        color: "#225AE4",
    },
    {
        id: 14,
        name: "Chewy Watermelon",
        image: "/img/ChewyWM.png",
        price: "250",
        color: "#E37AF1",
    },
    {
        id: 15,
        name: "Banana Melon",
        image: "/img/Banana_Melon.png",
        price: "250",
        color: "#F0BF3C",
    },
];

const Categoria = () => {
    const { category } = useParams();
    console.log(category);
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
                    <h1>Categoria Elegida</h1>
                </div>
                <SearchBarCat />
                <div className={styles.subtitle}>
                    <h2>Vapes</h2>
                </div>
                <div className={styles.vapes}>
                    {VAPES_WAKA.map(vape => (
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
