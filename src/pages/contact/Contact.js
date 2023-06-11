import React, {useState} from "react";

import style from "./Contact.module.css";
import {useTranslation} from "react-i18next";
import CallBackForm from "../../components/callBackForm/callBackForm";


const Contact = () =>{
    const {t} = useTranslation();
    const [modalActive, setModalActive] = useState(false);
    return (

        <div>
            <div className={style.firstBloc}>
                <div className={style.freeCons}><p>Безкоштовна консультація</p><CallBackForm/></div>

                <div className={style.imgBloc}/>
            </div>
        </div>
    );
}
export default Contact;