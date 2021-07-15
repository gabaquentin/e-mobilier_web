import React, { useEffect, useState } from 'react';

import { NotificationManager } from "react-notifications";
import { Link, useHistory } from "react-router-dom";

import { CircularProgress, Switch } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

import all1 from '../../../Assets/images/all/1.jpg';

import { getListingByOwner } from '../../../Contexts/Listing/services';

const Listing = (props) => {

    const [listings, setListings] = useState([]);
    let history = useHistory();

    const [error, setError] = useState();
    const [infos, setInfos] = useState();

    useEffect(() => {
        if (error) {
            NotificationManager.error(error.message, error.title);
        }
    }, [error, setError]);

    useEffect(() => {
        if (infos) {
            NotificationManager.info(infos.message, infos.title);
        }
    }, [infos, setInfos]);

    useEffect(() => {
        if (props.state.user.uid) {
            getListingByOwner(props.state.user.uid).then(
                function (listings) {
                    if (listings.empty) {
                        setInfos({ error: true, message: 'Add listing first', title: 'No listing found' });
                        history.push("/user#add_listing");
                    }
                    let tempListings = [];
                    listings.forEach(doc => {
                        tempListings.push({ Id: doc.id, Data: doc.data() });
                    });
                    setListings(tempListings);
                },
                function (error) { setError({ error: true, message: 'please refresh page', title: 'no listings error' }) }
            );
        }
    }, []);



    return (

        <>
            {listings.length != 0
                ?
                <div className="col-md-9">
                    <div className="dashboard-title   fl-wrap">
                        <h3>Your Listings</h3>
                    </div>
                    {/* dashboard-list-box*/}
                    <div className="dashboard-list-box  fl-wrap">

                        {/* dashboard-list */}

                        {listings.reverse().map((item, index) => (
                            
                            <div className="dashboard-list fl-wrap" key={index}>
                                <div className="dashboard-message">
                                    <div className="booking-list-contr">
                                        <Link to={"/listing-single/" + item.Id + "/Edit"} className="color-bg tolt" data-microtip-position="left" data-tooltip="Edit" ><i className="fal fa-edit" /></Link>
                                        <a href="#" className="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i className="fal fa-trash" /></a>
                                    </div>
                                    <div className="dashboard-message-text">
                                        {item.Data["Header_Media"].Type.background_image
                                            ?
                                            item.Data["Header_Media"].Media
                                            ?
                                                <img src={item.Data["Header_Media"].Media} alt="header media" />
                                                :
                                                <Skeleton variant="rect" width={210} height={118} />
                                            :
                                            <img src={all1} alt="" />
                                        }
                                        <h4><Link to={"/listing-single/"+item.Id}>{item.Data["Title"].Name}</Link></h4>
                                        <div className="geodir-category-location clearfix"><a href="#"> {item.Data["Location_Contact"].City}</a></div>
                                    </div>
                                </div>
                            </div>

                        ))}

                        {/* dashboard-list end*/}
                    </div>
                    {/* dashboard-list-box end*/}
                    <div className="pagination">
                        <a href="#" className="prevposts-link"><i className="fas fa-caret-left" /><span>Prev</span></a>
                        <a href="#">1</a>
                        <a href="#" className="current-page">2</a>
                        <a href="#">3</a>
                        <a href="#">...</a>
                        <a href="#">7</a>
                        <a href="#" className="nextposts-link"><span>Next</span><i className="fas fa-caret-right" /></a>
                    </div>
                </div>
                :
                <div className="col-md-9">
                    <div className="dashboard-title   fl-wrap">
                        <h3>Your Listings</h3>
                    </div>
                    {/* dashboard-list-box*/}
                    <div className="dashboard-list-box  fl-wrap">

                        {/* dashboard-list */}

                            <div className="dashboard-list fl-wrap">
                                <div className="dashboard-message">
                                    <CircularProgress />
                                </div>
                            </div>


                        {/* dashboard-list end*/}
                    </div>
                    {/* dashboard-list-box end*/}
                    
                </div>
            }
        </>
    );
};

export default Listing;
