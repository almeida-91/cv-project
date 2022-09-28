import React from "react";

class Practice extends React.Component {


    render(){
        return(
            <div>
                Practice
                <form>
                    <div>
                        <label htmlFor="company">Company name :</label>
                        <input type={"text"} id="company"></input>
                    </div>
                    <div>
                        <label htmlFor="position">Position title :</label>
                        <input type={"text"} id="position"></input>
                    </div>
                    <div>
                        <label htmlFor="tasks">Main job tasks :</label>
                        <input type={"text"} id="tasks"></input>
                    </div>
                    <div>
                        <label htmlFor="startDate">Start date :</label>
                        <input type={"date"} id="startDate"></input>
                    </div>
                    <div>
                        <label htmlFor="endDate">End date :</label>
                        <input type={"date"} id="endDate"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Practice;