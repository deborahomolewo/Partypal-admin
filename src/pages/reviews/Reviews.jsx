import React from 'react'
import './reviews.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Reviews = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        customers reviews
      </div>
    </div>
  )
}

export default Reviews