import React, { useState, useEffect } from 'react';
import $ from "jquery";
import ImageUploader from 'react-images-upload';
import "./Styles/trainer_style.css";

const Trainers = (props) => {

    const [state, setState] = useState([
        {},
    ]);

    const [defaultPictures, setDefaultPictures] = useState([]);

    function getUrlFromImage(files, from) {
        let tempDp = [];
        for (var i = 0; i < files.length; i++) {
            if (from === "input") {
                tempDp.push(URL.createObjectURL(files[i]));
            } else {
                tempDp.push(files[i]);
            }
        }
        if (props.state === "Edit" && from === "var") {
            window.URL.createObjectURL(new Blob(tempDp, { type: "application/zip" }));
        }
        return tempDp;
    }

    function newTrainer() {
        state.push({});
        console.log(state);
    }

    function removeTrainer(index) {
        state.splice(index, 1);
        console.log(state);
    }

    function updateTrainer(event, index) {
        const fields = ["trainer", "domain", "description"];

        if (fields.includes(event.target.name))
            state[index][event.target.name] = event.target.value;

        console.log(state)
    }

    const onDrop = (picture, index) => {
        state[index]["picture"] = picture[0];
        console.log(state);
    };

    function handleNext() {
        props.onChange({ "Location_Contact": true }, "Trainers", { "Trainers": state });

    }

    function handleModify() {


    }

    function handlePrevious() {
        props.onChange({ "Title": true });
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Your Trainers (4 Max) <h6><span>You can add more at edit listing </span></h6></h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form social-form">
                    <div className="row trainer-component" >


                        {/*col */}
                        {state.map((item, index) => (
                            <div className="col-md-4" key={index} onChange={(event) => updateTrainer(event,index)}>
                                <label>Trainer Name <i className="fab fa-facebook" /></label>
                                <input type="text" placeholder="Trainer Name" name="trainer" defaultValue="" id="trainer" />

                                <label>Domain Name <i className="fab fa-facebook" /></label>
                                <input type="text" placeholder="Domain Name" name="domain" defaultValue="" id="domain" />

                                <label>Text</label>
                                <textarea cols="40" rows="3" placeholder="More Details" name="description" />

                                <div className="add-list-media-wrap">
                                    <div className="add-list-media-wrap">
                                        <div className="listsearch-input-item fl-wrap">
                                            <ImageUploader
                                                defaultPictures={defaultPictures}
                                                withIcon={true}
                                                withPreview={true}
                                                label="Max file size: 15mb"
                                                buttonText='Choose image'
                                                onChange={(picture) => onDrop(picture,index)}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                maxFileSize={15242880}
                                                fileSizeError=" file size is too big"
                                                fileTypeError=" is not supported file extension. accepted: jpg | gif | png | gif"
                                                singleImage={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {state.length > 1
                                    ?
                                    <a href="#add_listing" onClick={() => removeTrainer(index)} className="promo-link big_prom"  >
                                        <i className="fal fa-minus" style={{ backgroundColor: "#F75C96" }} ></i>
                                    </a>
                                    :
                                    ""
                                }
                            </div>
                        ))}
                        {/*col end*/}

                        {/*col */}

                        {state.length <= 3
                            ?
                            <div>

                                <a href="#add_listing" onClick={newTrainer} className="promo-link big_prom" style={{ marginLeft: "3%" }} >
                                    <i className="fal fa-plus" ></i>
                                </a>

                            </div>
                            :
                            ""
                        }
                        
                        {/*col end*/}

                        </div>
                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_social" >Modify<i className="fal fa-edit" /></button>
                        :
                        props.state["Edit"]
                            ?
                            <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_social" >Save<i className="fal fa-edit" /></button>
                            :
                            (
                                <>
                                    <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous<i className="fal fa-caret-left" /></button>
                                    <button className="btn    color2-bg  float-btn" onClick={handleNext} >Next<i className="fal fa-caret-right" /></button>
                                </>
                            )
                    }

                </div>
            </div>
        </>
    );
};

export default Trainers;