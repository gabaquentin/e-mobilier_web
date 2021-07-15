import React from 'react';

const SubFooter = () => {

    return (

    <div className="sub-footer  fl-wrap" style={{ position: "absolute", bottom:0 }}>
        <div className="container">
            <div className="copyright"> &#169; Townhub 2019 . All rights reserved.</div>
            <div className="lang-wrap">
                <div className="show-lang"><span><i className="fal fa-globe-europe"/><strong>En</strong></span><i className="fa fa-caret-down arrlan"/></div>
                <ul className="lang-tooltip lang-action no-list-style">
                    <li><a href="#" className="current-lan" data-lantext="En">English</a></li>
                    <li><a href="#" data-lantext="Fr">Français</a></li>
                    <li><a href="#" data-lantext="Es">Español</a></li>
                    <li><a href="#" data-lantext="De">Deutsch</a></li>
                </ul>
            </div>
            <div className="subfooter-nav">
                <ul className="no-list-style">
                    <li><a href="#">Terms of use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>

    );
};

export default SubFooter;