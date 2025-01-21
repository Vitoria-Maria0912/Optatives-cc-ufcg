import React, { useEffect, useState } from 'react';
import { getAllDisciplines, createDiscipline, deleteDiscipline, getOneDisciplineByName, patchDiscipline, putDiscipline, deleteAllDisciplines, getOneDisciplineByAcronym } from './routes/DisciplineRoutes';
import DisciplineCreateForm from './components/forms/DisciplineCreateForm';
import DisciplineForm from './components/forms/DisciplineForm';
import ShowOneDiscipline from './components/forms/ShowOneDiscipline';
import UpdateDiscipline from './components/forms/UpdateDiscipline';
import DisciplinePatchForm from './components/forms/DisciplinePatchForm';
import CenterMain from './components/layout/CenterMain';

const App = () => {
  
  const [disciplines, setDisciplines] = useState([]);
  const [showDiscipline, setShowDiscipline] = useState(null);
  const [showPutDiscipline, setShowPutDiscipline] = useState(null); 
  const [showPatchDiscipline, setShowPatchDiscipline] = useState(null); 

  useEffect(() => { fetchDisciplines();}, []);

  const fetchDisciplines = async () => {
    try {
      const response = await getAllDisciplines();
      setDisciplines(response.data.disciplines);

    } catch (error) {}
  };

  const handleShowOne = async (name) => {
    try {
        let response = await getOneDisciplineByName(name.name);
        setShowDiscipline(response.data.discipline);
    } catch (error) {
        try {
            let response = await getOneDisciplineByAcronym(name.name);
            setShowDiscipline(response.data.discipline);
        } catch (error) { alert(error.response.data.message); }

    } finally { fetchDisciplines(); }
  };

  const handleCreate = async (formData) => {
    try {
      const successMessage = (await createDiscipline(formData)).data.message;
      alert(successMessage);
      fetchDisciplines();

    } catch (error) { alert(error.response.data.message); }
  };

  const handleDelete = async (name) => {
    try {
      const { id } = (await getOneDisciplineByName(name.name)).data.discipline;
      const successMessage = (await deleteDiscipline(id)).data.message;
      alert(successMessage);
      fetchDisciplines();
      
    } catch (error) { alert(error.response.data.message); }
  };

  const handleDeleteAll = async () => {
    try {
      const successMessage = (await deleteAllDisciplines()).data.message;
      alert(successMessage);
      fetchDisciplines();
      
    } catch (error) { alert(error.response.data.message); }
  };

  const handlePatch = async (name, field, value) => {
    try {
      const response = (await getOneDisciplineByName(name.name));
      const { id } = response.data.discipline;
      setShowPatchDiscipline(response.data.discipline);
      const successMessage = (await patchDiscipline(id, field, value)).data.message;
      fetchDisciplines();
      alert(successMessage);
      
    } catch (error) { alert(error.response.data.message); }
  };

  const handleUpdate = async (name, discipline) => {
    try {
      const response = (await getOneDisciplineByName(name.name));
      const { id } = response.data.discipline;
      setShowPutDiscipline(response.data.discipline);
      const successMessage = (await putDiscipline(id, {discipline})).data.message;
      alert(successMessage);
      fetchDisciplines();
      
    } catch (error) { alert(error.response.data.message); }
  };

  return (
    <div>
      <h1 style={{color: 'indigo', textAlign:'center'}}>Optatives CC_UFCG</h1>
      <CenterMain/>

      {/* <h2 style={{color: 'indigo', textAlign:'center'}}>Create discipline</h2>
      <DisciplineCreateForm onSubmit={handleCreate} />

      <h2 style={{color: 'indigo', textAlign:'center'}}>Delete all disciplines</h2>
      <button style={{cursor: 'pointer', alignItems:'center'}} onClickCapture={handleDeleteAll}>Delete all disciplines</button>
      
      <h2 style={{color: 'indigo', textAlign:'center'}}>Delete discipline</h2>
      <DisciplineForm onSubmit={handleDelete} submitText="Delete Discipline"/>

      <h2 style={{color: 'indigo', textAlign:'center'}}>Show one discipline</h2>
      <DisciplineForm onSubmit={handleShowOne} submitText="Show Discipline"/>

      {showDiscipline && <ShowOneDiscipline selectedDiscipline={showDiscipline} />}

      <h2 style={{color: 'indigo', textAlign:'center'}}>Update discipline field</h2>
      <DisciplineForm onSubmit={handleShowOne} submitText="Show discipline to update"/>
      <DisciplinePatchForm onSubmit={handlePatch} submitText="Update discipline field"/>

      {showPatchDiscipline && <UpdateDiscipline selectedDiscipline={showPatchDiscipline} />}

      <h2 style={{color: 'indigo', textAlign:'center'}}>Update discipline</h2>
      <DisciplineForm onSubmit={handleUpdate} submitText="Show discipline to update"/>

      {showPutDiscipline && <UpdateDiscipline selectedDiscipline={showPutDiscipline} />}

      <h2 style={{color: 'indigo', textAlign:'center'}}>Show disciplines</h2>
      <ul>
        {disciplines.map((discipline) => (
          <li key={discipline.id}>{discipline.name} </li>
        ))}
      </ul> */}

    </div>
  );
};

export default App;
