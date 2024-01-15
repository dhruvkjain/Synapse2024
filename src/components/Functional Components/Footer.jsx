import React from "react";
import logo from "../../assets/logo.png";

import "./Footer.css"

function Footer() {

    return (
        <div>
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
    )
}

export default Footer;