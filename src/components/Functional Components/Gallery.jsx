import React from "react";

import "./Gallery.css"

function Gallery() {

    const row1 = [
        {
            id:1,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705775205/synapse/photos%20sort%20drive/assem%20sharma/ATM_0487_mnbncv.jpg',
            name:'Aseem Sharma'
        },
        {
            id:2,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772186/synapse/photos%20sort%20drive/assem%20sharma/ATM_0452_qh5qqp.jpg',
            name:'Battle of Bands'
        },
        {
            id:3,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772150/synapse/photos%20sort%20drive/dj%20war/IMG_7161_bnysmp.jpg',
            name:'DJ War'
        },
        {
            id:4,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772194/synapse/photos%20sort%20drive/innaugral/PXL_20230316_140116679_qrlyki.jpg',
            name:'Inaugural'
        }
    ]

    const row2 = [
        {
            id:1,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772253/synapse/photos%20sort%20drive/jonita%20gandhi/DSC03415_fpxnxq.jpg',
            name:'Jonita Gandhi'
        },
        {
            id:2,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705773708/synapse/photos%20sort%20drive/mime%20out%20%20loud/ATM_0166_kkceeh.jpg',
            name:'Mime Out Loud'
        },
        {
            id:3,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772145/synapse/photos%20sort%20drive/ktm/IMG_9296_i695nv.jpg',
            name:'KTM'
        },
        {
            id:4,
            src:'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772157/synapse/photos%20sort%20drive/naach/PXL_20230319_133848843_p2knfv.jpg',
            name:'Naach'
        }
    ]

    const row3 = [
        {
            id: 1,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772256/synapse/photos%20sort%20drive/open%20mic/ATM_0389_le8n13.jpg',
            name: 'Open Mic'
        },
        {
            id: 2,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772154/synapse/photos%20sort%20drive/rampage/PD__9478_n1liru.jpg',
            name: 'Rampage'
        },
        {
            id: 3,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772155/synapse/photos%20sort%20drive/sachin-jigar/20230318_235400_1_yefoqh.jpg',
            name: 'Sachin Jigar'
        },
        {
            id: 4,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772167/synapse/photos%20sort%20drive/Samay%20Raina/DSC03081_uddqsv.jpg',
            name: 'Samay Raina'
        }
    ];

    const row4 = [
        {
            id: 1,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705772242/synapse/photos%20sort%20drive/Vishal%20Mishra/ATM_0694_gnq1iq.jpg',
            name: 'Vishal Mishra'
        },
        {
            id: 2,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705773983/synapse/photos%20sort%20drive/vanmoon/DSC04951_bvz8jv.jpg',
            name: 'Vanmoon'
        },
        {
            id: 3,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705774160/synapse/photos%20sort%20drive/stage%20play/ATM_0106_idmjyw.jpg',
            name: 'Stage Play'
        },
        {
            id: 4,
            src: 'https://res.cloudinary.com/dzeuvqdbl/image/upload/v1705774561/synapse/photos%20sort%20drive/nukkad%20nitak/PD__9982_cfguzt.jpg',
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
                            <img src={item.src} alt="Kyoto"></img>
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
                                <img src={item.src} alt="Italy"></img>
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
                            <img src={item.src} alt="Kyoto"></img>
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
                                <img src={item.src} alt="Italy"></img>
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
