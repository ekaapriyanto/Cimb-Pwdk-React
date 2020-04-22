import React from "react";
import Axios from "axios";
import swal from "sweetalert"
import {API_URL} from "../../constants/API";
import {spinner} from "reactstrap"
import {connect} from "react-redux"
import {registerHandler} from "../../redux/action"

class WeekRegister extends React.Component {

    state = {
        username: "",
        password: "",
        repassword: "",
        role: "",
        fullName: "",
        isLoading: false,
    }

    inputHandler = (e, field) => {
        const {value} = e.target;
        this.setState({ [field]: value });
    };

    postDataRegistrasi = () => {
        const { username, password, repassword, role, fullName} = this.state
        // let newUser = {username, fullName, password, role}

        this.setState({isLoading: true});

        setTimeout(() => {
            const userData = {
                username, password, fullName, role, repassword,
            }
            this.props.onRegistrasi(userData)
            // Axios.get(`${API_URL}/user`,{
            //     params: {
            //         username,
            //     }
            // })
            // .then((res) => {
            //     if (password == repassword) {
            //         if (res.data.length == 0) {
            //             Axios.post(`${API_URL}/user`, newUser)
            //             .then((res) => {
            //                 swal("Akun anda telah terdaftar");
            //                 this.setState({isLoading: false});
            //             })
            //             .catch((err) => {
            //                 swal("Terjadi kesalahan pada server");
            //                 this.setState({isLoading: false});
            //             })
            //         } else {
            //             swal("Username: " + username + " sudah ada");
            //             this.setState({isLoading: false});
            //         }
            //     } else {
            //         swal("password tidak sama")
            //     }
            // })
            // .catch((err) => {
            //     console.log("Error", err)
            //     this.setState({isLoading: false})
            // })
        }, 1500)
    }
    render() {
        // const {username, password, repassword, role, fullName} = this.state
        return (
            <div className="container d-flex justify-content-center">
                <div className="card p-5 text-center" style={{width:"400px"}}>
                    <h4>Register</h4>
                    <input
                        // value={username}
                        className="form-control mt-2"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => this.inputHandler(e, "username")}
                    />
                    <input
                        className="form-control mt-2"
                        type="text"
                        placeholder="Password"
                        // value={password}
                        onChange={(e) => this.inputHandler(e, "password")}
                    />
                    <input
                        className="form-control mt-2"
                        type="text"
                        placeholder="Re-password"
                        // value={repassword}
                        onChange={(e) => this.inputHandler(e, "repassword")}
                    />
                    <input
                        className="form-control mt-2"
                        type="text"
                        placeholder="Role"
                        // value={role}
                        onChange={(e) => this.inputHandler(e, "role")}
                    />
                    <input
                        className="form-control mt-2"
                        type="text"
                        placeholder="FUll Name"
                        // value={fullName}
                        onChange={(e) => this.inputHandler(e, "fullName")}
                    />
                    <input
                        className="btn btn-primary mt-5"
                        type="button"
                        value="Sign In"
                        onClick={this.postDataRegistrasi}
                        disabled={this.state.isLoading}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatcToProps = {
    onRegistrasi: registerHandler
}
export default connect(mapStateToProps, mapDispatcToProps) (WeekRegister);