import React, {useState} from 'react';
import style from './Navbar.module.css';
import Logo_2 from '../../asserts/logo_2.png';
import Logo_1 from '../../asserts/logo_1.png';

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {RemoveScrollBar } from 'react-remove-scroll-bar';
import "../../i18next";
import {useTranslation} from "react-i18next";
import Localization from "../local/Localization";
import { Outlet, Link } from "react-router-dom";

const Navbar = () =>{
    const { t } = useTranslation();
    const [nav, setNav] = useState(false);
    return (
        <header className={style.header}>
            <div  className='conteiner'>
                <div className={style.box}>
                    <div className={style.logo_image_nav}>
                        <img src={Logo_1} alt="/"/>
                    </div>
                    <ul className={nav ? [style.menu, style.active].join(' ') : style.menu }>
                        <div className={style.logo_image_menu}>
                            <img src={Logo_2} alt="/"/>
                            </div>
                        <li ><Link to="/home">{t('navbar.home_page')} </Link></li>
                        <li ><Link to="/about">{t('navbar.aboutUs')} </Link></li>
                        <li ><Link to="/services">{t('navbar.services')} </Link></li>
                        <li ><Link to="/contact">{t('navbar.contact')} </Link></li>
                        <Outlet/>
                    </ul>
                    <Localization />
                    <div onClick={()=>setNav(!nav)} className={style.mobile_btn}>
                        {nav ? [<AiOutlineClose size={25} />, <RemoveScrollBar/>]: <AiOutlineMenu size={25}/>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;