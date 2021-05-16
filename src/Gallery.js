import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';
import img10 from './images/img10.jpg';
import img11 from './images/img11.jpg';
import img12 from './images/img12.jpg';
import img13 from './images/img13.jpg';
import img14 from './images/img14.jpg';




const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        }

    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);

    }

    return(
        <>
        <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} alt=''/>
            <CloseIcon onClick={()=> setModel(false)}/>
        </div>
        <div className="gallery">
        {data.map((item, index)=> {
            return (
                <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                    <img src={item.imgSrc} alt="" style={{width: '100%'}} />
                </div>
            )
        })}
        </div>
        </>
    )
}

export default Gallery;