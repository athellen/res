import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>
          <u>Contact Us On </u>
          <br />
          <i
            className="fas fa-envelope-open-text"
            style={{ color: "blue" }}
          ></i>{" "}
          *111#
          <br />
          <i className="fas fa-phone-alt"></i>
          111
        </p>
      </div>
      <div>
        <p> Login down below to get notifications from us </p>
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
}
