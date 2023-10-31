import React, { useState } from 'react'
import Header from '../components/Header'

const styles = {
  mainBox: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'lightblue', 
  },
  Box1: {
    width: '20%',
    height: '50%',
    backgroundColor: 'aliceblue',
    border: '2px solid black',
    padding: '20px',
    position: 'absolute',
    top: '120px',
    left: '20px',
    borderRadius: '10px',
    alignItems: 'center,'
  },
  Box2: {
    width: '40%',
    height: '800px',
    backgroundColor: 'aliceblue',
    border: '2px solid black',
    padding: '20px',
    position: 'absolute',
    top: '120px',
    left: '24%',
    borderRadius: '10px',
  },
  Box3: {
    position: 'absolute',
    top: '120px',
    left: '66%',
    height: '400px',
    width: '34%',
    backgroundColor: 'aliceblue',
    border: '2px solid black',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    lineHeight: '1.75',
  },
  Box4: {
    position: 'absolute',
    top: '540px',
    left: '66%',
    height: '380px',
    width: '34%',
    backgroundColor: 'aliceblue',
    border: '2px solid black',
    padding: '20px',
    borderRadius: '10px',
  },
  picture: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '20%',
    width: '100%',
  },
  editProfile: {
    position: 'absolute',
    top: '430px',
    left: '20px',
    borderWidth: '2px',
    borderRadius: '10px',
    borderColor: 'black',
    backgroundColor: 'rgb(182, 182, 182)',
    padding: '20px',
    cursor: 'pointer',
  },
  buttonGeneral: {
    cursor: 'pointer',
    backgroundColor: 'rgb(170, 170, 170)',
    border: '20px',
    borderRadius: '2px',
    width: '50px',
  },
  textInput: {
    cursor: 'text',
  },
  table: {
    width: '100%',
  },
  th: {
    backgroundColor: '#333',
  },
  thTd: {
    padding: '10px',
    border: '1px solid #ccc',
  },
  table: {
    borderCollapse: 'Collapse',
    width: '100%',

  },
  tableHeader: {
    backgroundColor: 'lightgray',
    width: '100%',
    color: 'black',
    padding: '8px',
    textAlign: 'center',
    position: 'sticky',
    top: '0'
  },
  tableData: {
    padding: '8px',
  },
  scrollableTable: {
    maxHeight: '300px',
    width: '100%',
    overflowY: 'auto',
    border: '1px solid #000'
  },
  dateColumn: {
    width: '100px',
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '8px',
    textAlign: 'center',
    position: 'sticky',
    top: '0'
  },
  doctorColumn: {
    width: '150px',
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '8px',
    textAlign: 'center',
    position: 'sticky',
    top: '0'
  },
  reasonColumn: {
    width: '200px',
    backgroundColor: 'lightgray',
    color: 'black',
    padding: '8px',
    textAlign: 'center',
    position: 'sticky',
    top: '0'
  },
  header1: {
    fontFamily: 'Arial',
    fontSize: '50px',
    fontWeight: 'bold',
    marginLeft: '20px',
    color: 'Black',
  },
  calendar: {
    fontFamily: 'Arial, sans-serif',
    width: '100%',
    height: '100%',
    textAlign: 'center',
  },
  calendarTable: {
    width: '100%',
    height: '80%',
    borderCollapse: 'collapse',
  },
  calendarTh: {
    backgroundColor: '#333',
    color: 'white',
    padding: '8px',
  },
  calendarTd: {
    padding: '8px',
    border: '1px solid #ccc',
  },
  calendarHeader: {
    fontFamily: 'Arial', 
    fontSize: '18px', 
    fontWeight: 'bold'
  },
};

export default function Profile() {
  function handleClickEditProfile() {
    alert('Edit profile');
  }
  function handleClickSaveName() {
    alert('Saved name');
  }

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const updateCalendar = () => {
    const currentDate = new Date(currentYear, currentMonth, 1);
    const firstDay = currentDate.getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const today = new Date();

    const calendarCells = [];
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row.push(<td key={`${i}-${j}`}></td>);
        } else if (date <= totalDays) {
          const isCurrentDay = currentYear === today.getFullYear() && currentMonth === today.getMonth() && date === today.getDate();

          const cellStyle = isCurrentDay ? { background: 'lightblue' } : {};

          row.push(<td key={`${i}-${j}`} style={cellStyle}>{date}</td>);
          date++;
        }
      }
      calendarCells.push(<tr key={i}>{row}</tr>);
    }
    return calendarCells;
  };
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div >
      <div>
        <h1 style={styles.header1}>
          My Profile
        </h1>
      </div>
      <div style={styles.Box1} className="Box1">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Profile Picture" style={styles.picture} className="picture" />
        <br />
        <div>
          <h1>Name: Bob Smith</h1>
        </div>
      </div>
      <div style={styles.Box2} className='Box2'>
        <h1 style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Up Coming Appointments</h1>
        <div style={styles.scrollableTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.dateColumn}>Date</th>
                <th style={styles.doctorColumn}>Doctor</th>
                <th style={styles.reasonColumn}>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableData}>01/01/23</td>
                <td style={styles.tableData}>Dr. 1</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <h1 style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>Past Appointments</h1>
        <div style={styles.scrollableTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.dateColumn}>Date</th>
                <th style={styles.doctorColumn}>Doctor</th>
                <th style={styles.reasonColumn}>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableData}>01/01/23</td>
                <td style={styles.tableData}>Dr. 1</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
              <tr>
                <td style={styles.tableData}>01/02/23</td>
                <td style={styles.tableData}>Dr. 2</td>
                <td style={styles.tableData}>Headache</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={styles.Box3} className='Box3'>
        <h1 >
          First Name: Bob <br />
        </h1>
        <form>
          <input type='text' style={styles.textInput} name='textValue' placeholder='Change first name' />
          <button type="save" onClick={handleClickSaveName} style={styles.buttonGeneral}>
            Save
          </button>
        </form>
        <h1>Last Name: Smith</h1>
        <form>
          <input type='text' style={styles.textInput} name='textValue' placeholder='Change first name' />
          <button type="save" onClick={handleClickSaveName} style={styles.buttonGeneral}>
            Save
          </button>
        </form>
        <h1>
          Phone Number: 1234565789 <br />
        </h1>
        <form>
          <input type='text' style={styles.textInput} name='textValue' placeholder='Change first name' />
          <button type="save" onClick={handleClickSaveName} style={styles.buttonGeneral}>
            Save
          </button>
        </form>
        <h1>
          Birthday: January 1, 2000 <br />
        </h1>
        <form>
          <input type='text' style={styles.textInput} name='textValue' placeholder='Change first name' />
          <button type="save" onClick={handleClickSaveName} style={styles.buttonGeneral}>
            Save
          </button>
        </form>
        <h1>
          Age: 23 <br />
        </h1>
        <form>
          <input type='text' style={styles.textInput} name='textValue' placeholder='Change first name' />
          <button type="save" onClick={handleClickSaveName} style={styles.buttonGeneral}>
            Save
          </button>
        </form>
        <h1>
          Email: test@gmail.com <br />
        </h1>
        <form>
          <input type='text' style={styles.textInput} name='textValue' placeholder='Change first name' />
          <button type="save" onClick={handleClickSaveName} style={styles.buttonGeneral}>
            Save
          </button>
        </form>
      </div>
      <div style={styles.Box4} className='Box4'>
        <div style={styles.calendar}>
          <h2 style={styles.calendarHeader}>My Calendar</h2>
          <button onClick={prevMonth} style={{ position: 'absolute', top: '45px', left: '100px' }}>&#9665;</button>
          <span>
            {new Date(currentYear, currentMonth).toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <button onClick={nextMonth} style={{ position: 'absolute', top: '45px', left: '300px' }}>&#9655;</button>
          <table style={styles.calendarTable}>
            <thead>
              <tr>
                <th style={styles.calendarTh}>Sun</th>
                <th style={styles.calendarTh}>Mon</th>
                <th style={styles.calendarTh}>Tue</th>
                <th style={styles.calendarTh}>Wed</th>
                <th style={styles.calendarTh}>Thu</th>
                <th style={styles.calendarTh}>Fri</th>
                <th style={styles.calendarTh}>Sat</th>
              </tr>
            </thead>
            <tbody>{updateCalendar()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
