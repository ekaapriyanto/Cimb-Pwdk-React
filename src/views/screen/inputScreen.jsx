import React from "react"

class InputScreen extends React.Component{
    state = {
        username: "",
        password: "",
        repassword: "",
        userlogin: "",
        passlogin: "",
        user: [],
    }
    render(){
        // const [fields, setFields] = useState([{nama: "", password: "", repassword:""}])
        const{username, password, repassword, userlogin, passlogin} = this.state
        const inputHandler = (e, field) => {
            this.setState({[field]: e.target.value})
        }
        const newUserName = username.toLowerCase()
        const newPassword = password
        const newRepassword = repassword
        const newObject = {'username': newUserName, 'password': newPassword, 'repassword': newRepassword}
        let arr = this.state.user.concat(newObject)

        const registrasi = () => {
            if (newPassword==newRepassword) {
                this.setState({user:arr})
                console.log(arr)
                alert('sukses')
                document.getElementById('username').value=''
                document.getElementById('pass').value=''
                document.getElementById('repass').value=''
            } else {
                alert('password tidak sama')
            }
            document.getElementById('in').innerHTML = ''
        }

        const login = (e, field) => {
            this.setState({[field]: e.target.value})
        }
        const btnlogin = () => {
            for (let i = 0; i < arr.length; i++){
                if(arr[i].username == userlogin && arr[i].password == passlogin){
                    document.getElementById('in').innerHTML=`Selamat Datang ${userlogin}`
                    break
                } else {(document.getElementById('in').innerHTML='password / username salah')}
            }
        }

        return(
            // <div className="container">
            //     <h1>Input Screen</h1>
            //     <h3>Username: {username}</h3>
            //     <input onChange={(e) => inputHandler(e, "username")} type='text' placeholder='Username'/>
            //     <br/>
            //     <h3>Email: {email}</h3>
            //     <input onChange={(e) => inputHandler(e, "email")} type='text' placeholder='Email'/>
            //     <br/>
            //     <br/>
            //     <textarea onChange={(e) => inputHandler(e, "textBox")} placeholder="silahkan masukan status"/>
            //     <span>{textBox.length}/140</span>
            // </div>
            <div>
                <div className="container" style={{
                    height:"250px",
                    width:"250px",
                    border:'1px solid black',
                    borderRadius: '10px'
                    }}>
                    <h4 className="mt-4">Register</h4>
                    <input className="mt-2 my-input" id='username' type="text" onChange={(e) => inputHandler(e, "username")} placeholder="Username"/>
                    <input className="mt-2 my-input" id='pass' type="text" onChange={(e) => inputHandler(e, "password")} placeholder="Password"/>
                    <input className="mt-2 my-input" id='repass' type="text" onChange={(e) => inputHandler(e, "repassword")} placeholder="Repaeat Password"/>
                    <br/>
                    <input className="btn btn-primary mt-4" type='button' onClick={(e) => registrasi(e)} value="Sign in"/>
                </div>
                <div className="container" style={{
                    height:"200px",
                    width:"250px",
                    border:'1px solid black',
                    borderRadius: '10px'
                    }}>
                    <h4 className="mt-2">Login</h4>
                    <input className="mt-2 my-input" type="text" onChange={(e) => {login(e,"userlogin")}} placeholder="Username"/>
                    <input className="mt-2 my-input" type="text" onChange={(e) => {login(e,"passlogin")}} placeholder="Password"/>
                    <br/>
                    <input className="btn btn-primary mt-4" type='button' onClick={() => {btnlogin()}} value="login"/>
                    
                </div>
                <div>
                    <h3 id='in'></h3>
                </div>
            </div>
        )
    }
}
export default InputScreen;