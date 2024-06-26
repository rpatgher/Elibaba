import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './Swiper.css';
import { useState } from 'react';


import MainVapeCard from "../Cards/MainVapeCard";

const VAPES = [
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
]

const SwiperComponent = () => {
    const [swiper, setSwiper] = useState(null);

    const handleChangeSlide = () => {
        const swiper = document.querySelector('.main .swiper');
        setTimeout(() => {
            const currentCard = document.querySelector('.swiper-slide-active');
            let color = currentCard.children[0].dataset.color;
            swiper.style.backgroundColor = `color-mix(in srgb, ${color} 60%, #fff)`;
        }, 300);
    }

    return (
        <div className='main'>
            <button className="swiper-button-prev">{'<'}</button> {/* Botón izquierdo */}
            <Swiper
                spaceBetween={60}
                slidesPerView={2.5}
                centeredSlides={true}
                loop={true}
                onSlideChange={handleChangeSlide}
            >
                {VAPES.map(vape => (
                    <SwiperSlide
                        key={vape.id}
                    >
                        <MainVapeCard 
                            key={vape.id}
                            vape={vape}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-next">{'>'}</button> {/* Botón derecho */}
        </div>
    )
}

export default SwiperComponent;
