import express from 'express';
import { DisciplineController } from '../controller/DisciplineController';

const app = express();
app.use(express.json());

const disciplineController = new DisciplineController();

app.post('/protected/disciplines', (req, res) => disciplineController.createDisciplines);
app.delete('/protected/disciplines', (req, res) => disciplineController.deleteAllDisciplines);
app.delete('/protected/disciplines/:id', (req, res) => disciplineController.deleteDiscipline);
app.patch('/protected/disciplines/:id', (req, res) => disciplineController.updateDiscipline);
app.put('/protected/disciplines/:id', (req, res) => disciplineController.patchDiscipline);
app.get('/protected/disciplines/:id', (req, res) => disciplineController.getOneDiscipline);
app.get('/disciplines', (req, res) => disciplineController.getAllDisciplines);