import { React, Component } from "react";
import { Link } from "react-router-dom";


class IndexContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
            <div className="w3-hide-small">
                <h1>TODO #1: Unsupported for Desktop or tablet</h1>
            </div>
                <div className="w3-hide-large w3-hide-medium">
                    <div className="w3-container w3-margin w3-padding-32 w3-center">
                        <img src="/img/logo.png" style={{width:"100%"}}/>
                    </div>
                    <div className="w3-panel">
                        <div className="w3-container w3-white w3-round-xlarge">
                            <h1><strong>Welcome</strong></h1>
                            <p>To get started, please login or register to begin your plant growth monitoring journey!</p>
                            <div className="w3-padding">
                                <Link to="/login" className="w3-button w3-black w3-block w3-padding-16">
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login
                                </Link>
                            </div>
                            <div className="w3-padding">
                                <Link to="/register" className="w3-button w3-black w3-block w3-padding-16">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Register
                                </Link>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <span className="w3-bottom w3-center w3-red">
                    <a className="w3-button" target="_blank" href="https://github.com">This is only a prototype - no data is saved! <br />Fork Project on GitHub&nbsp;<i className="fa fa-external-link" aria-hidden="true"></i></a>
                </span>
            </>
        );
    }
}

export default IndexContainerComponent
