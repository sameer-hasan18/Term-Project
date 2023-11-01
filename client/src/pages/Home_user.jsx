import React, { useState } from 'react';
import './Home_user.css'; 


export default function HomeUser() {
  const [activeTab, setActiveTab] = useState('User');

  const [selectedDoctor, setSelectedDoctor] = useState(''); 
  const [selectedTime, setSelectedTime] = useState(''); 
  const [selectedConcern, setSelectedConcern] = useState('');
  const [appButton, setAppButton] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDoctorSelect = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleConcernSelect = (event) => {
    setSelectedConcern(event.target.value);
  };

  const handleAppBooked = () => {
    setAppButton(true);
  };


  const DoctorsList = () => {
    const doctorsData = [
      { id: 1, name: 'Dr. Smith', specialty: 'Cardiologist', location: 'Hospital A' },
      { id: 2, name: 'Dr. Johnson', specialty: 'Pediatrician', location: 'Clinic B' },
    ];

    return (
      <div className="doctors-grid">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="doctor-box">
            <h2>{doctor.name}</h2>
            <p>Specialty: {doctor.specialty}</p>
            <p>Location: {doctor.location}</p>
          </div>
        ))}
      </div>
    );
  };

  const PrescriptionsTable = () => {
    const prescriptionsData = [
      { id: 1, prescriberID: 'PR-001', medication: 'Medicine A', dosage: '1 tablet', instructions: 'Take with water after meals 3x a day.' },
      { id: 2, prescriberID: 'PR-002', medication: 'Medicine B', dosage: '2 capsules', instructions: 'Take before bedtime everynight.' },
    ];

    return (
      <table>
        <thead>
          <tr style={{ background: 'black', color: 'white' }}>
            <th>#</th>
            <th>Prescriber ID</th>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Instructions</th>
          </tr>
        </thead>
        <tbody>
          {prescriptionsData.map((prescription, index) => (
            <tr key={prescription.id}>
              <td>{index + 1}</td>
              <td>{prescription.prescriberID}</td>
              <td>{prescription.medication}</td>
              <td>{prescription.dosage}</td>
              <td>{prescription.instructions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const PlannedOperationsTable = () => {
    const plannedOperationsData = [
      { id: 1, operationID: 'OP-001', description: 'Xray', date: '2023-11-15', doctor: 'Dr. Smith' },
      { id: 2, operationID: 'OP-002', description: 'Knee replacement', date: '2023-11-20', doctor: 'Dr. Johnson' },
    ];

    return (
      <table>
        <thead>
          <tr style={{ background: 'black', color: 'white' }}>
            <th> # </th>
            <th>Operation ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {plannedOperationsData.map((operation, index) => (
            <tr key={operation.id}>
              <td>{index + 1}</td>
              <td>{operation.operationID}</td>
              <td>{operation.description}</td>
              <td>{operation.date}</td>
              <td>{operation.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


  
  return (
    <div>
      <div className="header">
        <button
          className={activeTab === 'User' ? 'active' : ''}
          onClick={() => handleTabClick('User')}
        >
          User
        </button>
        <button
          className={activeTab === 'Appointment' ? 'active' : ''}
          onClick={() => handleTabClick('Appointment')}
        >
          Appointment
        </button>
        <button
          className={activeTab === 'Doctors' ? 'active' : ''}
          onClick={() => handleTabClick('Doctors')}
        >
          Doctors
        </button>
        <button
          className={activeTab === 'Prescriptions' ? 'active' : ''}
          onClick={() => handleTabClick('Prescriptions')}
        >
          Prescriptions
        </button>
        <button
          className={activeTab === 'Planned Operations' ? 'active' : ''}
          onClick={() => handleTabClick('Planned Operations')}
        >
          Planned Operations
        </button>
      </div>

      <div className="content">
        {activeTab === 'User' && <h1>Welcome to your Patient Home Page!</h1>}
        {activeTab === 'Appointment' && (
          <div className="appointment-tab">
            <h1>Book An Appointment!</h1>
            <label>Select a Doctor:</label>
            <select value={selectedDoctor} onChange={handleDoctorSelect}>
              <option value="">Select a Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>

            <label>Select an available time:</label>
            <select value={selectedTime} onChange={handleTimeSelect}>
              <option value="">Select a Time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>

            <label>Select a concern:</label>
            <select value={selectedConcern} onChange={handleConcernSelect}>
              <option value="">Select a Concern</option>
              <option value="General Concerns">General Concerns</option>
              <option value="Emergency">Emergency</option>
              <option value="Checkup">Checkup</option>
              <option value="Immunizations">Immunizations</option>
              <option value="Prescription Refills">Prescription Refills</option>
              <option value="Annual Screenings">Annual Screenings</option>
              <option value="Allergies">Allergies</option>
              <option value="Injuries">Injuries</option>
            </select>

            <button className="submit-button" onClick={handleAppBooked}>Submit</button>
            {appButton && <p>Thank you, your appointment has been booked.</p>}
          </div>
        )}

        {activeTab === 'Doctors' && (
          <div className = "doctor-Tab">
            <h1>Here are our Doctors!</h1>
            <DoctorsList />
          </div>
        )}

        {activeTab === 'Prescriptions' && (
          <div className = "prescription-Tab">
            <h1>Your Active Prescriptions</h1>
            <PrescriptionsTable />
          </div>
        )} 

        {activeTab === 'Planned Operations' && (
          <div className = "operations-Tab" >
            <h1>Your Upcoming Planned Procedures</h1>
            <PlannedOperationsTable />
          </div>
        )}
      </div>
    </div>
  );
}