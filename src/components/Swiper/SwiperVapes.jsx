import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';

import VapeCard from '../Cards/VapeCard';

const SwiperVapes = ({vapes}) => {
    return (
        <div className="carrousel">
            <button className="swiper-button-prev"></button> {/* Botón izquierdo */}
            <Swiper
                spaceBetween={35}
                slidesPerView={5.5}
            >
                {vapes.map(vape => (
                    <SwiperSlide
                        key={vape.id}
                    >
                        <VapeCard 
                            key={vape.id}
                            vape={vape}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-next"></button> 
        </div>
    )
}

export default SwiperVapes;
