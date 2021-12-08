import { Link } from "react-router-dom";

export default function DashboardComponent(props) {
    return (
        <>
            {/* TOP NAVIGATION */}
            <div className="w3-teal w3-hide-large" >
                <div className="w3-row">
                    <div className="w3-col s4 w3-container ">
                        {/*<Link to="/items/search" className="w3-left" style={{ textDecoration: "none"}}>
                            <h4>
                                <i className="fa fa-search"></i>&nbsp;Search
                            </h4>
                        </Link>*/}
                    </div>
                    <div className="w3-col s4 w3-container w3-center">
                        <h4>Dashboard</h4>
                    </div>
                    <div className="w3-col s4 w3-container ">

                    </div>
                </div>
            </div>

            {/* FIRST ROW */}
            <div class="w3-row">

                {/* GOOD */}
                <div className="w3-col m6 w3-panel">
                    <div className="w3-border w3-border-black w3-card-4">
                        <div className="w3-container w3-grey w3-border-bottom w3-border-black">
                            <h5>Mulberry Tree (#1)</h5>
                        </div>
                        <div className="w3-container w3-white">
                            <p><strong>Product Status:</strong> <span className="w3-text-green">Good</span></p>
                            <p><strong>Device Status:</strong> <span className="w3-text-green">Running</span></p>
                            <p><strong>Last Update:</strong> 25 minutes ago</p>
                            <p><strong>Growth Week:</strong> 3</p>
                            <p><strong>Pending Task:</strong> <Link to="/" style={{textDecoration: "none",}} target="_blank">Weekly Inspection&nbsp;<i className="fa fa-external-link"></i></Link></p>
                        </div>
                        <div className="w3-container w3-margin-bottom w3-white">
                            <Link to={`/product/1`} className="w3-btn w3-blue w3-block">View&nbsp;<i className="fa fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>

                {/* DEVICE ERROR */}
                <div className="w3-col m6 w3-panel">
                    <div className="w3-border w3-border-black w3-card-4">
                        <div className="w3-container w3-grey w3-border-bottom w3-border-black">
                            <h5>Mulberry Tree (#2)</h5>
                        </div>
                        <div className="w3-container w3-white">
                            <p><strong>Product Status:</strong> <span className="w3-text-grey">Neutral</span></p>
                            <p><strong>Device Status:</strong> <span className="w3-text-red">Error</span></p>
                            <p><strong>Last Update:</strong> 1 hour ago</p>
                            <p><strong>Growth Week:</strong> 3</p>
                            <p><strong>Pending Task:</strong> -</p>
                        </div>
                        <div className="w3-container w3-margin-bottom w3-white">
                            <Link to={`/product/1`} className="w3-btn w3-blue w3-block">View&nbsp;<i className="fa fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second ROW */}
            <div class="w3-row">

                {/* GOOD */}
                <div className="w3-col m6 w3-panel">
                    <div className="w3-border w3-border-black w3-card-4">
                        <div className="w3-container w3-grey w3-border-bottom w3-border-black">
                            <h5>Mulberry Tree (#3)</h5>
                        </div>
                        <div className="w3-container w3-white">
                            <p><strong>Product Status:</strong> <span className="w3-text-green">Good</span></p>
                            <p><strong>Device Status:</strong> <span className="w3-text-green">Running</span></p>
                            <p><strong>Last Update:</strong> 25 minutes ago</p>
                            <p><strong>Growth Week:</strong> 3</p>
                            <p><strong>Pending Task:</strong> -</p>
                        </div>
                        <div className="w3-container w3-margin-bottom w3-white">
                            <Link to={`/product/1`} className="w3-btn w3-blue w3-block">View&nbsp;<i className="fa fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>

                {/* DEVICE ERROR */}
                <div className="w3-col m6 w3-panel">
                    <div className="w3-border w3-border-black w3-card-4">
                        <div className="w3-container w3-grey w3-border-bottom w3-border-black">
                            <h5>Mulberry Tree (#4)</h5>
                        </div>
                        <div className="w3-container w3-white">
                            <p><strong>Product Status:</strong> <span className="w3-text-grey">Neutral</span></p>
                            <p><strong>Device Status:</strong> <span className="w3-text-red">Error</span></p>
                            <p><strong>Last Update:</strong> 1 hour ago</p>
                            <p><strong>Growth Week:</strong> 3</p>
                            <p><strong>Pending Task:</strong> -</p>
                        </div>
                        <div className="w3-container w3-margin-bottom w3-white">
                            <Link to={`/product/1`} className="w3-btn w3-blue w3-block">View&nbsp;<i className="fa fa-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
