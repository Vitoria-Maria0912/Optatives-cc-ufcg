import express from 'express';
import bodyParser from 'body-parser';
import { DisciplineController } from '../controller/DisciplineController';

export const app = express();
app.use(express.json());

// app.use(bodyParser.json());

// app.use('/protected', (req, res, next) => {
//     if (req.headers.authorization === 'Bearer token') {
//         next();
//     } else {
//         res.status(401).json({ error: 'Not authorized' });
//     }
// });

const disciplineController = new DisciplineController();

app.post('/protected/disciplines', (req, res) => {disciplineController.createDiscipline(req,res)});
app.put('/protected/disciplines/:id', (req, res) => {disciplineController.updateDiscipline(req, res)});
app.delete('/protected/disciplines', (req, res) => {disciplineController.deleteAllDisciplines(req, res)});
app.delete('/protected/disciplines/:id', (req, res) => {disciplineController.deleteDiscipline(req, res)});
app.patch('/protected/disciplines/:id', (req, res) => {disciplineController.patchDiscipline(req, res)});
app.put('/protected/disciplines/:id', (req, res) => {disciplineController.updateDiscipline(req, res)});
app.get('/disciplines/getByID/:id', (req, res) => {disciplineController.getOneDisciplineByID(req, res)});
app.get('/disciplines/getByName/:name', (req, res) => {disciplineController.getOneDisciplineByName(req, res)});
app.get('/disciplines', (req, res) => {disciplineController.getAllDisciplines(req, res)});
