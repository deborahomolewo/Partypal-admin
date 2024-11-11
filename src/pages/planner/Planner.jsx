import React from 'react'
import './planner.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Plan from '../../components/plan/Plan'

const Planner = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Plan />
      </div>
    </div>
  )
}

export default Planner