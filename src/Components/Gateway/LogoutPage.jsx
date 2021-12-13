import { React, Component } from "react";
import { Link } from "react-router-dom";


class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // The following code will redirect the user in a few second.
        function forceRedirect() {
            window.location.href="/"
        }
        setTimeout(forceRedirect, 1000);
    }

    render() {
        return (
            <h1>Logout Redirector TODO 5</h1>
        );
    }
}

export default LogoutPage
