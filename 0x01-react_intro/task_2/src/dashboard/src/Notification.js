import React from "react";
import "./Notification.css";
import { getLatestNotification } from "./utils";

const Notification = () => {
  return (
    <div className="Notifications">
      <button
        style={{
          float: "right",
          backgroundColor: "white",
          border: "0",
          color: "#737373",
          borderRadius: "25%",
        }}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        x
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
};

export default Notification;
