import './App.css';
import StudentInputs from './Components/StudentEnrollmentForms/StudentInputs';
import { useState } from 'react';
import { Student } from './Components/Student';

function App() {
  const [userRegistration, setUserRegistration] = useState([])
  return (
    <div>
      <StudentInputs setUserRegistration={setUserRegistration} />

      {userRegistration.length !== 0 &&
        <h1>ENROLLED STUDENTS</h1>

      }
      {
        userRegistration.map((user) => {
          return <Student key={user.email} userData={user} />
        }
        )
      }
    </div>
  );
}

export default App;