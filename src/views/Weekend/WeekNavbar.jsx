import React from "react";
import { Link } from "react-router-dom";
import home from "../image/home.png";

class WeekNavbar extends React.Component {
    render(){
        let Home = home
        return(
            <div>
                <nav className="navbar navbar-expand navbar-light" style={{backgroundColor:"#ffe600"}}>
                    <div className="row">
                        <div className="col-3 text-left">
                            <Link to="/" className="navbar-brand">
                                <img src={Home} width="30px" className="mr-2"/>
                                Home
                            </Link>
                        </div>
                        <div className="col-9 text-right">
                            <Link to="/login" type="button" className="btn btn-primary mr-2">Login</Link>
                            <Link to="/register" type="button" className="btn btn-primary">Registrasi</Link>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
export default WeekNavbar;