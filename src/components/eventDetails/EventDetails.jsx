import React from 'react'
import './eventDetails.scss'

const EventDetails = () => {
  return (
    <div className="eventDetails">
      <h1>Event Name</h1>
      <p><strong>Date:</strong> January 1, 2025</p>
      <p><strong>Location:</strong> New York, NY</p>
      <p><strong>Description:</strong> This is a description of the event, including what it’s about and any additional information.</p>
    </div>
  )
}

export default EventDetails