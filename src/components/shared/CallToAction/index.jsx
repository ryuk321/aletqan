import React from 'react';
import "./style.scss";
import Arrow from '../arrow';

function CallToAction({text}) {
  return (
    <div className="call-to-action">
        <span className="text">{text}</span>
        <span className = "arrow-icon">
            <Arrow/>
        </span>
    </div>
  )
}

export default CallToAction