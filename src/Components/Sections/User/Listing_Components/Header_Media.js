import React, { useEffect, useState } from 'react';
import { NotificationManager } from "react-notifications";
import $ from "jquery";

import ImageUploader from 'react-images-upload';

import Images_List from "./Sub_Components/Images_List";

const Header_Media = (props) => {

    const [type, setType] = useState({ "background_image": true });
    const [media, setMedia] = useState("");
    const [defaultPicturesB, setDefaultPicturesB] = useState([]);
    const [defaultPicturesC, setDefaultPicturesC] = useState([]);
    const [imagesEdit, setImagesEdit] = useState(false);

    useEffect(() => {
        const updateType = () => {
            if (props.values["Header_Media"]) {
                setImagesEdit(true);
                setType(props.values["Header_Media"].Type);
                if (props.values["Header_Media"].Type["video"]) {
                    setMedia("https://www.youtube.com/watch?v="+props.values["Header_Media"].Media);
                } else {
                    setMedia(props.values["Header_Media"].Media);
                }

                if (props.values["Header_Media"].Type["background_image"]) {
                    const file = [];
                    file.push(props.values["Header_Media"].Media)
                    setDefaultPicturesB(getUrlFromImage(file,"var"));
                }
                else if (props.values["Header_Media"].Type["caroussel"]) {
                    setDefaultPicturesC(getUrlFromImage(props.values["Header_Media"].Media,"var"));
                }
            }
        };
        updateType();
    }, []);

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

    const onDrop = picture => {
        setImagesEdit(false);
        if (type["background_image"]) {
            setMedia(picture[0]);
            setDefaultPicturesB(getUrlFromImage(picture,"input"));
            setDefaultPicturesC([]);
        }
        else if (type["caroussel"]) {
            setMedia(picture);
            setDefaultPicturesC(getUrlFromImage(picture,"input"));
            setDefaultPicturesB([]);
        }
    };

    function onChangeValue(event) {

        if ($.inArray(event.target.value, ['background_image', 'caroussel', 'video']) !== -1) {
            setType({ [event.target.value]: true });
            setMedia("");
        }
        else {
            if (type["video"]) {
                const url = event.target.value;
                setMedia(url);
            }
        }
    }

    function saveData(action) {
        if ((type && media !== "") || (props.values["Header_Media"])) {
            
            var dest = {};
            dest[action] = true;
            if (type["video"]) {
                if (media !== "") {
                    if (!validateYouTubeUrl(media)) {
                        return NotificationManager.error('check that there is no space','Invalid youtube link');
                    } 
                    props.onChange(dest, "Header_Media", { "Type": type, "Media": YouTubeGetID(media) });
                } else {
                    return NotificationManager.info("Veuillez saisir l'url de la video", 'Type de media change');
                }
                
            } else {
                let images = "";
                if (media === "" && props.values["Header_Media"]) {
                    if ((defaultPicturesB.length !== 0 && type["background_image"]) || (defaultPicturesC.length !== 0 && type["caroussel"])) {
                        images = props.values["Header_Media"].Media;
                    } else {
                        return NotificationManager.info('Veuillez entrez de nouvelles images', 'Type de media change');
                    }
                } else if (media !== "") {
                    images = media;
                } 
                props.onChange(dest, "Header_Media", { "Type": type, "Media": images });
                
            }
            
            if (action === "All") {
                var modify_hm = document.getElementById('modify_hm');
                modify_hm.style.display = 'none';
                $(".hm-form").find("input").attr("disabled", "disabled");
            }
            
        } else {
            NotificationManager.info('Veuillez remplir tous les champs');
        }
    }

    function handleNext() {
        saveData("Details");
    }

    function handlePrevious() {
        props.onChange({ "Location_Contact": true });
    }

    function handleModify() {
        saveData("All");
    }

    return (
        <>
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Header Media</h3>
            </div>
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form hm-form">
                    <div className="row" onChange={onChangeValue}>
                        {/*col */}
                        <div className="col-md-4">
                            <div className="add-list-media-header" style={{ marginBottom: '20px' }}>
                                <label className="radio inline">
                                    
                                    <input type="radio" name="gender" defaultValue="background_image" defaultChecked={props.values["Header_Media"] ? props.values["Header_Media"].Type["background_image"] : true} />
                                    
                                    <span>Background image</span>
                                </label>
                            </div>
                            
                            <div className="add-list-media-wrap" hidden={!type["background_image"]}>
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <ImageUploader
                                            defaultPictures={defaultPicturesB}
                                            withIcon={true}
                                            withPreview={true}
                                            label="Max file size: 15mb"
                                            buttonText='Choose image'
                                            onChange={onDrop}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={15242880}
                                            fileSizeError=" file size is too big"
                                            fileTypeError=" is not supported file extension. accepted: jpg | gif | png | gif"
                                            singleImage={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*col end*/}
                        {/*col */}
                        <div className="col-md-4">
                            <div className="add-list-media-header" style={{ marginBottom: '20px' }}>
                                <label className="radio inline">
                                    <input type="radio" name="gender" defaultValue="caroussel" defaultChecked={props.values["Header_Media"] ? props.values["Header_Media"].Type["caroussel"] : false} />
                                    <span>Carousel</span>
                                </label>
                            </div>
                            <div className="add-list-media-wrap" hidden={!type["caroussel"]}>
                                <div className="listsearch-input-item fl-wrap">
                                    <ImageUploader
                                        defaultPictures={defaultPicturesC}
                                        withIcon={true}
                                        withPreview={true}
                                        label="Max file size: 15mb"
                                        buttonText='Choose images'
                                        onChange={onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={15242880}
                                        fileSizeError=" file size is too big"
                                        fileTypeError=" is not supported file extension. accepted: jpg | gif | png | gif"
                                    />
                                    
                                </div>
                            </div>
                        </div>
                        {/*col end*/}
                        {/*col */}
                        <div className="col-md-4">
                            <div className="add-list-media-header" style={{ marginBottom: '20px' }}>
                                <label className="radio inline">
                                    <input type="radio" name="gender" defaultValue="video" defaultChecked={props.values["Header_Media"] ? props.values["Header_Media"].Type["video"] : false} />
                                    <span>Video</span>
                                </label>
                            </div>
                            <div className="add-list-media-wrap" hidden={!type["video"]}>
                                <label>Youtube  <i className="fab fa-youtube" /></label>
                                <input type="text" placeholder="https://www.youtube.com/" defaultValue={props.values["Header_Media"] ? props.values["Header_Media"].Type["video"] ? "https://www.youtube.com/watch?v="+props.values["Header_Media"].Media : "" : ""} />
                            </div>
                        </div>
                        {/*col end*/}
                    </div>
                    {props.values["Header_Media"] && defaultPicturesB.length !== 0 ?
                        props.values["Header_Media"].Type["background_image"] || defaultPicturesB.length !== 0 ?
                            <Images_List Title="Current Background Image" defaultPictures={defaultPicturesB} edit={imagesEdit} />
                            : ""
                        : !props.values["Header_Media"] && defaultPicturesB.length !== 0 ?
                            <Images_List Title="Current Background Image" defaultPictures={defaultPicturesB} edit={false} />
                            : ""
                    }

                    {props.values["Header_Media"] && defaultPicturesC.length !== 0 ?
                        props.values["Header_Media"].Type["caroussel"] || defaultPicturesC.length !== 0 ?
                            <Images_List Title="Current Caroussel Image" defaultPictures={defaultPicturesC} edit={imagesEdit} />
                            : ""
                        : !props.values["Header_Media"] && defaultPicturesC.length !== 0 ?
                            <Images_List Title="Current Caroussel Image" defaultPictures={defaultPicturesC} edit={false} />
                            : ""
                    }

                    {props.state["All"]
                        ?
                        <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_hm">Modify<i className="fal fa-edit" /></button>
                        : props.state["Edit"] ?
                            <button type="submit" className="btn color2-bg float-btn" onClick={handleModify} id="modify_hm">Save<i className="fal fa-edit" /></button>
                        :
                        (
                            <>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handlePrevious} style={{ marginRight: "5px" }}>Previous ( 2/9 )<i className="fal fa-caret-left" /></button>
                                <button type="submit" className="btn color2-bg float-btn" onClick={handleNext} >Next ( 4/9 )<i className="fal fa-caret-right" /></button>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Header_Media;