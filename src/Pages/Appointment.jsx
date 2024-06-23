import React from 'react';
import AppointmentForm from '../Components/AppointmentForm';
import Hero from '../Components/Hero';
const Appointment = () => {
    return (
        <div>
            <Hero  tittle={"Schedule Your Appointment | Mr.ShekCare Medical Institute"} 
            imageUrl={"/signin.png"}
            />
            <AppointmentForm/>
        </div>
    );
};

export default Appointment;