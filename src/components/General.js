import React from "react";

class General extends React.Component {


    render(){
        return(
            <div>
                General
                <form>
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input type={"text"} id="name"></input>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail :</label>
                        <input type={"email"} id="email"></input>
                    </div>
                    <div>
                        <label htmlFor="phoneNo">Phone Number :</label>
                        <input type={"tel"} id="phoneNo"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default General;