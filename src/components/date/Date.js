import React from 'react';
import "./Date.css"

function Date(props) {
    const {day, date} = props
    return (
        <div className="date">
            <p>{day}</p>
            <p>{date}</p>
        </div>
    );
};

export default Date;
