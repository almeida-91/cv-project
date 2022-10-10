import React, { useState } from "react";

const General = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [editable,setEditable] = useState(true);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePhone = (e) => {
        setPhone(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setEditable(false);
    }

    const editClickHandler = () => {
        setEditable(true);
    }

    if(editable === true){
        return(
            <div className="formContainer">
                <div className="title">General</div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input onChange={updateName} type={"text"} id="name" value={`${name}`} name="name"></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail :</label>
                        <input onChange={updateEmail} type={"email"} id="email" value={`${email}`} name="email"></input>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number :</label>
                        <input onChange={updatePhone} type={"tel"} id="phone" value={`${phone}`} name="phone"></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            )
        } else {
            return(
                <div className="formContainer">
                    <div className="title">General</div>
                    <div className="input">Name :
                        <span>{name}</span>
                    </div>
                    <div className="input">E-mail :
                        <span>{email}</span>
                    </div>
                    <div className="input">Phone Number:
                        <span>{phone}</span>
                    </div>
                    <div className="input">
                        <button onClick={editClickHandler}>Edit</button>
                    </div>
                </div>
            )
        }
    }

export default General;