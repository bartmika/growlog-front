import { React, Component } from "react";
import { Link } from "react-router-dom";
import DevicesDetailComponent from "./Component";


class DevicesDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <DevicesDetailComponent
            {...this}
            {...this.state}
            {...this.props}
        />;
    }
}

export default DevicesDetailContainer
