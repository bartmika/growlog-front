import { React, Component } from "react";
import { Link } from "react-router-dom";


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onRegisterClick = this.onRegisterClick.bind(this);
    }

    onRegisterClick(e) {
        window.location.href = "/dashboard";
    }

    render() {
        return (
            <>
                <div className="w3-hide-small">
                    <h1>TODO #3: Unsupported for Desktop or tablet</h1>
                </div>
                <div className="w3-hide-large w3-hide-medium">
                    <div className="w3-container w3-margin w3-padding w3-center">
                        <Link to="/">
                            <img src="/img/logo.png" style={{width:"60%"}}/>
                        </Link>
                    </div>
                    <div className="w3-panel">
                        <div className="w3-container">
                            <h1><strong><i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Register</strong></h1>
                        </div>
                        <div className="w3-container w3-white w3-round-xlarge w3-border w3-border-grey">
                            <br />
                            <p>The fields with astricks (*) are required.</p>
                            <p>
                                <label><strong>Email (*)</strong></label>
                                <input class="w3-input" type="text" />
                            </p>

                            <p>
                                <label><strong>Password (*)</strong></label>
                                <input class="w3-input" type="password" />
                            </p>

                            <p>
                                <label><strong>First Name (*)</strong></label>
                                <input class="w3-input" type="text" />
                            </p>

                            <p>
                                <label><strong>Last Name (*)</strong></label>
                                <input class="w3-input" type="text" />
                            </p>

                            <p>
                            <button className="w3-button w3-block w3-blue w3-round-xlarge w3-padding-16" onClick={this.onRegisterClick}>Register</button>
                            </p>
                            <span className="w3-block">
                                <p>Already have an account? <Link to="/login">Click here</Link> to login now.</p>
                            </span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RegisterPage
