import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1>Overview</h1>
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
          <NotificationsIcon />
          </div>
          <div className='item'>
          <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar