import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home_user.css'; 
import patientHomeImage from './patientHome.png';
import patientAppointment from './appointment.png'
import operating from './operation.png';
import operating2 from './operation2.png';
import prescription from './prescription.png';
import existingAppointment from './appointmentExisting.png';

export default function HomeUser() {
  const [activeTab, setActiveTab] = useState('User');
  const navigate = useNavigate();

  const [selectedDoctor, setSelectedDoctor] = useState(''); 
  const [selectedTime, setSelectedTime] = useState(''); 
  const [selectedConcern, setSelectedConcern] = useState('');
  const [appButton, setAppButton] = useState(false);
  const [existingAppointments, setExistingAppointments] = useState([]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);

    if(tabName == 'Doctors') {
      navigate('/search');
      setReloadChatbot(true); 
      } 
    else {
      setReloadChatbot(false); 
      }
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

    const newAppointment = {
      doctor: selectedDoctor,
      time: selectedTime,
      concern: selectedConcern,
    };

    setExistingAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
  };


  const PrescriptionsTable = () => {
    const prescriptionsData = [
      { id: 1, prescriberID: 'PR-001', medication: 'Medicine A', dosage: '1 tablet', instructions: 'Take with water before meals 3x a day, swallow the tablet whole (DO NOT CHEW). ' },
      { id: 2, prescriberID: 'PR-002', medication: 'Medicine B', dosage: '2 capsules', instructions: 'Take before bedtime every single night, take with water and swallow the capsule whole.' },
      { id: 3, prescriberID: 'PR-003', medication: 'Medicine C', dosage: '5 mL', instructions: 'This is a topical medication, take a generous amount and gently rub it into the affected area 1-2 times a day. (DO NOT EXCEED 2 USES PER DAY).' },
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
          Home
        </button>
        <button
          className={activeTab === ' Make Appointment' ? 'active' : ''}
          onClick={() => handleTabClick('Make Appointment')}
        >
          Make Appointment
        </button>
        <button
          className={activeTab === 'Doctors' ? 'active' : ''}
          onClick={() => handleTabClick('Doctors')}
        >
          Chatbot
        </button>
        <button
          className={activeTab === 'Existing Appointments' ? 'active' : ''}
          onClick={() => handleTabClick('Existing Appointments')}
        >
          Existing Appointments
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
        {activeTab === 'User' && (
          <div>
          <h1 className="patientHeading">Welcome to your Patient Home Page! Feel Free to Look Around!</h1>
          <img src={patientHomeImage} alt="Patient Home" className="patient-home-image" />
          </div>
        )}

        {activeTab === 'Make Appointment' && (
          <div className="appointment-tab">
            <div className="right-section">
              <h1>Book An Appointment!</h1>
              <div className="form-group">
                <label>Select a Doctor:</label>
                <select value={selectedDoctor} onChange={handleDoctorSelect}>
                  <option value="">Select a Doctor</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Dr. Johnson">Dr. Johnson</option>
                </select>
              </div>

              <div className="form-group">
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
              </div>

              <div className="form-group">
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
              </div>

              <button className="submit-button" onClick={handleAppBooked}>
                Submit
              </button>
              {appButton && <p className="confirmation-message">Thank you, your appointment has been booked.</p>}
            </div>

            <div className="left-section">
              <img src={patientAppointment} alt="Appointment" className="appointment-image" />
            </div>
          </div>
        )}

        {activeTab === 'Doctors' && (       //note, this is actually the chatbot tab
          <div className = "doctor-Tab">
          </div>
        )}

        {activeTab === 'Prescriptions' && (
          <div className="prescription-Tab">
          <div className="prescriptions-container">
            <h1 className="bold-text">Your Active Prescriptions</h1>
            <div className="table-container">
              <PrescriptionsTable />
            </div>
          </div>
          <div className="images2-container">
            <img src={prescription} className="perscription-image" alt="Prescription" />
          </div>
        </div>
        )} 

        {activeTab === 'Existing Appointments' && (
          <div className="existing-appointments-container">
            <h1>Your Existing Appointments</h1>
            {existingAppointments.length === 0 ? (
              <div>
                <p>No existing appointments.</p>
                <img src={existingAppointment} alt="No existing appointments" className="existing-appointment-image" />
              </div>
            ) : (
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Doctor</th>
                      <th>Time</th>
                      <th>Concern</th>
                    </tr>
                  </thead>
                  <tbody>
                    {existingAppointments.map((appointment, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{appointment.doctor}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.concern}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <img src={existingAppointment} alt="Existing appointments" className="existing-appointment-image" />
              </div>
            )}
          </div>
        )}

        {activeTab === 'Planned Operations' && (
          <div className="operations-Tab">
          <div className="operations-container">
            <h1 className="procedure-text">Your Upcoming Planned Procedures</h1>
            <PlannedOperationsTable />
          </div>
          <div className="images-container">
            <img src={operating} className="operating-image" />
            <img src={operating2} className="operating-image2" />
          </div>
        </div>
        )}
      </div>
    </div>
  );
}