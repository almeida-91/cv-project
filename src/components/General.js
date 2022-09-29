import React from "react";

class General extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
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
        if(this.state.editable === true){
            return(
                <div className="formContainer">
                    <div className="title">General</div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label htmlFor="name">Name :</label>
                            <input onChange={this.changeHandler} type={"text"} id="name" value={`${this.state.name}`} name="name"></input>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail :</label>
                            <input onChange={this.changeHandler} type={"email"} id="email" value={`${this.state.email}`} name="email"></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number :</label>
                            <input onChange={this.changeHandler} type={"tel"} id="phone" value={`${this.state.phone}`} name="phone"></input>
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
                        <span>{this.state.name}</span>
                    </div>
                    <div className="input">E-mail :
                        <span>{this.state.email}</span>
                    </div>
                    <div className="input">Phone Number:
                        <span>{this.state.phone}</span>
                    </div>
                    <div className="input">
                        <button onClick={this.editClickHandler}>Edit</button>
                    </div>
                </div>
            )
        }
    }
}

export default General;