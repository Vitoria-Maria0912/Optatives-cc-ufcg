import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisciplineCreateForm from "../forms/DisciplineCreateForm";
import { createDiscipline } from "../../routes/DisciplineRoutes";

const CenterMain = () => {
    return (
        <div className="center-main" style={{textAlign:'left', padding:'20px'}}>
            <h3>Center Main</h3>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserLinks />} />
                    <Route path="/disciplines" element={<DisciplineLinks />} />
                    <Route path="/auth/login" element={<LoginLinks />} />
                </Routes>
            </Router>
        </div>
    );
};

const Home = () => { 
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

const UserLinks = () => {
    return (
        <div>
            <h1>Users</h1>
            
        </div>
    );
}

const DisciplineLinks = () => {

  const handleCreate = async (formData) => {
      try {
        const successMessage = (await createDiscipline(formData)).data.message;
        alert(successMessage);
        // fetchDisciplines();
  
      } catch (error) { alert(error.response.data.message); }
    };
    
    return (
        <div>
            <h2>Discipline Management</h2>
            <button onClick={handleCreate}><DisciplineCreateForm onSubmit={handleCreate} /></button>
        </div>
    );
};

const LoginLinks = () => {
    return (
        <div>
            <h1>Create Authentication</h1>
        </div>
    );
}

export default CenterMain;