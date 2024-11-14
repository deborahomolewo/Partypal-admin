// src/pages/event/Event.jsx
import React from 'react';
import './event.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import EventsList from '../../components/eventsList/EventsList';
import { events } from '../../data/events';

const Event = () => {
  return (
    <div className="event">
      <Sidebar />
      <div className="eventContainer">
        <Navbar />
        <div className="eventContent">
          <EventsList events={events} />
        </div>
      </div>
    </div>
  );
};

export default Event;
