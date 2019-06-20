import React from "react"




class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render(){
        return (
            <div>
                <input 
                    placeholder="Username" 
                    onChange={this.handleChange}
                    value={this.state.username}
                    name="username"/>

                <input
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    name="password" />
                
                <button>Login</button>

            </div>
        )

    }
}

export default Login;