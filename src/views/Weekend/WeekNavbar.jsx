import React from "react";
import { Link } from "react-router-dom";
import home from "../image/home.png";
import user1 from "../image/user1.png"
import {connect} from "react-redux";

class WeekNavbar extends React.Component {
    render(){
        let Home = home
        let user = user1
        return(
            <div>
                <nav className="navbar" style={{color:"#fff", backgroundColor:"#ffe600"}}>
                    <Link to="/" className="navbar-brand" style={{color:"#fff"}}>
                        <img src={Home} width="30px" className="mr-2"/>
                        Home
                    </Link>  
                    <div className="nav-item">
                    {this.props.user.username}
                        <img src={user} width="30px"/>
                    </div> 
                </nav>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todo: state.haha,
        user: state.user,
    }
}
export default connect(mapStateToProps)(WeekNavbar);