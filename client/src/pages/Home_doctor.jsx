import React, {useState} from 'react';
import style from './style.css'

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
        {activeTab === 'Patient' && 
        <table>
        <thead>
          <tr >
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            
            <th style={{width:'400px'}}>Description</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>William</td>
            <td>21</td>
            <td>Male</td>
            
            <td style={{width:'400px'}}>High Fever</td>
          </tr>
          <tr>
            <td>ray</td>
            <td>20</td>
            <td>Male</td>
            <td style={{width:'400px'}}>Monkey Pox</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{width:'400px'}}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{width:'400px'}}></td>
          </tr>
        </tbody>
      </table>
        }
        {activeTab === 'Appointment' && 
        <table>
        <thead>
          <tr >
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Time</th>
            <th style={{width:'400px'}}>Description</th>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>William</td>
            <td>21</td>
            <td>Male</td>
            <td>21/06/2023</td>
            <td>16.00</td>
            <td style={{width:'400px'}}>High Fever</td>
          </tr>
          <tr>
            <td>ray</td>
            <td>20</td>
            <td>Male</td>
            <td>21/06/2023</td>
            <td>18.00</td>
            <td style={{width:'400px'}}>Monkey Pox</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{width:'400px'}}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{width:'400px'}}></td>
          </tr>
        </tbody>
      </table>
        }
        
      </div>
    </div>
  );
  }