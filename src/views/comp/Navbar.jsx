import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render () {
        return(
            <div
            className="d-flex justify-content-around align-items-center"
            style={{ height: "80px"}}
            >
                <Link to="/lcs">LifeCycle</Link>
                <Link to="/register">Register|login</Link>
                <Link to="/cs">Counter Screen</Link>
                <Link to="/inputsc">Input Screen</Link>
            </div>
        )
    }
}
export default Navbar;