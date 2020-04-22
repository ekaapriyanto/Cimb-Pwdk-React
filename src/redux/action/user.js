import Axios from "axios";
import {API_URL} from "../../constants/API"
import swal from "sweetalert"

export const usernameInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USERNAME",
        payload: text,
    };
};
export const onClickLogin = (login) => {
    return{
        type: "ON_CLICK_LOGIN",
        payload: login,
    };
};

export const registerHandler = (userDataRegister) => {
    return (dispatc) => {
        const {
            username,
            password,
            repassword,
            role,
            fullName,
        } = userDataRegister
        let newUser = {username, password, role, fullName}
        
        Axios.get(`${API_URL}/user`,{
            params: {
                username,
            }
        })
        .then((res) => {
            if (password == repassword) {
                if (res.data.length == 0) {
                    Axios.post(`${API_URL}/user`, newUser)
                    .then((res) => {
                        swal("Akun anda telah terdaftar");
                        dispatc({
                            type: "ON_LOGIN_SUCCES",
                            payload: res.data
                        })
                        // this.setState({isLoading: false});
                    })
                    .catch((err) => {
                        swal("Terjadi kesalahan pada server");
                        // this.setState({isLoading: false});
                    })
                } else {
                    swal("Username: " + username + " sudah ada");
                    // this.setState({isLoading: false});
                }
            } else {
                swal("password tidak sama")
            }
        })
        .catch((err) => {
            console.log("Error", err)
            // this.setState({isLoading: false})
        })
    }
}

export const loginHandler = (userData) => {
    return (dispatc) => {
        const {username, password} = userData
        Axios.get(`${API_URL}/user`, {
            params: {
                username,
                password,
            }
        })
        .then(res => {
            if (res.data.length > 0){
                dispatc({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0],
                })
            } else {
                dispatc({
                    type: "ON_LOGIN_FAIL",
                    payload: "*Username atau Password salah!"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
    };
};