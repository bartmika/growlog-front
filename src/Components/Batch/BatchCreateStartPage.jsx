import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Select from 'react-select'
import { SPECIES_SELECT_FIELD_OPTIONS, PRIMARY_GROWING_PURPOSE_SELECT_FIELD_OPTIONS } from "../../Constants/SelectFieldOptions";


export default function BatchCreateStartPage(props) {
    const [name, setName] = useState("");
    const [growEnvironment, setGrowEnvironment] = useState("");
    const [hasGreenhouseExtraLighting, setHasGreenhouseExtraLighting] = useState("");
    const [hasSharedLightSource, setHasSharedLightSource] = useState("");
    const [growMethod, setGrowMethod] = useState("");
    const [forceUrl, setForceUrl] = useState("");

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onGrowEnvironmentChange(e){
        setGrowEnvironment(parseInt(e.target.value));
    }

    function onHasGreenhouseExtraLightingChange(e){
        setHasGreenhouseExtraLighting(parseInt(e.target.value) ? true : false);
        console.log("onHasGreenhouseExtraLightingChange:", e.target.value);
    }

    function onHasSharedLightSource(e){
        setHasSharedLightSource(parseInt(e.target.value) ? true : false);
        console.log("onHasSharedLightSource:", e.target.value);
    }

    function onGrowMethodChange(e){
        setGrowMethod(parseInt(e.target.value));
        console.log("onGrowMethodChange:", e.target.value);
    }

    function onSubmitClick(e) {
        setForceUrl("/batches/add-step-2")
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
                        <h2><strong><i className="fa fa-cubes"></i>&nbsp;Batch Information</strong></h2>
                    </div>
                    <form className="w3-white w3-card w3-round-xlarge">
                        <div className="w3-container w3-padding">

                            <p>Please fill out all required fields (*).</p>

                            <p className="w3-margin-bottom">
                                <label><strong>Name (*)</strong></label>
                                <input className="w3-input" type="text" name="name" placeholder="Please fill batch name" value={name} onChange={onNameChange} />
                            </p>
                            <p className="w3-margin-bottom">
                                <label>
                                    <strong>Grow Environment (*)</strong>&nbsp;
                                    <span class="w3-tooltip">
                                        <sup><i class="fa fa-question-circle" aria-hidden="true"></i></sup>
                                        <span class="w3-text w3-small">
                                            <i>All plants that you add to this batch will be classified by your choice here. For example, picking outdoor means all of the plants in this batch are outdoor based.</i>
                                        </span>
                                    </span>
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="growEnvironment" value={2} onChange={onGrowEnvironmentChange} />&nbsp;
                                <label>Indoors</label>
                                <br />
                                <input className="w3-radio" type="radio" name="growEnvironment" value={3} onChange={onGrowEnvironmentChange} />&nbsp;
                                <label>Outdoors</label>
                                <br />
                                <input className="w3-radio" type="radio" name="growEnvironment" value={4} onChange={onGrowEnvironmentChange} />&nbsp;
                                <label>Greenhouse</label>
                            </p>
                            {growEnvironment === 4 && <p className="w3-margin-bottom">
                                <label>
                                    <strong>Does greenhouse include extra light source? (*)</strong>&nbsp;
                                    <span class="w3-tooltip">
                                        <sup><i class="fa fa-question-circle" aria-hidden="true"></i></sup>
                                        <span class="w3-text w3-small">
                                            <i>In addition to the natural sunlight provided to the greenhouse, does your greenhouse include an additional source of light (ex: LED Light) to supplement this batch?</i>
                                        </span>
                                    </span>
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="hasGreenhouseExtraLighting" value={1} onChange={onHasGreenhouseExtraLightingChange} checked={hasGreenhouseExtraLighting === true} />&nbsp;
                                <label>
                                    Yes
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="hasGreenhouseExtraLighting" value={0} onChange={onHasGreenhouseExtraLightingChange} checked={hasGreenhouseExtraLighting === false} />&nbsp;
                                <label>
                                    No
                                </label>
                                <br />
                            </p>}
                            {(growEnvironment === 2 || hasGreenhouseExtraLighting === true) && <p className="w3-margin-bottom">
                                <label>
                                    <strong>Is light source shared? (*)</strong>&nbsp;
                                    <span class="w3-tooltip">
                                        <sup><i class="fa fa-question-circle" aria-hidden="true"></i></sup>
                                        <span class="w3-text w3-small">
                                            <i>Are all the plants in this batch using the same light source, or are the plants provided with their own light source? Selecting <b>yes</b> means you only manage a single light source in this batch and selecting <b>no</b> means you'll need to manage each light source for each plant you enter in this batch.</i>
                                        </span>
                                    </span>
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="hasSharedLightSource" value={1} onChange={onHasSharedLightSource} checked={hasSharedLightSource === true} />&nbsp;
                                <label>
                                    Yes
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="hasSharedLightSource"value={0} onChange={onHasSharedLightSource} checked={hasSharedLightSource === false} />&nbsp;
                                <label>
                                    No
                                </label>
                                <br />
                            </p>}
                            <p className="w3-margin-bottom">
                                <label>
                                    <strong>Growing Method (*)</strong>&nbsp;
                                    <span class="w3-tooltip">
                                        <sup><i class="fa fa-question-circle" aria-hidden="true"></i></sup>
                                        <span class="w3-text w3-small">
                                            <i>
                                                Select the type of growing method that you will use for all the plants you enter into this batch.
                                                <ul>
                                                    <li><strong>Hydroponics</strong> - Growing plants in water with chemical fertilizers.</li>
                                                    <li><strong>Aquaponics</strong> - Growing plants in water with fish waste as a fertilizer.</li>
                                                    <li><strong>Potted Soil</strong> - Growing plants in containers.</li>
                                                    <li><strong>Ground Soil</strong> - Growing plants in the ground.</li>
                                                </ul>
                                            </i>
                                        </span>
                                    </span>
                                </label>
                                <br />
                                <input className="w3-radio" type="radio" name="growMethod" value={2} onChange={onGrowMethodChange} disabled={true} />&nbsp;
                                <label className="w3-text-grey">Hydroponics</label>
                                <br />
                                <input className="w3-radio" type="radio" name="growMethod" value={3} onChange={onGrowMethodChange} disabled={true} />&nbsp;
                                <label  className="w3-text-grey">Aquaponics</label>
                                <br />
                                <input className="w3-radio" type="radio" name="growMethod" value={4} onChange={onGrowMethodChange} checked={growMethod === 4} />&nbsp;
                                <label>Potted Soil</label>
                                <br />
                                <input className="w3-radio" type="radio" name="growMethod" value={5} onChange={onGrowMethodChange} disabled={true}/>&nbsp;
                                <label className="w3-text-grey">Ground Soil</label>
                            </p>

                            <p className="w3-margin-top">
                                <Link className="w3-button w3-red w3-left w3-round-xlarge" to="/batches"><i className="fa fa-times-circle"></i>&nbsp;Cancel</Link>
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
