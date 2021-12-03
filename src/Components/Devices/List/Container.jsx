import { React, Component } from "react";
import { Link } from "react-router-dom";
import DevicesListComponent from "./Component";


class DevicesListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <DevicesListComponent
            {...this}
            {...this.state}
            {...this.props}
        />;
    }
}

export default DevicesListContainer
