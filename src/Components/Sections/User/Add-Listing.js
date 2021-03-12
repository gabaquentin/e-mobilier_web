import React, { useEffect } from 'react';

import { appendScript } from '../../../Assets/utils/appendScript';

const Add_Listing = () => {

    useEffect(() => {
        const appendScripts = () => {

            appendScript("/js/jquery.min.js", false);
            appendScript("/js/plugins.js", false);
            appendScript("/js/scripts.js", false);
            appendScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDagkUmxY8WQ5Th7zIf12QkqctyvDf6P8k&libraries=places&callback=initAutocomplete", false);
            appendScript("/js/map-add.js", false);

        }
        appendScripts();
    }, []);

    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Add Listing</h3>
            </div>
            {/* profile-edit-container*/} 
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <label>Listing Title <i className="fal fa-briefcase"></i></label>
                    <input type="text" placeholder="Name of your business" value=""/>
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
                            <label>Keywords <i className="fal fa-key"></i></label>
                            <input type="text" placeholder="Maximum 15 , should be separated by commas" value=""/>
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
                            <label>Longitude (Drag marker on the map)<i className="fal fa-long-arrow-alt-right"></i>  </label>
                            <input type="text" placeholder="Map Longitude"  id="long" value=""/>                                                
                        </div>
                        <div className="col-md-6">
                            <label>Latitude (Drag marker on the map) <i className="fal fa-long-arrow-alt-down"></i> </label>
                            <input type="text" placeholder="Map Latitude"  id="lat" value=""/>                                            
                        </div>
                    </div>
                    <div className="map-container">
                        <div id="singleMap" className="drag-map" data-latitude="40.7427837" data-longitude="-73.11445617675781"></div>
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
                            <label>Address<i className="fal fa-map-marker"></i></label>
                            <input type="text" placeholder="Address of your business" value=""/>                                                
                        </div>
                        <div className="col-sm-6">
                            <label>Email Address<i className="far fa-envelope"></i>  </label>
                            <input type="text" placeholder="JessieManrty@domain.com" value=""/> 
                        </div>
                        <div className="col-sm-6">
                            <label>Phone<i className="far fa-phone"></i>  </label>
                            <input type="text" placeholder="+7(123)987654" value=""/>                                                
                        </div>
                        <div className="col-sm-6">
                            <label> Website <i className="far fa-globe"></i>  </label>
                            <input type="text" placeholder="themeforest.net" value=""/>                                                
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
                                <input type="radio" name="gender"  checked />
                                <span>Background image</span> 
                                </label>
                            </div>
                            <div className="add-list-media-wrap">
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <div className="fuzone">
                                            <form>
                                                <div className="fu-text">
                                                    <span><i className="fal fa-images"></i> Click here or drop files to upload</span>
                                                    <div className="photoUpload-files fl-wrap"></div>
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
                                                <span><i className="fal fa-images"></i> Click here or drop files to upload</span>
                                                <div className="photoUpload-files fl-wrap"></div>
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
                                <label>Youtube  <i className="fab fa-youtube"></i></label>
                                <input type="text" placeholder="https://www.youtube.com/" value=""/>   
                                <label>Vimeo <i className="fab fa-vimeo-v"></i></label>
                                <input type="text" placeholder="https://vimeo.com/" value=""/> 
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
                    <textarea cols="40" rows="3" placeholder="Datails"></textarea> 
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
                            <input id="check-aaa5" type="checkbox" name="check" checked />
                            <label for="check-aaa5">Free WiFi</label>
                        </li>
                        <li>
                            <input id="check-bb5" type="checkbox" name="check" checked />
                            <label for="check-bb5">Parking</label>
                        </li>
                        <li>                                       
                            <input id="check-dd5" type="checkbox" name="check" />
                            <label for="check-dd5">Fitness Center</label>
                        </li>
                        <li>                                          
                            <input id="check-cc5" type="checkbox" name="check" />
                            <label for="check-cc5">Non-smoking Rooms</label>
                        </li>
                        <li>                                       
                            <input id="check-ff5" type="checkbox" name="check" checked />
                            <label for="check-ff5">Airport Shuttle</label>
                        </li>
                        <li>                                          
                            <input id="check-c4" type="checkbox" name="check"/>
                            <label for="check-c4">Air Conditioning</label>
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
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch5" checked />
                                        <label className="onoffswitch-label" for="myonoffswitch5">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="add-list-media-wrap">
                                    <label>Video url :  <i className="fab fa-youtube"></i></label>
                                    <input type="text" placeholder="https://www.youtube.com/" value=""/>   
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
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch6" checked />
                                        <label className="onoffswitch-label" for="myonoffswitch6">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <div className="fuzone">
                                            <form>
                                                <div className="fu-text">
                                                    <span><i className="fal fa-images"></i> Click here or drop files to upload</span>
                                                    <div className="photoUpload-files fl-wrap"></div>
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
                                        <label className="onoffswitch-label" for="myonoffswitch7">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="add-list-media-wrap">
                                    <div className="listsearch-input-item fl-wrap">
                                        <div className="fuzone">
                                            <form>
                                                <div className="fu-text">
                                                    <span><i className="fal fa-images"></i> Click here or drop files to upload</span>
                                                    <div className="photoUpload-files fl-wrap"></div>
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
                            <label>Monday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="9 AM - 5 PM" value=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Tuesday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="9 AM - 5 PM" value=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Wednesday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="9 AM - 5 PM" value=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Thursday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="9 AM - 5 PM" value=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Friday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="9 AM - 5 PM" value=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Saturday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="9 AM - 3 PM" value=""/>
                        </div>
                        <div className="col-sm-4">
                            <label>Sunday <i className="fal fa-clock"></i></label>
                            <input type="text" placeholder="Closed" value=""/>
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
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked />
                                <label className="onoffswitch-label" for="myonoffswitch">
                                <span className="onoffswitch-inner"></span>
                                <span className="onoffswitch-switch"></span>
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
                                <label className="onoffswitch-label" for="myonoffswitch2">
                                <span className="onoffswitch-inner"></span>
                                <span className="onoffswitch-switch"></span>
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
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch3" checked />
                                <label className="onoffswitch-label" for="myonoffswitch3">
                                <span className="onoffswitch-inner"></span>
                                <span className="onoffswitch-switch"></span>
                                </label>
                            </div>
                        </div>
                        <label>Api key<i className="fab fa-mixcloud"></i></label>
                        <input type="text" placeholder="Api key" value=""/> 
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
                    <label>Facebook <i className="fab fa-facebook"></i></label>
                    <input type="text" placeholder="https://www.facebook.com/" value=""/>
                    <label>Twitter<i className="fab fa-twitter"></i>  </label>
                    <input type="text" placeholder="https://twitter.com/" value=""/>
                    <label>Vkontakte<i className="fab fa-vk"></i>  </label>
                    <input type="text" placeholder="https://vk.com" value=""/>
                    <label> Instagram <i className="fab fa-instagram"></i>  </label>
                    <input type="text" placeholder="https://www.instagram.com/" value=""/>
                    <button className="btn    color2-bg  float-btn">Send Listing<i className="fal fa-paper-plane"></i></button>
                </div>
            </div>
            {/* profile-edit-container end*/}                                    
        </div>
    );
}

export default Add_Listing;