import { React, Component } from "react";
import { Link } from "react-router-dom";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e) {
        window.location.href = "/dashboard"
    }

    render() {
        return (
            <>
                <div className="w3-hide-small">
                    <h1>TODO #2: Unsupported for Desktop or tablet</h1>
                </div>
                <div className="w3-hide-large w3-hide-medium">
                    <div className="w3-container w3-margin w3-padding w3-center">
                        <Link to="/">
                            <img src="/img/logo.png" style={{width:"60%"}}/>
                        </Link>
                    </div>
                    <div className="w3-panel">
                        <div className="w3-container">
                            <h1><strong><i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login</strong></h1>
                        </div>
                        <div className="w3-container w3-white w3-round-xlarge w3-border w3-border-grey">
                            <br />
                            <p>
                            <label><strong>Email</strong></label>
                            <input class="w3-input" type="text" />
                            </p>

                            <p>
                            <label><strong>Password</strong></label>
                            <input class="w3-input" type="text" />
                            </p>

                            <p>
                                <button className="w3-button w3-block w3-blue w3-round-xlarge w3-padding-16" onClick={this.onLoginClick}>Login</button>
                            </p>

                            <p className="w3-block">
                                <p>Don't have an account? <Link to="/register">Click here</Link> to register a new account!</p>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginPage
