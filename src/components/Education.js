import React, { useState } from "react";

const Education = () =>{
    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [editable, setEditable] = useState("");
    const [addEducation, setAddEducation] = useState("");

    const updateSchool = (e) => {
        setSchool(e.target.value);
    }

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateDate = (e) => {
        setDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setEditable(false);
    }

    const editClickHandler = () => {
        setEditable(true);
    }

    const updateaddEducation = () => {
        setAddEducation(true);
    }

    if (editable === true){
        return(
            <div className="formContainer">
                <div className="title">Education</div>
                <form onSubmit={submitHandler}>
                    <div className="input">
                        <label htmlFor="school">School name :</label>
                        <input onChange={updateSchool} type={"text"} id="school" value={school} name="school"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="title">Title of study :</label>
                        <input onChange={updateTitle} type={"text"} id="title" value={title} name="title"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="date">Date of study :</label>
                        <input onChange={updateDate} type={"date"} id="date" value={date} name="date"></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {addEducation === true ? <Education /> : null}
            </div>
        )
    } else {
        return(
            <div className="formContainer">
                <div className="title">Education</div>
                <div className="input">School name :
                <span>{school}</span>
                </div>
                <div className="input">Title of study :
                <span>{title}</span>
                </div>
                <div className="input">Date of study :
                <span>{date}</span>
                </div>
                <div>
                    <button onClick={editClickHandler}>Edit</button>
                </div>
                {addEducation === true ? <Education /> : <button onClick={updateaddEducation}>Add</button>}
            </div>
        )
    }
}


export default Education;