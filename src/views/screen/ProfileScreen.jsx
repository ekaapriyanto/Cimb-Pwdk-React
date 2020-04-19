import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";


class ProfileScreen extends React.Component {

    state = {
        userList: [],
    }

    postDataHandler = () => {
        Axios.post(`${API_URL}/user`,{
            username: "bill",
            password: "12345",
            role: "admin",
            fullName: "Bill labong"
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    getDataHandler = () => {
        Axios.get("http://localhost:2000/user/")
        .then((respon) => {
            console.log(respon)
        })
        .catch((eror) => {
            console.log(eror)
        })
        console.log("bukan axios")

        // Axios.get("http://localhost:2000/user",{
        //     params: {
        //         username: "eka",
        //         role: "user"
        //     }
        // })
        // .then((res) => {
        //     console.log(res.data)
        //     // this.setState({userList: res.data})
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
        // console.log("bukan axios")
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/user/1`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render() {
        return(
            <div>
                <h1>Profile</h1>
                <h2>Welcome, {this.props.match.params.username}</h2>
                <input onClick={this.getDataHandler} type="button" value="Get data" className="btn btn-success" />
                <input onClick={this.deleteDataHandler} type="button" value="delete data" className="btn btn-danger" />
                <input onClick={this.postDataHandler} type="button" value="post data" className="btn btn-primary" />
            </div>
        )
    }
}
export default ProfileScreen;