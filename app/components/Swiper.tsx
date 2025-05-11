'use client'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getFotoDivbyID } from '../api/gatos/route';

const SwiperModel = ({fotos}) => {
  return (
    <Swiper className='w-full sm:w-1/2 h-full'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {fotos.map((foto: string) => {return <SwiperSlide key={foto}><img key={fotos.indexOf(foto)} src={foto} className='w-full h-full object-cover'></img></SwiperSlide>})}
    </Swiper>
  );
};


export default SwiperModel