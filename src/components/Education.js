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
                <div className="formContainer">
                    <div className="title">Education</div>
                    <form onSubmit={this.submitHandler}>
                        <div className="input">
                            <label htmlFor="school">School name :</label>
                            <input onChange={this.changeHandler} type={"text"} id="school" value={this.state.school} name="school"></input>
                        </div>
                        <div className="input">
                            <label htmlFor="title">Title of study :</label>
                            <input onChange={this.changeHandler} type={"text"} id="title" value={this.state.title} name="title"></input>
                        </div>
                        <div className="input">
                            <label htmlFor="date">Date of study :</label>
                            <input onChange={this.changeHandler} type={"date"} id="date" value={this.state.date} name="date"></input>
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
                    <div className="title">Education</div>
                    <div className="input">School name :
                    <span>{this.state.school}</span>
                    </div>
                    <div className="input">Title of study :
                    <span>{this.state.title}</span>
                    </div>
                    <div className="input">Date of study :
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