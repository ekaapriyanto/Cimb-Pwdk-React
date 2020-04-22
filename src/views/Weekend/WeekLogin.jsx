import React from "react"
import Axios from "axios"
import {Redirect} from "react-router-dom"
import {API_URL} from "../../constants/API"
import {connect} from "react-redux";
import {onClickLogin, loginHandler} from "../../redux/action"
import swal from "sweetalert"

class WeekLogin extends React.Component {

    state = {
        username: "",
        password: "",
        isLoggedIn: false,
    }

    inputHandler = (e, field) => {
        const {value} =e.target;
        this.setState({ [field]: value });
    };

    getDataLogin = () => {
        const {username, password} = this.state

        const userData = {
            username,
            password,
        }

        this.props.onLogin(userData)

        // Axios.get(`${API_URL}/user`, {
        //     params: {
        //         username,
        //         password,
        //     }
        // })
        // .then((res) => {
        //     if (res.data.length > 0){
        //             this.setState({isLoggedIn: true})
        //             this.props.onClickLogin(username)
        //     } else {
        //         swal("username/password salah")
        //     }
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
    }
    render(){
        const {username, password, isLoggedIn} = this.state
        if (!isLoggedIn) {
            return(
                <div className="container d-flex justify-content-center">
                    <div className="card p-5" style={{width: "400px"}}>
                    <h4>Login</h4>
                    <p>username: {this.props.user.username}</p>
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
                        onClick={this.getDataLogin}
                    />
                    <p className="text-warning">{this.props.user.errMsg}</p>
                </div>
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
const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = {
    onLogin: loginHandler
}
export default connect(mapStateToProps, mapDispatchToProps)(WeekLogin);