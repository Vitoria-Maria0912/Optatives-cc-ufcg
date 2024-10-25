import axios from 'axios';

const API_URL = 'http://localhost:8080/disciplines';
const API_URL_PROTECTED = 'http://localhost:8080/protected/disciplines';

export const createDiscipline = async (data) => axios.post(API_URL_PROTECTED, data);
export const deleteAllDisciplines = async () => axios.delete(API_URL_PROTECTED);
export const deleteDiscipline = async (id) => axios.delete(`${API_URL_PROTECTED}/${id}`);
export const patchDiscipline = async (id) => axios.patch(`${API_URL_PROTECTED}/${id}`);
export const putDiscipline = async (id) => axios.put(`${API_URL_PROTECTED}/${id}`);
export const getOneDisciplineByID = async (id) => axios.patch(`${API_URL}/getByID/${id}`);
export const getOneDisciplineByName = async (name) => axios.patch(`${API_URL}/getByName/${name}`);
export const getAllDisciplines = async () => axios.get(API_URL);

