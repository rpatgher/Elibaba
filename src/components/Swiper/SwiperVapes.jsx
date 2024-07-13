import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation'; // Importa los estilos de navegación que incluye botones de anterior y siguiente
import 'swiper/css';
import './Swiper.css';

import VapeCard from '../Cards/VapeCard';

const SwiperVapes = ({vapes}) => {
    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={true}
                mousewheel={true}
                cssMode={true}
                className='swiper-vapes'
            >
                <button className="swiper-button-prev"></button>
                {vapes.map(vape => (
                    <SwiperSlide 
                        key={vape.id}
                        className='swiper-slide'
                    >
                        <VapeCard key={vape.id} vape={vape}/>
                    </SwiperSlide>
                ))}
                <button className="swiper-button-next"></button>
            </Swiper>
        </div>
    )
}

export default SwiperVapes;
