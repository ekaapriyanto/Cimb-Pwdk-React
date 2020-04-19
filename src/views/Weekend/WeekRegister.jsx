import React from "react"
import Axios from "axios"
import {API_URL} from "../../constants/API"

class WeekRegister extends React.Component {

    state = {
        username: "",
        password: "",
        repassword: "",
        role: "",
        fullName: "",
    }

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    postData = () => {
        const { inUsername, inPassword, inRepassword, inRole, inFullName} = this.state

        Axios.get(`${API_URL}/user`,{
            params: {
                username: inUsername,
            }
        })
        .then((res) => {
            if (inPassword == inRepassword) {
                if (res.data.length == 1) {
                    alert("Username sudah digunakan")
                } else {
                    Axios.post(`${API_URL}/user`,{
                        username: inUsername,
                        password: inPassword,
                        role: inRole,
                        fullName: inFullName
                    })
                    alert("data sukses terdaftar")
                }
            } else {
                alert("password tidak sama")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        // const {username, password, repassword, role, fullName} = this.state
        return (
            <div className="card p-5" style={{width:"400px"}}>
                <h4>Register</h4>
                <input
                    // value={username}
                    className="form-control mt-2"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => this.inputHandler(e, "inUsername")}
                />
                <input
                    className="form-control mt-2"
                    type="text"
                    placeholder="Password"
                    // value={password}
                    onChange={(e) => this.inputHandler(e, "inPassword")}
                />
                <input
                    className="form-control mt-2"
                    type="text"
                    placeholder="Re-password"
                    // value={repassword}
                    onChange={(e) => this.inputHandler(e, "inRepassword")}
                />
                <input
                    className="form-control mt-2"
                    type="text"
                    placeholder="Role"
                    // value={role}
                    onChange={(e) => this.inputHandler(e, "inRole")}
                />
                <input
                    className="form-control mt-2"
                    type="text"
                    placeholder="FUll Name"
                    // value={fullName}
                    onChange={(e) => this.inputHandler(e, "inFullName")}
                />
                <input
                    className="btn btn-primary mt-5"
                    type="button"
                    value="Sign In"
                    onClick={this.postData}
                />
            </div>
        )
    }
}
export default WeekRegister;