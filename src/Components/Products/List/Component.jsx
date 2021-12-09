import { Link } from "react-router-dom";

export default function ProductsListComponent(props) {
    return (
        <>
            <div className="w3-hide-small">
                <h1>TODO #7: Unsupported for Desktop or tablet</h1>
            </div>
            <div className="w3-hide-large w3-hide-medium">
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
                            <h4>Products</h4>
                        </div>
                        <div className="w3-col s4 w3-container ">
                            <Link to="/products/add-1" className="w3-right" style={{ textDecoration: "none"}}>
                                <h4>
                                    <i className="fa fa-plus"></i>&nbsp;Add
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* HERE IS AN EXAMPLE OF A BATCH */}
                {/*
                <div className="w3-container w3-grey w3-cell-row">
                    <div className="w3-cell w3-cell-left">
                        <h4><strong>Fall Batch 2021</strong></h4>
                    </div>
                    <div className="w3-cell w3-cell-right">
                        <i className="fa fa-caret-down w3-text-grey"></i>
                    </div>
                </div>
                <div className="w3-light-grey w3-bar w3-bar-block">
                    <button className="w3-bar-item w3-btn w3-border-bottom w3-mobile">
                        <i className="fa fa-plus"></i>&nbsp;Add Production
                    </button>
                    <button className="w3-bar-item w3-btn w3-border-bottom w3-mobile">
                        <i className="fa fa-edit"></i>&nbsp;Edit
                    </button>
                    <button className="w3-bar-item w3-btn w3-border-bottom w3-mobile">
                        <i className="fa fa-trash"></i>&nbsp;Terminate
                    </button>
                    <button className="w3-bar-item w3-btn w3-border-bottom w3-mobile">
                        <i className="fa fa-tasks"></i>&nbsp;View Pending Tasks
                    </button>
                </div>
                */}

                <ul className="w3-ul">
                    {/* Good Record Example */}
                    <li className="w3-cell-row w3-border-bottom" style={{padding:"0px",}}>
                        <div className="w3-white w3-cell w3-container">
                            <h3>Mulberry Tree (#1)</h3>
                            <p className="w3-text-grey"><strong>Plant:</strong> Tree</p>
                            <p className="w3-text-grey"><strong>Pending:</strong> None</p>
                            <p className="w3-text-grey"><strong>Week:</strong> 1</p>
                            </div>
                        <div className="w3-cell w3-cell-middle w3-white" style={{padding:"0px",}}>
                            <i className="fa fa-chevron-right w3-text-grey"></i>
                        </div>
                    </li>

                    {/* With Thumbnail */}
                    <li className="w3-cell-row w3-border-bottom" style={{padding:"0px",}}>
                        <div className="w3-white w3-cell w3-container">
                            <h2>Mulberry Tree (#3)</h2>
                            <p><strong>Status:</strong> Problem</p>
                            <p><strong>Pending:</strong> None</p>
                            <p><strong>Week:</strong> 1</p>
                            <p><strong>Last Update:</strong> 15 minutes ago</p>
                            </div>
                        <div className="w3-cell w3-cell-middle w3-white" style={{padding:"0px",}}>
                            <i className="fa fa-chevron-right w3-text-grey"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
