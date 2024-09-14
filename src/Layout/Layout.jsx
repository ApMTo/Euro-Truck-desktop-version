import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = ({currentUser}) => {
    return (
        <>
            <Header currentUser={currentUser} />
            <Outlet />
        </>
    );
}

export default Layout;
