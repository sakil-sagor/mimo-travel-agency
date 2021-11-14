import React from 'react';
import BookingShortcut from '../Shared/BookingShortcut/BookingShortcut';
import AboutHome from './AboutHome/AboutHome';
import AllArea from './AllArea/AllArea';
import Banner from './Banner/Banner';
import Emergency from './Emergency/Emergency';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    return (
        // Home page full desgn 
        <div>
            <Banner></Banner>
            <Emergency></Emergency>
            <AllArea></AllArea>
            <ServicesHome></ServicesHome>
            <AboutHome></AboutHome>
            <BookingShortcut></BookingShortcut>

        </div>
    );
};

export default Home;