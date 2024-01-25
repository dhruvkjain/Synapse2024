import React, { useEffect } from 'react';

import Amit from "../../assets/Amit.jpg";
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

  // useEffect(() => {
  //   const slider2 = document.getElementsByClassName("slider2")[0];
  //   slider2.addEventListener("wheel", (e) => {
  //     e.preventDefault();
  //     slider2.scrollLeft += 100;
  //   })
  // }, [])


  return (
    <div className='slidercover'>
      <div className="slider2">
        {/* <div className='buttons'>
            <button className='rbtn'><img src={leftarrow}></img></button>
            <button className='lbtn'><img src={rightarrow}></img></button>
          </div> */}
        <section className="pronightpageslide" style={{ backgroundImage: `url(${Amit})` }}>
          <h1 className='slideCaption'>Section One</h1>
        </section>
        <section className='pronightpageslide' style={{ backgroundImage: `url(${Amit})` }}>
          <h1 className='slideCaption'>Section Two</h1>
        </section>
        <section className='pronightpageslide' style={{ backgroundImage: `url(${Amit})` }}>
          <h1 className='slideCaption'>Section Three</h1>
        </section>
        <section className='pronightpageslide' style={{ backgroundImage: `url(${Amit})` }}>
          <h1 className='slideCaption'>Section Four</h1>
        </section>
        <section className='pronightpageslide' style={{ backgroundImage: `url(${Amit})` }}>
          <h1 className='slideCaption'>Section Five</h1>
        </section>
      </div>
    </div>
  );
};

export default Slider;
