import React, { useState } from 'react';

const DisciplineDeleteForm = ({ onSubmit }) => {
    const [form, setForm] = useState({
        name: '',
        acronym: '',
        frequency: '',
        available: '',
        description: '',
        pre_requisites: [],
        post_requisites: [],
        teacher: '',
        schedule: '',
      });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
      };

    return (
        <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <button type="submit" style={{cursor: 'pointer', alignItems:'center'}}>Delete Discipline</button>
    </form>
    );
};

export default DisciplineDeleteForm;
    