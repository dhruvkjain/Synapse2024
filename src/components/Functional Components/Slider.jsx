import React, { useEffect } from 'react';

import './Slider.css'

const Slider = () => {
  // const images = [
  //   {
  //     imgUrl: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     caption: 'Caption 1'
  //   },
  //   {
  //     imgUrl: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     caption: 'Caption 2'
  //   },
  //   {
  //     imgUrl: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     caption: 'Caption 3'
  //   }

  // ];

  // useEffect(() => {
  //   const slider2 = document.getElementsByClassName("slider2")[0];
  //   slider2.addEventListener("wheel", (e) => {
  //     e.preventDefault();

  //   })
  // }, [])


  return (
    <div className='slidercover'>
      <div className="slider2">
        {/* <div className='buttons'>
            <button className='rbtn'><img src={leftarrow}></img></button>
            <button className='lbtn'><img src={rightarrow}></img></button>
          </div> */}
        <section className="pronightpageslide" style={{ backgroundImage: 'url(./assets/synapse/pronight/amit.png)' }}>
          <div className='pronighttxtgrid'>
            <div className='pronighttxtgrid1'>
              <div>
                <p className='satoshi pronighttxt1'>Cynosure</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>The Multi Award Winner, Composer and Singer of Songs <span className='highlighttxt'>'Kaise Hua', 'Phela Pyar', 'Aaj Bhi', 'Teri Hogayiyan', 'Nai Lagda'</span> and Many More....Get ready to feel the beat, the rhythm, and the soul of the music. From the moment they step onto the stage, you'll be transported to another world, where every note, every chord, and every lyric will take you on a journey you'll never forget!</p>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="600" className='satoshi pronightartistname'>Amit Trivedi</p>
            </div>
          </div>
        </section>
        {/* <h1 className='slideCaption2'><span className='phonk artisttext'>Amit Trivedi</span></h1> */}
        <section className='pronightpageslide' style={{ backgroundImage: 'url(./assets/synapse/pronight/salim.png)' }}>
          <div className='pronighttxtgrid'>
          <div>
              <p data-aos="fade-up" data-aos-delay="600" className='satoshi pronightartistname txt_align_left'>
                Salim Sulaiman
              </p>
            </div>
            <div className='pronighttxtgrid2'>
              <div>
                <p className='satoshi pronighttxt1'>Soulstice</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>The Multi Award Winner, Composer and Singer of Songs <span className='highlighttxt'>'Kaise Hua', 'Phela Pyar', 'Aaj Bhi', 'Teri Hogayiyan', 'Nai Lagda'</span> and Many More....Get ready to feel the beat, the rhythm, and the soul of the music. From the moment they step onto the stage, you'll be transported to another world, where every note, every chord, and every lyric will take you on a journey you'll never forget!</p>
              </div>
            </div>
          </div>
        </section>
        {/* <h1 className='slideCaption'><span className='phonk artisttext'>Salim Sulaiman</span></h1> */}
        <section className='pronightpageslide' style={{ backgroundImage: 'url(https://img.playbook.com/VdJ1QgA518xfJWtqQLJlB_-LApRtie4jzKvSJtRUwXg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlhMDU2OGQx/LTczNjItNDNkYi04/MDIyLTdjY2NjNWYy/YTY5OQ)' }}>
          <div data-aos="fade-up" data-aos-delay="600" className='phonk comingsoon'>Coming soon</div>
        </section>
        {/* <h1 className='slideCaption'><span className='phonk artisttext'>Coming soon <span className='satoshi'>.....</span></span></h1> */}
      </div>
    </div>
  );
};

export default Slider;
