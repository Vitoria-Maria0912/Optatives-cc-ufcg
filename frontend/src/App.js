import React, { useEffect, useState } from 'react';
import { getAllDisciplines, createDiscipline } from './services/DisciplineService';
import DisciplineForm from './components/DisciplineForm';

const App = () => {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    fetchDisciplines();
  }, []);

  const fetchDisciplines = async () => {
    const response = await getAllDisciplines();
    setDisciplines(response.data.disciplines);
  };

  const handleCreate = async (formData) => {
    await createDiscipline(formData);
    fetchDisciplines();
  };

  return (
    <div>
      <h1>Discipline Manager</h1>
      <DisciplineForm onSubmit={handleCreate} />
      <ul>
        {disciplines.map((discipline) => (
          <li key={discipline.id}>{discipline.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
