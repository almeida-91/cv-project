import React, { useState } from "react";

const Practice = () => {

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [tasks, setTasks] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [editable, setEditable] = useState(true);
    const [addPractice, setAddPractice] = useState(false);

    const updateCompany = (e) => {
        setCompany(e.target.value);
    }

    const updatePosition = (e) => {
        setPosition(e.target.value);
    }

    const updateTasks = (e) => {
        setTasks(e.target.value);
    }

    const updateStartDate = (e) => {
        setStartDate(e.target.value);
    }

    const updateEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setEditable(false);
    }

    const editClickHandler = () => {
        setEditable(true);
    }

    const updateAddPractice = () => {
        setAddPractice(true);
    }

    if (editable === true) {
         return(
                <div className="formContainer">
                <div className="title">Practice</div>
                <form onSubmit={submitHandler}>
                    <div className="input">
                        <label htmlFor="company">Company name :</label>
                        <input onChange={updateCompany} type={"text"} id="company" value={company} name="company"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="position">Position title :</label>
                        <input onChange={updatePosition} type={"text"} id="position" value={position} name="position"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="tasks">Main job tasks :</label>
                        <input onChange={updateTasks} type={"text"} id="tasks" value={tasks} name="tasks"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="startDate">Start date :</label>
                        <input onChange={updateStartDate} type={"date"} id="startDate" value={startDate} name="startDate"></input>
                    </div>
                    <div className="input">
                        <label htmlFor="endDate">End date :</label>
                        <input onChange={updateEndDate} type={"date"} id="endDate" value={endDate} name="endDate"></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {addPractice === true ? <Practice /> : null }
            </div> 
        )
    } else {
        return(
            <div className="formContainer">
            <div>
                <div className="title">Practice</div>
                <div className="input">Company name :
                <span>{company}</span>
                </div>
                <div className="input">Position :
                <span>{position}</span>
                </div>
                <div className="input">Main job tasks :
                <span>{tasks}</span>
                </div>
                <div className="input">Start date :
                <span>{startDate}</span>
                </div>
                <div className="input">End date :
                <span>{endDate}</span>
                </div>
                <button onClick={editClickHandler}>Edit</button>
            </div>
                {addPractice === true ? <Practice /> : <button onClick={updateAddPractice}>Add</button> }
            </div>
        )
    }
}

export default Practice;