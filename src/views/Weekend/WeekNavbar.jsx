import React from "react";
import { Link } from "react-router-dom";
import home from "../image/home.png";
import {connect} from "react-redux";

class WeekNavbar extends React.Component {
    render(){
        let Home = home
        return(
            <div>
                <nav className="navbar" style={{color:"#fff", backgroundColor:"#ffe600"}}>
                    <Link to="/" className="navbar-brand" style={{color:"#fff"}}>
                        <img src={Home} width="30px" className="mr-2"/>
                        Home
                    </Link>
                    <div className="navbar-item">
                        <h1>{this.props.user.username}</h1>
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