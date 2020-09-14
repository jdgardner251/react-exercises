import React from "react";
import PropTypes from "prop-types";
import "./stats.css";

const Stats = ({ label = "", value = 0, change = 0 }) => {
  const arrow = change >= 0 ? "↖" : "↘";
  const stats_class = `stats__change ${
    change >= 0 ? "stats__change--positive" : "stats__change--negative"
  }`;
  return (
    <div className="stats">
      <div className="stats__label">{label}</div>
      <div className="stats__values">
        <div className="stats__value">{value}</div>
        <div className={stats_class}>
          {arrow} {Math.abs(change)}%
        </div>
      </div>
    </div>
  );
};

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  change: PropTypes.number,
};

export default Stats;
