import axios from "axios";
import React, {useState} from 'react';
import './callBackForm.modyle.css';





const CallBackForm = () => {
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
        <div>

                        <form  className="form"   onSubmit={(event) =>{handleSubmit(event); event.preventDefault();  resetForm()}}  >
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
    );
};

export default CallBackForm;