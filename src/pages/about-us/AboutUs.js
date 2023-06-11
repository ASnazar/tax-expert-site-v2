import React, {useState} from "react";

import style from "./AboutUs.module.css";
import {useTranslation} from "react-i18next";
import Img_1 from "../../asserts/roberts.jpg";
import {BsPersonCircle} from "react-icons/bs";
import {FaHands} from "react-icons/fa";
import {IoIosPeople} from "react-icons/io";
import ModalWindowCalRegister from "../../components/modalWindow/ModalWindowCalRegister";
import Img_2 from "../../asserts/about2.png";
import CallBackForm from "../../components/callBackForm/callBackForm";

const AboutUs = () =>{
    const {t} = useTranslation();
    const [modalActive, setModalActive] = useState(false);
    return (

        <div>
            <div>
                <div className={style.topImg}>
                    <p>{t('about.aboutUs.whyWe')}</p>
                    <h3>Tax Expert ?</h3>
                  <a  onClick={() => setModalActive(true)} className={style.btn}>{t('home.firstHelloBlock.button')}</a>
                </div>
                <ModalWindowCalRegister active={modalActive} setActive={setModalActive}/>
                <div className={style.info}>
                    <div className={style.text}>
                        <h1>{t('about.aboutUs.title')}</h1>
                        <h2>{t('about.aboutUs.year')}</h2>
                        <p>{t('about.aboutUs.description')}</p>
                        <div className={style.textUl}>
                            <ul>
                                <h2 >{t('about.aboutUs.ourActivity')}</h2>
                                <li >{t('about.aboutUs.activity1')}</li>
                                <li >{t('about.aboutUs.activity2')}</li>
                                <li >{t('about.aboutUs.activity3')}</li>
                                <li >{t('about.aboutUs.activity4')}</li>
                                <li >{t('about.aboutUs.activity5')}</li>
                            </ul>
                            <img src={Img_1}  alt="/"/>
                        </div>
                        <div className={style.benefixConteiner}>
                            <div>
                                <BsPersonCircle  size={60}/>
                                <h1>{t('about.aboutUs.benefitH1')}</h1>
                                <p>{t('about.aboutUs.benefitDescription1')}</p>
                            </div>
                            <div>
                                <FaHands size={60}/>
                                <h1>{t('about.aboutUs.benefitH2')}</h1>
                                <p>{t('about.aboutUs.benefitDescription2')}</p>
                            </div>
                            <div>
                                <IoIosPeople size={60}/>
                                <h1>{t('about.aboutUs.benefitH3')}</h1>
                                <p>{t('about.aboutUs.benefitDescription3')}</p>
                            </div>
                        </div>
                        <div className={style.aboutPerson}>
                            <h3>{t('about.aboutUs.ourEmployees')}</h3>
                            <h1>{t('about.aboutUs.ourCommand')}</h1>
                            <div className={style.albomCard}>
                                        <div className={`${style.personCard} ${style.personCard_1}`}  >
                                            <p className= {style.descriptionAndName}>
                                                <h2>Балко Назарій</h2>
                                                <p  className={style.description} >Сертифікація САР, практичний досвід в бухгалтерії та фінансовому плануванні понад 5 років</p>
                                            </p>
                                        </div>
                                    <div className={`${style.personCard} ${style.personCard_2}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Паламарчук Олена</h2>
                                            <p  className={style.description} >Практичний досвід в управлінському та фінансовому плануванні понад 15 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_3}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Бессуднова Ірина</h2>
                                            <p  className={style.description} >Сертифікація САР, практичний досвід в бухгалтерії та фінансовому плануванні понад 10 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_4}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Голич Васелина</h2>
                                            <p  className={style.description} >Практичний досвід в управлінському та фінансовому плануванні понад 5 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_5}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Стара Марія</h2>
                                            <p  className={style.description} >Сертифікація САР, практичний досвід в бухгалтерії та фінансовому плануванні понад 5 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_6}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Віхоть Вікторія</h2>
                                            <p  className={style.description} >Практичний досвід в управлінському та фінансовому плануванні понад 15 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_7}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Ярема Ярослава</h2>
                                            <p  className={style.description} >Практикуючий головний бухгалтер Досвід в бухгалтерії у понад 12 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_8}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Гнатович Ольга</h2>
                                            <p  className={style.description} >Сертифікація САР, практичний досвід в бухгалтерії та фінансовому плануванні понад 15 років</p>
                                        </p>
                                    </div>
                                    <div className={`${style.personCard} ${style.personCard_9}`}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Орищин Марія</h2>
                                            <p  className={style.description} >Практикуючий головний бухгалтер Досвід в бухгалтерії у понад 12 років</p>
                                        </p>
                                    </div>
                            </div>
                            <div className={style.formBox}>
                                <img src={Img_2}    height="400" alt="/"/>
                                <CallBackForm/>
                                <ModalWindowCalRegister/>
                            </div>
                         </div>
                     </div>
                 </div>

              </div>
            {/*<Footer/>*/}
            {/*<Vanta/>*/}
        </div>
    );
}
export default AboutUs;