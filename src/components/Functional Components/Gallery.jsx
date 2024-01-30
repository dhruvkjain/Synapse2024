import React from "react";

import "./Gallery.css"

function Gallery() {

    const row1 = [
        {
            id:1,
            src:'./assets/synapse/assem sharma/ATM_0452_qh5qqp.jpg',
            name:'Aseem Sharma'
        },
        {
            id:2,
            src:'./assets/synapse/Battle of Bands/IMG_0163_eiivgh.jpg',
            name:'Battle of Bands'
        },
        {
            id:3,
            src:'./assets/synapse/dj_war/PXL_20230316_202349387_t7uwxt.jpg',
            name:'DJ War'
        },
        {
            id:4,
            src:'./assets/synapse/innaugral/IMG_6951_umbjgp.jpg',
            name:'Inaugural'
        }
    ]

    const row2 = [
        {
            id:1,
            src:'./assets/synapse/jonitagandhi/DSC03415_fpxnxq.jpg',
            name:'Jonita Gandhi'
        },
        {
            id:2,
            src:'./assets/synapse/mimeoutloud/Screenshot_2024-01-28_225217_jk0bry.png',
            name:'Mime Out Loud'
        },
        {
            id:3,
            src:'./assets/synapse/ktm/IMG_9296_i695nv.jpg',
            name:'KTM'
        },
        {
            id:4,
            src:'./assets/synapse/naach/Screenshot_2024-01-28_225349_puzwn2.png',
            name:'Naach'
        }
    ]

    const row3 = [
        {
            id: 1,
            src: './assets/synapse/openmic/ATM_0353_ymzwo5.jpg',
            name: 'Open Mic'
        },
        {
            id: 2,
            src: './assets/synapse/rampage/Screenshot_2024-01-28_230206_rhdrfb.png',
            name: 'Rampage'
        },
        {
            id: 3,
            src: './assets/synapse/sachin-jigar/PSB07784_nofk2p.jpg',
            name: 'Sachin Jigar'
        },
        {
            id: 4,
            src: './assets/synapse/SamayRaina/PXL_20230316_143155325_qxdvpu.jpg',
            name: 'Samay Raina'
        }
    ];

    const row4 = [
        {
            id: 1,
            src: './assets/synapse/Vishal Mishra/ATM_0566_qeqzxh.jpg',
            name: 'Vishal Mishra'
        },
        {
            id: 2,
            src: './assets/synapse/vanmoon/DSC04951_bvz8jv.jpg',
            name: 'Vanmoon'
        },
        {
            id: 3,
            src: './assets/synapse/stageplay/ATM_0106_idmjyw.jpg',
            name: 'Stage Play'
        },
        {
            id: 4,
            src: './assets/synapse/nukkadnitak/PD__9982_cfguzt.jpg',
            name: 'Nukkad Natak'
        },
    ]
    

    return(
    <div>
        <div className="gallery">
            <div className="gallery__strip__wrapper">
                <div className="gallery__strip one">
                    {
                        row1.map((item, index) => 
                        <div className="photo" key={item.id}>
                        <div className="photo__image">
                            <img loading="eager" src={item.src} alt={item.name}></img>
                        </div>
                        <div className="photo__name">{item.name}</div>
                    </div>
                    )
                    }
                </div>
            </div>

            <div className="gallery__strip__wrapper">
                <div className="gallery__strip two">
                    {
                        row2.map((item, index)=>
                        <div className="photo" key={item.id}>
                            <div className="photo__image">
                                <img loading="eager" src={item.src} alt={item.name}></img>
                            </div>
                            <div className="photo__name">{item.name}</div>
                        </div>
                        )
                    }
                </div>
            </div>

            <div className="gallery__strip__wrapper">
                <div className="gallery__strip three">
                    {
                        row3.map((item, index)=>
                        <div className="photo" key={item.id}>
                        <div className="photo__image">
                            <img loading="eager" src={item.src} alt={item.name}></img>
                        </div>
                        <div className="photo__name">{item.name}</div>
                    </div>
                        )
                    }
                </div>
            </div>

            <div className="gallery__strip__wrapper">
                <div className="gallery__strip four">
                    {
                        row4.map((item, index)=>
                        <div className="photo" key={item.id}>
                            <div className="photo__image">
                                <img loading="eager" src={item.src} alt={item.name}></img>
                            </div>
                            <div className="photo__name">{item.name}</div>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>

    </div>
    )
}

export default Gallery
