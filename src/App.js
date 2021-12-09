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
import ProductsListContainer from "./Components/Products/List/Container";
import ProductCreateStepOnePage from "./Components/Products/Create/StepOnePage";
import DashboardContainer from "./Components/Dashboard/Container";
import RegisterSuccessContainer from "./Components/Gateway/RegisterSuccessContainer";
import RegisterContainerComponent from "./Components/Gateway/RegisterContainerComponent";
import LogoutContainer from "./Components/Gateway/LogoutContainer";
import LoginContainerComponent from "./Components/Gateway/LoginContainerComponent";
import IndexContainerComponent from "./Components/Gateway/IndexContainerComponent";
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
                        <Route exact path="/products" element={<ProductsListContainer/>}/>
                        <Route exact path="/dashboard" element={<DashboardContainer/>}/>
                        <Route exact path="/register-success" element={<RegisterSuccessContainer/>}/>
                        <Route exact path="/register" element={<RegisterContainerComponent/>}/>
                        <Route exact path="/login" element={<LoginContainerComponent/>}/>
                        <Route exact path="/logout" element={<LogoutContainer/>}/>
                        <Route exact path="/" element={<IndexContainerComponent/>}/>
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
