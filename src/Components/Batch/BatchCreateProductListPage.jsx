import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Select from 'react-select'
import { SPECIES_SELECT_FIELD_OPTIONS, PRIMARY_GROWING_PURPOSE_SELECT_FIELD_OPTIONS } from "../../Constants/SelectFieldOptions";


export default function BatchCreateProductListPage(props) {
    const [forceUrl, setForceUrl] = useState("");

    function onSubmitClick(e) {
        setForceUrl("/batches")
    }

    if (forceUrl != "") {
        return <Navigate to={forceUrl} />;
    }

    return (
        <>
            <div className="w3-hide-small">
                <h1>TODO #10: Unsupported for Desktop or tablet</h1>
            </div>
            <div className="w3-hide-large w3-hide-medium">
                {/* TOP NAVIGATION */}
                <div className="w3-teal w3-hide-large w3-top" >
                    <div className="w3-row">
                        <div className="w3-col s3 w3-container">
                            <Link to="/batches" className="w3-left w3-text-light-grey" style={{ textDecoration: "none"}}>
                                <h4>
                                    <i className="fa fa-chevron-left"></i>
                                </h4>
                            </Link>
                        </div>
                        <div className="w3-col s6 w3-container w3-center">
                            <h4>Add Batch</h4>
                        </div>
                        <div className="w3-col s3 w3-container ">
                        </div>
                    </div>
                </div>
                <br /><br /><br />

                {/* Submission Form */}
                <div className="w3-container">

                    <div className="w3-container">
                        <h2><strong><i className="fa fa-cube"></i>&nbsp;Products</strong></h2>
                    </div>
                    <form className="w3-white w3-card w3-round-xlarge">
                        <div className="w3-container w3-padding">
                            <p>Please add all the products being grown in this batch.</p>

                            <Link className="w3-button w3-green w3-round-xlarge" to="/batches/add-step-2/add-potted-soil-product"><i className="fa fa-plus"></i>&nbsp;Add</Link>

                            <p className="w3-margin-top">
                                <Link className="w3-button w3-blue w3-left w3-round-xlarge" to="/batches/add-step-1"><i className="fa fa-chevron-circle-left"></i>&nbsp;Previous</Link>
                                <button className="w3-button w3-blue w3-right w3-round-xlarge" type="button" onClick={onSubmitClick}>Next&nbsp;<i className="fa fa-chevron-circle-right"></i></button>
                            </p>
                        </div>
                    </form>
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}
