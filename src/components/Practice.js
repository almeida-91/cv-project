import React from "react";

class Practice extends React.Component {
    constructor(){
        super();
        this.state = {
            company: "",
            position: "",
            tasks: "",
            startDate: "",
            endDate: "",
            editable: true,
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.editClickHandler = this.editClickHandler.bind(this);
    }

    changeHandler(event){
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler(e){
        e.preventDefault();
        this.setState({editable : false});
    }

    editClickHandler(){
        this.setState({editable : true});
    }

    render(){
        if (this.state.editable === true) {
            return(
                <div>
                    Practice
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label htmlFor="company">Company name :</label>
                            <input onChange={this.changeHandler} type={"text"} id="company" value={this.state.company} name="company"></input>
                        </div>
                        <div>
                            <label htmlFor="position">Position title :</label>
                            <input onChange={this.changeHandler} type={"text"} id="position" value={this.state.position} name="position"></input>
                        </div>
                        <div>
                            <label htmlFor="tasks">Main job tasks :</label>
                            <input onChange={this.changeHandler} type={"text"} id="tasks" value={this.state.tasks} name="tasks"></input>
                        </div>
                        <div>
                            <label htmlFor="startDate">Start date :</label>
                            <input onChange={this.changeHandler} type={"date"} id="startDate" value={this.state.startDate} name="startDate"></input>
                        </div>
                        <div>
                            <label htmlFor="endDate">End date :</label>
                            <input onChange={this.changeHandler} type={"date"} id="endDate" value={this.state.endDate} name="endDate"></input>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    Practice
                    <div>Company name :
                    <span>{this.state.company}</span>
                    </div>
                    <div>Position :
                    <span>{this.state.position}</span>
                    </div>
                    <div>Main job tasks :
                    <span>{this.state.tasks}</span>
                    </div>
                    <div>Start date :
                    <span>{this.state.startDate}</span>
                    </div>
                    <div>End date :
                    <span>{this.state.endDate}</span>
                    </div>
                    <button onClick={this.editClickHandler}>Edit</button>
                </div>
            )
        }
    }
}

export default Practice;