import React from 'react';
import EventCard from '../../components/eventCard/EventCard';
import './eventsList.scss';

const EventsList = ({ events = [], onSelectEvent }) => {
  // Get today's date without time component
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to midnight to ignore the time component

  const parseEventDate = (dateString) => {
    const eventDate = new Date(dateString);
    eventDate.setHours(0, 0, 0, 0); // Set to midnight for comparison
    return eventDate;
  };

  const upcomingEvents = events.filter((event) => {
    const eventDate = parseEventDate(event.date);
    return eventDate > today;
  });

  const ongoingEvents = events.filter((event) => {
    const eventDate = parseEventDate(event.date);
    return eventDate.getTime() === today.getTime(); // Match exact day
  });

  const completedEvents = events.filter((event) => {
    const eventDate = parseEventDate(event.date);
    return eventDate < today;
  });

  return (
    <div className="eventsList">
      <h2>Upcoming Events</h2>
      <div className="eventsSection">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => onSelectEvent(event)} />
          ))
        ) : (
          <p>No upcoming events</p>
        )}
      </div>

      <h2>Ongoing Events</h2>
      <div className="eventsSection">
        {ongoingEvents.length > 0 ? (
          ongoingEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => onSelectEvent(event)} />
          ))
        ) : (
          <p>No ongoing events</p>
        )}
      </div>

      <h2>Completed Events</h2>
      <div className="eventsSection">
        {completedEvents.length > 0 ? (
          completedEvents.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => onSelectEvent(event)} />
          ))
        ) : (
          <p>No completed events</p>
        )}
      </div>
    </div>
  );
};

export default EventsList;
