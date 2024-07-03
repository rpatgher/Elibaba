import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation'; // Importa los estilos de navegación que incluye botones de anterior y siguiente

import VapeCard from '../Cards/VapeCard';

const SwiperVapes = ({vapes}) => {
    return (
        <div className="carrousel">
            <button className="swiper-button-prev"></button>
            <Swiper
                spaceBetween={35}
                slidesPerView={5.5}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
            >
                {vapes.map(vape => (
                    <SwiperSlide key={vape.id}>
                        <VapeCard key={vape.id}vape={vape}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-next"></button> 
        </div>
    )
}

export default SwiperVapes;
