import { Link } from "react-router-dom";

export default function DevicesListComponent(props) {
    return (
        <>
            {/* TOP NAVIGATION */}
            <div className="w3-teal w3-top w3-hide-small w3-hide-medium" >
                <div className="w3-display-container">
                    {/*  <img src="/img/compressed-logo.png" alt="Logo" style={{width:"15%"}} /> */}
                </div>
            </div>
            <div className="w3-teal w3-top w3-hide-large" >
                <div className="w3-row">
                    <div className="w3-col s4 w3-container ">
                        {/*<Link to="/items/search" className="w3-left" style={{ textDecoration: "none"}}>
                            <h4>
                                <i className="fa fa-search"></i>&nbsp;Search
                            </h4>
                        </Link>*/}
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <h4>Devices</h4>
                    </div>
                    <div className="w3-col s4 w3-container ">

                    </div>
                </div>
            </div>
            <br />
            <br />
            <Link to="/device/1">test</Link>




        </>
    )
}
