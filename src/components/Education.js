import React from "react";
import Buttons from "./Buttons";

class Education extends React.Component {


    render(){
        return(
            <div>
                Education
                <form>
                    <div>
                        <label htmlFor="school">School name :</label>
                        <input type={"text"} id="school"></input>
                    </div>
                    <div>
                        <label htmlFor="title">Title of study :</label>
                        <input type={"text"} id="title"></input>
                    </div>
                    <div>
                        <label htmlFor="date">Date of study :</label>
                        <input type={"date"} id="date"></input>
                    </div>
                    <Buttons/>
                </form>
            </div>
        )
    }
}

export default Education;