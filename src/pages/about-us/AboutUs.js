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
                            <h3>ПРОФЕСІОНАЛИ СВОЄЇ СПРАВИ</h3>
                            <h1>Наша команда</h1>
                            <div className={style.albomCard}>
                                        <div className={style.personCard}>
                                            <p className= {style.descriptionAndName}>
                                                <h2>Name person</h2>
                                                <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                            </p>
                                        </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
                                        </p>
                                    </div>
                                    <div className={style.personCard}>
                                        <p className= {style.descriptionAndName}>
                                            <h2>Name person</h2>
                                            <p  className={style.description} >Description rdfrgttfd grtfds gbtrfeds rgtfeds grrfed bgrvfedcs rgvfed grvfced</p>
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
        </div>
    );
}
export default AboutUs;