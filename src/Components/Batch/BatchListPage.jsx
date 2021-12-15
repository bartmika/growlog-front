import { React, useState } from "react";
import { Link } from "react-router-dom";


function BatchListPage(props) {
    const [showBatchMenu, setShowBatchMenu] = useState(true)
    return (
        <>
            <div className="w3-hide-small">
                <h1>TODO #7: Unsupported for Desktop or tablet</h1>
            </div>
            <div className="w3-hide-large w3-hide-medium">
                {/* --- TOP NAVIGATION --- */}
                <div className="w3-teal w3-hide-large" >
                    <div className="w3-row">
                        <div className="w3-col s4 w3-container">
                            {/*<Link to="/items/search" className="w3-left" style={{ textDecoration: "none"}}>
                                <h4>
                                    <i className="fa fa-search"></i>&nbsp;Search
                                </h4>
                            </Link>*/}
                        </div>
                        <div className="w3-col s4 w3-container w3-center">
                            <h4>Batches</h4>
                        </div>
                        <div className="w3-col s4 w3-container ">
                            <Link to="/batches/add-step-1" className="w3-right" style={{ textDecoration: "none"}}>
                                <h4>
                                    <i className="fa fa-plus"></i>&nbsp;Add
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

                <br />

                <div className="w3-container">

                    {/* --- LIST --- */}
                    <div>
                        <ul className="w3-ul w3-white w3-border w3-border-grey w3-round-xlarge">
                            <li className="w3-cell-row w3-border-bottom" style={{padding:"0px",}}>
                                <div className="w3-cell w3-container">
                                    <h4><strong>Mulberry Tree (#1)</strong></h4>
                                    <p className="w3-text-grey"><strong>Plant:</strong> Tree</p>
                                    <p className="w3-text-grey"><strong>Pending:</strong> None</p>
                                    <p className="w3-text-grey"><strong>Week:</strong> 1</p>
                                </div>
                                <Link to={`/product/1`} style={{textDecoration:"none",padding:"0px",}} className="w3-cell w3-cell-middle w3-padding w3-center">
                                    <i className="fa fa-chevron-right w3-text-grey"></i>
                                </Link>
                            </li>
                            <li className="w3-cell-row w3-border-bottom" style={{padding:"0px",}}>
                                <div className="w3-cell w3-container">
                                    <h4><strong>Mulberry Tree (#2)</strong></h4>
                                    <p className="w3-text-grey"><strong>Plant:</strong> Tree</p>
                                    <p className="w3-text-grey"><strong>Pending:</strong> None</p>
                                    <p className="w3-text-grey"><strong>Week:</strong> 1</p>
                                    </div>
                                <Link to={`/product/2`} style={{textDecoration:"none",padding:"0px",}} className="w3-cell w3-cell-middle w3-padding w3-center">
                                    <i className="fa fa-chevron-right w3-text-grey"></i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <br />

                {/* --- end BATCH #1 --- */}

            </div>
        </>
    )
}

export default BatchListPage
