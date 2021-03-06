import { React, Component } from "react";
import "./w3.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import DevicesDetailContainer from "./Components/Devices/Detail/Container";
import DevicesListContainer from "./Components/Devices/List/Container";
import ProductsDetailContainer from "./Components/Products/Detail/Container";
import ProductListPage from "./Components/Products/List/ProductListPage";
import ProductCreateStepOnePage from "./Components/Products/Create/StepOnePage";
import BatchCreateProductAddPottedSoilProductPage from "./Components/Batch/BatchCreateProductAddPottedSoilProductPage";
import BatchCreateProductListPage from "./Components/Batch/BatchCreateProductListPage";
import BatchCreateStartPage from "./Components/Batch/BatchCreateStartPage";
import BatchListPage from "./Components/Batch/BatchListPage";
import DashboardContainer from "./Components/Dashboard/Container";
import RegisterSuccessContainer from "./Components/Gateway/RegisterSuccessContainer";
import RegisterPage from "./Components/Gateway/RegisterPage";
import LogoutPage from "./Components/Gateway/LogoutPage";
import LoginPage from "./Components/Gateway/LoginPage";
import IndexPage from "./Components/Gateway/IndexPage";
import NotFoundPage from "./Components/Misc/NotFoundPage";
import MobileTabletNavigationContainer from "./Components/Misc/MobileTabletNavigationContainer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Router>
                    <Routes>
                        <Route exact path="/device/:id" element={<DevicesDetailContainer/>}/>
                        <Route exact path="/devices" element={<DevicesListContainer/>}/>
                        <Route exact path="/product/:id" element={<ProductsDetailContainer/>}/>
                        <Route exact path="/products/add-1" element={<ProductCreateStepOnePage/>}/>
                        <Route exact path="/products" element={<ProductListPage/>}/>
                        <Route exact path="/batches/add-step-2/add-potted-soil-product" element={<BatchCreateProductAddPottedSoilProductPage/>}/>
                        <Route exact path="/batches/add-step-2" element={<BatchCreateProductListPage/>}/>
                        <Route exact path="/batches/add-step-1" element={<BatchCreateStartPage/>}/>
                        <Route exact path="/batches" element={<BatchListPage/>}/>
                        <Route exact path="/dashboard" element={<DashboardContainer/>}/>
                        <Route exact path="/register-success" element={<RegisterSuccessContainer/>}/>
                        <Route exact path="/register" element={<RegisterPage/>}/>
                        <Route exact path="/login" element={<LoginPage/>}/>
                        <Route exact path="/logout" element={<LogoutPage/>}/>
                        <Route exact path="/" element={<IndexPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                    <div>
                        <MobileTabletNavigationContainer />
                    </div>
                </Router>

            </>
        );
    }
}

export default App;
