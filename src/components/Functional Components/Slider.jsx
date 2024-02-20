import React, { useEffect } from 'react';

import './Slider.css'

const Slider = () => {

  return (
    <div className='slidercover'>
      <div className="slider2">
        <section className="pronightpageslide" style={{ backgroundImage: 'url(./assets/synapse/pronight/nishant.png)' }}>
          <div className='pronighttxtgrid'>
            <div className='pronighttxtgrid1'>
              <div>
                <p className='satoshi pronighttxt1'>Stand Up</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'><span className='highlighttxt'>An engineer -turned- banker -turned- wedding photographer -turned- stand up comedian,</span> Nishant clearly knows what he wants to do in life. He's been doing stand up for a couple of years now, and in this while has won competitions at IIT Delhi, Vir Das's Pajamafest, Radio One Delhi and Comedy Central's Chuckle Hunt.</p>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="400" className='pronightartistname phonk'>Nishant Suri</p>
            </div>
          </div>
        </section>

        <section className='pronightpageslide' style={{ backgroundImage: 'url(./assets/synapse/pronight/gurleen.png)' }}>
          <div className='pronighttxtgrid'>
          <div>
              <p data-aos="fade-up" data-aos-delay="600" className='pronightartistname txt_align_left phonk'>
                Gurleen Pannu
              </p>
            </div>
            <div className='pronighttxtgrid2'>
              <div>
                <p className='satoshi pronighttxt1'>Stand Up</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>Gurleen Pannu is a stand-up comedian known for <span className='highlighttxt'>Comicstaan (2018) and Chalo Koi Baat Nahi (2021).</span> Her performances are a delightful blend of clever storytelling, witty one-liners, and spontaneous interactions, making her a rising star in the comedy scene.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pronightpageslide" style={{ backgroundImage: 'url(./assets/synapse/pronight/amit.png)' }}>
          <div className='pronighttxtgrid'>
            <div className='pronighttxtgrid1'>
              <div>
                <p className='satoshi pronighttxt1'>Cynosure</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>The Multi Award Winner, Composer and Singer of Songs <span className='highlighttxt'>'Iktara', 'Chokra Jawan', 'Naina da kasoor', 'Nayan Tarse'</span> and Many More....Get ready to feel the beat, the rhythm, and the soul of the music. From the moment they step onto the stage, you'll be transported to another world, where every note, every chord, and every lyric will take you on a journey you'll never forget!</p>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="400" className='pronightartistname phonk'>Amit Trivedi</p>
            </div>
          </div>
        </section>

        <section className='pronightpageslide' style={{ backgroundImage: 'url(./assets/synapse/pronight/salim.png)' }}>
          <div className='pronighttxtgrid'>
          <div>
              <p data-aos="fade-up" data-aos-delay="600" className='pronightartistname txt_align_left phonk'>
                Salim Sulaiman
              </p>
            </div>
            <div className='pronighttxtgrid2'>
              <div>
                <p className='satoshi pronighttxt1'>Soulstice</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>The Multi Award Winner, Composer and Singer of Songs <span className='highlighttxt'>'Kurban Hua', 'Shukran Allah', 'Chak de India', 'Ainwayi Ainwayi'</span> and Many More....Get ready to feel the beat, the rhythm, and the soul of the music. From the moment they step onto the stage, you'll be transported to another world, where every note, every chord, and every lyric will take you on a journey you'll never forget!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pronightpageslide" style={{ backgroundImage: 'url(./assets/synapse/pronight/antara.png)' }}>
          <div className='pronighttxtgrid'>
            <div className='pronighttxtgrid1'>
              <div>
                <p className='satoshi pronighttxt1'>Ragna Rock </p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>The Multi Award Winner, Composer and Singer of Songs <span className='highlighttxt'>'Kesariya', 'Janam Janam', 'Mehrama', 'Itni Si Baat Hain', 'Sun Soniye'</span> and Many More....Get ready to feel the beat, the rhythm, and the soul of the music. From the moment they step onto the stage, you'll be transported to another world, where every note, every chord, and every lyric will take you on a journey you'll never forget!</p>
              </div>
            </div>
            <div>
              <p data-aos="fade-up" data-aos-delay="400" className='pronightartistname phonk'>Antara Mitra</p>
            </div>
          </div>
        </section>

        <section className='pronightpageslide' style={{ backgroundImage: 'url(./assets/synapse/pronight/terimiko.png)' }}>
          <div className='pronighttxtgrid'>
          <div>
              <p data-aos="fade-up" data-aos-delay="600" className='pronightartistname txt_align_left phonk'>
               Teri Miko
              </p>
            </div>
            <div className='pronighttxtgrid2'>
              <div>
                <p className='satoshi pronighttxt1'>DJ Night</p>
                <p className='satoshi pronighttxt2'>Featuring</p>
                <p className='satoshi pronighttxt3'>TERI MIKO IS A <span className='highlighttxt'>LEADING INTERNATIONAL DJ, PRODUCER & REMIXER.</span> She is unquestionably EDM’s most prominent DJ and quickly becoming a well known electronic producer.  Today her tour diary continues to be full with performances all around the globe, spinning at world’s most exclusive VIP Nightclubs, Festivals and playing for the finest dance music brands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className='pronightpageslide' style={{ backgroundImage: 'url(https://img.playbook.com/VdJ1QgA518xfJWtqQLJlB_-LApRtie4jzKvSJtRUwXg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlhMDU2OGQx/LTczNjItNDNkYi04/MDIyLTdjY2NjNWYy/YTY5OQ)' }}>
          <div data-aos="fade-up" data-aos-delay="600" className='phonk comingsoon'>Coming soon</div>
        </section> */}
        
      </div>
    </div>
  );
};

export default Slider;
