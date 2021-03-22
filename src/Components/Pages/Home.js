import React, { useEffect, Fragment, useContext, useState } from 'react';
import Content from '../Sections/Home/Content';
import 'react-notifications/lib/notifications.css';
import Base from '../Layouts/Base';

const Home = () => {
    return (
        <Base>
            <Content />
        </Base>
    );
}

export default Home;