import React from "react";

const StatsTable = ({ selectedMonth }) => (
  <table className="table">
    <thead>
      <tr>
        <th width="200">Month</th>
        <th width="200">Percent</th>
        <th width="200">Messages</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{selectedMonth.month}</td>
        <td>{`${selectedMonth.percentage} %`}</td>
        <td>{`${selectedMonth.value} Messages`}</td>
      </tr>
    </tbody>
  </table>
);

export default StatsTable;
