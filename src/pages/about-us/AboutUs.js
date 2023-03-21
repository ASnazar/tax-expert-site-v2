import React, {useState} from "react";
import {motion} from 'framer-motion';
import style from "./AboutUs.module.css";
import Arrow from "../../components/arrowUp/arrow";
import Img_1 from '../../asserts/img_person.png';
import Img_2 from '../../asserts/img_person_2.jpg'
import ModalWindowCalRegister from "../../components/modalWindow/ModalWindowCalRegister";

    const textAnimation = {
        hidden:{
            x:100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 2,
            transition: { delay: custom * 0.2},
        }),
    };





const AboutUs = () =>{
    const [modalActive, setModalActive] = useState(false);
    return (

        <div className={style.box} >
            <motion.section
                initial="hidden"
                whileInView="visible"
                >
            <div className={style.boxWelcomeWithImg}>
                <div className={style.boxWelcome}>
                    <motion.h1 custom={2} variants= {textAnimation} className={style.h11}>Welcome to Workers</motion.h1>
                    <motion.p custom={3} variants= {textAnimation} className={style.p11}>If you need people for work than you are in right place If you need people for work than you are in right place If you need people for work than you are in right place</motion.p>
                    <motion.a custom={4} variants= {textAnimation}  onClick={() => setModalActive(true)} className={style.btn}>Зворотній зв'язок</motion.a>
                </div>
            </div>
            </motion.section>
            <ModalWindowCalRegister active={modalActive} setActive={setModalActive}>

            </ModalWindowCalRegister>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{amount:0.3}}
                >
            <div className={style.info}>
                <div className={style.box_who_we}>

                    <div className={style.info_who_we}>
                        <img src={Img_1}  alt="/"/>
                                <div         className={style.box_text}>
                                    <div className={style.who_we_text}>
                                        <h1 >Хто ми </h1>
                                        <p >Консалтингова компанія «ЕКСПЕРТ» є одним з перших створених в Україні податковим консультантом tax adviser у розумінні, прийнятому в світі.</p>
                                        <p > Понад 15 років ми забезпечуємо комплекс професійних послуг, спрямованих на побудову ефективних моделей оподаткування як бізнесу, так і приватних осіб.</p>
                                        <p > Наша команда – це сертифіковані податкові консультанти та  бухгалтери-практики, професіоналізм котрих підтверджується постійними публікаціями в системах ЛІГА:Закон, ДІНАЙ та інших виданнях.</p>
                                    </div>
                                    {/*<div className={style.our_advantage}>*/}
                                    {/*    <h2 >Наші переваги</h2>*/}
                                    {/*        <ul>*/}
                                    {/*            <li >Податкова спеціалізація</li>*/}
                                    {/*            <li >Податкова спеціалізація</li>*/}
                                    {/*            <li >Податкова спеціалізація</li>*/}
                                    {/*            <li >Податкова спеціалізація</li>*/}
                                    {/*            <li >Податкова спеціалізація</li>*/}
                                    {/*            <li   >Податкова спеціалізація</li>*/}
                                    {/*        </ul>*/}
                                    {/*</div>*/}
                             </div>
                    </div>

                <div className={style.info_who_we_bg_color}>
                    <div className={style.info_who_we  } >

                        <div         className={style.box_text}>


                                <div className={style.our_advantage}>
                                    <h2 >Хто наш Клієнт</h2>

                                    <h4>Основні групи наших Клієнтів виглядають так:
                                    </h4>
                                    <ul>
                                        <li >перш за все, Власник будь-якого бізнесу;</li>
                                        <li >фінансова та юридична служби, орієнтовані на якісний податковий менеджмент;</li>
                                        <li >бухгалтер чи команда, яка потребує оперативної допомоги в реалізації щоденних або ж нестандартних питань;</li>
                                        <li >фізична особа щодо декларування та сплати податків з доходів та оподаткування майна.</li>
                                    </ul>
                                </div>

                            {/*<div className={style.our_advantage}>*/}
                            {/*    <h2 >Наші переваги</h2>*/}
                            {/*        <ul>*/}
                            {/*            <li >Податкова спеціалізація</li>*/}
                            {/*            <li >Податкова спеціалізація</li>*/}
                            {/*            <li >Податкова спеціалізація</li>*/}
                            {/*            <li >Податкова спеціалізація</li>*/}
                            {/*            <li >Податкова спеціалізація</li>*/}
                            {/*            <li   >Податкова спеціалізація</li>*/}
                            {/*        </ul>*/}
                            {/*</div>*/}
                        </div>
                        <img src={Img_2}  alt="/"/>
                    </div>
                </div>
                    <div className={style.info_who_we}>
                        <img src={Img_1}  alt="/"/>
                        <div         className={style.box_text}>

                            <div className={style.our_advantage}>
                                <h2 >Клієнти нас цінують за:</h2>
                                    <ul>
                                        <li >персональні рішення по кожному питанню, викладені доступною мовою;</li>
                                        <li >експертну підтримку на всіх етапах: від задуму – до захисту в суді;</li>
                                        <li >впевненість у своїх діях, яка ґрунтується на практиці і нашому досвіді;</li>
                                        <li >реальну економію грошей і, що найцінніше,часу.</li>
                                    </ul>
                            </div>
                        </div>
                    </div>












                    {/*<div className={style.info_who_we}>*/}
                    {/*    /!*<div className={style.our_advantage   } >*!/*/}
                    {/*    /!*    <h2 >Наші пріоритети</h2>*!/*/}
                    {/*    /!*    <ul className={style.listPriority}>*!/*/}
                    {/*    /!*        <li >Інтереси Клієнта</li>*!/*/}
                    {/*    /!*        <li >Результативність</li>*!/*/}
                    {/*    /!*        <li >Конфіденційність</li>*!/*/}
                    {/*    /!*        <li >Сумлінність</li>*!/*/}
                    {/*    /!*        <li >Репутація</li>*!/*/}
                    {/*    /!*    </ul>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    <div className={style.our_advantage}>*/}
                    {/*        <h2 >Хто наш Клієнт</h2>*/}

                    {/*        <h4>Основні групи наших Клієнтів виглядають так:*/}
                    {/*        </h4>*/}
                    {/*        <ul>*/}
                    {/*            <li >перш за все, Власник будь-якого бізнесу;</li>*/}
                    {/*            <li >фінансова та юридична служби, орієнтовані на якісний податковий менеджмент;</li>*/}
                    {/*            <li >бухгалтер чи команда, яка потребує оперативної допомоги в реалізації щоденних або ж нестандартних питань;</li>*/}
                    {/*            <li >фізична особа щодо декларування та сплати податків з доходів та оподаткування майна.</li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*    <img src={Img_2}  alt="/"/>*/}
                    {/*</div>*/}
                </div>
                <Arrow/>
            </div>
            </motion.section>
        </div>

    );
};

export default AboutUs;