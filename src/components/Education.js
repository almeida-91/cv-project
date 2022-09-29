import React from "react";

class Education extends React.Component {
    constructor(){
        super();
        this.state = {
            school : "",
            title : "",
            date : "",
            editable : true,
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
        if (this.state.editable === true){
            return(
                <div>
                    Education
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label htmlFor="school">School name :</label>
                            <input onChange={this.changeHandler} type={"text"} id="school" value={this.state.school} name="school"></input>
                        </div>
                        <div>
                            <label htmlFor="title">Title of study :</label>
                            <input onChange={this.changeHandler} type={"text"} id="title" value={this.state.title} name="title"></input>
                        </div>
                        <div>
                            <label htmlFor="date">Date of study :</label>
                            <input onChange={this.changeHandler} type={"date"} id="date" value={this.state.date} name="date"></input>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    Education
                    <div>School name :
                    <span>{this.state.school}</span>
                    </div>
                    <div>Title of study :
                    <span>{this.state.title}</span>
                    </div>
                    <div>Date of study :
                    <span>{this.state.date}</span>
                    </div>
                    <div>
                        <button onClick={this.editClickHandler}>Edit</button>
                    </div>
                </div>
            )
        }
    }
}

export default Education;