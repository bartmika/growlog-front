import { React, Component } from "react";
import { Link } from "react-router-dom";
import ProductsListComponent from "./Component";


class ProductsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <ProductsListComponent
            {...this}
            {...this.state}
            {...this.props}
        />;
    }
}

export default ProductsListContainer
