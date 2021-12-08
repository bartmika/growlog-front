import { Link } from "react-router-dom";

export default function ProductsListComponent(props) {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    console.log(d);

    var d = new Date().setDate(new Date().getDate() - 1);
    console.log(d);
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
                        <h4>Products</h4>
                    </div>
                    <div className="w3-col s4 w3-container ">

                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div>
                <ul className="w3-ul w3-white">
                    {/* WITH THUMBNAIL */}
                    <li className="w3-row">
                        <div className="w3-col s4 w3-container">
                            <img src="/img/placeholder.png" className="w3-image" style={{width:"100%"}}/>
                        </div>
                        <div className="w3-col s4 w3-container">
                            Mulberry Tree (#1)
                        </div>
                        <div className="w3-col s4 w3-container w3-display-container">
                            <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", opacity:0}}/>
                            <span className="w3-display-right w3-text-gray"><i className="fa fa-chevron-right"></i></span>
                        </div>
                    </li>

                    {/* WITHOUT THUMBNAIL */}
                    <li className="w3-row">
                        <div className="w3-col s8 w3-container">
                            Mulberry Tree (#1)
                        </div>
                        <div className="w3-col s4 w3-container w3-display-container">
                            <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", opacity:0}}/>
                            <span className="w3-display-right w3-text-gray"><i className="fa fa-chevron-right"></i></span>
                        </div>
                    </li>

                    <li className="w3-bar" onClick={null}>
                        <div className="w3-bar-item w3-hide-small">
                            <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", maxWidth:"160px"}}/>
                        </div>
                        <div className="w3-bar-item w3-hide-medium">
                            <img src="/img/placeholder.png" className="w3-image" style={{width:"100%", maxWidth:"60px"}}/>
                        </div>
                        <div className="w3-bar-item">
                            <h3>Mulberry Tree (#2)</h3>
                            <p>Status ggod</p>
                            <p>Status ggod</p>
                        </div>
                        <div className="w3-bar-item w3-text-grey w3-right">
                            <span className="">
                                <h3>&nbsp;</h3>
                                <p><i className="fa fa-chevron-right"></i></p>
                                <p>&nbsp;</p>
                            </span>
                        </div>
                    </li>




                    {/* GOOD */}
                    <li className="w3-bar" onClick={null}>
                        <div className="w3-bar-item">
                            <h3>Mulberry Tree (#2)</h3>
                            <p>Status ggod</p>
                            <p>Status ggod</p>
                        </div>
                        <div className="w3-bar-item w3-text-grey w3-right">
                            <span className="">
                                <h3>&nbsp;</h3>
                                <p><i className="fa fa-chevron-right"></i></p>
                                <p>&nbsp;</p>
                            </span>
                        </div>
                    </li>

                    <li className="w3-bar">
                        <div className="w3-bar-item">
                            <h3>Mulberry Tree (#3)</h3>
                            <p>Status ggod</p>
                            <p>Status ggod</p>
                        </div>
                        <div className="w3-bar-item w3-text-grey w3-right">
                            <span className="">
                                <h3>&nbsp;</h3>
                                <p><i className="fa fa-chevron-right"></i></p>
                                <p>&nbsp;</p>
                            </span>
                        </div>
                    </li>

                    <li className="w3-bar">
                        <div className="w3-bar-item">
                            <h3>Mulberry Tree (#3)</h3>
                            <p>Status ggod</p>
                            <p>Status ggod</p>
                        </div>
                        <div className="w3-bar-item w3-text-grey w3-right">
                            <span className="">
                                <h3>&nbsp;</h3>
                                <p><i className="fa fa-chevron-right"></i></p>
                                <p>&nbsp;</p>
                            </span>
                        </div>
                    </li>

                </ul>

                <br />
                <br />
                <br />
            </div>
        </>
    )
}
