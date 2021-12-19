import React from "react";

const MessageTable = ({ selectedMonth }) => (
  <table className="table">
    <thead>
      <tr>
        <th width="200">From</th>
        <th width="200">To</th>
        <th width="200">Date</th>
        <th width="200">Message</th>
      </tr>
    </thead>
    <tbody>
      {selectedMonth.selectedMessages.map(
        msg =>
          console.log("here", msg) || (
            <tr key={msg.id}>
              <td>{msg.from}</td>
              <td>{msg.to}</td>
              <td>{msg.date}</td>
              <td>{msg.body}</td>
            </tr>
          )
      )}
    </tbody>
  </table>
);

export default MessageTable;
