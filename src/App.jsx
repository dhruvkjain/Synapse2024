import { useState } from 'react'
import synapse from "./assets/synapse.png";
import logo from "./assets/logo.png"
import scrolldown from "./assets/scrolldown.png";
import theme from "./assets/theme.png"
import menu from "./assets/menu.png"
import './App.css'

function App() {

  function opennavbar(){
    const navptags = document.getElementsByClassName('navptags');
    const navlinks = document.getElementsByClassName('navlinks');
    for(let i=0; i<navlinks.length;i++){
      navlinks[i].classList.add('shownavback');
    }
    for(let i=0; i<navptags.length;i++){
      navptags[i].classList.add('shownavbar');
    }
  }

  function closenavbar(){
    const navptags = document.getElementsByClassName('navptags');
    const navlinks = document.getElementsByClassName('navlinks');
    for(let i=0; i<navlinks.length;i++){
      navlinks[i].classList.remove('shownavback');
    }
    for(let i=0; i<navptags.length;i++){
      navptags[i].classList.remove('shownavbar');
    }
  }

  return (
    <div className='slider'>

      <div className='homepage'>
        <div className='bg-1'></div>
        <div className='synapse'>
          <div className='cont1'>
            <div className='homepageimgs'>
              <img className='synapseimg' src={synapse}></img>
              <div className='scrolldownicon1'>
                <a href="#aboutus"><img className='scrolldown' src={scrolldown}></img></a>
              </div>
            </div>
          </div>
          <div id="aboutus" className='aboutus'>
            <div className='cont3'>
              <p className='aboutusheading'>About Us</p>
              <p className='cont2'>
                Synapse is DAIICT’s annual college fest that brings together artists,
                designers, and creative minds from all over the world to showcase their
                unique collages and share their creative process with others. The festival
                is named after the brain's synaptic connections, which inspire the organizers
                to create a space for creative connections and exchanges. As the night
                falls, the festival transforms into a vibrant party, with live music, DJ
                performances, and dance parties, providing attendees with an
                opportunity to unwind, socialize and celebrate creativity in all its forms.
              </p>
              <p className='aboutusheading'>Date</p>
              <p className=''>
                22  |  23  |  24  |  25  -  February
              </p>
            </div>
          </div>
        </div>
        <div className='contlogo'>
          <div className='navgrid'>
            <img className='logo' src={logo}></img>
            <div className='navflex'>
              <div className='navlinks' onMouseEnter={opennavbar} onMouseLeave={closenavbar}>
                <div className='navgrid2'>
                  <p className='navptags'>Event</p>
                  <p className='navptags'>ProNight</p>
                  <p className='navptags'>Team</p>
                  <p className='navptags'>HackOut</p>
                  <p className='navptags'>YouthRun</p>
                  <p className='navptags'>Sponsors</p>
                </div>
                <div className='navflex2'>
                  <img className='menuimg' src={menu}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='theme'>
        <div className='contlogo'>
          <div className='navgrid'>
            <img className='logo' src={logo}></img>
            <div className='navflex'>
              <div className='navlinks' onMouseEnter={opennavbar} onMouseLeave={closenavbar}>
                <div className='navgrid2'>
                  <p className='navptags'>Event</p>
                  <p className='navptags'>ProNight</p>
                  <p className='navptags'>Team</p>
                  <p className='navptags'>HackOut</p>
                  <p className='navptags'>YouthRun</p>
                  <p className='navptags'>Sponsors</p>
                </div>
                <div className='navflex2'>
                  <img className='menuimg' src={menu}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='themeflexout'>
          <div className='themegrid'>
            <div className='themeflex'>
              <img className='themeimg custom-box-shadow' src={theme}></img>
            </div>
            <div className='themetxt'>
              <div>
                <p className='thetheme'>The Theme</p>
                <p>
                  Synapse is DAIICT’s annual college fest that brings together artists,
                  designers, and creative minds from all over the world to showcase their
                  unique collages and share their creative process with others. The festival is named after the brain's synaptic connections, which inspire the organizers to create a space for creative connections and exchanges. As the night falls, the festival transforms into a vibrant party, with live music, DJ performances, and dance parties, providing attendees with an opportunity to unwind, socialize and celebrate creativity in all its forms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='contlogo'>
          <div className='navgrid'>
            <img className='logo' src={logo}></img>
            <div className='navflex'>
              <div className='navlinks' onMouseEnter={opennavbar} onMouseLeave={closenavbar}>
                <div className='navgrid2'>
                  <p className='navptags'>Event</p>
                  <p className='navptags'>ProNight</p>
                  <p className='navptags'>Team</p>
                  <p className='navptags'>HackOut</p>
                  <p className='navptags'>YouthRun</p>
                  <p className='navptags'>Sponsors</p>
                </div>
                <div className='navflex2'>
                  <img className='menuimg' src={menu}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='homepageevent'>
          <p>
            Embrace The
            Energy Pulse
            where joy knows
            no bounds
            and fun takes
            center stage
          </p>
        </div>
        <div className='contlogo'>
          <div className='navgrid'>
            <img className='logo' src={logo}></img>
            <div className='navflex'>
              <div className='navlinks' onMouseEnter={opennavbar} onMouseLeave={closenavbar}>
                <div className='navgrid2'>
                  <p className='navptags'>Event</p>
                  <p className='navptags'>ProNight</p>
                  <p className='navptags'>Team</p>
                  <p className='navptags'>HackOut</p>
                  <p className='navptags'>YouthRun</p>
                  <p className='navptags'>Sponsors</p>
                </div>
                <div className='navflex2'>
                  <img className='menuimg' src={menu}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='gallery'>
          <p>The Gallery</p>
        </div>
        <div className='footer'>
          <div className='footer-grid'>
            <div className='footer1'>
              <div>
                <img className='logo2' src={logo}></img>
                <p className='reachusoutat'>Reach Us Out At</p>
                <p className='satoshi'>synapse.thefest@gmail.com</p>
                <p className='satoshi'>synapse@daiict.ac.in</p>
                <p className='satoshi'>Raj Patel: +91 8128 909 789</p>
                <p className='satoshi'>Manan Pareek: +91 6351 132 695</p>
                <p className='satoshi'>Harshita Tripathi: +91 9974 760 487</p>
                <div className=''>

                </div>
                <div className=''>

                </div>
                <div className=''>

                </div>
                <div className=''>

                </div>
              </div>
            </div>
            <div className='footer2'>
              <div>
                <p className='reachusoutat'>Past Websites</p>
                <p className='satoshi'>Synapse 2022</p>
                <p className='satoshi'>Synapse 2021</p>
                <p className='satoshi'>Synapse 2020</p>
              </div>
            </div>
            <div className='footer3'>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App