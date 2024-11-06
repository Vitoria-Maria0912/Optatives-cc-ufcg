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
            post_requisites: ['FMCC2', 'C1', 'Grafos'],
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
            post_requisites: ['P2', 'LP2'],
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
            post_requisites: ['P1', 'LP2'],
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

describe('Create all obrigatory disciplines P2', () => {
    
    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `C1` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Cálculo I',
            acronym: 'C1',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Introdução ao cálculo diferencial e integral.',
            pre_requisites: [],
            post_requisites: ['C2'],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });

    it("Create `Economia` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Economia',
            acronym: 'Economia',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Estudo dos processos de produção e distribuição de bens.',
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

    it("Create `P2` should return 'Discipline created successfully!'", async () => {
        const disciplineData1 = {
            name: 'Programação II',
            acronym: 'P2',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Desenvolvimento avançado em programação com ênfase em POO.',
            pre_requisites: ['P1', 'LP1'],
            post_requisites: ['EDA', 'LEDA'],
            teacher: 'Lívia | Eliane | Melina',
            schedule: 'Indefinido',
        };
        const response1 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData1);
        expect(response1.body.message).toBe('Discipline created successfully!');

        const disciplineData2 = {
            name: 'Laboratório de Programação II',
            acronym: 'P2',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Desenvolvimento avançado em programação com ênfase em POO.',
            pre_requisites: ['P1', 'LP1'],
            post_requisites: ['EDA', 'LEDA'],
            teacher: 'Lívia | Eliane | Melina',
            schedule: 'Indefinido',
        };
        const response2 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData2);
        expect(response2.body.message).toBe('Discipline created successfully!');
    });

    it("Create `FMCC2` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Fundamentos Matemáticos para Ciência da Computação II',
            acronym: 'FMCC2',
            frequency: Frequency.SOMETIMES,
            available: Available.YES,
            description: 'Estudo aprofundado de álgebra e lógica para computação.',
            pre_requisites: ['FMCC1', 'C1'],
            post_requisites: [],
            teacher: 'Eanes | Tiago Massoni',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');
    });
});

describe('Create all obrigatory disciplines P3', () => {
    
    afterAll(async () => { closeServer(); await (new PrismaClient).$disconnect(); });

    it("Create `Álgebra Linear` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Álgebra Linear',
            acronym: 'Linear',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Estudo de espaços vetoriais, transformações lineares e matrizes.',        
            pre_requisites: ['C1'],
            post_requisites: [],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');

    });

    it("Create `C2` should return 'Discipline created successfully!'", async () => {
        const disciplineData = {
            name: 'Cálculo Diferencial e Integral II',
            acronym: 'C2',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Continuação de Cálculo I, abordando integrais múltiplas e séries.',
            pre_requisites: ['C1'],
            post_requisites: ['Prob'],
            teacher: 'Indefinido',
            schedule: 'Indefinido',
        };
        const response = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData);
        expect(response.body.message).toBe('Discipline created successfully!');

    });

    it("Create `EDA e LEDA` should return 'Discipline created successfully!'", async () => {
        const disciplineData1 = {
            name: 'Estruturas de Dados e Algoritmos',
            acronym: 'EDA',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Implementação de estruturas de dados e algoritmos.',
            pre_requisites: ['P2', 'LP2'],
            post_requisites: [],
            teacher: 'Adalberto | João Arthur',
            schedule: 'Indefinido',
        };
        const response1 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData1);
        expect(response1.body.message).toBe('Discipline created successfully!');

        const disciplineData2 = {
            name: 'Laboratório de Estruturas de Dados e Algoritmos',
            acronym: 'LEDA',
            frequency: Frequency.ALWAYS,
            available: Available.YES,
            description: 'Disciplina prática para implementação de estruturas de dados e algoritmos.',
            pre_requisites: ['P2', 'LP2'],
            post_requisites: [],
            teacher: 'Adalberto | João Arthur',
            schedule: 'Indefinido',
        };
        const response2 = await request(app)
            .post('/protected/disciplines')
            .send(disciplineData2);
        expect(response2.body.message).toBe('Discipline created successfully!');

    });
});

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