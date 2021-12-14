import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { SPECIES_SELECT_FIELD_OPTIONS, PRIMARY_GROWING_PURPOSE_SELECT_FIELD_OPTIONS } from "../../../Constants/SelectFieldOptions";


export default function ProductCreateStepOnePage(props) {
    const [name, setName] = useState("");
    const [speciesSelectedOption, setSpeciesSelectedOption] = useState("");
    const [isSpeciesOther, setIsSpeciesOther] = useState(false);
    const [speciesOther, setSpeciesOther] = useState("");
    const [primaryGrowingPurpose, setPrimaryGrowingPurpose] = useState("");

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

    function onNextClick(e) {

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
                            <h4>Create Product</h4>
                        </div>
                        <div className="w3-col s3 w3-container ">
                        </div>
                    </div>
                </div>
                <br /><br /><br />

                {/* Submission Form */}
                <div className="w3-container">
                <h3><strong>Step 1 of 3</strong></h3>
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
                            <p className="w3-margin-bottom">
                                <label><strong>Environment (*):</strong></label>
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
                                <label><strong>Type of Growing Method (*):</strong></label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="hydroponics" />&nbsp;
                                <label>Hydroponics</label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="aquaponics" />&nbsp;
                                <label>Aquaponics</label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="potted soil" />&nbsp;
                                <label>Potted Soil</label>
                                <br />
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="ground soil" />&nbsp;
                                <label>Ground Soil</label>
                            </p>

                            <p className="w3-margin-top">
                                <Link className="w3-button w3-red w3-left w3-round-xlarge" to="/products"><i className="fa fa-times-circle"></i>&nbsp;Cancel</Link>
                                <button className="w3-button w3-blue w3-right w3-round-xlarge" type="button" onClick={onNextClick}>Next&nbsp;<i className="fa fa-chevron-circle-right"></i></button>
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
