import React from 'react'
import './analytics.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Analytics = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        Google analytics
      </div>
    </div>
  )
}

export default Analytics