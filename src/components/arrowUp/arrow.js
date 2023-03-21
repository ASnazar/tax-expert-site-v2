import React from 'react';
import style from './Arrow.module.css';
import {FaArrowAltCircleUp} from "react-icons/fa";


const Arrow = () =>{

    const top = () =>{
        window.scrollTo(0,0);
    };
    return (
        <div className={style.arrow}>
        <FaArrowAltCircleUp onClick={top} size={50}/>
        </div>
    );
};

export default Arrow;