import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import { events } from '../../data/events'; // Import events if not passed as a prop
import './eventDetails.scss';

const EventDetail = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === parseInt(eventId));

  if (!event) return <p>Event not found</p>;

  return (
    <div className="eventDetailPage">
      <Sidebar />
      <div className="eventDetailContainer">
        <Navbar />
        <div className="eventDetailContent">
          <h2>{event.title}</h2>
          <p><strong>Organizer:</strong> {event.organizer}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Price:</strong> {event.price}</p>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Phone:</strong> {event.phone}</p>
          <p><strong>Email:</strong> {event.email}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
