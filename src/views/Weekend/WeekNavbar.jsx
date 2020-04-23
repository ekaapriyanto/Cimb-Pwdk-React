import React from "react";
import { Link } from "react-router-dom";
import home from "../image/home.png";
import user1 from "../image/user1.png";
import Cookie from "universal-cookie"
import {connect} from "react-redux";
import {logoutHandler} from "../../redux/action"

const cookiesObject = new Cookie()

class WeekNavbar extends React.Component {

    logOut = () => {
        this.props.logoutHandler()
        cookiesObject.remove("authData")
    }
    render(){
        let Home = home
        let imgUser = user1
        if(!this.props.user.id){
            return(
                <div>
                    <nav className="navbar" style={{color:"#fff", backgroundColor:"#ffe600"}}>
                        <Link to="/" className="navbar-brand" style={{color:"#fff"}}>
                            <img src={Home} width="30px" className="mr-2"/>
                            Home
                        </Link>  
                        <div className="nav-item">
                            <Link to="/login" type="text">Login</Link> &nbsp;
                            <img src={imgUser} width="30px"/>
                        </div>
                    </nav>
    
                </div>
            )
        } else {
            return(
                <div>
                    <nav className="navbar" style={{color:"#fff", backgroundColor:"#ffe600"}}>
                        <Link to="/" className="navbar-brand" style={{color:"#fff"}}>
                            <img src={Home} width="30px" className="mr-2"/>
                            Home
                        </Link>  
                        <div className="nav-item">
                            <Link to="/" type="text" onClick={this.logOut}>Logout</Link> &nbsp;
                        {/* <input onClick={this.LogOut} type="text" value="Logout"/> */}
                            {this.props.user.username} &nbsp;
                            <img src={imgUser} width="30px"/>
                        </div> 
                    </nav>
    
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.haha,
        user: state.user,
    }
}
const mapDispatchToProps = {
    logoutHandler,
}
export default connect(mapStateToProps, mapDispatchToProps)(WeekNavbar);