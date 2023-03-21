import axios from "axios";
import React, {useState} from 'react';
import './ModalWindowCalRegist.modyle.css';





const ModalWindowCalRegister = ({ active, setActive }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    async function handleSubmit(event){
        event.preventDefault();
        try
        {
            await axios.post("http://localhost:8010/save",
                {
                    name: name,
                    email: email,
                    "phoneNumber": phoneNumber
                });
            console.log("Registration Successfully");
            setName("");
            setEmail("");
            setPhoneNumber("");
        }
        catch(err)
        {
            console.log("Registration Failed");
        }



    }



    const resetForm = () => {

        setName("")
        setEmail("")
        setPhoneNumber("")
    }

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal_content active" : "modal_content"}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="contein">
                    <div className="">
                        <h1>Call</h1>
                        <form  className="form"   onSubmit={(event) =>{handleSubmit(event); event.preventDefault();  setActive(false); resetForm()}}  >
                            <label>Name:<input
                                type="text"
                                required
                                placeholder="Name"
                                className="input"
                                value={name}
                                onChange={(event) =>
                                {
                                    setName(event.target.value);
                                }}
                            /> </label>
                            <label>Phone: <input
                                type="text"
                                required
                                placeholder="Phone number"
                                className="input"
                                value={phoneNumber}
                                onChange={(event) =>
                                {
                                    setPhoneNumber(event.target.value);
                                }}

                            /></label>
                            <label> Email: <input type="email" placeholder="Email" name="user_email" value={email} className="input" required  onChange={(event) =>
                            {
                                setEmail(event.target.value);
                            }}   /></label>
                            <div className="inp_sub"><input type="submit" value="Send"  className="input"   /></div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindowCalRegister;