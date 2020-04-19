import React from "react"
import Axios from "axios"
import { API_URL } from "../../constants/API"

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
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Username</td>
                            <td>Full Name</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                {/* <button type="button" onClick={this.getData} className="btn btn-primary">click!</button> */}
            </div>
        )
    }
}
export default WeekHome;