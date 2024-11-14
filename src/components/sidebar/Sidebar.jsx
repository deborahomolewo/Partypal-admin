import React from 'react'
import "./sidebar.scss"
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Partypal</span>
            
            
        </div>
        <hr />
        <div className="center">
            <ul className="title"> 
            <Link to="/" style={{ textDecoration: "none", color:"black" }}>
                <li>
                <DashboardRoundedIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to="/Vendor" style={{ textDecoration: "none", color:"black" }}>
                <li>
                    <StoreIcon className="icon"/>
                    <span>Vendor</span>
                </li>
                </Link>
                
                <Link to="/planner" style={{ textDecoration: "none", color:"black" }}>
                <li>
                    <PersonIcon className="icon"/>
                    <span>Planner</span>
                </li>
                </Link>
                <Link to="/events" style={{ textDecoration: "none", color:"black" }} >
                <li>
                    <MenuBookIcon className="icon"/>
                    <span>Events</span>
                </li>
                </Link>
                <Link to="/payments" style={{ textDecoration: "none", color:"black" }} >
                <li>
                    <CurrencyExchangeOutlinedIcon className="icon"/>
                    <span>Payments</span>
                </li>
                </Link>
                <Link to="/reviews" style={{ textDecoration: "none", color:"black" }}>
                <li>
                    <CommentOutlinedIcon className="icon"/>
                    <span>Reviews</span>
                </li>
                </Link>
                <Link to="/analytics" style={{ textDecoration: "none", color:"black" }}>
                <li>
                    <ShowChartRoundedIcon className="icon"/>
                    <span>Analytics</span>
                </li>
                </Link>
                <li className='logout'>
                    <LogoutRoundedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar