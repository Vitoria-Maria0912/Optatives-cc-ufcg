import { Available, Frequency, PrismaClient } from '@prisma/client';
import { app, closeServer } from '../src/express/server';
import request from 'supertest';

describe('DisciplineController', () => {
    
    afterEach(async () => { await request(app).delete('/protected/disciplines') });
    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    test("createDiscipline should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Web II',
            acronym: 'Web II',
            frequency: Frequency.SOMETIMES,
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            message: "Discipline created successfully!",
            discipline: disciplineData,
        });
    });

    test("deleteOneDiscipline should return 'No disciplines found!'", async () => {
    
        const response = await request(app).delete('/protected/disciplines/1');
        
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });
    
    test('deleteOneDiscipline should return success message', async () => {
    
        const disciplineData = {
            id: 1,
            name: 'Web II',
            acronym: 'Web II',
            frequency: Frequency.SOMETIMES,
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        };

        await request(app).post('/protected/disciplines').send(disciplineData);

        const response = await request(app).delete(`/protected/disciplines/${disciplineData.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "Discipline was deleted successfully!", });
    });

    test("deleteAllDisciplines should return 'No disciplines found!'", async () => {
        const response = await request(app).delete('/protected/disciplines');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });    
    
    test('deleteAllDisciplines should return success message', async () => {
        const disciplineData = {
            name: 'Web II',
            acronym: 'Web II',
            frequency: Frequency.SOMETIMES,
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        };

        await request(app).post('/protected/disciplines').send(disciplineData);
        const response = await request(app).delete('/protected/disciplines');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "All disciplines were deleted successfully!",});
    });

    test("patchDiscipline should return 'No disciplines found!'", async () => {

        const updateData = { available: Available.NO };

        const response = await request(app).patch('/protected/disciplines/1').send(updateData);

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });

    test('patchDiscipline should return success message', async () => {

        const disciplineData = {
            id: 1,
            name: 'Web II',
            acronym: 'Web II',
            frequency: 'SOMETIMES',
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        };

        await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);

        const updateData = { available: Available.NO };

        const response = await request(app)
           .patch('/protected/disciplines/1')
           .send(updateData);

        expect(response.status).toBe(200);
        expect(response.body.discipline.available).toBe(Available.NO);

        expect(response.body).toEqual({
            message: "Discipline's field updated successfully!",
            discipline:  {
                id: 1,
                name: 'Web II',
                acronym: 'Web II',
                frequency: 'SOMETIMES',
                available: Available.NO,
                description: 'Backend for web development',
                pre_requisites: [],
                post_requisites: [],
                teacher: 'Glauber',
                schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
            },
        });
    });

    test("updateDiscipline should return 'No disciplines found!'", async () => {
        const disciplineData = {
            name: 'Web II',
            acronym: 'Web II',
            frequency: 'SOMETIMES',
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        };

        const response = await request(app)
           .put('/protected/disciplines/1')
           .send(disciplineData);
        
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });

    test('updateDiscipline should return success message', async () => {

        await request(app).post('/protected/disciplines').send({
            id: 1,
            name: 'Web II',
            acronym: 'Web II',
            frequency: 'SOMETIMES',
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        });

        const disciplineData = {
            id: 1,
            name: 'Verificação e Validação de Software',
            acronym: 'VeV',
            frequency: 'ALWAYS',
            available: Available.YES,
            description: 'Tests for software engineering',
            pre_requisites: ["ES", "PSoft"],
            post_requisites: [],
            teacher: 'Everton',
            schedule: 'Terça (8h-10h), Quinta (10h-12h)',
        };

        const response = await request(app)
           .put(`/protected/disciplines/${disciplineData.id}`)
           .send(disciplineData);
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Discipline updated successfully!",
            discipline: disciplineData,
        });
    });

    test("getOneDisciplineByID should return 'No disciplines found!'", async () => {

        const response = await request(app).get('/disciplines/getByID/1');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });

    test('getOneDisciplineByID should return a single discipline', async () => {

        await request(app).post('/protected/disciplines').send({
            id: 1,
            name: 'Web II',
            acronym: 'Web II',
            frequency: 'SOMETIMES',
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        });

        const response = await request(app).get('/disciplines/getByID/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Discipline was found successfully!",
            discipline: {
                id: 1,
                name: 'Web II',
                acronym: 'Web II',
                frequency: 'SOMETIMES',
                available: Available.YES,
                description: 'Backend for web development',
                pre_requisites: [],
                post_requisites: [],
                teacher: 'Glauber',
                schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
            },
        });
    });

    test("getOneDisciplineByName should return 'No disciplines found!'", async () => {

        const response = await request(app).get('/disciplines/getByName/TC');

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });

    test('getOneDisciplineByName should return a single discipline', async () => {

        await request(app).post('/protected/disciplines').send({
            id: 1,
            name: 'Web II',
            acronym: 'Web II',
            frequency: 'SOMETIMES',
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        });

        const response = await request(app).get('/disciplines/getByName/Web%20II');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            message: "Discipline was found successfully!",
            discipline: {
                id: 1,
                name: 'Web II',
                acronym: 'Web II',
                frequency: 'SOMETIMES',
                available: Available.YES,
                description: 'Backend for web development',
                pre_requisites: [],
                post_requisites: [],
                teacher: 'Glauber',
                schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
            },
        });
    });

    test("getAllDisciplines should return 'No disciplines found!'", async () => {
        const response = await request(app).get('/disciplines');
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ message: 'No disciplines found!'});
    });

    test('getAllDisciplines should return a list of disciplines', async () => {
        await request(app).post('/protected/disciplines').send({
            id: 1,
            name: 'Web II',
            acronym: 'Web II',
            frequency: 'SOMETIMES',
            available: Available.YES,
            description: 'Backend for web development',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Glauber',
            schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
        });
        await request(app).post('/protected/disciplines').send({
            id: 2,
            name: 'Verificação e Validação de Software',
            acronym: 'VeV',
            frequency: 'ALWAYS',
            available: Available.YES,
            description: 'Tests for software engineering',
            pre_requisites: ["ES", "PSoft"],
            post_requisites: [],
            teacher: 'Everton',
            schedule: 'Terça (8h-10h), Quinta (10h-12h)',
        });

        await request(app).post('/protected/disciplines').send({
            id: 3,
            name: 'Processamento de Linguagem Natural',
            acronym: 'PLN',
            frequency: 'SOMETIMES',
            available: Available.NO,
            description: 'Machine Learning introduction',
            pre_requisites: ["IA", "Linear"],
            post_requisites: [],
            teacher: 'Leandro Balby',
            schedule: 'Terça (10h-12h), Sexta (8h-10h)',
        });

        await request(app).post('/protected/disciplines').send({
            id: 4,
            name: 'Interface Humano-Computador',
            acronym: 'IHC',
            frequency: 'ALWAYS',
            available: Available.YES,
            description: 'Using Figma to create user interface (UX)',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Tiago Massoni',
            schedule: 'Terça (8h-10h), Quinta (10h-12h)',
        });

        const response = await request(app).get('/disciplines');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Disciplines were found successfully!');
        expect(response.body.disciplines).toHaveLength(4); 
    });
});
