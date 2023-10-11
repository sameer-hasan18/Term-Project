import React from "react";
import { Link } from "react-router-dom"; 
import "../Dashboard.css";

export default function Dashboard() {
  const sections = [
    {
      name: "Book an Appointment",
      link: "/book-appointment",
    },
    {
      name: "Patients",
      link: "/patients",
    },
    {
      name: "Medical Records",
      link: "/medical-records",
    },
    {
      name: "Billing",
      link: "/billing",
    },
    {
      name: "Inventory",
      link: "/inventory",
    },
    {
      name: "Support",
      link: "/support",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="sections">
        {sections.map((section, index) => (
          <Link to={section.link} key={index} className="section">
            {section.name}
          </Link>
        ))}
      </div>
    </div>
  );
}