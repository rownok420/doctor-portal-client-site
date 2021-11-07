import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Doctor from '../Doctor/Doctor';
import Location from '../Location/Location';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Location />
            <Services />
            <Care />
            <AppointmentBanner />
            <Testimonial />
            <Doctor />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;