import React from 'react';
import EventCard from '../../components/eventCard/EventCard';
import { Tabs, Tab } from 'react-bootstrap';
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

  const renderEvents = (eventList) => {
    if (eventList.length === 0) {
      return <p>No events</p>;
    }
    return eventList.map((event) => (
      <EventCard key={event.id} event={event} onClick={() => onSelectEvent(event)} />
    ));
  };

  return (
    <div className="eventsList">
      <h2>Events</h2>
      <Tabs defaultActiveKey="upcoming" id="event-tabs" className="mb-3">
        <Tab eventKey="upcoming" title="Upcoming Events">
          <div className="eventsSection">{renderEvents(upcomingEvents)}</div>
        </Tab>
        <Tab eventKey="ongoing" title="Ongoing Events">
          <div className="eventsSection">{renderEvents(ongoingEvents)}</div>
        </Tab>
        <Tab eventKey="completed" title="Completed Events">
          <div className="eventsSection">{renderEvents(completedEvents)}</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default EventsList;
