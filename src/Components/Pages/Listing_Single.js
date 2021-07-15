import React, { useEffect, useState } from 'react';

import app from "../../firebase";
import { useAuth } from "../../Contexts/AuthContext";
import { NotificationManager } from "react-notifications";

import { Link, useHistory, useParams } from "react-router-dom";
import Content from '../Sections/Listing_Single/Content';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';
import {appendScript} from "../../Assets/utils/appendScript";
import Chat from "../Sections/Listing_Single/Widgets/Chat";
import Footer from "../Layouts/Footer";
import AuthForm from "../Layouts/AuthForm";

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import { getListingById, updateListing } from '../../Contexts/Listing/services';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Listing_Single = () => {

    const { Id, Mode } = useParams();
    const { currentUser } = useAuth();
    const [listing, setListing] = useState({});
    const [author, setAuthor] = useState({});
    const [error, setError] = useState();
    const [infos, setInfos] = useState();

    let history = useHistory();

    const [openned, setOpenned] = useState(true);

        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var today = weekday[d.getDay()];
    var todayH = d.getHours();
    var todayM = d.getMinutes();
    var todayY = d.getFullYear();
    var todayMo = d.getMonth()+1;
    var todayD = d.getDate();


    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/map-single.js", false);
        };
        appendScripts();
    }, []);

    useEffect(() => {
        if (error) {
            NotificationManager.error(error.message, error.title);
        }
    }, [error, setError]);

    useEffect(() => {
        if (infos) {
            NotificationManager.infos(infos.message, infos.title);
        }
    }, [infos, setInfos]);

    useEffect(() => {
        const fetchListing = () => {
            if (Id) {
                getListingById(Id).then(
                    function (listing) {
                        if (listing.empty) {
                            setError({ error: true, message: 'please refresh page', title: 'no partner error' });
                            history.goBack();
                        } else {
                            if (listing.data().Owner !== currentUser.uid) {
                                if (Mode) {
                                    if (Mode === "Edit")
                                        history.push("/listing-single/" + listing.id);
                                }
                            }

                            if (Mode) {
                                if (Mode !== "Edit")
                                    history.push("/listing-single/" + listing.id);
                            }

                            getAuthor(listing.data().Owner).then(() => {
                                setListing({
                                    Id: listing.id, Data: listing.data()
                                });

                                const planTime = listing.data().Plan_Openning.value.substr(listing.data().Plan_Openning.value.indexOf('T') + 1, listing.data().Plan_Openning.value.indexOf(':') + 2);
                                const planTimeH = planTime.substr(0, planTime.indexOf(':'));
                                const planTimeM = planTime.substr(planTime.indexOf(':') + 1, planTime.indexOf(':') + 2);

                                const planDate = listing.data().Plan_Openning.value.substr(0, listing.data().Plan_Openning.value.indexOf('T'));
                                const planDateY = planDate.substr(0, planDate.indexOf('-'));
                                const planDateMD = planDate.substr(planDate.indexOf('-') + 1, planDate.indexOf('-') + 1);
                                const planDateM = planDateMD.substr(0, planDateMD.indexOf('-'));
                                const planDateD = planDateMD.substr(planDateMD.indexOf('-') + 1, planDateMD.indexOf('-') + 1);

                                if ((planDateY <= todayY) && (planDateM <= todayMo) && (planDateD <= todayD) && ((todayH * 60) + todayM) >= ((parseInt(planTimeH) * 60) + parseInt(planTimeM))) {
                                    updateListing({ Plan_Openning: { status: false, value:"" } }, Id);
                                }

                                let tempOpen = "";
                                let tempClose = "";

                                for (const key in listing.data().Working_Hours) {
                                    if (key === today) {
                                        if (listing.data().Working_Hours[key] === "closed" || listing.data().Working_Hours[key] === "Closed") {
                                            setOpenned(false);
                                        } else {
                                            tempOpen = listing.data().Working_Hours[key].substr(0, listing.data().Working_Hours[key].indexOf(' '));
                                            tempClose = listing.data().Working_Hours[key].substr(listing.data().Working_Hours[key].indexOf(' ') + 3, listing.data().Working_Hours[key].lastIndexOf(' ') + 1);
                                            const tempOpenH = tempOpen.substr(0, tempOpen.indexOf(':'));
                                            const tempOpenM = tempOpen.substr(tempOpen.indexOf(':') + 1, tempOpen.indexOf(':') + 2);

                                            const tempCloseH = tempClose.substr(0, tempClose.indexOf(':'));
                                            const tempCloseM = tempClose.substr(tempClose.indexOf(':') + 1, tempClose.indexOf(':') + 2);

                                            if (((todayH * 60) + todayM) >= ((parseInt(tempOpenH) * 60) + parseInt(tempOpenM)) && ((todayH * 60) + todayM) <= ((parseInt(tempCloseH) * 60) + parseInt(tempCloseM))) {
                                                setOpenned(true);
                                            }
                                            else {
                                                setOpenned(false);
                                            }

                                        }
                                        break;
                                    }

                                }
                            });
                        }

                    },
                    function (error) { fetchListing(); }
                );
            }
        };
        fetchListing();
        
    }, []);

    async function getAuthor(id) {
        const db = app.firestore();
        const authorRef = db.collection('Users');
        const doc = await authorRef.doc(id).get();

        if (!doc.data()) {
            NotificationManager.info('This author has been blocked or disabled');
            history.goBack();
            return;
        }

        setAuthor({ Id: doc.id, Data: doc.data() });
    }

    return (
        <>
            
            {listing.Data
                ?
                <>
                    <Base>
                        <Content listing={listing} author={author} openned={openned} />
                    </Base>
                    <Chat />
                    <Footer />
                    <div className="map-modal-wrap">
                        <div className="map-modal-wrap-overlay" />
                        <div className="map-modal-item">
                            <div className="map-modal-container fl-wrap">
                                <div className="map-modal fl-wrap">
                                    <div id="singleMap" data-latitude="40.7" data-longitude="-73.1" />
                                </div>
                                <h3><span>Location for : </span><a href="#">Listing Title</a></h3>
                                <div className="map-modal-close"><i className="fal fa-times" /></div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <Base>
                    <LinearProgress />
                </Base>
            }
                
            <AuthForm />
            <a className="to-top"><i className="fas fa-caret-up"/></a>
        </>
    );
};

export default Listing_Single;