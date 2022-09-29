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
                <div>
                    <div>General</div>
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
                        <button type="Submit">Submit</button>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    <div>General</div>
                    <div>Name : {this.state.name}</div>
                    <div>E-mail : {this.state.email}</div>
                    <div>Phone : {this.state.phone}</div>
                    <button onClick={this.editClickHandler}>Edit</button>
                </div>
            )
        }
    }
}

export default General;