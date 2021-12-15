import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Select from 'react-select'
import { SPECIES_SELECT_FIELD_OPTIONS, PRIMARY_GROWING_PURPOSE_SELECT_FIELD_OPTIONS } from "../../Constants/SelectFieldOptions";


export default function BatchCreateProductAddPottedSoilProductPage(props) {
    const [name, setName] = useState("");
    const [speciesSelectedOption, setSpeciesSelectedOption] = useState("");
    const [isSpeciesOther, setIsSpeciesOther] = useState(false);
    const [speciesOther, setSpeciesOther] = useState("");
    const [primaryGrowingPurpose, setPrimaryGrowingPurpose] = useState("");
    const [forceUrl, setForceUrl] = useState("");

    function onSpeciesSingleSelectChange(selectedOption) {
        setSpeciesSelectedOption(selectedOption);
        setIsSpeciesOther(selectedOption.value === "Other");
    }

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onSpeciesOtherChange(e) {
        setSpeciesOther(e.target.value);
    }

    function onSetPrimaryGrowingPurpose(selectedOption) {
        setPrimaryGrowingPurpose(selectedOption);
    }

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
                        <h2><strong><i className="fa fa-cube"></i>&nbsp;Add Product</strong></h2>
                    </div>
                    <form className="w3-white w3-card w3-round-xlarge">
                        <div className="w3-container w3-padding">
                            <p>Please fill out all required fields (*).</p>
                            <p className="w3-margin-bottom">
                                <label><strong>What is the primary purpose for growing this plant? (*)</strong></label>
                                <Select options={PRIMARY_GROWING_PURPOSE_SELECT_FIELD_OPTIONS}
                                       onChange={onSetPrimaryGrowingPurpose}
                                           name="primaryGrowingPurpose"
                                          value={primaryGrowingPurpose}
                                    placeholder="Please select purpose"
                                 />
                                <label className="w3-text-grey w3-small">Please select only one option.</label>
                            </p>
                            <p className="w3-margin-bottom">
                                <label><strong>Name:</strong></label>
                                <input className="w3-input" type="text" name="name" placeholder="Please fill name" value={name} onChange={onNameChange} />
                            </p>
                            <p className="w3-margin-bottom">
                                <label><strong>Species (*):</strong></label>
                                <Select options={SPECIES_SELECT_FIELD_OPTIONS}
                                       onChange={onSpeciesSingleSelectChange}
                                           name="species"
                                          value={speciesSelectedOption}
                                    placeholder="Please select species"
                                 />
                                <label className="w3-text-grey w3-small">Choose "Other" if you cannot find your plant species.</label>
                            </p>
                            {isSpeciesOther && <p className="w3-margin-bottom">
                                <label><strong>Specifies Other (*):</strong></label>
                                <input className="w3-input"
                                            type="text"
                                            name="speciesOther"
                                     placeholder="Please fill species other"
                                            name="speciesOther"
                                           value={speciesOther}
                                        onChange={onSpeciesOtherChange} />
                            </p>}

                            <p className="w3-margin-top">
                                <Link className="w3-button w3-red w3-left w3-round-xlarge" to="/batches/add-step-2"><i className="fa fa-times-circle"></i>&nbsp;Cancel</Link>
                                <button className="w3-button w3-green w3-right w3-round-xlarge" type="button" onClick={onSubmitClick}><i className="fa fa-plus"></i>&nbsp;Save</button>
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
