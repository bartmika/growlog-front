import { React, Component } from "react";
import { Link } from "react-router-dom";
import DashboardComponent from "./Component";


class DashboardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <DashboardComponent
            {...this}
            {...this.state}
            {...this.props}
        />;
    }
}

export default DashboardContainer
