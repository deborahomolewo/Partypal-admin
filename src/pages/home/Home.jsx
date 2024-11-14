import React, { useState, useEffect } from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import { events } from '../../data/events'; // Import events data

const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [completedEvents, setCompletedEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to midnight for consistent comparison

    const filterEvents = () => {
      const upcoming = events.filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0); // Normalize event date to midnight
        return eventDate > today; // Future events only
      });

      const ongoing = events.filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0); // Normalize event date to midnight
        return eventDate.getTime() === today.getTime(); // Events happening exactly today
      });

      const completed = events.filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0); // Normalize event date to midnight
        return eventDate < today; // Past events only
      });

      setUpcomingEvents(upcoming);
      setOngoingEvents(ongoing);
      setCompletedEvents(completed);
    };

    filterEvents();
  }, []); // Removed `events` from dependencies

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="vendor" />
          <Widget type="planner" />
          <Widget type="events" />
          <Widget type="payments" />
        </div>
        <div className="charts">
          <Featured 
            title="Upcoming Events" 
            progressValue={upcomingEvents.length > 0 ? 0 : 100} 
            progressText={upcomingEvents.length > 0 ? "In Progress" : "No Upcoming Events"} 
            events={upcomingEvents}
          />
          <Featured 
            title="Ongoing Events" 
            progressValue={ongoingEvents.length > 0 ? 50 : 100} 
            progressText={ongoingEvents.length > 0 ? "Halfway" : "No Ongoing Events"} 
            events={ongoingEvents}
          />
          <Featured 
            title="Completed Events" 
            progressValue={100} 
            progressText={completedEvents.length > 0 ? "Done" : "No Completed Events"} 
            events={completedEvents}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
