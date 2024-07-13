import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Importa los estilos de navegación que incluye botones de anterior y siguiente
import './Swiper.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



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
    const handleChangeSlide = () => {
        setTimeout(() => {
            const currentCard = document.querySelector('.swiper-slide-active');
            let color = currentCard.children[0].dataset.color + '8A';
            var root = document.documentElement;
            root.style.setProperty('--bg-swiper', `color-mix(in srgb, ${color} 60%, #000)`);
        }, 300);
    }

    return (
        <div className='main'>
            <Swiper
                spaceBetween={60}
                slidesPerView={2.5}
                centeredSlides={true}
                onSlideChange={handleChangeSlide}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                mousewheel={true}
                cssMode={true}
                pagination={true}
                loop={true}
            >
                <button className="swiper-button-prev"></button>
                {VAPES.map(vape => (
                    <SwiperSlide key={vape.id}>
                        <MainVapeCard key={vape.id}vape={vape}/>
                    </SwiperSlide>
                ))}
                <button className="swiper-button-next"></button> 
            </Swiper>
        </div>
    )
}

export default SwiperComponent;
