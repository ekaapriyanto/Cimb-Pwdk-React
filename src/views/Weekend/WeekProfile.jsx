import React from "react"
import Axios from "axios"
import {API_URL} from "../../constants/API"
import user1 from "../image/user1.png"
import {connect} from "react-redux"

class WeekProfil extends React.Component {
    state = {
        user: "",
        status: "",
        namaLengkap: "",
        userList: []
    }

    componentDidMount = () => {
        Axios.get(`${API_URL}/user`, {
            params: {
                username: this.props.match.params.username
            }
        })
        .then((res) => {
            this.setState({userList: res.data})
            this.setState({
                user: this.state.userList[0].username,
                status:this.state.userList[0].role,
                namaLengkap:this.state.userList[0].fullName
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        let profil = user1
        const {user, status, namaLengkap} = this.state
        return (
            <div className="card p-5 text-center">
                <h1>{this.props.cantik} {user}</h1>
                <div className="row">
                    <div className="col-5 text-center">
                        <img src={profil} width="100px"/>
                    </div>
                    <div className="col-7 text-left">
                        <h4>Username : {user}</h4>
                        <h4>Nama Lengka : {namaLengkap}</h4>
                        <h4>status : {status}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cantik: state.haha.todoInput,
    }
}
export default connect(mapStateToProps)(WeekProfil);