import React, { useState } from 'react';

const DisciplineForm = ({ onSubmit }) => {
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

  const [showPreRequisites, setShowPreRequisites] = useState(false);
  const [showPostRequisites, setShowPostRequisites] = useState(false);

  const handlePreRequisiteChange = (index, value) => {
    const updatedPreRequisites = [...form.pre_requisites];
    updatedPreRequisites[index] = value;
    setForm({ ...form, pre_requisites: updatedPreRequisites });
  };

  const addPreRequisiteField = () => {
    setShowPreRequisites(true);
    setForm({ ...form, pre_requisites: [...form.pre_requisites, ''] });
  };

  const removePreRequisiteField = (index) => {
    const updatedPreRequisites = form.pre_requisites.filter((_, i) => i !== index);
    setForm({ ...form, pre_requisites: updatedPreRequisites });
  };

  const handlePostRequisiteChange = (index, value) => {
    const updatedPostRequisites = [...form.post_requisites];
    updatedPostRequisites[index] = value;
    setForm({ ...form, post_requisites: updatedPostRequisites });
  };

  const addPostRequisiteField = () => {
    setShowPostRequisites(true);
    setForm({ ...form, post_requisites: [...form.post_requisites, ''] });
  };

  const removePostRequisiteField = (index) => {
    const updatedPostRequisites = form.post_requisites.filter((_, i) => i !== index);
    setForm({ ...form, post_requisites: updatedPostRequisites });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="frequency" placeholder="Frequency" value={form.frequency} onChange={handleChange} />
      <input name="acronym" placeholder="Acronym" value={form.acronym} onChange={handleChange} />
      <input name="available" placeholder="Available" value={form.available} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="teacher" placeholder="Teacher" value={form.teacher} onChange={handleChange} />
      <input name="schedule" placeholder="Schedule" value={form.schedule} onChange={handleChange} />
      <br></br><br></br>

      <button style={{cursor: 'pointer'}} type="button" onClick={addPreRequisiteField}>Add Pre requisite </button>

      <div style={{ display: showPreRequisites ? 'block' : 'none'}}> {form.pre_requisites.map((preReq, index) => (
        <div key={index}>
            <input
              type="text"
              placeholder="Pre requisite"
              value={preReq}
              onChange={(e) => handlePreRequisiteChange(index, e.target.value)}
              />
            <button type="button" onClick={() => removePreRequisiteField(index)}>X</button>
          </div>
        ))}
      </div>

      <button style={{cursor: 'pointer'}} type="button" onClick={addPostRequisiteField}>Add Post requisite</button>

      <div style={{ display: showPostRequisites ? 'block' : 'none' }}> {form.post_requisites.map((postReq, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Post requisite"
              value={postReq}
              onChange={(e) => handlePostRequisiteChange(index, e.target.value)}
              />
            <button type="button" onClick={() => removePostRequisiteField(index)}>X</button>
          </div>
        ))}
      </div>
        
      <br></br><br></br>

      <button type="submit" style={{cursor: 'pointer', alignItems:'center'}}>Save Discipline</button>
    </form>
  );
};

export default DisciplineForm;
