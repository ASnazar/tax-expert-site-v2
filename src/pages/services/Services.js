import React, {useState} from "react";

import style from "./Services.module.css";
import {useTranslation} from "react-i18next";
import ModalWindowCalRegister from "../../components/modalWindow/ModalWindowCalRegister";


const Services = () =>{
    const {t} = useTranslation();
    const [modalActive, setModalActive] = useState(false);
    return (

        <div>
            <div>
                <div className={style.topImg}>
                    <h1>Послуги</h1>
                    <h2>Наша робота - це наш вибір реалізувати свої знання і досвід та об'єднати таких ж однодумців у партнерство та співпрацю!</h2>
                    <a  onClick={() => setModalActive(true)} className={style.btn}>{t('home.firstHelloBlock.button')}</a>
                </div>
                <ModalWindowCalRegister active={modalActive} setActive={setModalActive}/>
                <div className={style.info}>


                    <div className={style.ourServices}>
                        <div className={style.ourServicesStart}>
                            <h4>Наші послуги
                            <h2>Ефективне ведення бізнес процесів</h2>
                            </h4>
                            <p>Цінуйте свій час та гроші – зосередьтеся на Вашому бізнесі!<br/>
                                Питання щодо бухгалтерії, податків та звітності ми беремо на себе </p>
                        </div>

                        <div className={style.allServices}>
                            <div className={style.allCards}>
                                <div className={style.oneCard}>
                                  <div className={`${style.photo} ${style.serviceCard_1}`}/>
                                    <h3>Консультації з оподаткування</h3>
                                    <p>Консультації в сфері бухгалтерського та податкового законодавства</p>
                                </div>

                                <div className={style.oneCard}>
                                    <div className={`${style.photo} ${style.serviceCard_2}`}/>
                                    <h3>Податковий експрес-аудит</h3>
                                    <p>Практична допомога в облікових системах, перевірка загального стану бухгалтерського обліку, закриття періоду</p>
                                </div>

                                <div className={style.oneCard}>
                                    <div className={`${style.photo} ${style.serviceCard_3}`}/>
                                    <h3>Юридична підтримка бізнесу</h3>
                                    <p>Реєстрація бізнесу, консультування Юросіб та ФОП у сфері податковогого обліку</p>
                                </div>


                                <div className={style.oneCard}>
                                    <div className={`${style.photo} ${style.serviceCard_4}`}/>
                                    <h3>Бухгалтерські послуги</h3>
                                    <p>Віддалене бухгалтерське обслуговування, консультування. Підбір та
                                        налаштування програмних бухгалтерських продуктів 1С:Підприємство</p>
                                </div>


                                <div className={style.oneCard}>
                                    <div className={`${style.photo} ${style.serviceCard_5}`}/>
                                    <h3>Управлінський консалтинг</h3>
                                    <p>Оптимізація бізнес-процесів, розробка управлінських звітів.
                                        Зробимо Ваше підприємство ще більш ефективним!</p>
                                </div>


                                <div className={style.oneCard}>
                                    <div className={`${style.photo} ${style.serviceCard_6}`}/>
                                    <h3>Консультації </h3>
                                    <p>Консультації в сфері бухгалтерського та податкового законодавства</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={style.notNowWotToDo}>
                        <p><h3>НЕ ЗНАЄТЕ З ЧОГО ПОЧАТИ</h3>
                            <h4>Наші експерти завжди готові вам допомогти</h4>
                            <a  onClick={() => setModalActive(true)} className={style.btn}>Отримати консультацію</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;