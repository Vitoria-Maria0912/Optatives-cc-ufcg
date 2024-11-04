import React, { useState } from 'react';

const DisciplineShowOneForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        name: '',
      });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        validate(form.name);
      };

      const validate = (name) => {
        if (!name) {
          alert("Discipline's name cannot be empty!");
        }
      }

    return (
        <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <button type="submit" style={{cursor: 'pointer', alignItems:'center'}}>Show Discipline</button>
    </form>
    );
};

export default DisciplineShowOneForm;
    