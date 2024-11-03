import { Available, Frequency, PrismaClient } from '@prisma/client';
import { app, closeServer } from '../src/express/server';
import request from 'supertest';

describe('Create all obrigatory disciplines P1', () => {

    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Fundamentos de Matemáticos para Ciências da Computação I',
            acronym: 'FMCC1',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Introdução aos conceitos básicos de matemática para computação.',
            pre_requisites: [],
            post_requisites: ['FMCC2', 'Cálculo 1', 'Teoria do Grafos'],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
    
    it("Create `P1 e LP1` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Programação I',
            acronym: 'P1',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Curso introdutório de programação e práticas laboratoriais.',
            pre_requisites: [],
            post_requisites: ['P2'],
            teacher: 'Dalton | Jorge | Wilkerson',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');

        const disciplineData2 = {
            name: 'Laboratório de Programação I',
            acronym: 'LP1',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Curso introdutório de programação e práticas laboratoriais.',
            pre_requisites: [],
            post_requisites: ['LP2'],
            teacher: 'Dalton | Jorge | Wilkerson',
            schedule: 'Indefinido',
        };
        const response2 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData2);
        expect(response2.body.message).toBe('Discipline created successfully!');
    });
    
    it("Create `IC` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Introdução à Computação',
            acronym: 'IC',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Disciplina introdutória sobre conceitos básicos de computação.',
            pre_requisites: [],
            post_requisites: ['OAC', 'Redes'],
            teacher: 'Carlos Pires | Maxwell | Joseana',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
    
    it("Create `Direito e Cidadania` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Direito e Cidadania',
            acronym: 'DC',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Exploração dos direitos e deveres na sociedade.',
            pre_requisites: [],
            post_requisites: [],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
});

// describe('Create all obrigatory disciplines P2', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P3', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P4', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P5', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P6', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P7', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P8', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });

// describe('Create all obrigatory disciplines P9', () => {
    
//     afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

//     it("Create FMCC1 should return 'Discipline created successfully!'", async () => {
//         const disciplineData = {
//             name: '',
//             acronym: '',
//             frequency: Frequency.ALWAYS,
//             available: Available.YES,
//             description: '',
//             pre_requisites: [],
//             post_requisites: [],
//             teacher: '',
//             schedule: 'Segunda (8h-10h), Quarta (10h-12h)',
//         };
//         const response = await request(app)
//             .post('/protected/disciplines')
//             .send(disciplineData);
//     });
// });