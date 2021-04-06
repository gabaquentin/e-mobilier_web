import React, {useEffect} from 'react';
import {appendScript} from "../../../Assets/utils/appendScript";

const Add_Listing = () => {

    useEffect(() => {
        const appendScripts = () => {
            appendScript("/js/map-add.js", false);
        };
        appendScripts();
    },[]);

    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Add Listing</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <label>Listing Title <i className="fal fa-briefcase"/></label>
                    <input type="text" placeholder="Name of your business" defaultValue=""/>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Type / Category</label>
                            <div className="listsearch-input-item">
                                <select data-placeholder="Apartments" className="chosen-select no-search-select" >
                                    <option>All Categories</option>
                                    <option>Shops</option>
                                    <option>Hotels</option>
                                    <option>Restaurants</option>
                                    <option>Fitness</option>
                                    <option>Events</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>Keywords <i className="fal fa-key"/></label>
                            <input type="text" placeholder="Maximum 15 , should be separated by commas" defaultValue=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile-edit-container end*/}                                    
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Location / Contacts</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Longitude (Drag marker on the map)<i className="fal fa-long-arrow-alt-right"/>  </label>
                            <input type="text" placeholder="Map Longitude"  id="long" defaultValue=""/>                                                
                        </div>
                        <div className="col-md-6">
                            <label>Latitude (Drag marker on the map) <i className="fal fa-long-arrow-alt-down"/> </label>
                            <input type="text" placeholder="Map Latitude"  id="lat" defaultValue=""/>                                            
                        </div>
                    </div>
                    <div className="map-container">
                        <div id="singleMap" className="drag-map" data-latitude="4.188601304297962" data-longitude="11.344511451673648"/>
                        <div className="location-btn geoLocation tolt" data-microtip-position="top-left" data-tooltip="Your location"><span><i className="fal fa-location"/></span></div>
                    </div>
                    <label>City / Location</label>
                    <div className="listsearch-input-item">
                        <select data-placeholder="City" className="chosen-select no-search-select" >
                            <option>All Cities</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>Paris</option>
                            <option>Kiev</option>
                            <option>Moscow</option>
                            <option>Dubai</option>
                            <option>Rome</option>
                            <option>Beijing</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <label>Address<i className="fal fa-map-marker"/></label>
                            <input type="text" placeholder="Address of your business" defaultValue=""/>                                                
                        </div>
                        <div className="col-sm-6">
                            <label>Email Address<i className="far fa-envelope"/>  </label>
                            <input type="text" placeholder="JessieManrty@domain.com" defaultValue=""/> 
                        </div>
                        <div className="col-sm-6">
                            <label>Phone<i className="far fa-phone"/>  </label>
                            <input type="text" placeholder="+7(123)987654" defaultValue=""/>                                                
                        </div>
                        <div className="col-sm-6">
                            <label> Website <i className="far fa-globe"/>  </label>
                            <input type="text" placeholder="themeforest.net" defaultValue=""/>                                                
                        </div>
                    </div>
                </div>
            </div>
            {/* profile-edit-container end*/}                                     
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Header Media</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        {/*col */} 
                        <div className="col-md-4">
                            <div className="add-list-media-header" style={{marginBottom: '20px'}}>
                                <label className="radio inline"> 
                                <input type="radio" name="gender"  defaultChecked />
                                <span>Background image</span> 
                                </label>
                            </div>
                            <div className="add-list-media-wrap">
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <div className="fuzone">
                                            <form>
                                                <div className="fu-text">
                                                    <span><i className="fal fa-images"/> Click here or drop files to upload</span>
                                                    <div className="photoUpload-files fl-wrap"/>
                                                </div>
                                                <input type="file" className="upload" multiple />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*col end*/} 
                        {/*col */} 
                        <div className="col-md-4">
                            <div className="add-list-media-header" style={{ marginBottom: '20px' }}>
                                <label className="radio inline"> 
                                <input type="radio" name="gender" />
                                <span>Carousel</span> 
                                </label>
                            </div>
                            <div className="add-list-media-wrap">
                                <div className="listsearch-input-item fl-wrap">
                                    <div className="fuzone">
                                        <form>
                                            <div className="fu-text">
                                                <span><i className="fal fa-images"/> Click here or drop files to upload</span>
                                                <div className="photoUpload-files fl-wrap"/>
                                            </div>
                                            <input type="file" className="upload" multiple />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*col end*/} 
                        {/*col */} 
                        <div className="col-md-4">
                            <div className="add-list-media-header" style={{ marginBottom: '20px' }}>
                                <label className="radio inline"> 
                                <input type="radio" name="gender" />
                                <span>Video</span> 
                                </label>
                            </div>
                            <div className="add-list-media-wrap">
                                <label>Youtube  <i className="fab fa-youtube"/></label>
                                <input type="text" placeholder="https://www.youtube.com/" defaultValue=""/>   
                                <label>Vimeo <i className="fab fa-vimeo-v"/></label>
                                <input type="text" placeholder="https://vimeo.com/" defaultValue=""/> 
                            </div>
                        </div>
                        {/*col end*/}                                                   
                    </div>
                </div>
            </div>
            {/* profile-edit-container end*/}                                     
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Details</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <label>Text</label>
                    <textarea cols="40" rows="3" placeholder="Datails"/>
                </div>
            </div>
            {/* profile-edit-container end*/}
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Facilities</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    {/* Checkboxes */}
                    <ul className="fl-wrap filter-tags no-list-style ds-tg">
                        <li>
                            <input id="check-aaa5" type="checkbox" name="check" defaultChecked />
                            <label form="check-aaa5">Free WiFi</label>
                        </li>
                        <li>
                            <input id="check-bb5" type="checkbox" name="check" defaultChecked />
                            <label form="check-bb5">Parking</label>
                        </li>
                        <li>                                       
                            <input id="check-dd5" type="checkbox" name="check" />
                            <label form="check-dd5">Fitness Center</label>
                        </li>
                        <li>                                          
                            <input id="check-cc5" type="checkbox" name="check" />
                            <label form="check-cc5">Non-smoking Rooms</label>
                        </li>
                        <li>                                       
                            <input id="check-ff5" type="checkbox" name="check" defaultChecked />
                            <label form="check-ff5">Airport Shuttle</label>
                        </li>
                        <li>                                          
                            <input id="check-c4" type="checkbox" name="check"/>
                            <label form="check-c4">Air Conditioning</label>
                        </li>
                    </ul>
                    {/* Checkboxes end */}
                </div>
            </div>
            {/* profile-edit-container end*/}                                      
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Content Widgets</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        <div className="col-md-4">
                            {/* act-widget*/} 
                            <div className="act-widget fl-wrap">
                                <div className="act-widget-header">
                                    <h4>1. Promo video</h4>
                                    <div className="onoffswitch">
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch5" defaultChecked />
                                        <label className="onoffswitch-label" form="myonoffswitch5">
                                        <span className="onoffswitch-inner"/>
                                        <span className="onoffswitch-switch"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="add-list-media-wrap">
                                    <label>Video url :  <i className="fab fa-youtube"/></label>
                                    <input type="text" placeholder="https://www.youtube.com/" defaultValue=""/>   
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
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch6" defaultChecked />
                                        <label className="onoffswitch-label" form="myonoffswitch6">
                                        <span className="onoffswitch-inner"/>
                                        <span className="onoffswitch-switch"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <div className="fuzone">
                                            <form>
                                                <div className="fu-text">
                                                    <span><i className="fal fa-images"/> Click here or drop files to upload</span>
                                                    <div className="photoUpload-files fl-wrap"/>
                                                </div>
                                                <input type="file" className="upload" multiple />
                                            </form>
                                        </div>
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
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch7" />
                                        <label className="onoffswitch-label" form="myonoffswitch7">
                                        <span className="onoffswitch-inner"/>
                                        <span className="onoffswitch-switch"/>
                                        </label>
                                    </div>
                                </div>
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <div className="fuzone">
                                            <form>
                                                <div className="fu-text">
                                                    <span><i className="fal fa-images"/> Click here or drop files to upload</span>
                                                    <div className="photoUpload-files fl-wrap"/>
                                                </div>
                                                <input type="file" className="upload" multiple />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* act-widget end*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* profile-edit-container end*/}                                
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Working Hours</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        <div className="col-sm-4">
                            <label>Monday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="9 AM - 5 PM" defaultValue=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Tuesday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="9 AM - 5 PM" defaultValue=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Wednesday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="9 AM - 5 PM" defaultValue=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Thursday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="9 AM - 5 PM" defaultValue=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Friday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="9 AM - 5 PM" defaultValue=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Saturday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="9 AM - 3 PM" defaultValue=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Sunday <i className="fal fa-clock"/></label>
                            <input type="text" placeholder="Closed" defaultValue=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile-edit-container end*/}                                                                                                       
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Sidebar Widgets</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    {/* act-widget*/} 
                    <div className="act-widget fl-wrap">
                        <div className="act-widget-header">
                            <h4>1. Booking Form</h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked />
                                <label className="onoffswitch-label" form="myonoffswitch">
                                <span className="onoffswitch-inner"/>
                                <span className="onoffswitch-switch"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* act-widget end*/} 
                    {/* act-widget*/} 
                    <div className="act-widget fl-wrap">
                        <div className="act-widget-header">
                            <h4>2. Price Range </h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch2" />
                                <label className="onoffswitch-label" form="myonoffswitch2">
                                <span className="onoffswitch-inner"/>
                                <span className="onoffswitch-switch"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* act-widget end*/}                                                    
                    {/* act-widget*/} 
                    <div className="act-widget fl-wrap">
                        <div className="act-widget-header">
                            <h4>3. instagram</h4>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch3" defaultChecked />
                                <label className="onoffswitch-label" form="myonoffswitch3">
                                <span className="onoffswitch-inner"/>
                                <span className="onoffswitch-switch"/>
                                </label>
                            </div>
                        </div>
                        <label>Api key<i className="fab fa-mixcloud"/></label>
                        <input type="text" placeholder="Api key" defaultValue=""/> 
                    </div>
                    {/* act-widget end*/} 
                </div>
            </div>
            {/* profile-edit-container end*/}                                   
            <div className="dashboard-title  dt-inbox fl-wrap">
                <h3>Your  Socials</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <label>Facebook <i className="fab fa-facebook"/></label>
                    <input type="text" placeholder="https://www.facebook.com/" defaultValue=""/>
                    <label>Twitter<i className="fab fa-twitter"/>  </label>
                    <input type="text" placeholder="https://twitter.com/" defaultValue=""/>
                    <label>Vkontakte<i className="fab fa-vk"/>  </label>
                    <input type="text" placeholder="https://vk.com" defaultValue=""/>
                    <label> Instagram <i className="fab fa-instagram"/>  </label>
                    <input type="text" placeholder="https://www.instagram.com/" defaultValue=""/>
                    <button className="btn    color2-bg  float-btn">Send Listing<i className="fal fa-paper-plane"/></button>
                </div>
            </div>
            {/* profile-edit-container end*/}                                    
        </div>
    );
};

export default Add_Listing;