import React from 'react';
import Header from '../../Shared/Header/Header';
import AppHeader from '../AppHeader/AppHeader';
import AvailAppointment from '../AvailAppointment/AvailAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header />
            <AppHeader date={date} setDate={setDate} />
            <AvailAppointment date={date} />
        </div>
    );
};

export default Appointment;