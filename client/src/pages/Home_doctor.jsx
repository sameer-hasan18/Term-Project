import React, {useState} from 'react';

export default function Home_doctor() {

    const [activeTab, setActiveTab] = useState('Doctor');

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    }


  return (
    <div>
      <div  style={{ backgroundColor: '#64748B' ,  display: 'flex', justifyContent: 'space-around', color:'white', padding:'0 10px 0 10px' }}>
        <button
          className={activeTab === 'Patient' ? 'active' : ''}
          onClick={() => handleTabClick('Patient')}
        >
        Patient
        </button>
        <button
          className={activeTab === 'Appointment' ? 'active' : ''}
          onClick={() => handleTabClick('Appointment')}
        >
        Appointment
        </button>

      </div>

      <div className="content">
        {activeTab === 'Patient' && <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
            </tr>


          </thead>
          <tbody>
            <tr>
              <td>Ray</td>
              <td>20/09/2015</td>
              <td>18:00</td>
            </tr>



          </tbody>


        </table>
}


        {activeTab === 'Appointment' && <h1>Appointments</h1>}
      </div>
    </div>
  );
  }

