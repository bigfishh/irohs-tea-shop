import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class LoginForm extends Component {

    state = {
        email_address: "",
        password: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    
    render() {
        return (
            <div>
                <h2>Login Form</h2>
                <p>{this.state.error_message}</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email_address">Email Address:</label>
                    <input type="text" id="email_address" name="email_address" onChange={this.handleChange} value={this.state.email_address} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}
export default withRouter(LoginForm);