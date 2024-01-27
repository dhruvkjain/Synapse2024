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
        <section className="pronightpageslide" style={{ backgroundImage: 'url(https://res.cloudinary.com/dxk9jobnq/image/upload/v1706346449/Synpase%20gallery/DSC02406_ep6cum.jpg)' }}>
        </section>
        <h1 className='slideCaption2'><span className='phonk artisttext'>Section One</span></h1>
        <section className='pronightpageslide' style={{ backgroundImage: 'url(https://res.cloudinary.com/dxk9jobnq/image/upload/v1706346747/Synpase%20gallery/DSC02732_dwuxb0.jpg)' }}>
        </section>
        <h1 className='slideCaption'><span className='phonk artisttext'>Section Two</span></h1>
        <section className='pronightpageslide' style={{ backgroundImage: 'url(https://res.cloudinary.com/dxk9jobnq/image/upload/v1706346927/Synpase%20gallery/DSC02827_mv01b1.jpg)' }}>
        </section>
        <h1 className='slideCaption2'><span className='phonk artisttext'>Section Three</span></h1>
        <section className='pronightpageslide' style={{ backgroundImage: `url(${Amit})` }}>  
        </section>
        <h1 className='slideCaption'><span className='phonk artisttext'>Section Four</span></h1>
      </div>
    </div>
  );
};

export default Slider;
