import React from 'react';


const RostersMenu: React.FC = () => {
  return (
    <div className="rosters-menu">
      <h3>Rosters</h3>
      <select onChange={(e) => window.location.href = e.target.value}>
        <option value="">Select an option</option>
        <option value="/simbasket/teamRosters">Team Rosters</option>
        <option value="/teamStatistics">Team Statistics</option>
      </select>
    </div>
  );
};

export default RostersMenu;