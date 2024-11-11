import React from 'react'
import "./widget.scss"
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { Link } from 'react-router-dom';




const Widget = ({type}) => {
    let data;

    //temporary
    const amount = 100;

    switch(type){
      case "vendor":
        data={
          title: "Vendors",
          isMoney: false,
          link:  <Link to="/Vendor" style={{ textDecoration: "none", color:"black" }}>See all Vendors</Link>,
          icon: (<StoreIcon className='icon' />)  
        };
        break;

        case "planner":
        data={
          title: "Planners",
          isMoney: false,
          link: <Link to="/plannner" style={{ textDecoration: "none", color:"black" }}>See all Planners</Link>,
          icon: (<PersonIcon className='icon' />)  
        };
        break;

        case "events":
        data={
          title: "Events",
          isMoney: false,
          link: <Link to="/events" style={{ textDecoration: "none", color:"black" }}  >View Scheduled events</Link>,
          icon: (<MenuBookIcon className='icon' />)  
        };
        break;

        case "payments":
        data={
          title: "Payments",
          isMoney: true,
          link: <Link to="/payments" style={{ textDecoration: "none", color:"black" }} >Transaction details</Link>,
          icon: (<CurrencyExchangeOutlinedIcon className='icon' />)  
        };
        break;

        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            {data.icon}
        </div>

    </div>
  )
}

export default Widget