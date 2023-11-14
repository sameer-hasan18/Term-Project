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

  const [selectedDate, setSelectedDate] = useState('');
  const handleDateSelect = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleConcernSelect = (event) => {
    setSelectedConcern(event.target.value);
  };

  const [allAppointments, setAllAppointments] = useState([]);
  const handleAppBooked = () => {
    setAppButton(true);
    // Store the newly booked appointment
    const newAppointment = { doctor: selectedDoctor, date: selectedDate, time: selectedTime, concern: selectedConcern };
    setAllAppointments([...allAppointments, newAppointment]);
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

  const PlannedOperationsTable = ({ plannedAppointments }) => {
    const currentDate = new Date();

    const futureAppointments = plannedAppointments.filter(
      (appointment) => new Date(appointment.date) > currentDate
    );

    return (
      <table>
        <thead>
          <tr style={{ background: 'black', color: 'white' }}>
            <th>#</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Concern</th>
          </tr>
        </thead>
        <tbody>
          {futureAppointments.map((appointment, index) => (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{appointment.doctor}</td>
            <td>{appointment.date}</td> {/* Ensure 'date' is correctly populated */}
            <td>{appointment.time}</td>
            <td>{appointment.concern}</td>
          </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const ExistingAppointments = ({ appointments }) => {
    return (
      <div className="existing-appointments">
        <h1>Your Appointments</h1>
        {appointments.length > 0 ? (
          <table>
            <thead>
              <tr style={{ background: 'black', color: 'white' }}>
                <th>#</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Concern</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td> {/* Ensure 'date' is correctly populated */}
                  <td>{appointment.time}</td>
                  <td>{appointment.concern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No existing appointments</p>
        )}
      </div>
    );
  };
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, '0'); // Month is zero-indexed
    const day = `${today.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
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
          className={activeTab === ' Make Appointment' ? 'active' : ''}
          onClick={() => handleTabClick('Make Appointment')}
        >
          Make Appointment
        </button>
        <button
          className={activeTab === 'Doctors' ? 'active' : ''}
          onClick={() => handleTabClick('Doctors')}
        >
          Doctors
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
        {activeTab === 'User' && <h1>Welcome to your Patient Home Page!</h1>}
        {activeTab === 'Make Appointment' && (
          <div className="appointment-tab">
            <h1>Book An Appointment!</h1>
            <label>Select a Doctor:</label>
            <select value={selectedDoctor} onChange={handleDoctorSelect}>
              <option value="">Select a Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>
            <label>Select a Date:</label>
            <input type="date" value={selectedDate} onChange={handleDateSelect} min={getCurrentDate()} style={
              {fontSize: "18px", 
              padding: "10px", 
              width: "100%", 
              maxWidth: "300px", 
              margin: "10px auto", 
              border: "2px solid #5a5a5a", 
              borderRadius: "4px"}}/>

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
          <div className="doctor-Tab">
            <h1>Here are our Doctors!</h1>
            <DoctorsList />
          </div>
        )}

        {activeTab === 'Prescriptions' && (
          <div className="prescription-Tab">
            <h1>Your Active Prescriptions</h1>
            <PrescriptionsTable />
          </div>
        )}

        {activeTab === 'Planned Operations' && (
          <div className="operations-Tab">
            <h1>Your Upcoming Planned Procedures</h1>
            <PlannedOperationsTable plannedAppointments={allAppointments} />
          </div>
        )}


        {activeTab === 'Existing Appointments' && (
          <ExistingAppointments appointments={allAppointments} />
        )}

      </div>
    </div>
  );
}