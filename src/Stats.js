import React from 'react';

function Stats(props) {
    
    const customStyle = {
        backgroundColor: ""
    }

    const percentChange = parseInt(props.change)
    let percentChangeRendered = ""
    
    if (percentChange >= 0){
        customStyle.backgroundColor = "green"
        percentChangeRendered =  `↖ ${percentChange}`
    } else {
        customStyle.backgroundColor = "red"
        percentChangeRendered =  `↘ ${percentChange}`
    }

    return (
        <div className="stat-card">
            <h3 className="group">{props.label}</h3>
            <p className="item">{props.value}</p>
            <p className="item" style={customStyle}>{percentChangeRendered}%</p>
        </div>
    )
}

export default Stats;