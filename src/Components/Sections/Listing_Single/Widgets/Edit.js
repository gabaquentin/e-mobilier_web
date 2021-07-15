import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { appendScript } from "../../../../Assets/utils/appendScript";

import Header_Media from '../../User/Listing_Components/Header_Media';
import Working_Hours from '../../User/Listing_Components/Working_Hours';
import Location_Contact from '../../User/Listing_Components/Location_Contact';
import Social from '../../User/Listing_Components/Social';
import Details from '../../User/Listing_Components/Details';

const useStyles = makeStyles((theme) => ({
    modal: {
        overflow: 'scroll',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Edit = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const url = window.location.href;
    let current = (new URL(url));
    const pathname = current.pathname;

    var arr = url.split("/");
    var location = arr[0] + "//" + arr[2];

    const handleOpen = () => {
        if (props.component === "Location_Contact") {
            appendScript("/js/map-add.js", false);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {
                props.component === "Header_Media" ?
                    <div className="container">
                        <div className="section-title center-align big-title">
                            <a href="#headerMedia" onClick={handleOpen} style={{ marginTop: "0", marginBottom: "1%" }} className="promo-link big_prom" >
                                <i className="fal fa-photo-video"></i>
                                <span>Edit Header Media</span>
                            </a>
                            <span className="section-separator"></span>
                        </div>
                    </div>
                    :
                    props.component === "Working_Hours" ?
                        <a href="#Working_Hours" onClick={handleOpen} className="promo-link big_prom" style={{ marginTop: "0", marginBottom: "1%" }} >
                            <i className="fal fa-clock"></i>
                            <span>Edit Working Hours</span>
                        </a>
                :
                    props.component === "Location_Contact" ?
                            <a href="#Location_Contact" onClick={handleOpen} className="promo-link big_prom" style={{ marginTop: "0", marginBottom: "1%" }} >
                                <i className="fal fa-map-pin"></i>
                            <span>Edit Location Contact</span>
                        </a>
                            :
                            props.component === "Social" ?
                                <a href="#Social" onClick={handleOpen} className="show-single-contactform tolt" data-microtip-position="top" data-tooltip="Edit Social"><i className="fal fa-edit" /></a>
                                :
                                props.component === "Details" ?
                                    <a href="#Details" onClick={handleOpen} className="promo-link big_prom" style={{ marginTop: "0", marginBottom: "1%" }} >
                                        <i className="fal fa-map-pin"></i>
                                        <span>Edit Description</span>
                                    </a>
                                    :
                        <></>
            }
            
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="col-md-9" id="header_form">
                        {
                            props.component === "Header_Media" ?
                                <Header_Media values={props.listing} state={{ "Edit": true }} />
                                :
                                props.component === "Working_Hours" ?
                                    <Working_Hours values={props.listing} from="Edit" />
                                    :
                                    props.component === "Location_Contact" ?
                                        <Location_Contact values={props.listing} state={{ "Edit": true }} />
                                        :
                                        props.component === "Social" ?
                                            <Social values={props.listing} state={{ "Edit": true }} />
                                            :
                                            props.component === "Details" ?
                                                <Details values={props.listing} state={{ "Edit": true }} />
                                                :
                                        <></>
                        }
                    </div>
                </Fade>
            </Modal>
        </>
    );
};

export default Edit;