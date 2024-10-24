import React, { useState } from 'react';

const DisciplineForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    acronym: '',
    frequency: '',
    available: '',
    description: '',
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
      <input name="acronym" placeholder="Acronym" value={form.acronym} onChange={handleChange} />
      <input name="frequency" placeholder="Frequency" value={form.frequency} onChange={handleChange} />
      <input name="available" placeholder="Available" value={form.available} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="teacher" placeholder="Teacher" value={form.teacher} onChange={handleChange} />
      <input name="schedule" placeholder="Schedule" value={form.schedule} onChange={handleChange} />
      <button type="submit">Save Discipline</button>
    </form>
  );
};

export default DisciplineForm;
