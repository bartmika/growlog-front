import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function MobileTabletNavigationContainer(props) {
    const location = useLocation();

    const paths = location.pathname.split("/");

    const basePath = paths[1];

    // Declare a new state variable, which we'll call "count"
    const [isMoreClicked, setIsMoreClicked] = useState(false);

    const isHidden = basePath === "" || basePath.includes("login") || basePath.includes("logout")  || basePath.includes("register");

    return (
        <div style={{display: isHidden ? "none" : "show"}}>
            {isMoreClicked && <div className="w3-sidebar w3-bar-block w3-border-right w3-border w3-card-4" id="mySidebar" style={{top: "75%", width:"50%", right:"0"}}>
                <button onClick={() => setIsMoreClicked(!isMoreClicked)} className="w3-bar-item w3-large">Close &times;</button>
                <a href="#" className="w3-bar-item w3-button"><i className={`fa fa-cog w3-large`}></i>&nbsp;Settings</a>
                <a href="/logout" className="w3-bar-item w3-button"><i className={`fa fa-sign-out w3-large`}></i>&nbsp;Logout</a>
            </div>}

            <div className="w3-bottom w3-black w3-bar">
                <div className={`w3-bar-item w3-center ${basePath.includes("dashboard") && !isMoreClicked ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                    <Link to={isMoreClicked ? "#" : "/dashboard"} style={{ textDecoration: "none"}}>
                        <i className={`fa fa-tachometer w3-large`}></i><br /><span className="w3-small">Dashboard</span>
                    </Link>
                </div>
                <div className={`w3-bar-item w3-center ${basePath.includes("product") && !isMoreClicked ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                    <Link to={isMoreClicked ? "#" : "/products"} style={{ textDecoration: "none"}}>
                        <i className={`fa fa-cubes w3-large`}></i><br /><span className="w3-small">Products</span>
                    </Link>
                </div>
                <div className={`w3-bar-item w3-center ${basePath.includes("device") && !isMoreClicked ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                    <Link to={isMoreClicked ? "#" : "/devices"} style={{ textDecoration: "none"}}>
                        <i className={`fa fa-microchip w3-large`}></i><br /><span className="w3-small">Devices</span>
                    </Link>
                </div>
                <div className={`w3-bar-item w3-center ${isMoreClicked === true ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                    <div onClick={() => setIsMoreClicked(!isMoreClicked)} style={{ textDecoration: "none"}}>
                        <i className="fa fa-ellipsis-h w3-large"></i><br /><span className="w3-small">More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
