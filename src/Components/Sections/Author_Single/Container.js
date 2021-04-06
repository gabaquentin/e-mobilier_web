import React from 'react';
import User_Profile from "./Main/User_Profile";
import Sort_Listings from "./Main/Sort_Listings";
import Author_Listings from "./Main/Author_Listings";
import About_Author from "./Widgets/About_Author";
import Author_Contact from "./Main/Author_Contact";
import Get_In_Touch from "./Widgets/Get_In_Touch";

const Container = () => {

    return (

        <div className="fl-wrap">
            <div className="row">
                <div className="col-md-8">
                    <User_Profile/>
                    <Sort_Listings/>
                    <Author_Listings/>
                </div>
                <div className="col-md-4">
                    <About_Author/>
                    <Author_Contact/>
                    <Get_In_Touch/>
                </div>
            </div>
        </div>

    );
};

export default Container;