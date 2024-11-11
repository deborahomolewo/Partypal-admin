import React from 'react';
import './planners.scss';

const Planners = () => {
  const planners = [
    { id: 1, name: 'Planner 1', contact: 'planner1@example.com' },
    { id: 2, name: 'Planner 2', contact: 'planner2@example.com' },
  ];

  return (
    <div className="planners">
      {planners.map(planner => (
        <div key={planner.id} className="plannerItem">
          <p><strong>{planner.name}</strong></p>
          <p>{planner.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default Planners;


