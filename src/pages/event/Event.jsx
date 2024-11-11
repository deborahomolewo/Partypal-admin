import React from 'react';
import './event.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import EventDetails from '../../components/eventDetails/EventDetails';
import Planners from '../../components/planners/Planners';
import VendorDetails from '../../components/vendors/VendorDetails';

const Event = () => {
  return (
    <div className="event">
      <Sidebar />
      <div className="eventContainer">
        <Navbar />
        <div className="eventContent">
          <EventDetails />
          <div className="section">
            <h2>Planners</h2>
            <Planners />
          </div>
          <div className="section">
            <h2>Vendors</h2>
            <VendorDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
