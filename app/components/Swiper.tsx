'use client'

import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type SwiperModelProps = {
  fotos: string[];
};

function SwiperModel({ fotos }: SwiperModelProps) {
  return (
    <Swiper className='w-full sm:w-1/2 h-full'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {fotos.map((foto: string) => (
        <SwiperSlide key={foto}>
          <img src={foto} className='w-full h-full object-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperModel