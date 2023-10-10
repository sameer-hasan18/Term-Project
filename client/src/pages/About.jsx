import React from "react";
import "../styles.css";

export default function AboutPage() {
  const hospitals = [
    {
      name: "276 Hospital",
      address: "1234 SFU Street, Vancouver, State, D3T 4H6",
      telephone: "123-456-7890",
      fax: "987-654-3210",
    },
  ];

  const staff = [
    {
      name: "Sameer",
      position: "Doctor",
    },
    {
      name: "Jeffrey",
      position: "Nurse",
    },
    {
      name: "Forest",
      position: "Surgeon",
    },
    {
      name: "Ray",
      position: "Radiologist",
    },
    {
      name: "William",
      position: "Pharmacist",
    },
  ];

  return (
    <div className="App">
      <div className="hospital-list">
        {hospitals.map((hospital, index) => (
          <div className="hospital-card" key={index}>
            <h2 className="hospital-name">{hospital.name}</h2>
            <p>Address: {hospital.address}</p>
            <p>Telephone: {hospital.telephone}</p>
            <p>Fax: {hospital.fax}</p>
          </div>
        ))}
      </div>

      <h2 className="staff-header">Staff</h2>
      <div className="staff-list">
        {staff.map((staffMember, index) => (
          <div className="staff-card" key={index}>
            <h3 className="staff-name">{staffMember.name}</h3>
            <p>Occupation: {staffMember.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}