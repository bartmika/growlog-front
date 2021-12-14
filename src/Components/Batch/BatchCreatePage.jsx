import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Select from 'react-select'
import { SPECIES_SELECT_FIELD_OPTIONS, PRIMARY_GROWING_PURPOSE_SELECT_FIELD_OPTIONS } from "../../Constants/SelectFieldOptions";


export default function BatchCreatePage(props) {
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
                            <Link to="/products" className="w3-left w3-text-light-grey" style={{ textDecoration: "none"}}>
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

                    <form className="w3-white w3-card w3-round-xlarge">
                        <div className="w3-container w3-padding">

                            <p>Please fill out all required fields (*).</p>

                            <p className="w3-margin-bottom">
                                <label><strong>Name (*)</strong></label>
                                <input className="w3-input" type="text" name="name" placeholder="Please fill batch name" value={name} onChange={onNameChange} />
                            </p>
                            <p className="w3-margin-bottom">
                                <label><strong>Environment (*)</strong>&nbsp;<span class="w3-tooltip"><i class="fa fa-info-circle" aria-hidden="true"></i><span class="w3-text"><i>TODO.</i></span></span></label>
                                <br />
                                <input className="w3-radio" type="radio" name="environment" value="indoors" />&nbsp;
                                <label>Indoors</label>
                                <br />
                                <input className="w3-radio" type="radio" name="environment" value="outdoors" />&nbsp;
                                <label>Outdoors</label>
                                <br />
                                <input className="w3-radio" type="radio" name="environment" value="greenhouse" />&nbsp;
                                <label>Greenhouse</label>
                            </p>
                            <p className="w3-margin-bottom">
                                <label><strong>Type of Growing Method (*)</strong>&nbsp;<span class="w3-tooltip"><i class="fa fa-info-circle" aria-hidden="true"></i><span class="w3-text"><i>TODO.</i></span></span></label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="hydroponics" disabled={true} />&nbsp;
                                <label>Hydroponics</label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="aquaponics" disabled={true} />&nbsp;
                                <label>Aquaponics</label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="potted soil" />&nbsp;
                                <label>Potted Soil</label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="ground soil" disabled={true}/>&nbsp;
                                <label>Ground Soil</label>
                            </p>
                            <p className="w3-margin-bottom">
                                <label><strong>Plants will share a single light source (*)</strong></label>
                                <br />
                                <input className="w3-radio" type="radio" name="doesShareLightSource" value="true" />&nbsp;
                                <label>
                                    Yes&nbsp;<span class="w3-tooltip"><i class="fa fa-info-circle" aria-hidden="true"></i><span class="w3-text"><i>This means you input the light source once and every plant you add to this batch will use this shared light source.</i></span></span>
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="doesShareLightSource" value="false" />&nbsp;
                                <label>
                                    No&nbsp;<span class="w3-tooltip"><i class="fa fa-info-circle" aria-hidden="true"></i><span class="w3-text"><i>This means every plant you add to this batch will need to have a unique light source inputetted.</i></span></span>
                                </label>
                                <br />
                            </p>

                            <p className="w3-margin-top">
                                <Link className="w3-button w3-red w3-left w3-round-xlarge" to="/batches"><i className="fa fa-times-circle"></i>&nbsp;Cancel</Link>
                                <button className="w3-button w3-green w3-right w3-round-xlarge" type="button" onClick={onSubmitClick}><i className="fa fa-check-circle"></i>&nbsp;Save</button>
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
