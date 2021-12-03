import { React, Component } from "react";
import { Link } from "react-router-dom";
import ProductsDetailComponent from "./Component";


class ProductsDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <ProductsDetailComponent
            {...this}
            {...this.state}
            {...this.props}
        />;
    }
}

export default ProductsDetailContainer
