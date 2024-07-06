import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation'; // Importa los estilos de navegación que incluye botones de anterior y siguiente
import 'swiper/css';
import './Swiper.css';

import VapeCard from '../Cards/VapeCard';

const SwiperVapes = ({vapes}) => {
    return (
        <div>
            <button className="swiper-button-prev"></button>
            <Swiper
                spaceBetween={35}
                slidesPerView={5.5}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={true}
                mousewheel={true}
                cssMode={true}
            >
                {vapes.map(vape => (
                    <SwiperSlide 
                        key={vape.id}
                        className='swiper-slide'
                    >
                        <VapeCard key={vape.id} vape={vape}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="swiper-button-next"></button> 
        </div>
    )
}

export default SwiperVapes;
