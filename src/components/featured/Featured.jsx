import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = ({ title, progressValue, progressText }) => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">{title}</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={progressValue} text={progressText} strokeWidth={1} />
        </div>
        <p className='title'>{title}</p>
        <p className='desc'>Progress description goes here</p>
      </div>
    </div>
  );
};

export default Featured;
