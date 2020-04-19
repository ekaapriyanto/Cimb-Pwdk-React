import React from "react"
import Axios from "axios"
import {Redirect} from "react-router-dom"
import {API_URL} from "../../constants/API"

class WeekLogin extends React.Component {

    state = {
        username: "",
        password: "",
        isLoggedIn: false
    }

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    getData = () => {
        const {username, password} = this.state

        Axios.get(`${API_URL}/user`, {
            params: {
                username: username,
                password: password
            }
        })
        .then((res) => {
            if (res.data.length >= 1){
                return (
                    this.setState({isLoggedIn: true})
                )
                
            } else {
                alert("username/password salah")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        const {username, password, isLoggedIn} = this.state
        if (!isLoggedIn) {
            return(
                <div className="card p-5" style={{width: "400px"}}>
                    <h4>Login</h4>
                    <input
                        className="form-control mt-2"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => this.inputHandler(e, "username")}
                    />
                    <input
                        className="form-control mt-2"
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => this.inputHandler(e, "password")}
                    />
                    <input
                        className="btn btn-primary mt-3"
                        type="button"
                        value="Login"
                        onClick={this.getData}
                    />
                    
                </div>
            )
        }
        else {
            return (
                <Redirect to={`/profile/${username}`}></Redirect>
            )
        }
    }
}
export default WeekLogin;