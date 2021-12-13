import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'
import { SPECIES_SELECT_FIELD_OPTIONS } from "../../../Constants/SelectFieldOptions";


export default function ProductCreateStepOnePage(props) {
    const [name, setName] = useState("");
    const [speciesSelectedOption, setSpeciesSelectedOption] = useState("");
    const [isSpeciesOther, setIsSpeciesOther] = useState(false);
    const [speciesOther, setSpeciesOther] = useState("");

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
                    <form className="w3-white w3-card">
                        <div className="w3-container w3-padding">
                            <h3>Step 1 of X</h3>
                            <hr className="w3-black" />
                            <p>Please fill out all required fields (*).</p>
                            <p>
                                <label><strong>Name:</strong></label>
                                <input className="w3-input" type="text" name="name" placeholder="Please fill name" value={name} onChange={onNameChange} />
                                <label className="w3-text-grey w3-small">Name is the name you will use internally to identify this plant. If you don't specify this field then a default name will be provided by the system.</label>
                            </p>
                            <p>
                                <label><strong>Species (*):</strong></label>
                                <Select options={SPECIES_SELECT_FIELD_OPTIONS}
                                       onChange={onSpeciesSingleSelectChange}
                                           name="species"
                                          value={speciesSelectedOption}
                                    placeholder="Please select species"
                                 />
                                <label className="w3-text-grey w3-small">Choose "Other" if you cannot find your plant species.</label>
                            </p>
                            {isSpeciesOther && <p>
                                <label><strong>Specifies Other (*):</strong></label>
                                <input className="w3-input"
                                            type="text"
                                            name="speciesOther"
                                     placeholder="Please fill species other"
                                            name="speciesOther"
                                           value={speciesOther}
                                        onChange={onSpeciesOtherChange} />
                            </p>}

                            <p>
                                <label><strong>Environment:</strong></label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="environment" value="indoors" />&nbsp;
                                <label>Indoors</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="environment" value="outdoors" />&nbsp;
                                <label>Outdoors</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="environment" value="greenhouse" />&nbsp;
                                <label>Greenhouse</label>
                            </p>
                            <p>
                                <label><strong>Type of Growing Method:</strong></label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="hydroponics" />&nbsp;
                                <label>Hydroponics</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="aquaponics" />&nbsp;
                                <label>Aquaponics</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="potted soil" />&nbsp;
                                <label>Potted Soil</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="ground soil" />&nbsp;
                                <label>Ground Soil</label>
                            </p>

                            <p>
                                <label><strong>What is the primary purpose for growing?</strong></label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="hydroponics" />&nbsp;
                                <label>Utility</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="aquaponics" />&nbsp;
                                <label>Eatable</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="potted soil" />&nbsp;
                                <label>Cultural</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="ground soil" />&nbsp;
                                <label>Medicinal</label>
                            </p>
                            <p>
                                <input className="w3-radio" type="radio" name="typeOfGrowing" value="ground soil" />&nbsp;
                                <label>Experimental</label>
                            </p>

                            <p className="w3-margin-top">
                                <Link className="w3-button w3-red w3-left" to="/products"><i className="fa fa-times-circle"></i>&nbsp;Cancel</Link>
                                <button className="w3-button w3-blue w3-right" type="button" onClick={onNextClick}>Next&nbsp;<i className="fa fa-chevron-circle-right"></i></button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
