import React, { useEffect, useState } from 'react';
import { NotificationManager } from "react-notifications";
import { Switch } from "@material-ui/core";
import $ from "jquery";
import ImageUploader from 'react-images-upload';

import Images_List from "./Sub_Components/Images_List";

const Content_Widgets = (props) => {

    const [state, setState] = useState({
        promo: false,
        gallery: false,
        slider: false,
    });

    const [values, setValues] = useState({
        promo: [false, ""],
        gallery: [false, ""],
        slider: [false, ""],
    });

    const [imagesEdit, setImagesEdit] = useState(false);


    const [defaultPicturesG, setDefaultPicturesG] = useState([]);
    const [defaultPicturesS, setDefaultPicturesS] = useState([]);

    useEffect(() => {
        const updateType = () => {
            if (props.values["Content_Widgets"]) {
                setImagesEdit(true);
                if (props.values["Content_Widgets"].Content_Widgets.promo[0]) {
                    setValues(
                        {
                            promo: [true, "https://www.youtube.com/watch?v="+props.values["Content_Widgets"].Content_Widgets.promo[1]],
                            gallery: props.values["Content_Widgets"].Content_Widgets.gallery,
                            slider: props.values["Content_Widgets"].Content_Widgets.slider
                        }
                    );
                } else {
                    setValues(props.values["Content_Widgets"].Content_Widgets);
                }

                setState({
                    promo: props.values["Content_Widgets"].Content_Widgets.promo[0],
                    gallery: props.values["Content_Widgets"].Content_Widgets.gallery[0],
                    slider: props.values["Content_Widgets"].Content_Widgets.slider[0],
                });
                if (props.values["Content_Widgets"].Content_Widgets.gallery) {
                    setDefaultPicturesG(getUrlFromImage(props.values["Content_Widgets"].Content_Widgets.gallery[1]));
                }
                if (props.values["Content_Widgets"].Content_Widgets.slider) {
                    
                    setDefaultPicturesS(getUrlFromImage(props.values["Content_Widgets"].Content_Widgets.slider[1]));
                }
            }
        };
        updateType()
    }, []);

    function getUrlFromImage(files) {
        let tempDp = [];
        for (var i = 0; i < files.length; i++) {
            tempDp.push(URL.createObjectURL(files[i]));
        }
        return tempDp;
    }

    function validateYouTubeUrl(urlToParse) {
        if (urlToParse) {
            var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            if (urlToParse.match(regExp)) {
                return true;
            }
        }
        return false;
    }

    function YouTubeGetID(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }

    const onDropG = picture => {
        setImagesEdit(false);
        values.gallery = [state.gallery, picture];
        setDefaultPicturesG(getUrlFromImage(picture));
    };

    const onDropS = picture => {
        setImagesEdit(false);
        values.slider = [state.slider, picture];
        setDefaultPicturesS(getUrlFromImage(picture));
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        values[event.target.name] = [!state[event.target.name], ""];
    };

    const promoChangeValue = (event) => {
        values.promo = [state.promo, event.target.value];
    };

    function saveData(action) {
        var dest = {};
        dest[action] = true;

        let fValues = values;
        if (values.promo[0]) {
            if (!validateYouTubeUrl(values.promo[1])) {
                return NotificationManager.error('check that there is no space', '!Invalid youtube link');
            } else {
                fValues.promo[1] = YouTubeGetID(values.promo[1]);
            }
        }

        props.onChange(dest, "Content_Widgets", { "Content_Widgets": fValues });
        if (action === "All") {
            var modify_cw = document.getElementById('modify_cw');
            modify_cw.style.display = 'none';
            $(".cw-form").find("input").attr("disabled", "disabled");
        }
    }

    function handleNext() {
        saveData("Working_Hours");
    }

    function handlePrevious() {
        if (props.values["Title"].Type != "House" && props.values["Title"].Type != "Restaurant") {
            props.onChange({ "Details": true });
        } else {
            props.onChange({ "Facilities": true });
        }

    }

    function handleModify() {
        saveData("All");
    }
    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Content Widgets</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form cw-form">
                    <div className="row">
                        <div className="col-md-4">
                            {/* act-widget*/}
                            <div className="act-widget fl-wrap">
                                <div className="act-widget-header">
                                    <h4>1. Promo video</h4>
                                    <div className="onoffswitch">
                                        <Switch
                                            checked={props.values["Content_Widgets"] ? props.values["Content_Widgets"].Content_Widgets.promo[0] : state.promo}
                                            onChange={handleChange}
                                            color="primary"
                                            name="promo"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>
                                </div>
                                <div className="add-list-media-wrap" onChange={promoChangeValue} hidden={!state.promo}>
                                    <label>Video url :  <i className="fab fa-youtube" /></label>
                                    <input type="text" placeholder="https://www.youtube.com/" name="promo" defaultValue={props.values["Content_Widgets"] ? "https://www.youtube.com/watch?v=" +props.values["Content_Widgets"].Content_Widgets.promo[1] : ""} disabled={!state["promo"]} />
                                </div>
                            </div>
                            {/* act-widget end*/}
                        </div>
                        <div className="col-md-4">
                            {/* act-widget*/}
                            <div className="act-widget fl-wrap">
                                <div className="act-widget-header">
                                    <h4>2. Gallery Thumbnails</h4>
                                    <div className="onoffswitch">
                                        <Switch
                                            checked={props.values["Content_Widgets"] ? props.values["Content_Widgets"].Content_Widgets.gallery[0] : state.gallery}
                                            onChange={handleChange}
                                            color="primary"
                                            name="gallery"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>
                                </div>
                                <div className="add-list-media-wrap" hidden={!state.gallery}>
                                    <div className="listsearch-input-item fl-wrap">
                                        <ImageUploader
                                            defaultPictures={defaultPicturesG}
                                            withIcon={true}
                                            withPreview={true}
                                            label="Max file size: 15mb"
                                            buttonText='Choose images'
                                            onChange={onDropG}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={15242880}
                                            fileSizeError=" file size is too big"
                                            fileTypeError=" is not supported file extension. accepted: jpg | gif | png | gif"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* act-widget end*/}
                        </div>
                        <div className="col-md-4">
                            {/* act-widget*/}
                            <div className="act-widget fl-wrap">
                                <div className="act-widget-header">
                                    <h4>3. Slider</h4>
                                    <div className="onoffswitch">
                                        <Switch
                                            checked={props.values["Content_Widgets"] ? props.values["Content_Widgets"].Content_Widgets.slider[0] : state.slider}
                                            onChange={handleChange}
                                            color="primary"
                                            name="slider"
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </div>
                                </div>
                                <div className="add-list-media-wrap" hidden={!state.slider}>
                                    <div className="listsearch-input-item fl-wrap">
                                        <ImageUploader
                                            defaultPictures={defaultPicturesS}
                                            withIcon={true}
                                            withPreview={true}
                                            label="Max file size: 15mb"
                                            buttonText='Choose images'
                                            onChange={onDropS}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={15242880}
                                            fileSizeError=" file size is too big"
                                            fileTypeError=" is not supported file extension. accepted: jpg | gif | png | gif"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* act-widget end*/}
                        </div>
                    </div>

                    {props.values["Content_Widgets"] && defaultPicturesG.length !== 0 ?
                        props.values["Content_Widgets"].Content_Widgets.gallery[0] || defaultPicturesG.length !== 0 ?
                            <Images_List Title="Current Gallery Image" defaultPictures={defaultPicturesG} edit={imagesEdit} />
                            : ""
                        : !props.values["Content_Widgets"] && defaultPicturesG.length !== 0 ?
                            <Images_List Title="Current Gallery Image" defaultPictures={defaultPicturesG} edit={false} />
                            :""
                    }

                    {props.values["Content_Widgets"] && defaultPicturesS.length !== 0 ?
                        props.values["Content_Widgets"].Content_Widgets.slider[0] || defaultPicturesS.length !== 0 ?
                            <Images_List Title="Current Slider Image" defaultPictures={defaultPicturesS} edit={imagesEdit} />
                            : ""
                        : !props.values["Content_Widgets"] && defaultPicturesS.length !== 0 ?
                            <Images_List Title="Current Slider Image" defaultPictures={defaultPicturesS} edit={false} />
                            : ""
                    }

                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_cw" >Modify<i className="fal fa-edit" /></button>
                        :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 5/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 7/9 )<i className="fal fa-caret-right" /></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Content_Widgets;