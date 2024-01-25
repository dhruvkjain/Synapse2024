import React, { useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css'

const Slider = () => {
  const images = [
    {
      imgUrl: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Caption 1'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Caption 2'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      caption: 'Caption 3'
    }

  ];

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    zoom: true,

  }

  return (
    <div>
      {/* <div className='eventpageslider'>
        <Swiper {...params}>
          {images.map((image, i) => (
            <div key={i} className='swiperCont'>
              <img src={image.imgUrl} className='swiperImg' alt={`image ${i}`} />
              <p className='SwiperCaption'>{image.caption}</p>
            </div>
          ))}
        </Swiper>
      </div>
      <div className='swipe'>
      
      </div> */}
    </div>
  );
};

export default Slider;
