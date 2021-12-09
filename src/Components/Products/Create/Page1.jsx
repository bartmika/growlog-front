import { Link } from "react-router-dom";

export default function ProductCreatePage1ContainerComponent(props) {
    return (
        <>
            <div className="w3-hide-small">
                <h1>TODO #10: Unsupported for Desktop or tablet</h1>
            </div>
            <div className="w3-hide-large w3-hide-medium">
                {/* TOP NAVIGATION */}
                <div className="w3-teal w3-hide-large" >
                    <div className="w3-row">
                        <div className="w3-col s3 w3-container">
                            <Link to="/products" className="w3-left w3-text-light-grey" style={{ textDecoration: "none"}}>
                                <h4>
                                    <i className="fa fa-chevron-left"></i>&nbsp;Back
                                </h4>
                            </Link>
                        </div>
                        <div className="w3-col s6 w3-container w3-center">
                            <h4>Create Product</h4>
                        </div>
                        <div className="w3-col s3 w3-container ">
                        </div>
                    </div>
                </div>

                {/* Submission Form */}
                <div class="w3-container">
                    <form class="w3-card-4 w3-white">
                        <div className="w3-container">
                            <h4>Step 1 of 3 - Create Wizard</h4>
                            <p>Please fill out the required fields (*).</p>
                        </div>

                        <div>
                            /
                            <label>First Name</label>
                            <input class="w3-input" type="text" />

                            <label>Last Name</label>
                            <input class="w3-input" type="text" />
                        </div>



                    </form>
                </div>
            </div>
        </>
    )
}
