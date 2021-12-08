import { Link } from "react-router-dom";

export default function ProductsListComponent(props) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    console.log(d);

    var d = new Date().setDate(new Date().getDate() - 1);
    console.log(d);
    return (
        <>
            <div className="w3-hide-small">
                <h1>TODO #7: Unsupported for Desktop or tablet</h1>
            </div>
            <div className="w3-hide-large w3-hide-medium">
                {/* TOP NAVIGATION */}
                <div className="w3-teal w3-hide-small w3-hide-medium" >
                    <div className="w3-display-container">
                        {/*  <img src="/img/compressed-logo.png" alt="Logo" style={{width:"15%"}} /> */}
                    </div>
                </div>
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

                        </div>
                    </div>
                </div>
                <div>
                    <ul className="w3-ul w3-white">
                        {/* WITH THUMBNAIL */}
                        <li className="w3-row">
                            <div className="w3-col s4 w3-container">
                                <img src="/img/placeholder.png" className="w3-image" style={{width:"100%"}}/>
                            </div>
                            <div className="w3-col s4 w3-container">
                                <h3><strong>Mulberry Tree (#1)</strong></h3>
                                <div className="w3-text-gray">
                                    <p><strong>Product Status:</strong> <span className="w3-text-green">Good</span></p>
                                    <p><strong>Growth Week:</strong> 3</p>
                                </div>
                            </div>
                            <div className="w3-col s4 w3-container w3-display-container">
                                <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", opacity:0}}/>
                                <span className="w3-display-right w3-text-gray"><i className="fa fa-chevron-right"></i></span>
                            </div>
                        </li>

                        {/* WITHOUT THUMBNAIL */}
                        <li className="w3-row">
                            <div className="w3-col s8 w3-container">
                                <h3><strong>Mulberry Tree (#2)</strong></h3>
                                <div className="w3-text-gray">
                                    <p><strong>Product Status:</strong> <span className="w3-text-green">Good</span></p>
                                    <p><strong>Growth Week:</strong> 3</p>
                                </div>
                            </div>
                            <div className="w3-col s4 w3-container w3-display-container">
                                <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", opacity:0}}/>
                                <span className="w3-display-right w3-text-gray"><i className="fa fa-chevron-right"></i></span>
                            </div>
                        </li>

                        {/* WITH THUMBNAIL BUT WITH ERROR */}
                        <li className="w3-row">
                            <div className="w3-col s4 w3-container">
                                <img src="/img/placeholder.png" className="w3-image" style={{width:"100%"}}/>
                            </div>
                            <div className="w3-col s4 w3-container">
                                <h3><strong>Mulberry Tree (#1)</strong></h3>
                                <div className="w3-text-gray">
                                    <p><strong>Product Status:</strong> <span className="w3-text-red">Critical</span></p>
                                    <p><strong>Growth Week:</strong> 3</p>
                                </div>
                            </div>
                            <div className="w3-col s4 w3-container w3-display-container">
                                <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", opacity:0}}/>
                                <span className="w3-display-right w3-text-gray"><i className="fa fa-chevron-right"></i></span>
                            </div>
                        </li>

                    </ul>

                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
