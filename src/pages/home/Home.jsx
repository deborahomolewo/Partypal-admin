import React from 'react'
import "./home.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'


const Home = () => {
  return (
    <div className='home
    '><Sidebar/>
    <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        <Widget type="vendor" />
        <Widget type="planner" />
        <Widget type="events" />
        <Widget type="payments" />
      </div>
      <div className="charts">
      <Featured title="Upcoming Event" progressValue={0} progressText="In Progress" />
      <Featured title="Ongoing Event" progressValue={50} progressText="Halfway" />
      <Featured title="Completed Event" progressValue={100} progressText="Done" />
      </div>
    </div>
    </div>
  )
}

export default Home
