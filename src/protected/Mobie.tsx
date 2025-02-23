// import React from 'react';
import { Navigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';

const Mobie = () => {

    useEffect(() => {
        console.log(isMobile);
    })
    if (isMobile) {
        return <Navigate to="https://final-portforlio-one.vercel.app/" replace />;
    }
};

export default Mobie;
