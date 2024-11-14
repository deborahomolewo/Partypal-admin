import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Featured = ({ title, progressText, events }) => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">{title}</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <p className='desc'>Status: {progressText}</p>

        <ul className="eventsList">
          {events.length > 0 ? (
            events.map((event) => (
              <li className="item" key={event.id}>
                <p>{event.title}</p> - {new Date(event.date).toLocaleDateString()}
              </li>
            ))
          ) : (
            <li className="item">No events available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Featured;
