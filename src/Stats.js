import React from 'react';

function Stats(props) {
    
    const customStyle = {
        backgroundColor: ""
    }

    const percentChange = parseInt(props.change)
    
    if (percentChange >= 0){
        customStyle.backgroundColor = "green"
    } else {
        customStyle.backgroundColor = "red"
    }

    return (
        <div className="stat-card">
            <h3 className="group">{props.label}</h3>
            <p className="item">{props.value}</p>
            <p className="item" style={customStyle}>{percentChange}%</p>
        </div>
    )
}

export default Stats;