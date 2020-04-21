import React from "react"
import Axios from "axios"
import { API_URL } from "../../constants/API"
import { Link } from "react-router-dom";

class WeekHome extends React.Component {

    state = {
        userList: [],
        username: "",
        role: "",
        fullName: ""
    }

    getData = () => {
        Axios.get(`${API_URL}/user`)
        .then((res) => {
        })
        .catch((err) => {
            return(
                <h1>error</h1>
            )
        })
    }
    render() {
        return(
            <div className="container text-center mt-5">
                <Link to="/login" type="button" className="btn btn-primary mr-2">Login</Link>
                <Link to="/register" type="button" className="btn btn-primary">Registrasi</Link>
                <Link to="/todoredux" type="burron" className="btn btn-primary ml-2">Todo Redux</Link>
                {/* <button type="button" onClick={this.getData} className="btn btn-primary">click!</button> */}
            </div>
        )
    }
}
export default WeekHome;