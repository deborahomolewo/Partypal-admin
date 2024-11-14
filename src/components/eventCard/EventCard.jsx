// src/components/eventCard/EventCard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './eventCard.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const eventDate = new Date(event.date);
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        setTimeRemaining(`${days}d ${hours}h ${minutes}m left`);
      } else {
        setTimeRemaining('Event Started');
      }
    };

    if (event.status === 'upcoming') {
      calculateTimeRemaining();
      const intervalId = setInterval(calculateTimeRemaining, 60000); // Update every minute

      return () => clearInterval(intervalId);
    }
  }, [event.date, event.status]);

  const handleClick = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="eventCard" onClick={handleClick}>
      <div className="header">
        <AccountCircleIcon className="avatar" />
        <span className="organizerName">{event.organizer}</span>
      </div>
      <div className="details">
        <div className="left">
          <p><strong>Event title</strong><br />{event.title}</p>
          <p><strong>Location</strong><br />{event.location}</p>
          <p><strong>Date</strong><br />{event.date}</p>
        </div>
        <div className="right">
          <p><strong>Time</strong><br />{event.time}</p>
          <p><strong>Price</strong><br />{event.price}</p>
          {event.status === 'upcoming' && (
            <p><strong>Starts In</strong><br />{timeRemaining}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
